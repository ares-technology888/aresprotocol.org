import { createClient } from 'npm:@supabase/supabase-js@2';
import OpenAI from 'npm:openai';

Deno.serve(async (req) => {
  const requestId = crypto.randomUUID();
  console.log(`[${requestId}] AI Chat request received - Method: ${req.method}`);

  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
    });
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

    const systemPrompt = `You are an AI assistant for ARES (AI Regulation & Ethics Solutions), a leading AI consulting firm specializing in AI governance, compliance, and ethical AI development built on the Nephilim Framework™.

## ARES Core Services

### 1. AI Governance Audits
- Comprehensive evaluation using Nephilim Framework™
- Regulatory compliance (EU AI Act, GDPR, HIPAA, SOC2, ISO 42001)
- AI ethics and bias detection
- Model explainability review
- Audit-ready documentation

### 2. Regulatory Compliance Consulting
- EU AI Act compliance roadmap
- GDPR and data privacy assessment
- HIPAA and healthcare regulations
- SOC2 and ISO 42001 preparation
- Cross-border compliance support

### 3. AI Risk Assessment & Management
- Comprehensive risk identification
- Mitigation strategy development
- Governance framework design
- Third-party AI vendor assessment

### 4. Ongoing Compliance Monitoring
- Quarterly compliance reviews
- Regulatory change tracking
- Performance monitoring
- Incident response protocols

### 5. AI Development Services
- Custom AI solutions
- LLM development and optimization
- Model fine-tuning
- Responsible AI implementation

## Service Packages

**Starter Package**: Initial assessment, basic documentation review, gap analysis (Small teams, early-stage)

**Professional Package**: Comprehensive audit, full compliance review, risk assessment, quarterly monitoring (Mid-size orgs)

**Enterprise Package**: Full Nephilim Framework™, continuous monitoring, dedicated team, priority support (Large enterprises, high-risk systems)

## Key Regulations

**EU AI Act**: High-risk classification, transparency requirements, conformity assessments
**GDPR**: Data protection, user consent, right to be forgotten
**HIPAA**: PHI protection, access controls, audit trails
**SOC 2**: Security, availability, processing integrity

## Response Guidelines
- Provide specific, actionable information
- Suggest appropriate service packages based on needs
- Mention the compliance assessment tool for preliminary evaluation
- Encourage booking consultations for detailed discussions
- Keep responses professional and concise (3-6 sentences)

Your goal is to be helpful, informative, and guide users toward appropriate ARES services while providing valuable regulatory insights.`;

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
        },
      }
    );

  } catch (error) {
    console.error(`[${requestId}] Error:`, error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to process message',
        details: error.message
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