'use client';

import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export function ModelPerformance() {
  const models = [
    {
      name: 'GPT-4 Turbo',
      usage: 45,
      avgCost: 0.0234,
      avgTime: 1200,
      successRate: 99.8,
      color: 'bg-blue-500'
    },
    {
      name: 'Claude 3 Sonnet',
      usage: 32,
      avgCost: 0.0189,
      avgTime: 980,
      successRate: 99.9,
      color: 'bg-purple-500'
    },
    {
      name: 'GPT-3.5 Turbo',
      usage: 15,
      avgCost: 0.0089,
      avgTime: 650,
      successRate: 99.5,
      color: 'bg-green-500'
    },
    {
      name: 'Gemini Pro',
      usage: 8,
      avgCost: 0.0134,
      avgTime: 890,
      successRate: 99.2,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="space-y-6">
      {models.map((model) => (
        <div key={model.name} className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${model.color}`} />
              <span className="font-medium">{model.name}</span>
            </div>
            <Badge variant="secondary">{model.usage}% usage</Badge>
          </div>
          
          <Progress value={model.usage} className="h-2" />
          
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <div className="text-muted-foreground">Avg Cost</div>
              <div className="font-medium">${model.avgCost.toFixed(4)}</div>
            </div>
            <div>
              <div className="text-muted-foreground">Avg Time</div>
              <div className="font-medium">{model.avgTime}ms</div>
            </div>
            <div>
              <div className="text-muted-foreground">Success Rate</div>
              <div className="font-medium">{model.successRate}%</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}