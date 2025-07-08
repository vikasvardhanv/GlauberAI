'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Menu,
  Moon,
  Sun,
  Zap,
  BarChart3,
  FileText,
  Users,
  Shield,
  Rocket
} from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navigation = [
    {
      title: 'Product',
      items: [
        {
          title: 'AI Routing',
          href: '/features/routing',
          description: 'Intelligent model selection for optimal performance',
          icon: Zap
        },
        {
          title: 'Analytics',
          href: '/features/analytics',
          description: 'Deep insights into your API usage and costs',
          icon: BarChart3
        },
        {
          title: 'API Management',
          href: '/features/api',
          description: 'Comprehensive API key and usage management',
          icon: Shield
        }
      ]
    },
    {
      title: 'Resources',
      items: [
        {
          title: 'Documentation',
          href: '/docs',
          description: 'Complete guides and API reference',
          icon: FileText
        },
        {
          title: 'Community',
          href: '/community',
          description: 'Connect with other developers',
          icon: Users
        },
        {
          title: 'Changelog',
          href: '/changelog',
          description: 'Latest updates and improvements',
          icon: Rocket
        }
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neon-cyan/20 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 glass">
      <div className="w-full px-4 flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-pink/20 border border-neon-cyan/30 animate-glow group-hover:animate-pulse-glow transition-all duration-300">
              <Image
                src="/neural.png"
                alt="Neural Logo"
                width={64}
                height={64}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
                priority
              />
            </div>
            <span className="text-xl font-bold gradient-text">GlauberAI</span>
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navigation.map((nav) => (
                <NavigationMenuItem key={nav.title}>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-neon-cyan/10 border-none text-foreground hover:text-neon-cyan transition-all duration-300">
                    {nav.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] glass rounded-xl border border-neon-cyan/20">
                      {nav.items.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-neon-cyan/10 hover:scale-105 hover:shadow-neon-cyan group"
                            >
                              <div className="flex items-center space-x-2">
                                <item.icon className="h-4 w-4 text-neon-cyan group-hover:text-neon-pink transition-colors duration-300" />
                                <div className="text-sm font-medium leading-none group-hover:text-neon-cyan transition-colors duration-300">
                                  {item.title}
                                </div>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-lg bg-gradient-to-r from-neon-cyan/20 to-neon-pink/20 px-4 py-2 text-sm font-medium transition-all duration-300 hover:from-neon-cyan/30 hover:to-neon-pink/30 hover:scale-105 hover:shadow-neon-cyan border border-neon-cyan/30">
                    <span className="text-neon-cyan group-hover:text-neon-pink transition-colors duration-300">Pricing</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="h-9 w-9 rounded-lg hover:bg-neon-cyan/10 hover:text-neon-cyan transition-all duration-300 hover:scale-110"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <div className="hidden md:flex items-center space-x-2">
            <Button 
              variant="ghost" 
              asChild
              className="hover:bg-neon-cyan/10 hover:text-neon-cyan transition-all duration-300"
            >
              <Link href="/auth/signin">Sign In</Link>
            </Button>
            <Button 
              asChild
              className="bg-gradient-to-r from-neon-cyan to-neon-pink hover:from-neon-pink hover:to-neon-cyan text-white border-none shadow-neon-cyan hover:shadow-neon-pink transition-all duration-300 hover:scale-105"
            >
              <Link href="/auth/signup">Get Started</Link>
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-neon-cyan/10 hover:text-neon-cyan transition-all duration-300"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 glass border-l border-neon-cyan/20">
              <div className="flex flex-col space-y-6 mt-6">
                <Link href="/" className="flex items-center space-x-2 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-pink/20 border border-neon-cyan/30 animate-glow">
                    <Image
                      src="/neural.png"
                      alt="Neural Logo"
                      width={64}
                      height={64}
                      className="object-contain"
                      priority
                    />
                  </div>
                  <span className="font-bold text-lg gradient-text">GlauberAI</span>
                </Link>
                
                <nav className="flex flex-col space-y-4">
                  {navigation.map((nav) => (
                    <div key={nav.title} className="space-y-2">
                      <h4 className="font-medium text-sm text-neon-cyan uppercase tracking-wide">
                        {nav.title}
                      </h4>
                      <div className="space-y-1">
                        {nav.items.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-neon-cyan/10 transition-all duration-300 group"
                            onClick={() => setIsOpen(false)}
                          >
                            <item.icon className="h-4 w-4 text-neon-cyan group-hover:text-neon-pink transition-colors duration-300" />
                            <span className="text-sm group-hover:text-neon-cyan transition-colors duration-300">{item.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t border-neon-cyan/20">
                    <Link
                      href="/pricing"
                      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-neon-cyan/10 transition-all duration-300 group"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-sm font-medium text-neon-cyan group-hover:text-neon-pink transition-colors duration-300">Pricing</span>
                    </Link>
                  </div>
                </nav>
                
                <div className="flex flex-col space-y-2 pt-4 border-t border-neon-cyan/20">
                  <Button 
                    variant="ghost" 
                    asChild
                    className="justify-start hover:bg-neon-cyan/10 hover:text-neon-cyan transition-all duration-300"
                  >
                    <Link href="/auth/signin">Sign In</Link>
                  </Button>
                  <Button 
                    asChild
                    className="bg-gradient-to-r from-neon-cyan to-neon-pink hover:from-neon-pink hover:to-neon-cyan text-white border-none shadow-neon-cyan hover:shadow-neon-pink transition-all duration-300"
                  >
                    <Link href="/auth/signup">Get Started</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}