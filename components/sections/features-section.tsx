'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  BarChart3, 
  Shield, 
  Code, 
  Globe, 
  Clock,
  DollarSign,
  Target,
  Layers,
  Brain,
  TrendingUp,
  Lock
} from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Routing',
      description: 'Advanced algorithms analyze your queries and automatically select the optimal AI model for best results.',
      benefits: ['99.9% accuracy', 'Context-aware', 'Real-time optimization'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: DollarSign,
      title: 'Cost Optimization',
      description: 'Reduce AI costs by up to 70% with smart model selection that balances performance and pricing.',
      benefits: ['Auto cost control', 'Budget monitoring', 'Predictive pricing'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Sub-100ms routing decisions with global edge deployment for minimal latency worldwide.',
      benefits: ['< 100ms routing', 'Global CDN', 'Smart caching'],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive insights into usage patterns, costs, and performance across all your AI interactions.',
      benefits: ['Real-time metrics', 'Custom dashboards', 'Export data'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with SOC 2 compliance, encryption, and advanced access controls.',
      benefits: ['SOC 2 certified', 'End-to-end encryption', 'SSO integration'],
      color: 'from-red-500 to-rose-600'
    },
    {
      icon: Code,
      title: 'Developer First',
      description: 'RESTful APIs, SDKs for popular languages, and comprehensive documentation for easy integration.',
      benefits: ['RESTful API', 'Multiple SDKs', 'Webhook support'],
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  const stats = [
    { label: 'API Requests/Month', value: '1B+', icon: Globe },
    { label: 'Average Response Time', value: '85ms', icon: Clock },
    { label: 'Cost Savings', value: '70%', icon: TrendingUp },
    { label: 'Uptime SLA', value: '99.9%', icon: Target }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="px-4 py-2">
            Features
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Everything you need for
            <span className="block gradient-text">intelligent AI routing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to optimize your AI workflows and reduce costs
            while maintaining the highest quality responses.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center glass">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="group hover:shadow-lg transition-all duration-300 glass overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} p-0.5`}>
                    <div className="w-full h-full bg-background rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-2">
                  {feature.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Model Support Section */}
        <div className="mt-24">
          <Card className="glass">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <Layers className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    15+ AI Models Supported
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    We integrate with all major AI providers so you don't have to. 
                    Access the best models from OpenAI, Anthropic, Google, and more through a single API.
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    'GPT-4 Turbo', 'Claude 3 Sonnet', 'Gemini Pro', 'GPT-3.5 Turbo',
                    'Claude 3 Haiku', 'Cohere Command', 'Llama 2', 'Mistral 7B',
                    'PaLM 2', 'Claude 3 Opus', 'Gemini Ultra', 'GPT-4 Vision'
                  ].map((model) => (
                    <Badge key={model} variant="secondary" className="px-3 py-1">
                      {model}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}