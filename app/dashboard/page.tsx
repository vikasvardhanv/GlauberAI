'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { OverviewStats } from '@/components/dashboard/overview-stats';
import { UsageChart } from '@/components/dashboard/usage-chart';
import { RecentQueries } from '@/components/dashboard/recent-queries';
import { ModelPerformance } from '@/components/dashboard/model-performance';
import { QuickActions } from '@/components/dashboard/quick-actions';
import { supabase } from '@/lib/supabase';
import { 
  Zap, 
  TrendingUp, 
  DollarSign, 
  Clock,
  ArrowRight,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [usage, setUsage] = useState({
    requests: 0,
    tokens: 0,
    cost: 0,
    limit: 1000
  });

  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        router.push('/auth/signin');
        return;
      }

      setUser(user);
      // Load user usage data here
      setLoading(false);
    }

    getUser();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="spinner" />
      </div>
    );
  }

  const usagePercentage = (usage.requests / usage.limit) * 100;
  const isNearLimit = usagePercentage > 80;

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold">Welcome back!</h1>
            <p className="text-muted-foreground">
              Here's what's happening with your AI usage today.
            </p>
          </div>
          <QuickActions />
        </div>

        {/* Usage Alert */}
        {isNearLimit && (
          <Card className="border-orange-200 bg-orange-50/50 dark:border-orange-800 dark:bg-orange-950/50">
            <CardContent className="flex items-center space-x-4 pt-6">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              <div className="flex-1">
                <p className="font-medium text-orange-800 dark:text-orange-200">
                  Approaching usage limit
                </p>
                <p className="text-sm text-orange-600 dark:text-orange-300">
                  You've used {usage.requests} of {usage.limit} requests this month.
                </p>
              </div>
              <Button variant="outline" size="sm" className="border-orange-200">
                Upgrade Plan
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Stats Overview */}
        <OverviewStats />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Usage and Analytics */}
          <div className="lg:col-span-2 space-y-6">
            {/* Usage Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Usage Analytics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <UsageChart />
              </CardContent>
            </Card>

            {/* Model Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>Model Performance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ModelPerformance />
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Stats and Recent Activity */}
          <div className="space-y-6">
            {/* Current Plan */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Current Plan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="px-3 py-1">
                    Starter
                  </Badge>
                  <Button variant="outline" size="sm">
                    Upgrade
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Requests used</span>
                    <span>{usage.requests}/{usage.limit}</span>
                  </div>
                  <Progress value={usagePercentage} className="h-2" />
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>This month's cost</span>
                    <span>${usage.cost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Resets in</span>
                    <span>12 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 gap-4">
              <Card>
                <CardContent className="flex items-center space-x-4 pt-6">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">127ms</p>
                    <p className="text-sm text-muted-foreground">Avg Response Time</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center space-x-4 pt-6">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">99.8%</p>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center space-x-4 pt-6">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">$0.003</p>
                    <p className="text-sm text-muted-foreground">Cost per Request</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* API Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">API Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">All Systems</span>
                  <Badge variant="secondary" className="bg-green-500/10 text-green-500">
                    Operational
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Response Time</span>
                  <span className="text-sm text-muted-foreground">95ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Uptime</span>
                  <span className="text-sm text-muted-foreground">99.99%</span>
                </div>
                <Button variant="ghost" size="sm" className="w-full justify-between p-0 h-auto">
                  <span>View Status Page</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Queries */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Queries</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentQueries />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}