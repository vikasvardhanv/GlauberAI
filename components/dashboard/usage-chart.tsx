'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function UsageChart() {
  // Mock data for the chart
  const data = [
    { date: '2024-01-01', requests: 45, cost: 2.34 },
    { date: '2024-01-02', requests: 52, cost: 2.78 },
    { date: '2024-01-03', requests: 38, cost: 1.92 },
    { date: '2024-01-04', requests: 61, cost: 3.21 },
    { date: '2024-01-05', requests: 49, cost: 2.56 },
    { date: '2024-01-06', requests: 73, cost: 3.89 },
    { date: '2024-01-07', requests: 67, cost: 3.45 }
  ];

  const maxRequests = Math.max(...data.map(d => d.requests));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Last 7 Days</h3>
          <p className="text-sm text-muted-foreground">
            Request volume and cost trends
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">Requests</Badge>
          <Badge variant="secondary">Cost</Badge>
        </div>
      </div>

      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="w-16 text-xs text-muted-foreground">
              {new Date(item.date).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric' 
              })}
            </div>
            
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>{item.requests} requests</span>
                <span className="text-muted-foreground">${item.cost.toFixed(2)}</span>
              </div>
              
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(item.requests / maxRequests) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-primary">385</div>
            <div className="text-xs text-muted-foreground">Total Requests</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">$20.15</div>
            <div className="text-xs text-muted-foreground">Total Cost</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">$0.052</div>
            <div className="text-xs text-muted-foreground">Avg Cost/Request</div>
          </div>
        </div>
      </div>
    </div>
  );
}