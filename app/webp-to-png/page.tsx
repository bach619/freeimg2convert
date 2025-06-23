import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convert WEBP to PNG Online Free - freeimg2convert',
  description: 'Convert WEBP images to PNG format online for free. Maintain transparency and quality while ensuring universal compatibility.',
  keywords: 'WEBP to PNG, WEBP to PNG converter, convert WEBP PNG online free',
};

export default function WebpToPngPage() {
  return (
    <div className="min-h-screen bg-[#FFE6E6]">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Convert WEBP to PNG Online Free
          </h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              Convert your WEBP images to PNG format with our free online converter. 
              PNG format ensures universal compatibility across all devices and platforms 
              while maintaining transparency and lossless quality.
            </p>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-purple-900 mb-4">
                Why Convert WEBP to PNG?
              </h2>
              <ul className="space-y-2 text-purple-800">
                <li>• <strong>Universal Compatibility:</strong> PNG works on all devices and browsers</li>
                <li>• <strong>Preserve Transparency:</strong> Maintain transparent backgrounds</li>
                <li>• <strong>Lossless Quality:</strong> No quality degradation during conversion</li>
                <li>• <strong>Software Support:</strong> Compatible with all image editing software</li>
              </ul>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">WEBP Format</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Modern web format</li>
                  <li>• Superior compression</li>
                  <li>• Limited software support</li>
                  <li>• Best for web optimization</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">PNG Format</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Universal compatibility</li>
                  <li>• Lossless compression</li>
                  <li>• Transparency support</li>
                  <li>• Best for graphics & logos</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">How to Convert WEBP to PNG</h2>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                  <span>Upload your WEBP images using the drag & drop area or click to browse</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                  <span>Select PNG as your output format in the conversion settings</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                  <span>Choose your compression level (Low, Medium, or High)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                  <span>Click "Convert Images" and download your PNG files</span>
                </li>
              </ol>
            </div>

            <div className="text-center">
              <a 
                href="/" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-700 transition-colors"
              >
                Start Converting WEBP to PNG
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}