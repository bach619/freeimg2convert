'use client';

import { Facebook, Twitter, Instagram, Linkedin, MessageCircle, Send, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export function SocialShareButtons() {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = 'Check out freeimg2convert - Free Online Image Converter & Compressor! Convert between 7+ formats including JPG, PNG, WEBP, AVIF, HEIC and more.';

  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      color: 'bg-sky-500 hover:bg-sky-600'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'bg-blue-700 hover:bg-blue-800'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      name: 'Telegram',
      icon: Send,
      url: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      color: 'bg-blue-500 hover:bg-blue-600'
    }
  ];

  const handleShare = (platform: typeof socialPlatforms[0]) => {
    if (typeof window !== 'undefined') {
      window.open(platform.url, '_blank', 'width=600,height=400');
      toast.success(`Sharing on ${platform.name}!`);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'freeimg2convert - Free Image Converter',
          text: shareText,
          url: shareUrl,
        });
        toast.success('Shared successfully!');
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(shareUrl);
      toast.success('URL copied to clipboard!');
    }
  };

  return (
    <section className="mt-16 bg-white rounded-lg shadow-sm p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Share freeimg2convert</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Help others discover our free image converter! Share freeimg2convert with your friends and colleagues.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {socialPlatforms.map((platform) => {
          const IconComponent = platform.icon;
          return (
            <Button
              key={platform.name}
              onClick={() => handleShare(platform)}
              className={`${platform.color} text-white px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-md`}
            >
              <IconComponent className="w-5 h-5 mr-2" />
              {platform.name}
            </Button>
          );
        })}
      </div>

      <div className="text-center">
        <Button
          onClick={handleNativeShare}
          variant="outline"
          className="border-2 border-gray-300 hover:border-gray-400 px-6 py-3"
        >
          <Share2 className="w-5 h-5 mr-2" />
          Share via Device
        </Button>
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-2">Why Share freeimg2convert?</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>100% Free & No Watermarks</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>20+ Image Formats Supported</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            <span>Secure Browser-Based Processing</span>
          </div>
        </div>
      </div>
    </section>
  );
}