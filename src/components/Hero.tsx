
import React from 'react';
import HeroCarousel from '@/components/HeroCarousel';

const Hero = () => {
  return (
    <section id="hero" className="relative bg-white pt-20 pb-16 overflow-hidden">
      {/* Clean background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/30 to-white"></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Top Banner */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-pink-50 text-pink-700 rounded-full text-sm font-medium mb-8 border border-pink-100">
            <div className="w-2 h-2 bg-pink-500 rounded-full mr-3 animate-pulse"></div>
            India's Fastest Growing Smart Locker Network
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Secure Digital Storage
            <br />
            <span className="text-pink-600">Across India</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Yatigo is a platform of digital smart lockers with hassle-free, secured, and instant access. 
            We connect with our customers through privacy-focused and sturdy locker solutions.
          </p>
        </div>

        {/* Hero Carousel Section */}
        <HeroCarousel />
      </div>
    </section>
  );
};

export default Hero;
