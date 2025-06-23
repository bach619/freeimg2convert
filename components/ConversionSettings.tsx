'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';
import { Settings2, Download } from 'lucide-react';
import { toast } from 'sonner';
import { SUPPORTED_FORMATS, COMPRESSION_LEVELS, ProcessedImage } from '@/types/image';
import { convertImages } from '@/lib/imageConverter';

interface ConversionSettingsProps {
  files: File[];
  onConversionComplete: (images: ProcessedImage[]) => void;
  onProcessingState: (processing: boolean) => void;
}

export function ConversionSettings({ 
  files, 
  onConversionComplete, 
  onProcessingState 
}: ConversionSettingsProps) {
  const [outputFormat, setOutputFormat] = useState('jpeg');
  const [compressionLevel, setCompressionLevel] = useState<'low' | 'medium' | 'high'>('medium');
  const [quality, setQuality] = useState([70]);
  const [progress, setProgress] = useState(0);
  const [isConverting, setIsConverting] = useState(false);

  const handleConvert = async () => {
    if (files.length === 0) return;

    setIsConverting(true);
    onProcessingState(true);
    setProgress(0);

    try {
      const settings = {
        format: outputFormat,
        quality: quality[0] / 100,
        compressionLevel
      };

      const processedImages = await convertImages(files, settings, (progressValue) => {
        setProgress(progressValue);
      });

      onConversionComplete(processedImages);
      toast.success(`Successfully converted ${files.length} image(s)!`);
      
    } catch (error) {
      console.error('Conversion failed:', error);
      toast.error('Conversion failed. Please try again.');
    } finally {
      setIsConverting(false);
      onProcessingState(false);
      setProgress(0);
    }
  };

  const selectedFormat = SUPPORTED_FORMATS.find(f => f.value === outputFormat);
  const compressionInfo = COMPRESSION_LEVELS[compressionLevel];

  // Show quality slider for formats that support quality adjustment
  const showQualitySlider = outputFormat === 'jpeg' || outputFormat === 'webp' || outputFormat === 'pdf';

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 space-y-6">
      <div className="flex items-center space-x-2">
        <Settings2 className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-800">Conversion Settings</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Output Format */}
        <div className="space-y-2">
          <Label htmlFor="format">Output Format</Label>
          <Select value={outputFormat} onValueChange={setOutputFormat}>
            <SelectTrigger>
              <SelectValue placeholder="Select format" />
            </SelectTrigger>
            <SelectContent>
              {SUPPORTED_FORMATS.map((format) => (
                <SelectItem key={format.value} value={format.value}>
                  {format.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Compression Level */}
        <div className="space-y-2">
          <Label htmlFor="compression">Compression Level</Label>
          <Select 
            value={compressionLevel} 
            onValueChange={(value: 'low' | 'medium' | 'high') => setCompressionLevel(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select compression" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low (High Quality)</SelectItem>
              <SelectItem value="medium">Medium (Balanced)</SelectItem>
              <SelectItem value="high">High (Small Size)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Quality Slider */}
      {showQualitySlider && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="quality">
              Quality: {quality[0]}%
              {outputFormat === 'pdf' && <span className="text-sm text-gray-500 ml-2">(for embedded image)</span>}
            </Label>
            <span className="text-sm text-gray-500">
              {quality[0] < 50 ? 'Small file, lower quality' : 
               quality[0] < 80 ? 'Balanced' : 'Large file, high quality'}
            </span>
          </div>
          <Slider
            value={quality}
            onValueChange={setQuality}
            max={100}
            min={10}
            step={5}
            className="w-full"
          />
        </div>
      )}

      {/* PDF-specific information */}
      {outputFormat === 'pdf' && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 text-sm mb-2">PDF Conversion Notes:</h4>
          <ul className="text-blue-800 text-sm space-y-1">
            <li>• Each image will be converted to a separate PDF file</li>
            <li>• PDF orientation will match the image dimensions</li>
            <li>• Quality setting affects the embedded image compression</li>
            <li>• Original image dimensions are preserved in the PDF</li>
          </ul>
        </div>
      )}

      {/* Conversion Progress */}
      {isConverting && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Converting images...</span>
            <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="w-full" />
        </div>
      )}

      {/* Convert Button */}
      <div className="flex items-center justify-between pt-4 border-t">
        <div className="text-sm text-gray-600">
          {files.length} file(s) → {selectedFormat?.label} ({compressionInfo.label})
        </div>
        
        <Button 
          onClick={handleConvert}
          disabled={isConverting || files.length === 0}
          className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
        >
          {isConverting ? (
            <>Converting...</>
          ) : (
            <>
              <Download className="w-4 h-4 mr-2" />
              Convert Images
            </>
          )}
        </Button>
      </div>
    </div>
  );
}