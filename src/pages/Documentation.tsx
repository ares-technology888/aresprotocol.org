import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Book, Key, Code2, Shield, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function Documentation() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">API Documentation</h1>
          <p className="text-xl text-gray-600">
            Complete guide to integrating ARES into your applications
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <a href="#authentication" className="block text-sm text-blue-600 hover:underline">Authentication</a>
                <a href="#endpoints" className="block text-sm text-blue-600 hover:underline">API Endpoints</a>
                <a href="#examples" className="block text-sm text-blue-600 hover:underline">Code Examples</a>
                <a href="#rate-limits" className="block text-sm text-blue-600 hover:underline">Rate Limits</a>
                <a href="#errors" className="block text-sm text-blue-600 hover:underline">Error Handling</a>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Getting Started */}
            <Card id="authentication">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Key className="h-5 w-5 text-blue-600" />
                  <CardTitle>Authentication</CardTitle>
                </div>
                <CardDescription>
                  All API requests require authentication using an API key
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Keep your API keys secure and never expose them in client-side code
                  </AlertDescription>
                </Alert>
                
                <div>
                  <h4 className="font-semibold mb-2">Include your API key in the Authorization header:</h4>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`Authorization: Bearer YOUR_API_KEY`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* API Endpoints */}
            <Card id="endpoints">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Code2 className="h-5 w-5 text-blue-600" />
                  <CardTitle>API Endpoints</CardTitle>
                </div>
                <CardDescription>
                  Base URL: https://api.ares.dev/v1
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Compliance Check Endpoint */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge>POST</Badge>
                    <code className="text-sm">/check</code>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Perform compliance checks on text content
                  </p>
                  
                  <h5 className="font-semibold mb-2">Request Body:</h5>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm mb-4">
{`{
  "text": "Content to check",
  "checks": ["privacy", "moderation", "regulatory", "security"],
  "options": {
    "language": "en",
    "strict_mode": false
  }
}`}
                  </pre>

                  <h5 className="font-semibold mb-2">Response:</h5>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "status": "success",
  "results": {
    "privacy": {
      "passed": true,
      "score": 0.95,
      "issues": []
    },
    "moderation": {
      "passed": true,
      "score": 0.98,
      "flagged_content": []
    },
    "regulatory": {
      "passed": true,
      "compliant_with": ["GDPR", "CCPA"]
    },
    "security": {
      "passed": true,
      "vulnerabilities": []
    }
  },
  "timestamp": "2024-01-15T10:30:00Z"
}`}
                  </pre>
                </div>

                {/* Batch Check Endpoint */}
                <div className="border-l-4 border-green-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">POST</Badge>
                    <code className="text-sm">/batch-check</code>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Check multiple items in a single request
                  </p>
                  
                  <h5 className="font-semibold mb-2">Request Body:</h5>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "items": [
    {
      "id": "item-1",
      "text": "First content",
      "checks": ["privacy", "moderation"]
    },
    {
      "id": "item-2",
      "text": "Second content",
      "checks": ["regulatory"]
    }
  ]
}`}
                  </pre>
                </div>

                {/* Analytics Endpoint */}
                <div className="border-l-4 border-purple-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">GET</Badge>
                    <code className="text-sm">/analytics</code>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Retrieve usage analytics and compliance metrics
                  </p>
                  
                  <h5 className="font-semibold mb-2">Query Parameters:</h5>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`?start_date=2024-01-01&end_date=2024-01-31&granularity=day`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* Code Examples */}
            <Card id="examples">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Book className="h-5 w-5 text-blue-600" />
                  <CardTitle>Code Examples</CardTitle>
                </div>
                <CardDescription>
                  Integration examples in popular programming languages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="curl">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="curl">cURL</TabsTrigger>
                    <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                    <TabsTrigger value="python">Python</TabsTrigger>
                    <TabsTrigger value="node">Node.js</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="curl" className="mt-4">
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`curl -X POST https://api.ares.dev/v1/check \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Your content here",
    "checks": ["privacy", "moderation", "regulatory"]
  }'`}
                    </pre>
                  </TabsContent>
                  
                  <TabsContent value="javascript" className="mt-4">
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`const response = await fetch('https://api.ares.dev/v1/check', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    text: 'Your content here',
    checks: ['privacy', 'moderation', 'regulatory']
  })
});

const result = await response.json();
console.log(result);`}
                    </pre>
                  </TabsContent>
                  
                  <TabsContent value="python" className="mt-4">
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`import requests

url = "https://api.ares.dev/v1/check"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "text": "Your content here",
    "checks": ["privacy", "moderation", "regulatory"]
}

response = requests.post(url, headers=headers, json=data)
result = response.json()
print(result)`}
                    </pre>
                  </TabsContent>
                  
                  <TabsContent value="node" className="mt-4">
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`const axios = require('axios');

const checkCompliance = async () => {
  try {
    const response = await axios.post(
      'https://api.ares.dev/v1/check',
      {
        text: 'Your content here',
        checks: ['privacy', 'moderation', 'regulatory']
      },
      {
        headers: {
          'Authorization': 'Bearer YOUR_API_KEY',
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
};

checkCompliance();`}
                    </pre>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Rate Limits */}
            <Card id="rate-limits">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <CardTitle>Rate Limits</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Free Tier</h4>
                      <p className="text-2xl font-bold text-blue-600">1,000</p>
                      <p className="text-sm text-gray-600">requests/month</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Pro Tier</h4>
                      <p className="text-2xl font-bold text-blue-600">100,000</p>
                      <p className="text-sm text-gray-600">requests/month</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Enterprise</h4>
                      <p className="text-2xl font-bold text-blue-600">Unlimited</p>
                      <p className="text-sm text-gray-600">custom limits</p>
                    </div>
                  </div>
                  
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Rate limit information is included in response headers: X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>

            {/* Error Handling */}
            <Card id="errors">
              <CardHeader>
                <CardTitle>Error Handling</CardTitle>
                <CardDescription>Common error codes and how to handle them</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <code className="font-semibold">400 Bad Request</code>
                    <p className="text-sm text-gray-600 mt-1">Invalid request parameters or malformed JSON</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <code className="font-semibold">401 Unauthorized</code>
                    <p className="text-sm text-gray-600 mt-1">Invalid or missing API key</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <code className="font-semibold">429 Too Many Requests</code>
                    <p className="text-sm text-gray-600 mt-1">Rate limit exceeded</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <code className="font-semibold">500 Internal Server Error</code>
                    <p className="text-sm text-gray-600 mt-1">Server error, please retry or contact support</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}