'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  DollarSign, 
  Zap,
  ExternalLink
} from 'lucide-react';

export function RecentQueries() {
  const queries = [
    {
      id: '1',
      query: 'Write a Python function to calculate fibonacci numbers',
      model: 'GPT-4 Turbo',
      timestamp: '2 minutes ago',
      cost: 0.0234,
      tokens: 156,
      status: 'completed'
    },
    {
      id: '2',
      query: 'Explain quantum computing in simple terms',
      model: 'Claude 3 Sonnet',
      timestamp: '5 minutes ago',
      cost: 0.0189,
      tokens: 234,
      status: 'completed'
    },
    {
      id: '3',
      query: 'Create a marketing email for a new product launch',
      model: 'Claude 3 Sonnet',
      timestamp: '12 minutes ago',
      cost: 0.0156,
      tokens: 189,
      status: 'completed'
    },
    {
      id: '4',
      query: 'Debug this JavaScript code and fix the errors',
      model: 'GPT-3.5 Turbo',
      timestamp: '18 minutes ago',
      cost: 0.0089,
      tokens: 98,
      status: 'completed'
    },
    {
      id: '5',
      query: 'Analyze the pros and cons of remote work',
      model: 'Gemini Pro',
      timestamp: '25 minutes ago',
      cost: 0.0134,
      tokens: 167,
      status: 'completed'
    }
  ];

  const getModelColor = (model: string) => {
    if (model.includes('GPT-4')) return 'bg-blue-500/10 text-blue-500';
    if (model.includes('Claude')) return 'bg-purple-500/10 text-purple-500';
    if (model.includes('GPT-3.5')) return 'bg-green-500/10 text-green-500';
    if (model.includes('Gemini')) return 'bg-orange-500/10 text-orange-500';
    return 'bg-gray-500/10 text-gray-500';
  };

  return (
    <div className="space-y-4">
      {queries.map((query) => (
        <div key={query.id} className="flex items-start space-x-4 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
          <div className="flex-1 space-y-2">
            <div className="flex items-start justify-between">
              <p className="text-sm font-medium line-clamp-2 flex-1 mr-4">
                {query.query}
              </p>
              <Button variant="ghost" size="sm" className="flex-shrink-0">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{query.timestamp}</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <DollarSign className="h-3 w-3" />
                <span>${query.cost.toFixed(4)}</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <Zap className="h-3 w-3" />
                <span>{query.tokens} tokens</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end space-y-2">
            <Badge variant="secondary" className={getModelColor(query.model)}>
              {query.model}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {query.status}
            </Badge>
          </div>
        </div>
      ))}
      
      <div className="text-center pt-4">
        <Button variant="outline" size="sm">
          View All Queries
        </Button>
      </div>
    </div>
  );
}