// Notion integration via Supabase Edge Function
const SUPABASE_URL = 'https://jjfzfktoyctxdqnzmvot.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZnpma3RveWN0eGRxbnptdm90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzNDE2NDYsImV4cCI6MjA4MzkxNzY0Nn0.jAeZyfMa0t-7YMeAodQ8q-jUyHF6dBqF591ITvCaArw';

// Sanitize input to prevent injection attacks
const sanitizeInput = (input: string | null | undefined): string | null => {
  if (!input) return null;
  // Remove potential script tags and HTML
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]*>/g, '')
    .trim()
    .slice(0, 10000); // Limit length to prevent DoS
};

export const sendToNotion = async (data: any) => {
  console.log('Sending data to Notion via Edge Function:', data);
  
  try {
    // Build payload with sanitized inputs and null for empty optional fields
    const payload: Record<string, string | null> = {
      name: sanitizeInput(data.name) || '',
      email: sanitizeInput(data.email) || '',
      company: sanitizeInput(data.company),
      message: sanitizeInput(data.message) || (data.service ? `Appointment request for ${sanitizeInput(data.service)} on ${sanitizeInput(data.date)} at ${sanitizeInput(data.preferredTime)}` : null),
      phone: sanitizeInput(data.phone),
      service: sanitizeInput(data.service),
      preferredTime: sanitizeInput(data.preferredTime),
      date: sanitizeInput(data.date),
      industry: sanitizeInput(data.industry)
    };

    console.log('Payload being sent:', payload);

    const response = await fetch(`${SUPABASE_URL}/functions/v1/notion-lead-webhook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    console.log('Response status:', response.status);
    console.log('Response ok:', response.ok);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Notion webhook error response:', errorText);
      return { success: false, error: `HTTP ${response.status}: ${errorText}` };
    }
    
    const result = await response.json();
    console.log('Successfully sent to Notion:', result);
    return { success: true, ...result };
  } catch (error) {
    console.error('Error sending to Notion (caught):', error);
    console.error('Error type:', error instanceof TypeError ? 'TypeError' : typeof error);
    console.error('Error message:', error instanceof Error ? error.message : String(error));
    
    // Return error details for debugging
    return { 
      success: false, 
      error: error instanceof Error ? error.message : String(error),
      errorType: error instanceof TypeError ? 'Network/CORS' : 'Unknown'
    };
  }
};

