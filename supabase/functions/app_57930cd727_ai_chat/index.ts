import { createClient } from 'npm:@supabase/supabase-js@2';
import OpenAI from 'npm:openai';

// Rate limiting configuration
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 10; // 10 requests per minute per IP

// In-memory rate limit store (resets on function cold start)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Clean up expired entries periodically
const cleanupRateLimitStore = () => {
  const now = Date.now();
  for (const [key, value] of rateLimitStore.entries()) {
    if (now > value.resetTime) {
      rateLimitStore.delete(key);
    }
  }
};

// Check rate limit for an IP
const checkRateLimit = (ip: string): { allowed: boolean; remaining: number; resetIn: number } => {
  cleanupRateLimitStore();
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    // First request or window expired - create new record
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1, resetIn: RATE_LIMIT_WINDOW_MS };
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    // Rate limit exceeded
    return { allowed: false, remaining: 0, resetIn: record.resetTime - now };
  }

  // Increment counter
  record.count++;
  return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - record.count, resetIn: record.resetTime - now };
};

// Get client IP from request headers
const getClientIP = (req: Request): string => {
  // Check various headers that might contain the real IP
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }
  const realIP = req.headers.get('x-real-ip');
  if (realIP) {
    return realIP;
  }
  const cfConnectingIP = req.headers.get('cf-connecting-ip');
  if (cfConnectingIP) {
    return cfConnectingIP;
  }
  return 'unknown';
};

Deno.serve(async (req) => {
  const requestId = crypto.randomUUID();
  const clientIP = getClientIP(req);
  console.log(`[${requestId}] AI Chat request received - Method: ${req.method} - IP: ${clientIP}`);

  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
    });
  }

  // Check rate limit
  const rateLimit = checkRateLimit(clientIP);
  if (!rateLimit.allowed) {
    console.warn(`[${requestId}] Rate limit exceeded for IP: ${clientIP}`);
    return new Response(
      JSON.stringify({
        error: 'Too many requests. Please wait before sending another message.',
        retryAfter: Math.ceil(rateLimit.resetIn / 1000)
      }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Retry-After': Math.ceil(rateLimit.resetIn / 1000).toString(),
          'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': Math.ceil(rateLimit.resetIn / 1000).toString(),
        },
      }
    );
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const openaiKey = Deno.env.get('OPENAI_API_KEY');
    
    if (!openaiKey) {
      console.error(`[${requestId}] OPENAI_API_KEY not configured`);
      return new Response(
        JSON.stringify({ 
          error: 'AI service not configured. Please add OPENAI_API_KEY to your Supabase Edge Functions environment variables.' 
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const openai = new OpenAI({ apiKey: openaiKey });

    let body;
    try {
      body = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ error: 'Invalid request body' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    const { session_id, message } = body;

    if (!session_id || !message) {
      return new Response(
        JSON.stringify({ error: 'session_id and message are required' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    console.log(`[${requestId}] Processing message for session: ${session_id}`);

    const { data: history, error: historyError } = await supabase
      .from('app_57930cd727_chat_messages')
      .select('*')
      .eq('session_id', session_id)
      .order('created_at', { ascending: true })
      .limit(20);

    if (historyError) {
      console.error(`[${requestId}] Error fetching history:`, historyError);
    }

    const systemPrompt = `You are the A.R.E.S Support Assistant.

A.R.E.S (Advanced Recursive Evolutionary Systems) is an AI governance and assurance firm operating in regulated sectors.

A.R.E.S DOES NOT deploy, operate, or manage production AI systems on behalf of clients.

A.R.E.S operates across two domains:

1. AI Governance Services
   - Governance readiness reviews
   - Assurance & evaluation packs
   - Governance blueprinting
   - Ongoing AI risk and oversight support

   These services are advisory, evidence-based, and audit-safe.

2. Governance-Focused Language Models (LLMs)
   - A.R.E.S designs and configures governance-specific LLMs (e.g. Nephilim GPT variants)
   - These models are used for governance analysis, documentation support, evaluation workflows, and internal decision support
   - They are delivered as controlled tools, not autonomous systems
   - Built using third-party infrastructure (e.g. OpenAI), with governance constraints applied

RULES YOU MUST FOLLOW:
- Do NOT claim compliance, certification, or regulatory approval
- Do NOT provide legal advice
- Do NOT claim guaranteed outcomes
- Do NOT imply A.R.E.S deploys or runs client AI systems
- Always speak conservatively and clearly
- If unsure, explain the boundary rather than speculate

APPROVED ANSWERS:

"What is A.R.E.S?"
A.R.E.S is an AI governance and assurance firm supporting organisations operating in regulated environments. We help organisations evaluate, document, and govern how AI systems are used — and we design governance-focused language models to support oversight, assurance, and internal governance workflows. A.R.E.S does not deploy or operate production AI systems. Our focus is governance, evaluation, and risk oversight.

"How can I get in touch?"
You can contact A.R.E.S directly using the details below:
Email: arestechnology.io@proton.me
Phone: +44 7384 726904
Location: City of London, United Kingdom

If you'd like, I can also explain our services or help route your enquiry.

DEFAULT GREETING:
If the user says hello or starts a conversation, respond with:
"Welcome to A.R.E.S. I can help explain our approach to AI governance, assurance, and governance-focused language models for regulated sectors. How can I assist?"

Keep responses professional, concise, and within the boundaries defined above.`;

    const messages = [
      {
        role: 'system',
        content: systemPrompt
      }
    ];

    if (history && history.length > 0) {
      history.forEach((msg) => {
        messages.push({
          role: msg.sender === 'user' ? 'user' : 'assistant',
          content: msg.message
        });
      });
    }

    messages.push({
      role: 'user',
      content: message
    });

    console.log(`[${requestId}] Calling OpenAI API...`);

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messages,
      temperature: 0.7,
      max_tokens: 800,
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    });

    const aiResponse = completion.choices[0].message.content;

    console.log(`[${requestId}] AI response generated, saving to database...`);

    const { error: insertError } = await supabase
      .from('app_57930cd727_chat_messages')
      .insert([
        {
          session_id,
          sender: 'support',
          message: aiResponse
        }
      ]);

    if (insertError) {
      console.error(`[${requestId}] Error saving AI response:`, insertError);
      throw insertError;
    }

    console.log(`[${requestId}] AI response saved successfully`);

    return new Response(
      JSON.stringify({
        success: true,
        response: aiResponse
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
        },
      }
    );

  } catch (error) {
    // Log full error server-side for debugging
    console.error(`[${requestId}] Error:`, error);
    // Return generic error to client (don't expose internal details)
    return new Response(
      JSON.stringify({
        error: 'Failed to process message. Please try again later.'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
});