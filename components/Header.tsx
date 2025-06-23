'use client';

import { useState } from 'react';
import { Image, Menu, X, Shield, Scale } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <Image className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              freeimg2convert
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Home
            </a>
            <a href="/formats" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Formats
            </a>
            <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              About
            </a>
            
            {/* Dropdown for Legal Pages */}
            <div className="relative group">
              <button className="text-gray-600 hover:text-gray-900 transition-colors font-medium flex items-center space-x-1">
                <span>Legal</span>
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <a href="/privacy" className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors">
                    <Shield className="w-4 h-4 mr-2" />
                    Privacy Policy
                  </a>
                  <a href="/terms" className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors">
                    <Scale className="w-4 h-4 mr-2" />
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Home
              </a>
              <a href="/formats" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Formats
              </a>
              <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                About
              </a>
              
              {/* Mobile Legal Links */}
              <div className="border-t pt-4">
                <p className="text-sm font-medium text-gray-500 mb-2">Legal</p>
                <a href="/privacy" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors text-sm mb-2">
                  <Shield className="w-4 h-4 mr-2" />
                  Privacy Policy
                </a>
                <a href="/terms" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  <Scale className="w-4 h-4 mr-2" />
                  Terms of Service
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}