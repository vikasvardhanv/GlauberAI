import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  Brain, 
  Github, 
  Twitter, 
  Linkedin, 
  Mail,
  ExternalLink
} from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'API Reference', href: '/docs/api' },
        { label: 'Integrations', href: '/integrations' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'Community', href: '/community' },
        { label: 'Support', href: '/support' },
        { label: 'Status', href: '/status' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' },
        { label: 'DPA', href: '/dpa' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/glauber-ai', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/glauber-ai', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/company/glauber-ai', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@glauber-ai.com', label: 'Email' },
  ];

  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm">
      <div className="w-full px-4 max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Brand and Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                 <Image
                    src="/neural.png"
                    alt="Neural Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                    priority
                  />
              </div>
              <span className="font-bold text-xl">GlauberAI</span>
            </div>
            
            <p className="text-muted-foreground max-w-md">
              Intelligent AI model routing platform that automatically selects the best foundation model for each query to optimize cost and performance.
            </p>

            <div className="space-y-4">
              <h4 className="font-medium">Stay updated</h4>
              <div className="flex space-x-2 max-w-md">
                <Input 
                  placeholder="Enter your email" 
                  type="email"
                  className="flex-1"
                />
                <Button>
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get notified about new features and updates.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-medium">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm inline-flex items-center group"
                    >
                      {link.label}
                      {link.href.startsWith('http') && (
                        <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>© 2024 GlauberAI. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Built with ❤️ for developers</span>
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                asChild
                className="h-8 w-8"
              >
                <Link href={social.href} aria-label={social.label}>
                  <social.icon className="h-4 w-4" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}