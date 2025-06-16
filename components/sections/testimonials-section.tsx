'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      content: "GlauberAI reduced our AI costs by 60% while improving response quality. The automatic routing is incredibly smart and saves us hours of manual optimization work.",
      author: {
        name: "Sarah Chen",
        role: "CTO",
        company: "TechFlow AI",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
        initials: "SC"
      },
      rating: 5,
      metrics: "60% cost reduction"
    },
    {
      content: "The analytics dashboard gives us incredible insights into our AI usage patterns. We can now make data-driven decisions about which models to use for different use cases.",
      author: {
        name: "Marcus Rodriguez",
        role: "Head of Engineering",
        company: "DataVibe",
        avatar: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
        initials: "MR"
      },
      rating: 5,
      metrics: "3x faster insights"
    },
    {
      content: "Integration was seamless. We had our existing API calls routed through GlauberAI in less than an hour. The performance improvements were immediate.",
      author: {
        name: "Emily Watson",
        role: "Senior Developer",
        company: "CloudScale",
        avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
        initials: "EW"
      },
      rating: 5,
      metrics: "< 1 hour setup"
    },
    {
      content: "The enterprise features are exactly what we needed. SSO integration, detailed usage tracking, and custom routing rules give us complete control over our AI infrastructure.",
      author: {
        name: "David Kim",
        role: "VP of Technology",
        company: "InnovateCore",
        avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
        initials: "DK"
      },
      rating: 5,
      metrics: "Enterprise ready"
    },
    {
      content: "GlauberAI's routing accuracy is phenomenal. It consistently picks the right model for our complex scientific queries, improving both speed and accuracy of our research.",
      author: {
        name: "Dr. Lisa Park",
        role: "Research Director",
        company: "BioTech Labs",
        avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
        initials: "LP"
      },
      rating: 5,
      metrics: "95% accuracy"
    },
    {
      content: "The cost optimization features alone paid for our subscription within the first month. Smart routing plus detailed cost tracking gives us incredible value.",
      author: {
        name: "Alex Thompson",
        role: "Product Manager",
        company: "StartupFlow",
        avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
        initials: "AT"
      },
      rating: 5,
      metrics: "ROI in 1 month"
    }
  ];

  const stats = [
    { value: "10,000+", label: "Happy Developers" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "1B+", label: "API Calls/Month" },
    { value: "4.9/5", label: "Customer Rating" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="px-4 py-2">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Loved by developers
            <span className="block gradient-text">worldwide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of developers and companies who trust GlauberAI 
            to optimize their AI workflows.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-muted-foreground/20" />
                  <p className="text-muted-foreground leading-relaxed pl-6">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Metric */}
                <Badge variant="secondary" className="w-fit">
                  {testimonial.metrics}
                </Badge>

                {/* Author */}
                <div className="flex items-center space-x-3 pt-4 border-t">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={testimonial.author.avatar} alt={testimonial.author.name} />
                    <AvatarFallback>{testimonial.author.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">
                      {testimonial.author.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.author.role} at {testimonial.author.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-8">
            Trusted by leading companies and startups
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['TechFlow', 'DataVibe', 'CloudScale', 'InnovateCore', 'BioTech Labs', 'StartupFlow'].map((company) => (
              <div key={company} className="text-2xl font-bold text-muted-foreground">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}