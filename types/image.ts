export interface ProcessedImage {
  id: string;
  originalFile: File;
  originalFormat: string;
  convertedFormat: string;
  originalSize: number;
  compressedSize: number;
  compressionLevel: 'low' | 'medium' | 'high';
  dataUrl: string;
  downloadUrl: string;
  timestamp: number;
}

export interface ConversionSettings {
  format: string;
  quality: number;
  compressionLevel: 'low' | 'medium' | 'high';
}

export const SUPPORTED_FORMATS = [
  { value: 'jpeg', label: 'JPG/JPEG', mimeType: 'image/jpeg' },
  { value: 'png', label: 'PNG', mimeType: 'image/png' },
  { value: 'webp', label: 'WEBP', mimeType: 'image/webp' },
  { value: 'gif', label: 'GIF', mimeType: 'image/gif' },
  { value: 'bmp', label: 'BMP', mimeType: 'image/bmp' },
  { value: 'tiff', label: 'TIFF', mimeType: 'image/tiff' },
  { value: 'pdf', label: 'PDF', mimeType: 'application/pdf' },
];

export const COMPRESSION_LEVELS = {
  low: { quality: 0.9, label: 'Low (High Quality)' },
  medium: { quality: 0.7, label: 'Medium (Balanced)' },
  high: { quality: 0.5, label: 'High (Small Size)' },
};