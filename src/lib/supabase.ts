import { createClient } from '@supabase/supabase-js';

// Hardcoded fallback credentials for production
const FALLBACK_SUPABASE_URL = 'https://jjfzfktoyctxdqnzmvot.supabase.co';
const FALLBACK_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZnpma3RveWN0eGRxbnptdm90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzNDE2NDYsImV4cCI6MjA4MzkxNzY0Nn0.jAeZyfMa0t-7YMeAodQ8q-jUyHF6dBqF591ITvCaArw';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || FALLBACK_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || FALLBACK_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase credentials are missing. Please check your environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
