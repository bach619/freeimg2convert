import imageCompression from 'browser-image-compression';
import { jsPDF } from 'jspdf';
import { ProcessedImage, ConversionSettings } from '@/types/image';

export async function convertImages(
  files: File[],
  settings: ConversionSettings,
  onProgress?: (progress: number) => void
): Promise<ProcessedImage[]> {
  const processedImages: ProcessedImage[] = [];
  const totalFiles = files.length;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    
    try {
      const processedImage = await convertSingleImage(file, settings);
      processedImages.push(processedImage);
      
      if (onProgress) {
        onProgress(((i + 1) / totalFiles) * 100);
      }
    } catch (error) {
      console.error(`Failed to convert ${file.name}:`, error);
      // Continue with other files even if one fails
    }
  }

  return processedImages;
}

async function convertSingleImage(
  file: File,
  settings: ConversionSettings
): Promise<ProcessedImage> {
  const originalFormat = file.type.split('/')[1] || 'unknown';
  
  // Special handling for PDF conversion
  if (settings.format === 'pdf') {
    return await convertToPDF(file, settings);
  }

  // Create canvas for regular image conversion
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not get canvas context');

  // Load image
  const img = new Image();
  await new Promise<void>((resolve, reject) => {
    img.onload = () => resolve();
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = URL.createObjectURL(file);
  });

  // Set canvas dimensions
  canvas.width = img.width;
  canvas.height = img.height;

  // Draw image to canvas
  ctx.drawImage(img, 0, 0);

  // Convert to desired format
  const mimeType = `image/${settings.format}`;
  const quality = settings.format === 'png' ? undefined : settings.quality;
  
  return new Promise<ProcessedImage>((resolve, reject) => {
    canvas.toBlob(async (blob) => {
      if (!blob) {
        reject(new Error('Failed to convert image'));
        return;
      }

      try {
        // Apply compression
        const compressedBlob = await applyCompression(blob, settings);
        
        // Create download URL
        const downloadUrl = URL.createObjectURL(compressedBlob);
        
        // Create data URL for preview
        const reader = new FileReader();
        reader.onload = () => {
          const processedImage: ProcessedImage = {
            id: generateId(),
            originalFile: file,
            originalFormat,
            convertedFormat: settings.format,
            originalSize: file.size,
            compressedSize: compressedBlob.size,
            compressionLevel: settings.compressionLevel,
            dataUrl: reader.result as string,
            downloadUrl,
            timestamp: Date.now()
          };
          
          resolve(processedImage);
        };
        reader.onerror = () => reject(new Error('Failed to read converted image'));
        reader.readAsDataURL(compressedBlob);
        
      } catch (error) {
        reject(error);
      }
    }, mimeType, quality);
  });
}

async function convertToPDF(
  file: File,
  settings: ConversionSettings
): Promise<ProcessedImage> {
  const originalFormat = file.type.split('/')[1] || 'unknown';
  
  // Create canvas to get image dimensions and data
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not get canvas context');

  // Load image
  const img = new Image();
  await new Promise<void>((resolve, reject) => {
    img.onload = () => resolve();
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = URL.createObjectURL(file);
  });

  // Set canvas dimensions
  canvas.width = img.width;
  canvas.height = img.height;

  // Draw image to canvas
  ctx.drawImage(img, 0, 0);

  // Get image data as base64
  const imageData = canvas.toDataURL('image/jpeg', settings.quality);

  // Create PDF
  const pdf = new jsPDF({
    orientation: img.width > img.height ? 'landscape' : 'portrait',
    unit: 'px',
    format: [img.width, img.height]
  });

  // Add image to PDF
  pdf.addImage(imageData, 'JPEG', 0, 0, img.width, img.height);

  // Get PDF as blob
  const pdfBlob = pdf.output('blob');

  // Create download URL
  const downloadUrl = URL.createObjectURL(pdfBlob);

  // Create a preview image (first page of PDF as image)
  const previewDataUrl = imageData;

  const processedImage: ProcessedImage = {
    id: generateId(),
    originalFile: file,
    originalFormat,
    convertedFormat: 'pdf',
    originalSize: file.size,
    compressedSize: pdfBlob.size,
    compressionLevel: settings.compressionLevel,
    dataUrl: previewDataUrl,
    downloadUrl,
    timestamp: Date.now()
  };

  return processedImage;
}

async function applyCompression(blob: Blob, settings: ConversionSettings): Promise<Blob> {
  // Skip compression for PDF files as they're handled differently
  if (settings.format === 'pdf') {
    return blob;
  }

  const compressionOptions = {
    maxSizeMB: getMaxSizeMB(settings.compressionLevel),
    maxWidthOrHeight: getMaxDimensions(settings.compressionLevel),
    useWebWorker: true,
    fileType: `image/${settings.format}` as any,
    initialQuality: settings.quality
  };

  try {
    // Convert Blob to File for browser-image-compression
    const file = new File([blob], 'temp', { type: blob.type });
    const compressedFile = await imageCompression(file, compressionOptions);
    return compressedFile;
  } catch (error) {
    console.warn('Compression failed, returning original:', error);
    return blob;
  }
}

function getMaxSizeMB(level: 'low' | 'medium' | 'high'): number {
  switch (level) {
    case 'low': return 5;
    case 'medium': return 2;
    case 'high': return 0.5;
    default: return 2;
  }
}

function getMaxDimensions(level: 'low' | 'medium' | 'high'): number {
  switch (level) {
    case 'low': return 4096;
    case 'medium': return 2048;
    case 'high': return 1024;
    default: return 2048;
  }
}

function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}