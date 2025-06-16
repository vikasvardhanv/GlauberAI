import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
export interface Profile {
  id: string;
  email: string;
  full_name?: string;
  api_key?: string;
  plan: 'free' | 'pro' | 'enterprise';
  created_at: string;
  updated_at: string;
}

export interface AIModel {
  id: string;
  name: string;
  provider: string;
  model_id: string;
  cost_per_1k_input: number;
  cost_per_1k_output: number;
  max_tokens: number;
  supports_streaming: boolean;
  is_active: boolean;
  created_at: string;
}

export interface Request {
  id: string;
  user_id: string;
  query: string;
  response?: string;
  model_used?: string;
  input_tokens?: number;
  output_tokens?: number;
  cost?: number;
  processing_time?: number;
  was_cached: boolean;
  created_at: string;
}

export interface Subscription {
  id: string;
  user_id: string;
  stripe_subscription_id?: string;
  plan: string;
  status: string;
  current_period_start?: string;
  current_period_end?: string;
  created_at: string;
}

export interface UsageStats {
  id: string;
  user_id: string;
  date: string;
  requests_count: number;
  tokens_used: number;
  cost_incurred: number;
}