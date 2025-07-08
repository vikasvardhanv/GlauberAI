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
  Code,
  Play,
  Check,
  Sparkles
} from 'lucide-react';

export function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const queries = [
    "Generate a Python function to sort a list",
    "Write a creative story about AI",
    "Analyze this quarterly report data",
    "Explain quantum computing simply"
  ];

  useEffect(() => {
    const currentQuery = queries[currentIndex];
    if (typedText.length < currentQuery.length) {
      const timeout = setTimeout(() => {
        setTypedText(currentQuery.slice(0, typedText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypedText('');
        setCurrentIndex((prev) => (prev + 1) % queries.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [typedText, currentIndex]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-neon-cyan/5 min-h-screen">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 bg-pattern" />
      
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 98%, rgba(0, 255, 255, 0.3) 100%),
            linear-gradient(0deg, transparent 98%, rgba(255, 0, 255, 0.3) 100%)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-radial from-neon-cyan/20 to-transparent rounded-full animate-float" />
      <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-radial from-neon-pink/20 to-transparent rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-gradient-radial from-neon-yellow/20 to-transparent rounded-full animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-neon-cyan text-xs animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {String.fromCharCode(0x30A0 + Math.random() * 96)}
          </div>
        ))}
      </div>

      <div className="container relative py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-5xl text-center space-y-8">
          {/* Announcement Badge */}
          <div className="flex justify-center animate-fade-up">
            <Badge className="px-6 py-3 text-sm font-medium glass border border-neon-cyan/30 hover:animate-pulse-glow transition-all duration-300">
              <Sparkles className="mr-2 h-4 w-4 text-neon-cyan" />
              <span className="text-neon-cyan">Now supporting 15+ AI models</span>
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-foreground">Smart AI Routing</span>
              <span className="block gradient-text animate-shimmer">for Every Query</span>
            </h1>
            
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              Let our intelligent routing engine automatically select the best AI model 
              for each query, optimizing for cost, performance, and accuracy.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg bg-gradient-to-r from-neon-cyan to-neon-pink hover:from-neon-pink hover:to-neon-cyan text-white border-none shadow-neon-cyan hover:shadow-neon-pink transition-all duration-300 hover:scale-105 group" 
              asChild
            >
              <Link href="/auth/signup">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg glass border-neon-cyan/30 hover:bg-neon-cyan/10 hover:text-neon-cyan transition-all duration-300 hover:scale-105" 
              asChild
            >
              <Link href="/demo">
                <Play className="mr-2 h-5 w-5" />
                View Demo
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground pt-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2 hover:text-neon-cyan transition-colors duration-300">
              <Check className="h-4 w-4 text-neon-cyan" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2 hover:text-neon-cyan transition-colors duration-300">
              <Check className="h-4 w-4 text-neon-cyan" />
              <span>1000 free queries</span>
            </div>
            <div className="flex items-center gap-2 hover:text-neon-cyan transition-colors duration-300">
              <Check className="h-4 w-4 text-neon-cyan" />
              <span>Setup in 2 minutes</span>
            </div>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="mx-auto max-w-4xl mt-20 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <Card className="glass border border-neon-cyan/20 overflow-hidden hover:shadow-neon-cyan transition-all duration-500">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold gradient-text-cyan">See AI Routing in Action</h3>
                  <p className="text-muted-foreground">
                    Watch how different queries get routed to optimal models
                  </p>
                </div>

                {/* Query Input Simulation */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg border border-neon-cyan/20 hover:border-neon-cyan/40 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-gradient-to-br from-neon-cyan/20 to-neon-pink/20 rounded-full flex items-center justify-center animate-pulse">
                        <Code className="w-4 h-4 text-neon-cyan" />
                      </div>
                    </div>
                    <div className="flex-1 font-mono text-sm text-foreground">
                      {typedText}
                      <span className="animate-pulse text-neon-cyan">|</span>
                    </div>
                  </div>

                  {/* Routing Logic Display */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gradient-to-br from-neon-cyan/10 to-transparent rounded-lg border border-neon-cyan/30 hover:border-neon-cyan/50 transition-all duration-300 hover:scale-105 group">
                      <div className="flex items-center space-x-2 mb-2">
                        <BarChart3 className="w-4 h-4 text-neon-cyan group-hover:text-neon-pink transition-colors duration-300" />
                        <span className="font-medium text-sm text-neon-cyan">Analysis</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Query complexity, length, and keywords analyzed
                      </p>
                    </div>

                    <div className="p-4 bg-gradient-to-br from-neon-pink/10 to-transparent rounded-lg border border-neon-pink/30 hover:border-neon-pink/50 transition-all duration-300 hover:scale-105 group">
                      <div className="flex items-center space-x-2 mb-2">
                        <Zap className="w-4 h-4 text-neon-pink group-hover:text-neon-yellow transition-colors duration-300" />
                        <span className="font-medium text-sm text-neon-pink">Selection</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Optimal model chosen from 15+ options
                      </p>
                    </div>

                    <div className="p-4 bg-gradient-to-br from-neon-yellow/10 to-transparent rounded-lg border border-neon-yellow/30 hover:border-neon-yellow/50 transition-all duration-300 hover:scale-105 group">
                      <div className="flex items-center space-x-2 mb-2">
                        <Shield className="w-4 h-4 text-neon-yellow group-hover:text-neon-cyan transition-colors duration-300" />
                        <span className="font-medium text-sm text-neon-yellow">Execution</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Best quality response at lowest cost
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}