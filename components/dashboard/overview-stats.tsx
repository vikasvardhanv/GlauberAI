'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Zap, 
  BarChart3, 
  Clock,
  TrendingUp,
  TrendingDown,
  Brain,
  Target
} from 'lucide-react';

export function OverviewStats() {
  const stats = [
    {
      title: "Total Requests",
      value: "1,247",
      change: "+12.5%",
      trend: "up",
      icon: Zap,
      description: "This month"
    },
    {
      title: "Models Used",
      value: "8",
      change: "+2",
      trend: "up",
      icon: Brain,
      description: "Different AI models"
    },
    {
      title: "Success Rate",
      value: "99.8%",
      change: "+0.1%",
      trend: "up",
      icon: BarChart3,
      description: "Last 7 days"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {stats.map((stat) => (
        <Card key={stat.title} className="card-hover texture-paper">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground mt-1">
              <div className={`flex items-center space-x-1 ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.trend === 'up' ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                <span>{stat.change}</span>
              </div>
              <span>{stat.description}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}