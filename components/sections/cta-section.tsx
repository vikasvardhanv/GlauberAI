import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10">
      <div className="container">
        <Card className="max-w-4xl mx-auto glass overflow-hidden">
          <CardContent className="p-8 md:p-12 text-center space-y-8">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center glow-animation">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Ready to optimize your
                <span className="block gradient-text">AI workflows?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of developers who've already reduced costs and improved 
                performance with intelligent AI routing. Start your free trial today.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">1,000</div>
                <div className="text-sm text-muted-foreground">Free queries to start</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">2 min</div>
                <div className="text-sm text-muted-foreground">Setup time</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">No</div>
                <div className="text-sm text-muted-foreground">Credit card required</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg" asChild>
                <Link href="/auth/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg glass" asChild>
                <Link href="/contact">
                  Talk to Sales
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground pt-6 border-t">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}