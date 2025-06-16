'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Code, 
  Copy, 
  ExternalLink, 
  FileText, 
  Zap,
  Shield,
  BarChart3,
  Settings
} from 'lucide-react';

export default function DocsPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeExamples = {
    quickStart: `// Install the SDK
npm install @glauber-ai/sdk

// Initialize the client
import { GlauberAI } from '@glauber-ai/sdk';

const client = new GlauberAI({
  apiKey: 'your-api-key-here'
});

// Make a query
const response = await client.query({
  message: "Explain quantum computing in simple terms",
  preferences: {
    model: "auto", // Let GlauberAI choose the best model
    maxTokens: 500
  }
});

console.log(response.data.message);`,

    routing: `// Custom routing preferences
const response = await client.query({
  message: "Write a Python function to sort a list",
  preferences: {
    model: "gpt-4", // Force specific model
    temperature: 0.7,
    maxTokens: 1000
  }
});

// Auto-routing with domain hints
const response = await client.query({
  message: "Create a marketing email",
  preferences: {
    model: "auto",
    domain: "creative-writing" // Hint for better routing
  }
});`,

    streaming: `// Streaming responses
const stream = await client.queryStream({
  message: "Write a long story about AI",
  preferences: {
    model: "claude-3-sonnet",
    maxTokens: 2000
  }
});

for await (const chunk of stream) {
  process.stdout.write(chunk.data.delta);
}`,

    curl: `curl -X POST https://api.glauber-ai.com/v1/query \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "message": "Explain machine learning",
    "preferences": {
      "model": "auto",
      "maxTokens": 500
    }
  }'`
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-24">
        <div className="container max-w-6xl">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-4 py-2">
              Documentation
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Developer
              <span className="block gradient-text">Documentation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to integrate GlauberAI into your applications.
              Get started in minutes with our comprehensive guides and API reference.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <Card className="glass sticky top-24">
                <CardContent className="p-6">
                  <nav className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Getting Started</h3>
                      <ul className="space-y-1 text-sm">
                        <li><a href="#quick-start" className="text-muted-foreground hover:text-foreground">Quick Start</a></li>
                        <li><a href="#authentication" className="text-muted-foreground hover:text-foreground">Authentication</a></li>
                        <li><a href="#installation" className="text-muted-foreground hover:text-foreground">Installation</a></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">API Reference</h3>
                      <ul className="space-y-1 text-sm">
                        <li><a href="#query-endpoint" className="text-muted-foreground hover:text-foreground">Query Endpoint</a></li>
                        <li><a href="#streaming" className="text-muted-foreground hover:text-foreground">Streaming</a></li>
                        <li><a href="#models" className="text-muted-foreground hover:text-foreground">Models</a></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Advanced</h3>
                      <ul className="space-y-1 text-sm">
                        <li><a href="#routing" className="text-muted-foreground hover:text-foreground">Custom Routing</a></li>
                        <li><a href="#webhooks" className="text-muted-foreground hover:text-foreground">Webhooks</a></li>
                        <li><a href="#rate-limits" className="text-muted-foreground hover:text-foreground">Rate Limits</a></li>
                      </ul>
                    </div>
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              {/* Quick Start */}
              <section id="quick-start">
                <Card className="glass">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Zap className="h-5 w-5" />
                      <span>Quick Start</span>
                    </CardTitle>
                    <CardDescription>
                      Get up and running with GlauberAI in under 5 minutes
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-4">1. Get your API key</h3>
                      <p className="text-muted-foreground mb-4">
                        Sign up for a free account and get your API key from the dashboard.
                      </p>
                      <Button asChild>
                        <a href="/auth/signup">Get API Key</a>
                      </Button>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-4">2. Install and use</h3>
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                          <code>{codeExamples.quickStart}</code>
                        </pre>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(codeExamples.quickStart, 'quickStart')}
                        >
                          {copiedCode === 'quickStart' ? 'Copied!' : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* API Reference */}
              <section id="api-reference">
                <Card className="glass">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Code className="h-5 w-5" />
                      <span>API Reference</span>
                    </CardTitle>
                    <CardDescription>
                      Complete reference for all API endpoints
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="query" className="w-full">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="query">Query</TabsTrigger>
                        <TabsTrigger value="streaming">Streaming</TabsTrigger>
                        <TabsTrigger value="models">Models</TabsTrigger>
                        <TabsTrigger value="usage">Usage</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="query" className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">POST /v1/query</h4>
                          <p className="text-muted-foreground mb-4">
                            Send a query to GlauberAI and get an intelligent response using the optimal model.
                          </p>
                          
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-medium mb-2">Request Body</h5>
                              <div className="relative">
                                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                                  <code>{`{
  "message": "string", // Required: Your query
  "preferences": {
    "model": "auto" | "gpt-4" | "claude-3-sonnet", // Optional
    "maxTokens": 1000, // Optional: Max response length
    "temperature": 0.7, // Optional: Creativity (0-1)
    "domain": "coding" | "creative" | "analysis" // Optional: Routing hint
  }
}`}</code>
                                </pre>
                              </div>
                            </div>

                            <div>
                              <h5 className="font-medium mb-2">cURL Example</h5>
                              <div className="relative">
                                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                                  <code>{codeExamples.curl}</code>
                                </pre>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="absolute top-2 right-2"
                                  onClick={() => copyToClipboard(codeExamples.curl, 'curl')}
                                >
                                  {copiedCode === 'curl' ? 'Copied!' : <Copy className="h-4 w-4" />}
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="streaming" className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Streaming Responses</h4>
                          <p className="text-muted-foreground mb-4">
                            Get real-time streaming responses for better user experience.
                          </p>
                          <div className="relative">
                            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                              <code>{codeExamples.streaming}</code>
                            </pre>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="absolute top-2 right-2"
                              onClick={() => copyToClipboard(codeExamples.streaming, 'streaming')}
                            >
                              {copiedCode === 'streaming' ? 'Copied!' : <Copy className="h-4 w-4" />}
                            </Button>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="models" className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Available Models</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                              { name: 'GPT-4 Turbo', provider: 'OpenAI', strengths: 'Complex reasoning, code' },
                              { name: 'Claude 3 Sonnet', provider: 'Anthropic', strengths: 'Creative writing, analysis' },
                              { name: 'GPT-3.5 Turbo', provider: 'OpenAI', strengths: 'Fast, cost-effective' },
                              { name: 'Gemini Pro', provider: 'Google', strengths: 'Multimodal, reasoning' }
                            ].map((model) => (
                              <Card key={model.name} className="p-4">
                                <h5 className="font-medium">{model.name}</h5>
                                <p className="text-sm text-muted-foreground">{model.provider}</p>
                                <p className="text-xs text-muted-foreground mt-1">{model.strengths}</p>
                              </Card>
                            ))}
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="usage" className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">GET /v1/usage</h4>
                          <p className="text-muted-foreground mb-4">
                            Get your current usage statistics and remaining quota.
                          </p>
                          <div className="relative">
                            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                              <code>{`{
  "requests": {
    "used": 1250,
    "limit": 50000,
    "remaining": 48750
  },
  "tokens": {
    "input": 125000,
    "output": 87500
  },
  "cost": {
    "current_month": 12.45,
    "currency": "USD"
  }
}`}</code>
                            </pre>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </section>

              {/* SDKs and Libraries */}
              <section>
                <Card className="glass">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="h-5 w-5" />
                      <span>SDKs & Libraries</span>
                    </CardTitle>
                    <CardDescription>
                      Official SDKs for popular programming languages
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { name: 'JavaScript/TypeScript', package: '@glauber-ai/sdk', status: 'Available' },
                        { name: 'Python', package: 'glauber-ai', status: 'Available' },
                        { name: 'Go', package: 'github.com/glauber-ai/go-sdk', status: 'Available' },
                        { name: 'Java', package: 'com.glauber-ai:sdk', status: 'Coming Soon' },
                        { name: 'PHP', package: 'glauber-ai/php-sdk', status: 'Coming Soon' },
                        { name: 'Ruby', package: 'glauber-ai', status: 'Coming Soon' }
                      ].map((sdk) => (
                        <Card key={sdk.name} className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-medium">{sdk.name}</h5>
                            <Badge variant={sdk.status === 'Available' ? 'default' : 'secondary'}>
                              {sdk.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground font-mono">{sdk.package}</p>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}