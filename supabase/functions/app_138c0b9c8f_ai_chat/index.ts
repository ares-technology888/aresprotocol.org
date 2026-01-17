import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
};

Deno.serve(async (req) => {
  const requestId = crypto.randomUUID();
  console.log(`[${requestId}] Request received:`, {
    method: req.method,
    url: req.url,
  });

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  try {
    // Parse request body
    let body;
    try {
      body = await req.json();
    } catch (e) {
      console.error(`[${requestId}] Failed to parse request body:`, e);
      return new Response(
        JSON.stringify({ error: 'Invalid request body' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { session_id, message } = body;

    if (!session_id || !message) {
      console.error(`[${requestId}] Missing required fields:`, { session_id, message });
      return new Response(
        JSON.stringify({ error: 'session_id and message are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`[${requestId}] Processing message for session:`, session_id);

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Generate AI response based on message content
    const lowerMessage = message.toLowerCase();
    let aiResponse = '';

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      aiResponse = "Hello! I'm the ARES AI assistant. I can help you with:\n\n• AI Governance & Compliance\n• Risk Assessment & Management\n• Regulatory Compliance (EU AI Act, etc.)\n• Ethical AI Implementation\n• AI System Auditing\n\nHow can I assist you today?";
    } else if (lowerMessage.includes('service') || lowerMessage.includes('what do you do')) {
      aiResponse = "ARES provides comprehensive AI governance services:\n\n1. **AI Governance Consulting** - Strategic guidance for responsible AI implementation\n2. **Compliance Assessment** - Evaluate your AI systems against regulatory requirements\n3. **Risk Management** - Identify and mitigate AI-related risks\n4. **Ethical AI Framework** - Build ethical guidelines for AI development\n5. **Audit & Certification** - Third-party auditing for AI systems\n\nWould you like to learn more about any specific service?";
    } else if (lowerMessage.includes('compliance') || lowerMessage.includes('regulation')) {
      aiResponse = "ARES helps organizations navigate AI compliance:\n\n• **EU AI Act Compliance** - Ensure your AI systems meet EU requirements\n• **Risk Classification** - Determine your AI system's risk level\n• **Documentation Support** - Create required compliance documentation\n• **Ongoing Monitoring** - Continuous compliance tracking\n\nWe offer a free compliance assessment tool. Would you like to try it?";
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
      aiResponse = "Our pricing is customized based on your specific needs:\n\n• **Compliance Assessment** - Starting from $5,000\n• **Full Governance Package** - Custom pricing\n• **Ongoing Support** - Monthly retainer options\n\nI'd recommend scheduling a consultation to discuss your requirements. Would you like to book an appointment?";
    } else if (lowerMessage.includes('appointment') || lowerMessage.includes('meeting') || lowerMessage.includes('schedule')) {
      aiResponse = "I'd be happy to help you schedule a consultation!\n\nYou can book an appointment through our website's 'Book Appointment' section. Our team typically responds within 24 hours.\n\nWould you like me to guide you to the appointment booking page?";
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
      aiResponse = "You can reach ARES through:\n\n📧 Email: contact@ares-ai.com\n📞 Phone: Available upon request\n🌐 Website: Use our contact form for inquiries\n\nOur team typically responds within 24 hours. How else can I help you?";
    } else if (lowerMessage.includes('risk') || lowerMessage.includes('assessment')) {
      aiResponse = "ARES offers comprehensive AI risk assessment services:\n\n• **Risk Identification** - Detect potential AI-related risks\n• **Impact Analysis** - Evaluate consequences of AI failures\n• **Mitigation Strategies** - Develop risk reduction plans\n• **Continuous Monitoring** - Ongoing risk tracking\n\nWould you like to learn more about our risk assessment process?";
    } else if (lowerMessage.includes('ethical') || lowerMessage.includes('ethics')) {
      aiResponse = "Ethical AI is at the core of what we do:\n\n• **Fairness & Bias Detection** - Identify and mitigate algorithmic bias\n• **Transparency** - Make AI decision-making explainable\n• **Accountability** - Establish clear responsibility frameworks\n• **Privacy Protection** - Ensure data privacy compliance\n\nWould you like to discuss implementing ethical AI practices in your organization?";
    } else if (lowerMessage.includes('audit')) {
      aiResponse = "ARES provides independent AI system audits:\n\n• **Technical Audits** - Review AI model performance and reliability\n• **Compliance Audits** - Verify regulatory compliance\n• **Security Audits** - Assess AI system security\n• **Certification** - Issue compliance certificates\n\nOur audits are recognized by major regulatory bodies. Interested in learning more?";
    } else {
      aiResponse = `Thank you for your question about "${message}".\n\nI'm here to help with AI governance, compliance, risk management, and ethical AI implementation. \n\nCould you please clarify what specific aspect you'd like to know more about? For example:\n• Our services\n• Compliance requirements\n• Risk assessment\n• Pricing\n• Scheduling a consultation`;
    }

    console.log(`[${requestId}] Generated AI response`);

    // Save AI response to database
    const { data: aiData, error: aiError } = await supabase
      .from('app_138c0b9c8f_chat_messages')
      .insert([
        {
          session_id,
          sender: 'support',
          message: aiResponse,
        },
      ])
      .select()
      .single();

    if (aiError) {
      console.error(`[${requestId}] Error saving AI response:`, aiError);
      throw aiError;
    }

    console.log(`[${requestId}] AI response saved successfully`);

    return new Response(
      JSON.stringify({
        success: true,
        response: aiResponse,
        message_id: aiData.id,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error(`[${requestId}] Error processing request:`, error);
    return new Response(
      JSON.stringify({
        error: 'Internal server error',
        details: error.message,
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});