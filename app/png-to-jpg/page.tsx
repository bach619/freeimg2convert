import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convert PNG to JPG Online Free - freeimg2convert',
  description: 'Convert PNG images to JPG format online for free. Reduce file size while maintaining quality with our PNG to JPG converter.',
  keywords: 'PNG to JPG, PNG to JPEG converter, convert PNG JPG online free',
};

export default function PngToJpgPage() {
  return (
    <div className="min-h-screen bg-[#FFE6E6]">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Convert PNG to JPG Online Free
          </h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              Convert your PNG images to JPG format to reduce file size. 
              JPG format uses lossy compression which significantly reduces file size 
              while maintaining good quality for photographs and complex images.
            </p>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-green-900 mb-4">
                Benefits of Converting PNG to JPG
              </h2>
              <ul className="space-y-2 text-green-800">
                <li>• <strong>Smaller File Size:</strong> Reduce file size by up to 80%</li>
                <li>• <strong>Faster Loading:</strong> Quicker upload and download times</li>
                <li>• <strong>Universal Support:</strong> Compatible with all devices and platforms</li>
                <li>• <strong>Storage Savings:</strong> Save disk space and bandwidth</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}