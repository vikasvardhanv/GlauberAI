'use client';

import { Button } from '@/components/ui/button';
import { 
  MessageSquare, 
  Key, 
  FileText, 
  Settings 
} from 'lucide-react';
import Link from 'next/link';

export function QuickActions() {
  const actions = [
    {
      label: 'New Query',
      href: '/dashboard/query',
      icon: MessageSquare,
      variant: 'default' as const
    },
    {
      label: 'API Keys',
      href: '/dashboard/api',
      icon: Key,
      variant: 'outline' as const
    },
    {
      label: 'Docs',
      href: '/docs',
      icon: FileText,
      variant: 'outline' as const
    },
    {
      label: 'Settings',
      href: '/dashboard/settings',
      icon: Settings,
      variant: 'outline' as const
    }
  ];

  return (
    <div className="flex items-center space-x-2">
      {actions.map((action) => (
        <Button
          key={action.label}
          variant={action.variant}
          size="sm"
          asChild
        >
          <Link href={action.href} className="flex items-center space-x-2">
            <action.icon className="h-4 w-4" />
            <span className="hidden sm:inline">{action.label}</span>
          </Link>
        </Button>
      ))}
    </div>
  );
}