// AI Model Routing Logic
export interface RoutingRule {
  id: string;
  name: string;
  conditions: {
    keywords?: string[];
    queryLength?: { min?: number; max?: number };
    domain?: string[];
    complexity?: 'simple' | 'medium' | 'complex';
  };
  targetModel: string;
  priority: number;
}

export interface ModelConfig {
  id: string;
  name: string;
  provider: 'openai' | 'anthropic' | 'google' | 'cohere';
  modelId: string;
  costPer1kInput: number;
  costPer1kOutput: number;
  maxTokens: number;
  supportsStreaming: boolean;
  strengths: string[];
}

export const DEFAULT_MODELS: ModelConfig[] = [
  {
    id: 'gpt-4-turbo',
    name: 'GPT-4 Turbo',
    provider: 'openai',
    modelId: 'gpt-4-turbo-preview',
    costPer1kInput: 0.01,
    costPer1kOutput: 0.03,
    maxTokens: 128000,
    supportsStreaming: true,
    strengths: ['complex reasoning', 'code generation', 'analysis']
  },
  {
    id: 'gpt-3.5-turbo',
    name: 'GPT-3.5 Turbo',
    provider: 'openai',
    modelId: 'gpt-3.5-turbo',
    costPer1kInput: 0.0005,
    costPer1kOutput: 0.0015,
    maxTokens: 16385,
    supportsStreaming: true,
    strengths: ['general queries', 'simple tasks', 'fast responses']
  },
  {
    id: 'claude-3-sonnet',
    name: 'Claude 3 Sonnet',
    provider: 'anthropic',
    modelId: 'claude-3-sonnet-20240229',
    costPer1kInput: 0.003,
    costPer1kOutput: 0.015,
    maxTokens: 200000,
    supportsStreaming: true,
    strengths: ['creative writing', 'analysis', 'safety']
  },
  {
    id: 'claude-3-haiku',
    name: 'Claude 3 Haiku',
    provider: 'anthropic',
    modelId: 'claude-3-haiku-20240307',
    costPer1kInput: 0.00025,
    costPer1kOutput: 0.00125,
    maxTokens: 200000,
    supportsStreaming: true,
    strengths: ['simple tasks', 'fast responses', 'cost-effective']
  },
  {
    id: 'gemini-pro',
    name: 'Gemini Pro',
    provider: 'google',
    modelId: 'gemini-pro',
    costPer1kInput: 0.0005,
    costPer1kOutput: 0.0015,
    maxTokens: 32768,
    supportsStreaming: true,
    strengths: ['multimodal', 'reasoning', 'code']
  }
];

export const ROUTING_RULES: RoutingRule[] = [
  {
    id: 'coding-complex',
    name: 'Complex Coding Tasks',
    conditions: {
      keywords: ['function', 'class', 'algorithm', 'debug', 'refactor', 'optimize'],
      queryLength: { min: 100 },
      complexity: 'complex'
    },
    targetModel: 'gpt-4-turbo',
    priority: 10
  },
  {
    id: 'coding-simple',
    name: 'Simple Coding Tasks',
    conditions: {
      keywords: ['code', 'function', 'javascript', 'python', 'html', 'css'],
      queryLength: { max: 100 },
      complexity: 'simple'
    },
    targetModel: 'gpt-3.5-turbo',
    priority: 5
  },
  {
    id: 'creative-writing',
    name: 'Creative Writing',
    conditions: {
      keywords: ['write', 'story', 'creative', 'poem', 'article', 'blog', 'content'],
      complexity: 'medium'
    },
    targetModel: 'claude-3-sonnet',
    priority: 8
  },
  {
    id: 'analysis-long',
    name: 'Long Document Analysis',
    conditions: {
      keywords: ['analyze', 'review', 'summarize', 'explain'],
      queryLength: { min: 500 }
    },
    targetModel: 'claude-3-sonnet',
    priority: 9
  },
  {
    id: 'simple-queries',
    name: 'Simple Queries',
    conditions: {
      queryLength: { max: 50 },
      complexity: 'simple'
    },
    targetModel: 'claude-3-haiku',
    priority: 1
  }
];

export class AIRouter {
  private models: ModelConfig[];
  private rules: RoutingRule[];

  constructor(models = DEFAULT_MODELS, rules = ROUTING_RULES) {
    this.models = models;
    this.rules = rules.sort((a, b) => b.priority - a.priority);
  }

  analyzeQuery(query: string): {
    complexity: 'simple' | 'medium' | 'complex';
    keywords: string[];
    length: number;
    estimatedTokens: number;
  } {
    const length = query.length;
    const words = query.toLowerCase().split(/\s+/);
    const estimatedTokens = Math.ceil(words.length * 1.3); // rough token estimation

    // Extract keywords
    const keywords = words.filter(word => 
      word.length > 3 && 
      !['that', 'this', 'with', 'from', 'they', 'were', 'been', 'have', 'their', 'said', 'each', 'which', 'what', 'when', 'where', 'will', 'more', 'very', 'what', 'know', 'just', 'first', 'into', 'over', 'think', 'also', 'make', 'time', 'only', 'work', 'life', 'after', 'before'].includes(word)
    );

    // Determine complexity
    let complexity: 'simple' | 'medium' | 'complex' = 'simple';
    
    if (length > 500 || words.length > 100) {
      complexity = 'complex';
    } else if (length > 100 || words.length > 20) {
      complexity = 'medium';
    }

    return {
      complexity,
      keywords,
      length,
      estimatedTokens
    };
  }

  routeQuery(query: string, userPreference?: string): {
    selectedModel: ModelConfig;
    reasoning: string;
    estimatedCost: number;
  } {
    const analysis = this.analyzeQuery(query);

    // If user has a preference, use it (if valid)
    if (userPreference && userPreference !== 'auto') {
      const preferredModel = this.models.find(m => m.id === userPreference);
      if (preferredModel) {
        return {
          selectedModel: preferredModel,
          reasoning: 'User preference',
          estimatedCost: this.calculateCost(preferredModel, analysis.estimatedTokens)
        };
      }
    }

    // Apply routing rules
    for (const rule of this.rules) {
      if (this.matchesRule(rule, analysis)) {
        const model = this.models.find(m => m.id === rule.targetModel);
        if (model) {
          return {
            selectedModel: model,
            reasoning: `Matched rule: ${rule.name}`,
            estimatedCost: this.calculateCost(model, analysis.estimatedTokens)
          };
        }
      }
    }

    // Default fallback
    const defaultModel = this.models.find(m => m.id === 'gpt-3.5-turbo') || this.models[0];
    return {
      selectedModel: defaultModel,
      reasoning: 'Default fallback',
      estimatedCost: this.calculateCost(defaultModel, analysis.estimatedTokens)
    };
  }

  private matchesRule(rule: RoutingRule, analysis: any): boolean {
    const { conditions } = rule;

    // Check keywords
    if (conditions.keywords) {
      const hasKeyword = conditions.keywords.some(keyword =>
        analysis.keywords.some((queryKeyword: string) =>
          queryKeyword.includes(keyword.toLowerCase()) ||
          keyword.toLowerCase().includes(queryKeyword)
        )
      );
      if (!hasKeyword) return false;
    }

    // Check query length
    if (conditions.queryLength) {
      if (conditions.queryLength.min && analysis.length < conditions.queryLength.min) {
        return false;
      }
      if (conditions.queryLength.max && analysis.length > conditions.queryLength.max) {
        return false;
      }
    }

    // Check complexity
    if (conditions.complexity && conditions.complexity !== analysis.complexity) {
      return false;
    }

    return true;
  }

  private calculateCost(model: ModelConfig, estimatedTokens: number): number {
    // Assume roughly equal input/output tokens for estimation
    const inputTokens = estimatedTokens;
    const outputTokens = estimatedTokens * 0.5; // Assume output is half of input
    
    const inputCost = (inputTokens / 1000) * model.costPer1kInput;
    const outputCost = (outputTokens / 1000) * model.costPer1kOutput;
    
    return inputCost + outputCost;
  }

  getAvailableModels(): ModelConfig[] {
    return this.models;
  }

  getRoutingRules(): RoutingRule[] {
    return this.rules;
  }
}

export const aiRouter = new AIRouter();