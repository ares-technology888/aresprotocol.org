Deno.serve(async (req) => {
  const requestId = crypto.randomUUID();
  console.log(`[${requestId}] Notion lead webhook request - Method: ${req.method}`);

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      },
    });
  }

  const corsHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  };

  try {
    const notionApiKey = Deno.env.get('NOTION_API_KEY');
    const notionDatabaseId = Deno.env.get('NOTION_DATABASE_ID');

    if (!notionApiKey || !notionDatabaseId) {
      console.error(`[${requestId}] Missing Notion configuration`);
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Notion integration not configured. Please set NOTION_API_KEY and NOTION_DATABASE_ID.'
        }),
        { status: 500, headers: corsHeaders }
      );
    }

    let body;
    try {
      body = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid request body' }),
        { status: 400, headers: corsHeaders }
      );
    }

    console.log(`[${requestId}] Received data:`, JSON.stringify(body));

    const { name, email, company, message, phone, service, preferredTime, date, industry } = body;

    if (!name || !email) {
      return new Response(
        JSON.stringify({ success: false, error: 'Name and email are required' }),
        { status: 400, headers: corsHeaders }
      );
    }

    // Build Notion properties - only include fields that have values
    // Notion API requires proper type formatting and rejects empty strings for phone_number
    const properties: Record<string, unknown> = {
      Name: {
        title: [{ text: { content: name } }]
      },
      Email: {
        email: email
      }
    };

    // Add optional text fields as rich_text (only if they have values)
    if (company) {
      properties.Company = {
        rich_text: [{ text: { content: company } }]
      };
    }

    if (message) {
      properties.Message = {
        rich_text: [{ text: { content: message } }]
      };
    }

    if (service) {
      properties.Service = {
        rich_text: [{ text: { content: service } }]
      };
    }

    if (preferredTime) {
      properties.PreferredTime = {
        rich_text: [{ text: { content: preferredTime } }]
      };
    }

    if (date) {
      properties.Date = {
        date: { start: date }
      };
    }

    if (industry) {
      properties.Industry = {
        rich_text: [{ text: { content: industry } }]
      };
    }

    // Phone number - only include if it has a value (Notion rejects empty strings for phone_number type)
    if (phone) {
      properties.Phone = {
        phone_number: phone
      };
    }

    console.log(`[${requestId}] Sending to Notion:`, JSON.stringify(properties));

    const notionResponse = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${notionApiKey}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28'
      },
      body: JSON.stringify({
        parent: { database_id: notionDatabaseId },
        properties: properties
      })
    });

    const notionResult = await notionResponse.json();

    if (!notionResponse.ok) {
      console.error(`[${requestId}] Notion API error:`, JSON.stringify(notionResult));
      return new Response(
        JSON.stringify({
          success: false,
          error: `Notion API error: ${JSON.stringify(notionResult)}`
        }),
        { status: notionResponse.status, headers: corsHeaders }
      );
    }

    console.log(`[${requestId}] Successfully created Notion page:`, notionResult.id);

    return new Response(
      JSON.stringify({
        success: true,
        pageId: notionResult.id
      }),
      { status: 200, headers: corsHeaders }
    );

  } catch (error) {
    console.error(`[${requestId}] Error:`, error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }),
      { status: 500, headers: corsHeaders }
    );
  }
});
