'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Trash2, History, Archive } from 'lucide-react';
import { ProcessedImage } from '@/types/image';
import { toast } from 'sonner';

interface ConversionHistoryProps {
  history: ProcessedImage[];
  onClearHistory: () => void;
}

export function ConversionHistory({ history, onClearHistory }: ConversionHistoryProps) {
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const downloadImage = (image: ProcessedImage) => {
    try {
      const link = document.createElement('a');
      link.href = image.downloadUrl;
      link.download = `${image.originalFile.name.split('.')[0]}.${image.convertedFormat}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success('Image downloaded!');
    } catch (error) {
      toast.error('Download failed - image may no longer be available');
    }
  };

  if (history.length === 0) return null;

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <History className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-800">Recent Conversions</h2>
        </div>
        
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onClearHistory}
          className="text-red-600 hover:text-red-700"
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Clear History
        </Button>
      </div>

      <div className="space-y-2 max-h-60 overflow-y-auto">
        {history.slice(0, 10).map((image) => (
          <div
            key={`${image.id}-${image.timestamp}`}
            className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <img
                src={image.dataUrl}
                alt="Thumbnail"
                className="w-10 h-10 object-cover rounded border"
              />
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-sm text-gray-700 truncate max-w-[150px]">
                    {image.originalFile.name}
                  </span>
                  <Badge variant="outline" className="text-xs">
                    {image.originalFormat.toUpperCase()} → {image.convertedFormat.toUpperCase()}
                  </Badge>
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <span>{formatFileSize(image.compressedSize)}</span>
                  <span>•</span>
                  <span>{formatDate(image.timestamp)}</span>
                </div>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => downloadImage(image)}
              className="text-blue-600 hover:text-blue-700"
            >
              <Download className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
      
      {history.length > 10 && (
        <p className="text-sm text-gray-500 text-center">
          Showing 10 of {history.length} recent conversions
        </p>
      )}
    </div>
  );
}