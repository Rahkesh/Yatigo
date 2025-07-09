
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, LockKeyhole  } from 'lucide-react';
import { scrollToSection } from '@/utils/scrollUtils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: 'hero' },
    { name: 'Mobile Lockers', href: 'products' },
    { name: 'Baggage Lockers', href: 'products' },
    { name: 'Locate Us', href: 'locations' },
    { name: 'Contact', href: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  const handleGetStarted = () => {
    scrollToSection('products');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-600 to-pink-700 rounded-lg flex items-center justify-center">
              <LockKeyhole className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Yatigo</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="hidden md:flex">
            <Button 
              onClick={handleGetStarted}
              className="bg-pink-600 hover:bg-pink-700 text-white rounded-lg px-6"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="block text-gray-600 hover:text-gray-900 font-medium py-2 w-full text-left"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Button 
                  onClick={handleGetStarted}
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white rounded-lg py-2"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
