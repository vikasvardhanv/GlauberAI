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
  Check
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
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

      <div className="container relative py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-5xl text-center space-y-8">
          {/* Announcement Badge */}
          <div className="flex justify-center">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium glass">
              <Zap className="mr-2 h-4 w-4" />
              Now supporting 15+ AI models
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block">Smart AI Routing</span>
              <span className="block gradient-text">for Every Query</span>
            </h1>
            
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              Let our intelligent routing engine automatically select the best AI model 
              for each query, optimizing for cost, performance, and accuracy.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-8 py-6 text-lg" asChild>
              <Link href="/auth/signup">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg glass" asChild>
              <Link href="/demo">
                <Play className="mr-2 h-5 w-5" />
                View Demo
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground pt-8">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>1000 free queries</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Setup in 2 minutes</span>
            </div>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="mx-auto max-w-4xl mt-20">
          <Card className="glass overflow-hidden">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold">See AI Routing in Action</h3>
                  <p className="text-muted-foreground">
                    Watch how different queries get routed to optimal models
                  </p>
                </div>

                {/* Query Input Simulation */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Code className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 font-mono text-sm">
                      {typedText}
                      <span className="animate-pulse">|</span>
                    </div>
                  </div>

                  {/* Routing Logic Display */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <BarChart3 className="w-4 h-4 text-primary" />
                        <span className="font-medium text-sm">Analysis</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Query complexity, length, and keywords analyzed
                      </p>
                    </div>

                    <div className="p-4 bg-blue-500/5 rounded-lg border border-blue-500/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Zap className="w-4 h-4 text-blue-500" />
                        <span className="font-medium text-sm">Selection</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Optimal model chosen from 15+ options
                      </p>
                    </div>

                    <div className="p-4 bg-green-500/5 rounded-lg border border-green-500/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Shield className="w-4 h-4 text-green-500" />
                        <span className="font-medium text-sm">Execution</span>
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

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}