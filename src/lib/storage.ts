import { supabase } from './supabase';

const BUCKET_NAME = 'blog-images';

export const uploadBlogImage = async (file: File): Promise<string> => {
  // Generate unique filename
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
  const filePath = `featured/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (uploadError) {
    throw new Error(`Upload failed: ${uploadError.message}`);
  }

  // Get public URL
  const { data } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(filePath);

  return data.publicUrl;
};

export const deleteBlogImage = async (imageUrl: string): Promise<void> => {
  // Extract path from URL
  const urlParts = imageUrl.split(`${BUCKET_NAME}/`);
  if (urlParts.length < 2) return;
  
  const filePath = urlParts[1];
  
  const { error } = await supabase.storage
    .from(BUCKET_NAME)
    .remove([filePath]);

  if (error) {
    console.error('Failed to delete image:', error.message);
  }
};
