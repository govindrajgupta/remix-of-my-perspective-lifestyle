import { useState, useEffect } from 'react';
import { supabase, BlogPost } from '@/lib/supabase';

export const useBlogPosts = (publishedOnly: boolean = true) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      let query = supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (publishedOnly) {
        query = query.eq('published', true);
      }

      const { data, error } = await query;

      if (error) throw error;
      setPosts(data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [publishedOnly]);

  return { posts, loading, error, refetch: fetchPosts };
};

export const useBlogPost = (id: string) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('id', id)
          .maybeSingle();

        if (error) throw error;
        setPost(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  return { post, loading, error };
};

// Admin functions
export const createBlogPost = async (post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>) => {
  const removableColumns = ['video_url', 'category', 'views'] as const;
  let payload: Record<string, any> = { ...post };

  for (let attempt = 0; attempt <= removableColumns.length; attempt++) {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert([payload])
      .select()
      .single();

    if (!error) return data;

    const missingColumn = removableColumns.find(
      (col) => typeof error?.message === 'string' && error.message.includes(`Could not find the '${col}' column`)
    );

    if (missingColumn && missingColumn in payload) {
      const nextPayload = { ...payload };
      delete nextPayload[missingColumn];
      payload = nextPayload;
      continue;
    }

    throw error;
  }

  throw new Error('Failed to create blog post');
};

export const updateBlogPost = async (id: string, updates: Partial<BlogPost>) => {
  const removableColumns = ['video_url', 'category', 'views'] as const;
  let payload: Record<string, any> = { ...updates, updated_at: new Date().toISOString() };

  for (let attempt = 0; attempt <= removableColumns.length; attempt++) {
    const { data, error } = await supabase
      .from('blog_posts')
      .update(payload)
      .eq('id', id)
      .select()
      .single();

    if (!error) return data;

    const missingColumn = removableColumns.find(
      (col) => typeof error?.message === 'string' && error.message.includes(`Could not find the '${col}' column`)
    );

    if (missingColumn && missingColumn in payload) {
      const nextPayload = { ...payload };
      delete nextPayload[missingColumn];
      payload = nextPayload;
      continue;
    }

    throw error;
  }

  throw new Error('Failed to update blog post');
};

export const deleteBlogPost = async (id: string) => {
  const { error } = await supabase
    .from('blog_posts')
    .delete()
    .eq('id', id);

  if (error) throw error;
};
