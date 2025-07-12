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
      title: 'Smart Routing',
      description: 'Our system analyzes your queries and picks the best AI model for the job.',
      benefits: ['99.9% accuracy', 'Context-aware', 'Real-time picks'],
      color: 'from-primary to-accent'
    },
    {
      icon: DollarSign,
      title: 'Save Money',
      description: 'Cut AI costs by up to 70% with smart model selection that balances quality and price.',
      benefits: ['Auto cost control', 'Budget tracking', 'Smart pricing'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Zap,
      title: 'Super Fast',
      description: 'Under 100ms routing with global edge deployment for quick responses everywhere.',
      benefits: ['< 100ms routing', 'Global network', 'Smart caching'],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: BarChart3,
      title: 'Usage Insights',
      description: 'See how you use AI, track costs, and monitor performance across all your requests.',
      benefits: ['Real-time stats', 'Custom dashboards', 'Data export'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Shield,
      title: 'Keep Safe',
      description: 'Bank-level security with encryption and advanced access controls to protect your data.',
      benefits: ['SOC 2 certified', 'End-to-end encryption', 'SSO ready'],
      color: 'from-red-500 to-rose-600'
    },
    {
      icon: Code,
      title: 'Easy to Use',
      description: 'Simple REST APIs, SDKs for popular languages, and clear docs for quick setup.',
      benefits: ['RESTful API', 'Multiple SDKs', 'Webhook support'],
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  const stats = [
    { label: 'Requests/Month', value: '1B+', icon: Globe },
    { label: 'Response Time', value: '85ms', icon: Clock },
    { label: 'Cost Savings', value: '70%', icon: TrendingUp },
    { label: 'Uptime', value: '99.9%', icon: Target }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <Badge variant="outline" className="px-3 py-1">
            Features
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Everything you need for
            <span className="block gradient-text-natural">smart AI routing</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Powerful features to optimize your AI workflows and cut costs
            while keeping the best quality responses.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center texture-paper">
              <CardContent className="pt-4 md:pt-6">
                <div className="flex justify-center mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="group card-hover texture-paper overflow-hidden">
              <CardHeader className="pb-3 md:pb-4">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br ${feature.color} p-0.5`}>
                    <div className="w-full h-full bg-background rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-lg md:text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 md:space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
                
                <div className="space-y-2">
                  {feature.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2 text-xs md:text-sm">
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
        <div className="mt-16 md:mt-24">
          <Card className="texture-noise">
            <CardContent className="p-6 md:p-8">
              <div className="text-center space-y-4 md:space-y-6">
                <div className="flex justify-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Layers className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
                    15+ AI Models Supported
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                    We work with all major AI providers so you don't have to. 
                    Access the best models from OpenAI, Anthropic, Google, and more through one API.
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                  {[
                    'GPT-4 Turbo', 'Claude 3 Sonnet', 'Gemini Pro', 'GPT-3.5 Turbo',
                    'Claude 3 Haiku', 'Cohere Command', 'Llama 2', 'Mistral 7B',
                    'PaLM 2', 'Claude 3 Opus', 'Gemini Ultra', 'GPT-4 Vision'
                  ].map((model) => (
                    <Badge key={model} variant="secondary" className="px-2 md:px-3 py-1 text-xs">
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