'use client';

import { Image, Heart, Shield, FileText, Scale } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <Image className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                freeimg2convert
              </span>
            </div>
            <p className="text-gray-600 text-sm max-w-md">
              Free online image converter and compressor. Convert between 20+ formats including JPG, PNG, WEBP, AVIF, HEIC, and more. 
              Fast, secure, and completely free with no watermarks.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center space-x-1">
                <Heart className="w-4 h-4" />
                <span>Always Free</span>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Popular Tools</h3>
            <div className="space-y-2 text-sm">
              <a href="/jpg-to-png" className="block text-gray-600 hover:text-blue-600 transition-colors">JPG to PNG</a>
              <a href="/png-to-jpg" className="block text-gray-600 hover:text-blue-600 transition-colors">PNG to JPG</a>
              <a href="/webp-to-png" className="block text-gray-600 hover:text-blue-600 transition-colors">WEBP to PNG</a>
              <a href="/png-to-webp" className="block text-gray-600 hover:text-blue-600 transition-colors">PNG to WEBP</a>
              <a href="/" className="block text-gray-600 hover:text-blue-600 transition-colors">Image Compressor</a>
              <a href="/" className="block text-gray-600 hover:text-blue-600 transition-colors">Batch Converter</a>
            </div>
          </div>

          {/* Formats */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Supported Formats</h3>
            <div className="space-y-2 text-sm">
              <span className="block text-gray-600">JPEG / JPG</span>
              <span className="block text-gray-600">PNG</span>
              <span className="block text-gray-600">WEBP</span>
              <span className="block text-gray-600">AVIF</span>
              <span className="block text-gray-600">HEIC</span>
              <a href="/formats" className="block text-blue-600 hover:text-blue-800 transition-colors">View All Formats →</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
            <div className="space-y-2 text-sm">
              <a href="/about" className="block text-gray-600 hover:text-blue-600 transition-colors">About Us</a>
              <a href="/privacy" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <Shield className="w-3 h-3 mr-1" />
                Privacy Policy
              </a>
              <a href="/terms" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <Scale className="w-3 h-3 mr-1" />
                Terms of Service
              </a>
              <a href="mailto:contact@freeimg2convert.fun" className="block text-gray-600 hover:text-blue-600 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t mt-8 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-semibold text-gray-800 mb-2">Stay Updated</h3>
            <p className="text-gray-600 text-sm mb-4">Get notified about new features and format support</p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-green-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">No spam, unsubscribe anytime</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4 md:mb-0">
            <p>© 2025 freeimg2convert. All rights reserved.</p>
            <span className="hidden md:inline">•</span>
            <div className="flex items-center space-x-4">
              <a href="/privacy" className="hover:text-blue-600 transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-blue-600 transition-colors">Terms</a>
            </div>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-500" />
            <span>for creators everywhere</span>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-6 pt-6 border-t">
          <div className="flex flex-wrap justify-center items-center space-x-6 text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <Shield className="w-3 h-3" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-1">
              <FileText className="w-3 h-3" />
              <span>Privacy by Design</span>
            </div>
            <div className="flex items-center space-x-1">
              <Scale className="w-3 h-3" />
              <span>Transparent Terms</span>
            </div>
            <div className="flex items-center space-x-1">
              <Heart className="w-3 h-3" />
              <span>User First</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}