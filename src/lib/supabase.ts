import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sqkesjlpvnzskmxloitn.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxa2Vzamxwdm56c2tteGxvaXRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxNDgzNjgsImV4cCI6MjA4MzcyNDM2OH0.CTvzj-pof1qLAV1eoO3Z3BrHgO1TUxQqpfU7zck3U_s';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for Blog
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  featured_image: string | null;
  author: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}
