import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Supported Image Formats - freeimg2convert',
  description: 'Learn about all 20+ image formats supported by freeimg2convert. Convert between JPG, PNG, WEBP, AVIF, HEIC, GIF, BMP, TIFF, SVG, and more online for free.',
  keywords: 'image formats, JPG, PNG, WEBP, AVIF, HEIC, GIF, BMP, TIFF, SVG, image converter formats',
};

export default function FormatsPage() {
  const formats = [
    {
      name: 'JPEG / JPG',
      description: 'Joint Photographic Experts Group format. Best for photographs with many colors.',
      features: ['Lossy compression', 'Small file sizes', 'No transparency', 'Universal support'],
      useCase: 'Perfect for photographs, web images, and when file size matters.'
    },
    {
      name: 'PNG',
      description: 'Portable Network Graphics format. Best for images with transparency and graphics.',
      features: ['Lossless compression', 'Transparency support', 'Larger file sizes', 'High quality'],
      useCase: 'Ideal for logos, icons, graphics, and images requiring transparency.'
    },
    {
      name: 'WEBP',
      description: 'Modern web format developed by Google. Excellent compression with high quality.',
      features: ['Superior compression', 'Transparency support', 'Animation support', 'Modern browsers'],
      useCase: 'Best for web optimization, faster loading times, and modern websites.'
    },
    {
      name: 'AVIF',
      description: 'Next-generation image format with exceptional compression and quality.',
      features: ['Best compression', 'HDR support', 'Wide color gamut', 'Future-proof'],
      useCase: 'Cutting-edge web optimization with smallest file sizes and highest quality.'
    },
    {
      name: 'HEIC',
      description: 'High Efficiency Image Container used by Apple devices.',
      features: ['Excellent compression', 'High quality', 'Apple ecosystem', 'HDR support'],
      useCase: 'Default format for iPhone photos, great for mobile optimization.'
    },
    {
      name: 'GIF',
      description: 'Graphics Interchange Format. Supports animation and limited colors.',
      features: ['Animation support', '256 colors max', 'Transparency', 'Wide compatibility'],
      useCase: 'Perfect for simple animations, memes, and graphics with few colors.'
    },
    {
      name: 'BMP',
      description: 'Bitmap format. Uncompressed format with high quality but large file sizes.',
      features: ['Uncompressed', 'High quality', 'Large file sizes', 'Windows native'],
      useCase: 'Used for high-quality images where compression is not desired.'
    },
    {
      name: 'TIFF',
      description: 'Tagged Image File Format. Professional format for high-quality images.',
      features: ['Lossless compression', 'High quality', 'Professional use', 'Large file sizes'],
      useCase: 'Ideal for professional photography, printing, and archival purposes.'
    },
    {
      name: 'SVG',
      description: 'Scalable Vector Graphics. Vector-based format for graphics and icons.',
      features: ['Vector graphics', 'Infinitely scalable', 'Small file sizes', 'Web optimized'],
      useCase: 'Perfect for logos, icons, and graphics that need to scale perfectly.'
    },
    {
      name: 'ICO',
      description: 'Icon format used for favicons and application icons.',
      features: ['Multiple sizes', 'Transparency', 'Windows icons', 'Web favicons'],
      useCase: 'Essential for website favicons and Windows application icons.'
    },
    {
      name: 'EPS',
      description: 'Encapsulated PostScript format for vector graphics and print.',
      features: ['Vector graphics', 'Print quality', 'Professional use', 'Scalable'],
      useCase: 'Professional printing, logos, and vector graphics for design work.'
    },
    {
      name: 'RAW',
      description: 'Unprocessed image data from digital cameras.',
      features: ['Unprocessed data', 'Maximum quality', 'Large file sizes', 'Professional'],
      useCase: 'Professional photography requiring maximum image quality and editing flexibility.'
    },
    {
      name: 'PSD',
      description: 'Adobe Photoshop Document with layers and editing information.',
      features: ['Layer support', 'Editing data', 'Adobe ecosystem', 'Professional'],
      useCase: 'Photoshop projects requiring layer preservation and advanced editing.'
    },
    {
      name: 'PDF',
      description: 'Portable Document Format that can contain images and text.',
      features: ['Document format', 'Universal support', 'Print ready', 'Multi-page'],
      useCase: 'Documents, presentations, and print-ready materials with images.'
    },
    {
      name: 'JP2',
      description: 'JPEG 2000 format with improved compression and quality.',
      features: ['Better compression', 'Lossless option', 'Progressive loading', 'High quality'],
      useCase: 'Professional applications requiring superior image quality and compression.'
    },
    {
      name: 'TGA',
      description: 'Truevision TGA format commonly used in gaming and graphics.',
      features: ['Alpha channel', 'Gaming industry', 'High quality', 'Uncompressed'],
      useCase: 'Game development, 3D graphics, and applications requiring alpha channels.'
    },
    {
      name: 'WBMP',
      description: 'Wireless Bitmap format for mobile devices.',
      features: ['Mobile optimized', 'Monochrome', 'Small size', 'WAP support'],
      useCase: 'Legacy mobile applications and wireless communication protocols.'
    },
    {
      name: 'DDS',
      description: 'DirectDraw Surface format used in gaming and 3D applications.',
      features: ['Texture compression', 'Gaming industry', 'GPU optimized', 'Multiple formats'],
      useCase: 'Game textures, 3D applications, and GPU-accelerated graphics.'
    },
    {
      name: 'HDR',
      description: 'High Dynamic Range format for extended color and brightness.',
      features: ['Extended range', 'Professional use', 'Color accuracy', 'Large file sizes'],
      useCase: 'Professional photography, visual effects, and high-end image processing.'
    },
    {
      name: 'APNG',
      description: 'Animated Portable Network Graphics with transparency support.',
      features: ['Animation support', 'Transparency', 'Better than GIF', 'Modern browsers'],
      useCase: 'High-quality animations with transparency for modern web applications.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFE6E6]">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-4">
              Supported Image Formats
            </h1>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              freeimg2convert supports 20+ image formats including modern formats like AVIF and HEIC.
              Learn about each format's strengths and choose the best one for your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {formats.map((format, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{format.name}</h3>
                <p className="text-gray-600 mb-4">{format.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {format.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-900 text-sm mb-1">Best Use Case:</h4>
                  <p className="text-blue-800 text-sm">{format.useCase}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Format Conversion Guide</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Popular Conversions</h3>
                <div className="space-y-3">
                  <a href="/jpg-to-png" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-blue-600">JPG to PNG</div>
                    <div className="text-sm text-gray-500">Add transparency to your images</div>
                  </a>
                  <a href="/png-to-jpg" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-blue-600">PNG to JPG</div>
                    <div className="text-sm text-gray-500">Reduce file size for web use</div>
                  </a>
                  <a href="/webp-to-png" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-blue-600">WEBP to PNG</div>
                    <div className="text-sm text-gray-500">Convert modern format to universal</div>
                  </a>
                  <a href="/png-to-webp" className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-blue-600">PNG to WEBP</div>
                    <div className="text-sm text-gray-500">Optimize for web performance</div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-4">When to Use Each Format</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-800">For Modern Websites:</span>
                    <span className="text-gray-600 ml-2">AVIF &gt; WEBP &gt; JPG</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">For Mobile Apps:</span>
                    <span className="text-gray-600 ml-2">HEIC &gt; WEBP &gt; JPG</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">For Printing:</span>
                    <span className="text-gray-600 ml-2">TIFF &gt; PNG &gt; JPG</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">For Logos:</span>
                    <span className="text-gray-600 ml-2">SVG &gt; PNG &gt; WEBP</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">For Animations:</span>
                    <span className="text-gray-600 ml-2">APNG &gt; WEBP &gt; GIF</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">For Storage:</span>
                    <span className="text-gray-600 ml-2">AVIF &gt; HEIC &gt; WEBP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PDF Tools Section */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200 p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Need PDF Tools?</h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                While freeimg2convert can convert images to PDF format, for comprehensive PDF editing,
                merging, splitting, and advanced PDF operations, we recommend using specialized PDF tools.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 border">
                  <h3 className="font-semibold text-gray-800 mb-3">What We Offer</h3>
                  <ul className="text-sm text-gray-600 space-y-2 text-left">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Convert images to PDF format
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Maintain image quality in PDF
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Batch image to PDF conversion
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 border">
                  <h3 className="font-semibold text-gray-800 mb-3">For Advanced PDF Needs</h3>
                  <ul className="text-sm text-gray-600 space-y-2 text-left">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Merge multiple PDFs
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Split PDF pages
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Edit PDF content
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Add annotations & signatures
                    </li>
                  </ul>
                </div>
              </div>

              <a
                href="https://www.ilovepdf.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <ExternalLink className="w-5 h-5 mr-3" />
                Visit iLovePDF - Professional PDF Tools
              </a>

              <p className="text-sm text-gray-500 mt-4">
                External link to a comprehensive PDF toolkit for all your PDF needs
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
