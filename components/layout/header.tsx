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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full px-4 flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 glow-animation">
              <Image
                src="/neural.png"
                alt="Neural Logo"
                width={64}
                height={64}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navigation.map((nav) => (
                <NavigationMenuItem key={nav.title}>
                  <NavigationMenuTrigger className="bg-transparent">
                    {nav.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {nav.items.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex items-center space-x-2">
                                <item.icon className="h-4 w-4" />
                                <div className="text-sm font-medium leading-none">
                                  {item.title}
                                </div>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
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
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Pricing
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
            className="h-9 w-9"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link href="/auth/signin">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/signup">Get Started</Link>
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-6">
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src="/neural.png"
                    alt="Neural Logo"
                    width={64}
                    height={64}
                    className="object-contain"
                    priority
                  />
                  <span className="font-bold text-lg">GlauberAI</span>
                </Link>
                
                <nav className="flex flex-col space-y-4">
                  {navigation.map((nav) => (
                    <div key={nav.title} className="space-y-2">
                      <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                        {nav.title}
                      </h4>
                      <div className="space-y-1">
                        {nav.items.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <item.icon className="h-4 w-4" />
                            <span className="text-sm">{item.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <Link href="/pricing" className="p-2 rounded-md hover:bg-accent transition-colors">
                    <span className="text-sm font-medium">Pricing</span>
                  </Link>
                </nav>

                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <Button variant="ghost" asChild>
                    <Link href="/auth/signin" onClick={() => setIsOpen(false)}>
                      Sign In
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href="/auth/signup" onClick={() => setIsOpen(false)}>
                      Get Started
                    </Link>
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