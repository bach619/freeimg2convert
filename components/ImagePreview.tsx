'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Download, Archive, Eye, Share2, Facebook, Twitter, Linkedin, MessageCircle, Send, Mail, Copy, ExternalLink } from 'lucide-react';
import { ProcessedImage } from '@/types/image';
import { downloadAsZip } from '@/lib/downloadUtils';
import { toast } from 'sonner';

interface ImagePreviewProps {
  images: ProcessedImage[];
}

export function ImagePreview({ images }: ImagePreviewProps) {
  const [selectedImage, setSelectedImage] = useState<ProcessedImage | null>(null);
  const [shareDialogOpen, setShareDialogOpen] = useState<string | null>(null);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const calculateSavings = (original: number, compressed: number) => {
    const savings = ((original - compressed) / original) * 100;
    return savings > 0 ? savings.toFixed(1) : '0';
  };

  const downloadImage = (image: ProcessedImage) => {
    const link = document.createElement('a');
    link.href = image.downloadUrl;
    link.download = `${image.originalFile.name.split('.')[0]}.${image.convertedFormat}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success('Image downloaded!');
  };

  const downloadAllAsZip = async () => {
    try {
      await downloadAsZip(images);
      toast.success('ZIP file downloaded!');
    } catch (error) {
      toast.error('Failed to create ZIP file');
    }
  };

  const handleWebShare = async (image: ProcessedImage) => {
    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      try {
        const response = await fetch(image.downloadUrl);
        const blob = await response.blob();
        const file = new File([blob], `${image.originalFile.name.split('.')[0]}.${image.convertedFormat}`, {
          type: blob.type,
        });

        await navigator.share({
          title: `Converted ${image.originalFormat.toUpperCase()} to ${image.convertedFormat.toUpperCase()}`,
          text: `Check out my converted image using freeimg2convert - Free Online Image Converter!`,
          files: [file],
        });

        toast.success('Image shared successfully!');
        setShareDialogOpen(null);
      } catch (error) {
        console.error('Error sharing:', error);
        toast.error('Sharing failed. Try copying the link instead.');
      }
    } else {
      toast.error('Web Share API not supported on this device');
    }
  };

  const handleSocialShare = (platform: string, shareUrl: string, shareText: string) => {
    let url = '';

    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'whatsapp':
        url = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
        break;
      case 'telegram':
        url = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
        break;
      case 'email':
        url = `mailto:?subject=${encodeURIComponent('Check out freeimg2convert - Free Image Converter')}&body=${encodeURIComponent(shareText + '\n\n' + shareUrl)}`;
        break;
    }

    if (url) {
      if (platform === 'email') {
        window.location.href = url;
      } else {
        window.open(url, '_blank', 'width=600,height=400');
      }
      toast.success(`Sharing on ${platform.charAt(0).toUpperCase() + platform.slice(1)}!`);
      setShareDialogOpen(null);
    }
  };

  const handleCopyLink = async (url: string, type: 'image' | 'app') => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success(type === 'image' ? 'Image link copied to clipboard!' : 'App link copied to clipboard!');
      setShareDialogOpen(null);
    } catch (error) {
      toast.error('Failed to copy link');
    }
  };

  const getShareUrl = () => typeof window !== 'undefined' ? window.location.origin : 'https://freeimg2convert.fun';

  const getShareText = (image: ProcessedImage) =>
    `I just converted my ${image.originalFormat.toUpperCase()} image to ${image.convertedFormat.toUpperCase()} using freeimg2convert - Free Online Image Converter! Check it out:`;

  const ShareDialog = ({ image }: { image: ProcessedImage }) => {
    const shareUrl = getShareUrl();
    const shareText = getShareText(image);

    const socialPlatforms = [
      { name: 'facebook', label: 'Facebook', icon: Facebook, color: 'bg-blue-600 hover:bg-blue-700' },
      { name: 'twitter', label: 'Twitter', icon: Twitter, color: 'bg-sky-500 hover:bg-sky-600' },
      { name: 'linkedin', label: 'LinkedIn', icon: Linkedin, color: 'bg-blue-700 hover:bg-blue-800' },
      { name: 'whatsapp', label: 'WhatsApp', icon: MessageCircle, color: 'bg-green-600 hover:bg-green-700' },
      { name: 'telegram', label: 'Telegram', icon: Send, color: 'bg-blue-500 hover:bg-blue-600' },
      { name: 'email', label: 'Email', icon: Mail, color: 'bg-gray-600 hover:bg-gray-700' },
    ];

    return (
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Share2 className="w-5 h-5" />
            <span>Share Converted Image</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <img src={image.dataUrl} alt="Preview" className="w-12 h-12 object-cover rounded border" />
            <div>
              <p className="font-medium text-sm text-gray-700 truncate max-w-[200px]">
                {image.originalFile.name}
              </p>
              <p className="text-xs text-gray-500">
                {image.originalFormat.toUpperCase()} → {image.convertedFormat.toUpperCase()}
              </p>
            </div>
          </div>

          {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Share Image File</h4>
              <Button
                onClick={() => handleWebShare(image)}
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share via Device
              </Button>
            </div>
          )}

          <div>
            <h4 className="font-medium text-gray-700 mb-3">Share freeimg2convert App</h4>
            <div className="grid grid-cols-2 gap-2">
              {socialPlatforms.map((platform) => {
                const IconComponent = platform.icon;
                return (
                  <Button
                    key={platform.name}
                    onClick={() => handleSocialShare(platform.name, shareUrl, shareText)}
                    className={`${platform.color} text-white text-sm py-2`}
                    size="sm"
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {platform.label}
                  </Button>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-700 mb-3">Copy Links</h4>
            <div className="space-y-2">
              <Button onClick={() => handleCopyLink(image.downloadUrl, 'image')} variant="outline" className="w-full justify-start" size="sm">
                <Copy className="w-4 h-4 mr-2" />
                Copy Image Link
              </Button>
              <Button onClick={() => handleCopyLink(shareUrl, 'app')} variant="outline" className="w-full justify-start" size="sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                Copy App Link
              </Button>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <h5 className="font-medium text-blue-900 text-sm mb-1">💡 Sharing Tips</h5>
            <ul className="text-blue-800 text-xs space-y-1">
              <li>• Image links are temporary and expire after some time</li>
              <li>• Share the app link to let others use freeimg2convert</li>
              <li>• Use "Share via Device" for direct image sharing</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">
          Converted Images ({images.length})
        </h2>

        {images.length > 1 && (
          <Button onClick={downloadAllAsZip} variant="outline">
            <Archive className="w-4 h-4 mr-2" />
            Download All as ZIP
          </Button>
        )}
      </div>

      <div className="grid gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex-shrink-0">
              <img src={image.dataUrl} alt="Converted" className="w-16 h-16 object-cover rounded-lg border" />
            </div>

            <div className="flex-grow space-y-2">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-700 truncate max-w-[200px]">{image.originalFile.name}</span>
                <Badge variant="secondary">{image.originalFormat.toUpperCase()} → {image.convertedFormat.toUpperCase()}</Badge>
                <Badge
                  variant={image.compressedSize < image.originalSize ? "default" : "secondary"}
                  className={image.compressedSize < image.originalSize ? "bg-green-100 text-green-800" : ""}
                >
                  -{calculateSavings(image.originalSize, image.compressedSize)}%
                </Badge>
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>Original: {formatFileSize(image.originalSize)}</span>
                <span>→</span>
                <span>New: {formatFileSize(image.compressedSize)}</span>
                <span>•</span>
                <span>Quality: {image.compressionLevel}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={() => setSelectedImage(image)}>
                <Eye className="w-4 h-4" />
              </Button>

              <Dialog open={shareDialogOpen === image.id} onOpenChange={(open) => setShareDialogOpen(open ? image.id : null)}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </DialogTrigger>
                <ShareDialog image={image} />
              </Dialog>

              <Button variant="ghost" size="sm" onClick={() => downloadImage(image)} className="text-blue-600 hover:text-blue-700">
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
          <div className="max-w-4xl max-h-full bg-white rounded-lg overflow-hidden">
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="font-medium">{selectedImage.originalFile.name}</h3>
              <Button variant="ghost" size="sm" onClick={() => setSelectedImage(null)}>×</Button>
            </div>
            <div className="p-4">
              <img src={selectedImage.dataUrl} alt="Preview" className="max-w-full max-h-[70vh] object-contain mx-auto" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
