import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convert JPG to PNG Online Free - freeimg2convert',
  description: 'Convert JPG images to PNG format online for free. Maintain transparency and quality with our fast JPG to PNG converter tool.',
  keywords: 'JPG to PNG, JPEG to PNG converter, convert JPG PNG online free',
};

export default function JpgToPngPage() {
  return (
    <div className="min-h-screen bg-[#FFE6E6]">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Convert JPG to PNG Online Free
          </h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              Convert your JPG images to PNG format with our free online converter. 
              PNG format supports transparency and provides lossless compression, 
              making it perfect for logos, graphics, and images that need transparent backgrounds.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">
                Why Convert JPG to PNG?
              </h2>
              <ul className="space-y-2 text-blue-800">
                <li>• <strong>Transparency Support:</strong> PNG supports transparent backgrounds</li>
                <li>• <strong>Lossless Quality:</strong> No quality degradation during conversion</li>
                <li>• <strong>Better for Graphics:</strong> Ideal for logos, icons, and text images</li>
                <li>• <strong>Web Compatibility:</strong> Widely supported across all browsers</li>
              </ul>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">JPG Format</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Smaller file sizes</li>
                  <li>• Lossy compression</li>
                  <li>• No transparency support</li>
                  <li>• Best for photographs</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">PNG Format</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Larger file sizes</li>
                  <li>• Lossless compression</li>
                  <li>• Transparency support</li>
                  <li>• Best for graphics & logos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}