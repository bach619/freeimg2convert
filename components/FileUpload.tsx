'use client';

import { useState, useCallback } from 'react';
import { Upload, Image, X, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface FileUploadProps {
  onFilesUpload: (files: File[]) => void;
  isProcessing: boolean;
}

export function FileUpload({ onFilesUpload, isProcessing }: FileUploadProps) {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [error, setError] = useState<string>('');
  const [isDragActive, setIsDragActive] = useState(false);

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    setError('');

    const files = Array.from(e.dataTransfer.files);
    processFiles(files);
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    processFiles(files);
  }, []);

  const processFiles = (files: File[]) => {
    // Filter for image files
    const imageFiles = files.filter(file => {
      const isImage = file.type.startsWith('image/');
      const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.tiff', '.avif', '.heic', '.ico', '.svg'];
      const hasValidExtension = validExtensions.some(ext => 
        file.name.toLowerCase().endsWith(ext)
      );
      return isImage || hasValidExtension;
    });

    if (imageFiles.length === 0) {
      setError('Please upload only image files (JPG, PNG, GIF, WEBP, BMP, TIFF, AVIF, HEIC, etc.).');
      return;
    }

    if (imageFiles.length > 20) {
      setError('Maximum 20 files allowed at once.');
      return;
    }

    // Check file sizes
    const oversizedFiles = imageFiles.filter(file => file.size > 50 * 1024 * 1024);
    if (oversizedFiles.length > 0) {
      setError('Some files are too large. Maximum file size is 50MB.');
      return;
    }

    setUploadedFiles(imageFiles);
    onFilesUpload(imageFiles);
  };

  const removeFile = (index: number) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
    onFilesUpload(newFiles);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-4">
      <div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`
          bg-[#F5F5F5] border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200
          ${isDragActive 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-gray-300 hover:border-gray-400'
          }
          ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        <input
          type="file"
          multiple
          accept="image/*,.jpg,.jpeg,.png,.gif,.webp,.bmp,.tiff,.avif,.heic,.ico,.svg"
          onChange={handleFileInput}
          disabled={isProcessing}
          className="hidden"
          id="file-upload"
        />
        
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center">
            <Upload className="w-8 h-8 text-blue-600" />
          </div>
          
          {isDragActive ? (
            <p className="text-lg font-medium text-blue-600">Drop the images here...</p>
          ) : (
            <div>
              <p className="text-lg font-medium text-gray-700 mb-2">
                {uploadedFiles.length > 0 ? 'Add more images or' : 'Drop images here or'} click to upload
              </p>
              <p className="text-sm text-gray-500">
                Supports 7+ formats: JPG, PNG, WEBP, AVIF, HEIC, GIF, BMP, TIFF, SVG, and more
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Max 20 files • Up to 50MB each
              </p>
            </div>
          )}
          
          <label htmlFor="file-upload">
            <Button 
              type="button"
              variant="outline" 
              disabled={isProcessing}
              className="bg-white hover:bg-gray-50 border-2 border-blue-500 text-blue-600 hover:text-blue-700 cursor-pointer"
              asChild
            >
              <span>
                <Image className="w-4 h-4 mr-2" />
                Choose Images
              </span>
            </Button>
          </label>
        </div>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {uploadedFiles.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-medium text-gray-700">
            Uploaded Files ({uploadedFiles.length})
          </h3>
          <div className="grid gap-2">
            {uploadedFiles.map((file, index) => (
              <div
                key={`${file.name}-${index}`}
                className="flex items-center justify-between p-3 bg-white rounded-lg border"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                    <Image className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-700 truncate max-w-[200px]">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {formatFileSize(file.size)} • {file.type.split('/')[1]?.toUpperCase() || 'Unknown'}
                    </p>
                  </div>
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFile(index)}
                  disabled={isProcessing}
                  className="text-gray-400 hover:text-red-500"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}