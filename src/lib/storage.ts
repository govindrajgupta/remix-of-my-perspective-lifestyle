import { supabase } from './supabase';

const IMAGE_BUCKET = 'blog-images';
const VIDEO_BUCKET = 'blog-videos';

export const uploadBlogImage = async (file: File): Promise<string> => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
  const filePath = `featured/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from(IMAGE_BUCKET)
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (uploadError) {
    throw new Error(`Upload failed: ${uploadError.message}`);
  }

  const { data } = supabase.storage
    .from(IMAGE_BUCKET)
    .getPublicUrl(filePath);

  return data.publicUrl;
};

export const uploadBlogVideo = async (file: File): Promise<string> => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
  const filePath = `videos/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from(VIDEO_BUCKET)
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (uploadError) {
    throw new Error(`Video upload failed: ${uploadError.message}`);
  }

  const { data } = supabase.storage
    .from(VIDEO_BUCKET)
    .getPublicUrl(filePath);

  return data.publicUrl;
};

export const deleteBlogImage = async (imageUrl: string): Promise<void> => {
  const urlParts = imageUrl.split(`${IMAGE_BUCKET}/`);
  if (urlParts.length < 2) return;
  
  const filePath = urlParts[1];
  
  const { error } = await supabase.storage
    .from(IMAGE_BUCKET)
    .remove([filePath]);

  if (error) {
    console.error('Failed to delete image:', error.message);
  }
};

export const deleteBlogVideo = async (videoUrl: string): Promise<void> => {
  const urlParts = videoUrl.split(`${VIDEO_BUCKET}/`);
  if (urlParts.length < 2) return;
  
  const filePath = urlParts[1];
  
  const { error } = await supabase.storage
    .from(VIDEO_BUCKET)
    .remove([filePath]);

  if (error) {
    console.error('Failed to delete video:', error.message);
  }
};
