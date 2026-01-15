import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { uploadBlogVideo } from '@/lib/storage';
import { X, Loader2, Video, Play } from 'lucide-react';

interface VideoUploadProps {
  value: string;
  onChange: (url: string) => void;
}

const VideoUpload = ({ value, onChange }: VideoUploadProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('video/')) {
      setError('Please select a video file');
      return;
    }

    // Validate file size (max 50MB)
    // Note: the backend bucket currently rejects larger files (413 Payload too large).
    if (file.size > 50 * 1024 * 1024) {
      setError('Video must be less than 50MB');
      return;
    }

    setError(null);
    setIsUploading(true);
    setUploadProgress(0);

    try {
      // Simulate progress for better UX
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => Math.min(prev + 10, 90));
      }, 500);

      const url = await uploadBlogVideo(file);
      
      clearInterval(progressInterval);
      setUploadProgress(100);
      onChange(url);
    } catch (err: any) {
      setError(err.message || 'Upload failed');
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemove = () => {
    onChange('');
    setError(null);
  };

  const isYouTubeUrl = (url: string) => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  const getYouTubeEmbedUrl = (url: string) => {
    // Supports: watch?v=, youtu.be/, embed/, shorts/, live/
    const videoId = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/|youtube\.com\/live\/)([^&\s?/]+)/
    )?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium block">Video (Optional)</label>
      
      {/* Preview */}
      {value && (
        <div className="relative rounded-xl overflow-hidden border border-border bg-black">
          {isYouTubeUrl(value) ? (
            <iframe
              src={getYouTubeEmbedUrl(value) || ''}
              className="w-full aspect-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video 
              src={value} 
              controls
              className="w-full aspect-video object-contain"
            />
          )}
          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2"
            onClick={handleRemove}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* Upload Area */}
      {!value && (
        <div 
          className="border-2 border-dashed border-border rounded-xl p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
          onClick={() => fileInputRef.current?.click()}
        >
          {isUploading ? (
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
              <div className="w-full max-w-xs">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2">Uploading... {uploadProgress}%</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-muted rounded-full">
                <Video className="w-6 h-6 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium">Click to upload video</p>
              <p className="text-xs text-muted-foreground">MP4, WebM, MOV up to 50MB</p>
            </div>
          )}
        </div>
      )}

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Manual URL Input */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Play className="w-3 h-3" />
        <span>or paste YouTube/video URL:</span>
      </div>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="https://youtube.com/watch?v=... or video URL"
        disabled={isUploading}
      />

      {/* Error */}
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  );
};

export default VideoUpload;
