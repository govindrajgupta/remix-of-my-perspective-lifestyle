import { useState, useRef, useCallback } from 'react';
import Cropper, { Area } from 'react-easy-crop';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { uploadBlogImage } from '@/lib/storage';
import { X, Loader2, Image as ImageIcon, Crop, ZoomIn, ZoomOut } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Slider } from '@/components/ui/slider';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
}

type AspectOption = 'landscape' | 'portrait' | 'square';

const ASPECT_RATIOS: Record<AspectOption, { ratio: number; label: string; dimensions: string }> = {
  landscape: { ratio: 16 / 9, label: 'Landscape', dimensions: '16:9' },
  portrait: { ratio: 3 / 4, label: 'Portrait', dimensions: '3:4' },
  square: { ratio: 1, label: 'Square', dimensions: '1:1' },
};

// Helper to create cropped image
const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.crossOrigin = 'anonymous';
    image.src = url;
  });

const getCroppedImg = async (
  imageSrc: string,
  pixelCrop: Area,
  fileName: string = 'cropped.jpg'
): Promise<File> => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('No 2d context');
  }

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error('Canvas is empty'));
          return;
        }
        const file = new File([blob], fileName, { type: 'image/jpeg' });
        resolve(file);
      },
      'image/jpeg',
      0.9
    );
  });
};

const ImageUpload = ({ value, onChange }: ImageUploadProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Cropper state
  const [showCropper, setShowCropper] = useState(false);
  const [imageToCrop, setImageToCrop] = useState<string | null>(null);
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [aspectOption, setAspectOption] = useState<AspectOption>('landscape');

  const onCropComplete = useCallback((_croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }

    // Validate file size (max 10MB for cropping, final will be smaller)
    if (file.size > 10 * 1024 * 1024) {
      setError('Image must be less than 10MB');
      return;
    }

    setError(null);
    setOriginalFile(file);

    // Create preview URL and open cropper
    const previewUrl = URL.createObjectURL(file);
    setImageToCrop(previewUrl);
    setShowCropper(true);
    setCrop({ x: 0, y: 0 });
    setZoom(1);

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleCropConfirm = async () => {
    if (!imageToCrop || !croppedAreaPixels || !originalFile) return;

    setShowCropper(false);
    setIsUploading(true);

    try {
      const croppedFile = await getCroppedImg(
        imageToCrop,
        croppedAreaPixels,
        `cropped-${originalFile.name}`
      );
      const url = await uploadBlogImage(croppedFile);
      onChange(url);
    } catch (err: any) {
      setError(err.message || 'Crop/upload failed');
    } finally {
      setIsUploading(false);
      // Cleanup
      if (imageToCrop) {
        URL.revokeObjectURL(imageToCrop);
      }
      setImageToCrop(null);
      setOriginalFile(null);
    }
  };

  const handleCropCancel = () => {
    setShowCropper(false);
    if (imageToCrop) {
      URL.revokeObjectURL(imageToCrop);
    }
    setImageToCrop(null);
    setOriginalFile(null);
  };

  const handleRemove = () => {
    onChange('');
    setError(null);
  };

  const currentAspect = ASPECT_RATIOS[aspectOption];

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium block">Featured Image</label>

      {/* Preview */}
      {value && (
        <div className="relative rounded-xl overflow-hidden border border-border">
          <img
            src={value}
            alt="Featured preview"
            className="w-full h-48 object-cover"
          />
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
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Uploading...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-muted rounded-full">
                <ImageIcon className="w-6 h-6 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium">Click to upload image</p>
              <p className="text-xs text-muted-foreground">PNG, JPG, WebP up to 10MB • Crop to fit</p>
            </div>
          )}
        </div>
      )}

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Manual URL Input */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <span>or enter URL:</span>
      </div>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="https://example.com/image.jpg"
        disabled={isUploading}
      />

      {/* Error */}
      {error && <p className="text-sm text-destructive">{error}</p>}

      {/* Cropper Dialog */}
      <Dialog open={showCropper} onOpenChange={(open) => !open && handleCropCancel()}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Crop className="w-5 h-5" />
              Crop Image
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {/* Aspect Ratio Selection */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Layout Style</label>
              <ToggleGroup
                type="single"
                value={aspectOption}
                onValueChange={(val) => val && setAspectOption(val as AspectOption)}
                className="justify-start"
              >
                {(Object.keys(ASPECT_RATIOS) as AspectOption[]).map((key) => (
                  <ToggleGroupItem
                    key={key}
                    value={key}
                    className="px-4 py-2 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                  >
                    <span className="text-sm">{ASPECT_RATIOS[key].label}</span>
                    <span className="text-xs text-muted-foreground ml-1">
                      ({ASPECT_RATIOS[key].dimensions})
                    </span>
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>

            {/* Cropper Area */}
            <div className="relative w-full h-80 bg-muted rounded-lg overflow-hidden">
              {imageToCrop && (
                <Cropper
                  image={imageToCrop}
                  crop={crop}
                  zoom={zoom}
                  aspect={currentAspect.ratio}
                  onCropChange={setCrop}
                  onCropComplete={onCropComplete}
                  onZoomChange={setZoom}
                  classes={{
                    containerClassName: 'rounded-lg',
                  }}
                />
              )}
            </div>

            {/* Zoom Control */}
            <div className="flex items-center gap-4">
              <ZoomOut className="w-4 h-4 text-muted-foreground" />
              <Slider
                value={[zoom]}
                min={1}
                max={3}
                step={0.1}
                onValueChange={(vals) => setZoom(vals[0])}
                className="flex-1"
              />
              <ZoomIn className="w-4 h-4 text-muted-foreground" />
            </div>

            {/* Preview Label */}
            <p className="text-xs text-muted-foreground text-center">
              Preview: {currentAspect.label} ({currentAspect.dimensions}) - Drag to reposition
            </p>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={handleCropCancel}>
              Cancel
            </Button>
            <Button onClick={handleCropConfirm} disabled={!croppedAreaPixels}>
              Apply Crop & Upload
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImageUpload;
