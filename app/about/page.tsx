'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Brain, 
  Target, 
  Users, 
  Zap,
  Award,
  Globe,
  TrendingUp,
  Shield
} from 'lucide-react';

export default function AboutPage() {
  const team = [
    {
      name: "Vikash V.",
      role: "Founder & CEO",
      bio: "Building GlauberAI to make AI accessible, intelligent, and affordable for everyone.",
      avatar: "https://avatars.githubusercontent.com/u/10229899?v=4",
      initials: "VV"
    }
  ];

  const values = [
    {
      icon: Brain,
      title: "Intelligence First",
      description: "We believe AI should be smart about using AI. Our routing algorithms continuously learn and optimize for the best outcomes."
    },
    {
      icon: Users,
      title: "Developer Focused",
      description: "Built by developers, for developers. We prioritize ease of integration, comprehensive documentation, and exceptional support."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Your data and queries are protected with enterprise-grade security. We're SOC 2 certified and GDPR compliant."
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Our infrastructure spans the globe to ensure low latency and high availability wherever your users are."
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Company Founded",
      description: "Started with a vision to make AI more intelligent and cost-effective"
    },
    {
      year: "2024",
      title: "Beta Launch",
      description: "Launched private beta with 100+ developers and achieved 99.9% uptime"
    },
    {
      year: "2024",
      title: "Series A",
      description: "Raised $15M Series A led by Andreessen Horowitz"
    },
    {
      year: "2024",
      title: "Public Launch",
      description: "Launched publicly with 15+ AI models and intelligent routing"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-24">
        <div className="container max-w-6xl">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-4 py-2">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Building the future of
              <span className="block gradient-text">intelligent AI</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're on a mission to make AI more intelligent, cost-effective, and accessible 
              for developers and businesses worldwide.
            </p>
          </div>

          {/* Mission */}
          <section className="mb-24">
            <Card className="glass">
              <CardContent className="p-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  We believe that AI should be intelligent about using AI. Instead of forcing developers 
                  to manually choose between dozens of models, we built a system that automatically 
                  selects the optimal model for each query, optimizing for quality, cost, and performance. 
                  Our goal is to democratize access to the best AI capabilities while making it more 
                  affordable and efficient for everyone.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Values */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="glass">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Team */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experienced AI researchers and engineers from top tech companies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="glass text-center">
                  <CardContent className="p-6">
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-primary text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Key milestones in building the future of AI routing
              </p>
            </div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <Card className="flex-1 glass">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-2">
                        <Badge variant="secondary">{milestone.year}</Badge>
                        <h3 className="font-semibold text-lg">{milestone.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </section>

          {/* Stats */}
          <section className="mb-24">
            <Card className="glass">
              <CardContent className="p-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">By the Numbers</h2>
                  <p className="text-muted-foreground">
                    Our impact in the AI ecosystem
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { icon: Users, value: "10,000+", label: "Developers" },
                    { icon: Zap, value: "1B+", label: "API Calls" },
                    { icon: TrendingUp, value: "70%", label: "Cost Savings" },
                    { icon: Award, value: "99.9%", label: "Uptime" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <stat.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Contact */}
          <section>
            <Card className="glass border-primary/20">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Have questions about GlauberAI? Want to partner with us? 
                  We'd love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:hello@glauber-ai.com"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  >
                    Contact Sales
                  </a>
                  <a 
                    href="mailto:support@glauber-ai.com"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                  >
                    Get Support
                  </a>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}