import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convert PNG to WEBP Online Free - freeimg2convert',
  description: 'Convert PNG images to WEBP format online for free. Reduce file size by up to 80% while maintaining quality for faster web loading.',
  keywords: 'PNG to WEBP, PNG to WEBP converter, convert PNG WEBP online free',
};

export default function PngToWebpPage() {
  return (
    <div className="min-h-screen bg-[#FFE6E6]">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Convert PNG to WEBP Online Free
          </h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              Convert your PNG images to WEBP format to dramatically reduce file size 
              while maintaining excellent quality. WEBP is the modern web standard 
              for optimized images and faster loading times.
            </p>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-green-900 mb-4">
                Benefits of Converting PNG to WEBP
              </h2>
              <ul className="space-y-2 text-green-800">
                <li>• <strong>Massive Size Reduction:</strong> Up to 80% smaller file sizes</li>
                <li>• <strong>Faster Loading:</strong> Improved website performance</li>
                <li>• <strong>Better SEO:</strong> Google favors fast-loading images</li>
                <li>• <strong>Transparency Support:</strong> Maintains transparent backgrounds</li>
              </ul>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">PNG Format</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Lossless compression</li>
                  <li>• Universal compatibility</li>
                  <li>• Larger file sizes</li>
                  <li>• Best for graphics & logos</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">WEBP Format</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Superior compression</li>
                  <li>• Modern web standard</li>
                  <li>• Much smaller file sizes</li>
                  <li>• Best for web optimization</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">How to Convert PNG to WEBP</h2>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                  <span>Upload your PNG images using the drag & drop area or click to browse</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                  <span>Select WEBP as your output format in the conversion settings</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                  <span>Adjust quality settings (70-90% recommended for best balance)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                  <span>Click "Convert Images" and download your optimized WEBP files</span>
                </li>
              </ol>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">💡 Pro Tip</h3>
              <p className="text-yellow-800">
                For websites, use WEBP images with PNG fallbacks to ensure compatibility 
                across all browsers while maximizing performance for modern browsers.
              </p>
            </div>

            <div className="text-center">
              <a 
                href="/" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-700 transition-colors"
              >
                Start Converting PNG to WEBP
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}