import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eedfgtfdccvqyxhivrhk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlZGZndGZkY2N2cXl4aGl2cmhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxNDk4OTQsImV4cCI6MjA4MzcyNTg5NH0.EHvbEEsSU0g_SAnhqVcWKi227QZwz4Q88lj4bhqgHeI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for Blog
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  featured_image: string | null;
  video_url?: string | null;
  category?: string;
  views: number;
  author: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface BlogComment {
  id: string;
  post_id: string;
  author_name: string;
  author_email: string;
  content: string;
  created_at: string;
  approved: boolean;
}
