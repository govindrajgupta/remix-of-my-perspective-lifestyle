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

// Admin hook to fetch ALL comments (including unapproved)
export const useAllComments = () => {
  const [comments, setComments] = useState<(BlogComment & { post_title?: string })[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAllComments = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('blog_comments')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      // Fetch post titles for each comment
      const postIds = [...new Set((data || []).map(c => c.post_id))];
      const { data: posts } = await supabase
        .from('blog_posts')
        .select('id, title')
        .in('id', postIds);
      
      const postMap = new Map(posts?.map(p => [p.id, p.title]) || []);
      
      const commentsWithTitles = (data || []).map(comment => ({
        ...comment,
        post_title: postMap.get(comment.post_id) || 'Unknown Post'
      }));
      
      setComments(commentsWithTitles);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllComments();
  }, []);

  return { comments, loading, error, refetch: fetchAllComments };
};

export const addComment = async (comment: Omit<BlogComment, 'id' | 'created_at' | 'approved'>) => {
  const { data, error } = await supabase
    .from('blog_comments')
    .insert([{ ...comment, approved: false }]) // Comments require approval
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const approveComment = async (commentId: string) => {
  const { error } = await supabase
    .from('blog_comments')
    .update({ approved: true })
    .eq('id', commentId);

  if (error) throw error;
};

export const rejectComment = async (commentId: string) => {
  const { error } = await supabase
    .from('blog_comments')
    .delete()
    .eq('id', commentId);

  if (error) throw error;
};
