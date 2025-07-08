
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import { scrollToSection, initiateCall } from '@/utils/scrollUtils';

const Hero = () => {
  const handleLocateUs = () => {
    scrollToSection('locations');
  };

  const handleYatigoMap = () => {
    scrollToSection('locations');
  };

  const handleContactUs = () => {
    initiateCall('+919876543210');
  };

  return (
    <section id="hero" className="relative bg-white pt-20 pb-16 overflow-hidden">
      {/* Clean background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-white"></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Top Banner */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-8 border border-blue-100">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
            India's Fastest Growing Smart Locker Network
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Secure Digital Storage
            <br />
            <span className="text-blue-600">Across India</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Yatigo is a platform of digital smart lockers with hassle-free, secured, and instant access. 
            We connect with our customers through privacy-focused and sturdy locker solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              onClick={handleLocateUs}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Locate Us
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleYatigoMap}
              className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg rounded-xl"
            >
              Yatigo Map
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleContactUs}
              className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-xl"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Smart Locker System - Digital Storage Lockers" 
              className="w-full h-auto rounded-xl shadow-lg"
            />
            
            {/* Status indicators */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-md">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-900">100+ Locations Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
