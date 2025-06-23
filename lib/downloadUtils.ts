import JSZip from 'jszip';
import { ProcessedImage } from '@/types/image';

export async function downloadAsZip(images: ProcessedImage[]): Promise<void> {
  const zip = new JSZip();
  
  for (const image of images) {
    try {
      // Fetch the blob from the download URL
      const response = await fetch(image.downloadUrl);
      const blob = await response.blob();
      
      // Generate filename
      const filename = `${image.originalFile.name.split('.')[0]}.${image.convertedFormat}`;
      
      // Add to zip
      zip.file(filename, blob);
    } catch (error) {
      console.error(`Failed to add ${image.originalFile.name} to zip:`, error);
    }
  }
  
  // Generate zip file
  const zipBlob = await zip.generateAsync({ type: 'blob' });
  
  // Download zip file
  const link = document.createElement('a');
  link.href = URL.createObjectURL(zipBlob);
  link.download = `freeimg2convert-converted-images-${Date.now()}.zip`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Clean up
  URL.revokeObjectURL(link.href);
}