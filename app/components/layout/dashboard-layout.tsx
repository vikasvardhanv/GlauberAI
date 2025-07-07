import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LogOut, User, CreditCard, LifeBuoy, BarChart3, Key } from 'lucide-react';
// Import a neural/brain icon for GlauberAI logo
import { BrainCircuit } from 'lucide-react';

const navLinks = [
  { href: '/dashboard/query', label: 'Query' },
  { href: '/dashboard/analytics', label: 'Analytics' },
  { href: '/dashboard/profile', label: 'Profile' },
  { href: '/dashboard/billing', label: 'Billing' },
  { href: '/dashboard/support', label: 'Support' },
  { href: '/dashboard', label: 'API Keys' },
];

export function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center h-16 px-6 border-b bg-background/95">
        <Link href="/dashboard" className="flex items-center gap-2 text-xl font-bold">
          <BrainCircuit className="h-7 w-7 text-primary" />
          GlauberAI
        </Link>
        <nav className="ml-10 flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-base font-medium hover:text-primary transition',
                pathname === link.href ? 'text-primary underline' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex-1 bg-muted/50">{children}</main>
    </div>
  );
} 