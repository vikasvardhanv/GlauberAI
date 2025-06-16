'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-24">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-4 py-2">
              Legal
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 1, 2024
            </p>
          </div>

          <Card className="glass">
            <CardContent className="p-8 prose prose-neutral dark:prose-invert max-w-none">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using GlauberAI's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2>2. Description of Service</h2>
              <p>
                GlauberAI provides an intelligent AI model routing platform that automatically selects the best foundation model for each query to optimize cost and performance. Our service includes:
              </p>
              <ul>
                <li>AI model routing and optimization</li>
                <li>API access to multiple AI models</li>
                <li>Usage analytics and reporting</li>
                <li>Developer tools and documentation</li>
              </ul>

              <h2>3. User Accounts</h2>
              <p>
                To access certain features of the service, you must register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>

              <h2>4. Acceptable Use</h2>
              <p>You agree not to use the service to:</p>
              <ul>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Generate harmful, offensive, or illegal content</li>
                <li>Attempt to reverse engineer or compromise our systems</li>
                <li>Exceed rate limits or abuse the service</li>
              </ul>

              <h2>5. Privacy and Data</h2>
              <p>
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our service. By using our service, you agree to the collection and use of information in accordance with our Privacy Policy.
              </p>

              <h2>6. Billing and Payment</h2>
              <p>
                Paid services are billed in advance on a monthly or annual basis. You agree to pay all charges associated with your account. We reserve the right to suspend or terminate accounts with outstanding balances.
              </p>

              <h2>7. Service Availability</h2>
              <p>
                While we strive to maintain high availability, we do not guarantee that the service will be available 100% of the time. We may perform maintenance or updates that temporarily affect service availability.
              </p>

              <h2>8. Intellectual Property</h2>
              <p>
                The service and its original content, features, and functionality are owned by GlauberAI and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>

              <h2>9. Limitation of Liability</h2>
              <p>
                In no event shall GlauberAI be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>

              <h2>10. Termination</h2>
              <p>
                We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>

              <h2>11. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>

              <h2>12. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <ul>
                <li>Email: legal@glauber-ai.com</li>
                <li>Address: 123 AI Street, San Francisco, CA 94105</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}