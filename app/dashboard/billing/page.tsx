import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function BillingPage() {
  // In a real app, fetch billing info from API or context
  const plan = 'Starter';
  const usage = { requests: 120, limit: 1000, cost: 12.34 };
  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto py-10">
        <Card>
          <CardHeader>
            <CardTitle>Billing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Current Plan</span>
                <Badge variant="secondary">{plan}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Requests Used</span>
                <span>{usage.requests} / {usage.limit}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>This Month's Cost</span>
                <span>${usage.cost.toFixed(2)}</span>
              </div>
              <div className="pt-6 text-muted-foreground text-sm">
                Payment methods and invoices coming soon.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
} 