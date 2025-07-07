
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Play, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden pt-16">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      
      {/* Floating geometric elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-100/50 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 bg-blue-200/30 rounded-full blur-lg"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <div className="text-left animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-8 border border-blue-100">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
              India's First Smart Locker Network
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
              India's Fastest
              <br />
              <span className="text-blue-600">Growing Smart</span>
              <br />
              Locker Network
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-lg font-light">
              Secure, smart, and convenient storage solutions for your valuables. 
              Experience the future of digital lockers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group h-14">
                <MapPin className="mr-3 h-5 w-5" />
                Locate Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 h-14">
                <Play className="mr-3 h-5 w-5" />
                How It Works
              </Button>
            </div>
            
            <div className="flex items-center mt-16 space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="text-2xl font-bold text-gray-900 mr-2">100+</div>
                <div>Locations</div>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="flex items-center">
                <div className="text-2xl font-bold text-gray-900 mr-2">24/7</div>
                <div>Access</div>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="flex items-center">
                <div className="text-2xl font-bold text-gray-900 mr-2">99.9%</div>
                <div>Secure</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in delay-300">
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8">
              <img 
                src="/api/placeholder/600/500" 
                alt="Smart Locker Technology" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Status indicator */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Online</div>
                    <div className="text-xs text-gray-500">All systems active</div>
                  </div>
                </div>
              </div>
              
              {/* Security badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
                <div className="text-xs text-gray-600 mb-1">Security Status</div>
                <div className="text-lg font-bold text-blue-600">Bank-Grade Secured</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
