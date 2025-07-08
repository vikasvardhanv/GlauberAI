'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  Zap, 
  BarChart3, 
  Shield, 
  Globe,
  CheckCircle,
  Star,
  MessageSquare,
  Cpu,
  Sparkles
} from 'lucide-react';

export function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResponse, setShowResponse] = useState(false);
  
  const queries = [
    "Generate a Python function to sort a list",
    "Write a creative story about AI",
    "Analyze this quarterly report data",
    "Explain quantum computing simply"
  ];

  const responses = [
    "Here's an efficient Python sorting function using the built-in sorted() method...",
    "In a world where artificial intelligence had become as common as electricity...",
    "Based on the quarterly data analysis, revenue increased by 15% compared to...",
    "Quantum computing uses quantum mechanical phenomena like superposition and entanglement..."
  ];

  useEffect(() => {
    const currentQuery = queries[currentIndex];
    if (typedText.length < currentQuery.length) {
      const timeout = setTimeout(() => {
        setTypedText(currentQuery.slice(0, typedText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      // Show response after typing is complete
      setTimeout(() => {
        setShowResponse(true);
      }, 500);
      
      // Reset after showing response
      setTimeout(() => {
        setShowResponse(false);
        setTypedText('');
        setCurrentIndex((prev) => (prev + 1) % queries.length);
      }, 3000);
    }
  }, [typedText, currentIndex, queries]);

  const features = [
    {
      icon: Zap,
      title: "Intelligent Routing",
      description: "Automatically selects the best AI model for each query"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Deep insights into usage patterns and costs"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance"
    },
    {
      icon: Globe,
      title: "Global Infrastructure",
      description: "99.9% uptime with worldwide edge locations"
    }
  ];

  const stats = [
    { value: "10M+", label: "Queries Processed" },
    { value: "99.9%", label: "Uptime" },
    { value: "50ms", label: "Average Latency" },
    { value: "24/7", label: "Support" }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30"></div>
      
      <div className="container relative z-10">
        {/* Main Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-6 hover-scale">
            <Star className="w-3 h-3 mr-1" />
            Trusted by 10,000+ developers worldwide
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Intelligent AI</span>
            <br />
            <span className="text-foreground">Routing Platform</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Automatically route your queries to the optimal AI model. 
            Save costs, improve performance, and get better results with our intelligent routing system.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="btn-primary">
              <Link href="/auth/signup">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/demo">
                View Demo
              </Link>
            </Button>
          </div>
        </div>

        {/* Live Demo Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="gradient-bg border-primary/20 overflow-hidden">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">See AI Routing in Action</h3>
                <p className="text-muted-foreground">
                  Watch how different queries get intelligently routed to optimal models
                </p>
              </div>

              {/* Query Input Simulation */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-background/50 rounded-lg border border-border">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-mono text-sm text-foreground">
                      {typedText}
                      <span className="animate-pulse text-primary">|</span>
                    </div>
                  </div>
                </div>

                {/* Routing Logic Display */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <BarChart3 className="w-4 h-4 text-primary" />
                      <span className="font-medium text-sm text-primary">Analysis</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Query complexity, length, and keywords analyzed
                    </p>
                  </div>

                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="w-4 h-4 text-accent" />
                      <span className="font-medium text-sm text-accent">Selection</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Optimal model chosen from 15+ options
                    </p>
                  </div>

                  <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <Cpu className="w-4 h-4 text-secondary-foreground" />
                      <span className="font-medium text-sm text-secondary-foreground">Execution</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Best quality response at lowest cost
                    </p>
                  </div>
                </div>

                {/* Response Display */}
                {showResponse && (
                  <div className="fade-in">
                    <div className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg border border-border">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                          <Sparkles className="w-5 h-5 text-green-500" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-foreground leading-relaxed">
                          {responses[currentIndex]}
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge variant="outline" className="text-xs">
                            Model: GPT-4
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Cost: $0.02
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Time: 1.2s
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto gradient-bg border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to optimize your AI costs?</h2>
              <p className="text-muted-foreground mb-6">
                Join thousands of developers who are already saving 40% on their AI costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="btn-primary">
                  <Link href="/auth/signup">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}