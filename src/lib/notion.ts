// Notion integration via Supabase Edge Function
const SUPABASE_URL = 'https://jjfzfktoyctxdqnzmvot.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZnpma3RveWN0eGRxbnptdm90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzNDE2NDYsImV4cCI6MjA4MzkxNzY0Nn0.jAeZyfMa0t-7YMeAodQ8q-jUyHF6dBqF591ITvCaArw';

export const sendToNotion = async (data: any ) => {
  console.log('Sending data to Notion via Edge Function:', data);
  
  try {
    // Build payload with null for empty optional fields (Notion API requires null, not empty strings)
    const payload: Record<string, string | null> = {
      name: data.name,
      email: data.email,
      company: data.company || null,
      message: data.message || (data.service ? `Appointment request for ${data.service} on ${data.date} at ${data.preferredTime}` : null),
      phone: data.phone || null,
      service: data.service || null,
      preferredTime: data.preferredTime || null,
      date: data.date || null,
      industry: data.industry || null
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

