import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'freeimg2convert - Free Online Image Converter & Compressor | Convert JPG, PNG, WEBP, AVIF, HEIC',
  description: 'Convert between 20+ image formats including JPG, PNG, WEBP, AVIF, HEIC, and more. Compress images while maintaining quality. Fast, secure, and completely free online image converter with batch processing.',
  keywords: 'image converter, image compressor, JPG to PNG, PNG to JPG, WEBP converter, AVIF converter, HEIC converter, online image converter, free image converter, batch image converter, image format converter, compress images, reduce image size, convert images online, JPG converter, PNG converter, GIF converter, BMP converter, TIFF converter, SVG converter, image optimization, web image converter, mobile image converter, lossless compression, image quality, fast image conversion, secure image processing, browser image converter, no watermark image converter',
  authors: [{ name: 'freeimg2convert Team' }],
  creator: 'freeimg2convert',
  publisher: 'freeimg2convert',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://freeimg2convert.fun'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'freeimg2convert - Free Online Image Converter & Compressor | 7+ Formats Supported',
    description: 'Convert between 20+ image formats including JPG, PNG, WEBP, AVIF, HEIC, and more. Compress images while maintaining quality. Fast, secure, and completely free.',
    type: 'website',
    url: 'https://freeimg2convert.fun',
    siteName: 'freeimg2convert',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'freeimg2convert - Free Online Image Converter supporting JPG, PNG, WEBP, AVIF, HEIC and 7+ formats',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'freeimg2convert - Free Online Image Converter | Convert JPG, PNG, WEBP, AVIF, HEIC',
    description: 'Convert between 20+ image formats including JPG, PNG, WEBP, AVIF, HEIC, and more. Compress images while maintaining quality. Fast, secure, and completely free.',
    images: ['/og-image.jpg'],
    creator: '@freeimg2convert',
    site: '@freeimg2convert',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Image Processing Tools',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'freeimg2convert',
    'application-name': 'freeimg2convert',
    'msapplication-TileColor': '#2563eb',
    'theme-color': '#2563eb',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="freeimg2convert" />
        <meta name="application-name" content="freeimg2convert" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="theme-color" content="#2563eb" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "freeimg2convert",
              "description": "Convert between 20+ image formats including JPG, PNG, WEBP, AVIF, HEIC, and more. Compress images while maintaining quality. Fast, secure, and completely free.",
              "url": "https://freeimg2convert.fun",
              "applicationCategory": "MultimediaApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "Convert between 20+ image formats",
                "JPG to PNG conversion",
                "PNG to JPG conversion", 
                "WEBP conversion",
                "AVIF conversion",
                "HEIC conversion",
                "Image compression",
                "Batch processing",
                "No watermarks",
                "Browser-based processing",
                "Free unlimited usage"
              ],
              "screenshot": "https://freeimg2convert.fun/screenshot.jpg",
              "softwareVersion": "1.0",
              "author": {
                "@type": "Organization",
                "name": "freeimg2convert Team"
              },
              "publisher": {
                "@type": "Organization",
                "name": "freeimg2convert"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}