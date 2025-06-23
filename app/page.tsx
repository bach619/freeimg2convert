'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { FileUpload } from '@/components/FileUpload';
import { ConversionSettings } from '@/components/ConversionSettings';
import { ImagePreview } from '@/components/ImagePreview';
import { ConversionHistory } from '@/components/ConversionHistory';
import { SocialShareButtons } from '@/components/SocialShareButtons';
import { AdSpace } from '@/components/AdSpace';
import { Footer } from '@/components/Footer';
import { ProcessedImage } from '@/types/image';

export default function Home() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [processedImages, setProcessedImages] = useState<ProcessedImage[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [conversionHistory, setConversionHistory] = useState<ProcessedImage[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('freeimg2convert-history');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            setConversionHistory(parsed);
          }
        }
      } catch (error) {
        console.error('Failed to load history:', error);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && conversionHistory.length > 0) {
      try {
        localStorage.setItem('freeimg2convert-history', JSON.stringify(conversionHistory));
      } catch (error) {
        console.error('Failed to save history:', error);
      }
    }
  }, [conversionHistory]);

  const handleFilesUpload = (files: File[]) => {
    setUploadedFiles(files);
    setProcessedImages([]);
  };

  const handleConversionComplete = (images: ProcessedImage[]) => {
    setProcessedImages(images);
    // FIXED: Removed redundant parentheses around array expression
    setConversionHistory(prev => [...images, ...prev].slice(0, 50));
  };

  const handleProcessingState = (processing: boolean) => {
    setIsProcessing(processing);
  };

  const handleClearHistory = () => {
    setConversionHistory([]);
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem('freeimg2convert-history');
      } catch (error) {
        console.error('Failed to clear history:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FFE6E6]">
      <Header />
      <AdSpace type="banner" className="mt-4" />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-4">
            freeimg2convert
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 mb-2">
            Free Online Image Converter & Compressor
          </p>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Transform your images effortlessly with our powerful online converter. Support for 7+ formats including JPG, PNG, WEBP, AVIF, HEIC, and more.
            Compress images while maintaining quality. Fast, secure, and completely free.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <FileUpload onFilesUpload={handleFilesUpload} isProcessing={isProcessing} />

            {uploadedFiles.length > 0 && (
              <ConversionSettings
                files={uploadedFiles}
                onConversionComplete={handleConversionComplete}
                onProcessingState={handleProcessingState}
              />
            )}

            {processedImages.length > 0 && <ImagePreview images={processedImages} />}

            {conversionHistory.length > 0 && (
              <ConversionHistory
                history={conversionHistory}
                onClearHistory={handleClearHistory}
              />
            )}
          </div>

          <div className="lg:col-span-1">
            <AdSpace type="sidebar" />
            <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Popular Conversions</h2>
              <div className="space-y-2 text-sm">
                {[
                  ['JPG to PNG', '/jpg-to-png'],
                  ['PNG to JPG', '/png-to-jpg'],
                  ['WEBP to PNG', '/webp-to-png'],
                  ['PNG to WEBP', '/png-to-webp'],
                  ['GIF to PNG', '/gif-to-png'],
                  ['BMP to JPG', '/bmp-to-jpg'],
                ].map(([label, href]) => {
                  return (
                    <a key={href} href={href} className="block text-blue-600 hover:text-blue-800">
                      {label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {processedImages.length > 0 && <AdSpace type="content" className="mt-12" />}

        <SocialShareButtons />

        <section className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-6">Why Choose freeimg2convert?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ['🚀 Fast & Efficient', 'Process multiple images in seconds with our optimized conversion engine.'],
              ['🔒 Secure & Private', 'All conversions happen in your browser. Your images never leave your device.'],
              ['📱 Works Everywhere', 'Compatible with all devices and browsers. No installation required.'],
              ['💰 Completely Free', 'No watermarks, no limits, no hidden fees. Convert unlimited images for free.'],
              ['🎯 High Quality', 'Advanced compression algorithms preserve image quality while reducing file size.'],
              ['📦 Batch Processing', 'Convert multiple images at once and download them as a ZIP file.'],
            ].map(([title, desc]) => {
              return (
                <div key={title}>
                  <h3 className="font-semibold mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}