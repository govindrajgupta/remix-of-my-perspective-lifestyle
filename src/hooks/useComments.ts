import { useState, useEffect } from 'react';
import { supabase, BlogComment } from '@/lib/supabase';

export const useComments = (postId: string) => {
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('blog_comments')
        .select('*')
        .eq('post_id', postId)
        .eq('approved', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setComments(data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (postId) {
      fetchComments();
    }
  }, [postId]);

  return { comments, loading, error, refetch: fetchComments };
};

export const addComment = async (comment: Omit<BlogComment, 'id' | 'created_at' | 'approved'>) => {
  const { data, error } = await supabase
    .from('blog_comments')
    .insert([{ ...comment, approved: true }])
    .select()
    .single();

  if (error) throw error;
  return data;
};
