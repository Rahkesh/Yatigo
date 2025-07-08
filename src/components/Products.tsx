
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, ShoppingBag, ArrowRight, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { scrollToSection } from '@/utils/scrollUtils';

const Products = () => {
  const [mobileImageIndex, setMobileImageIndex] = useState(0);
  const [baggageImageIndex, setBaggageImageIndex] = useState(0);

  const products = [
    {
      id: 1,
      title: 'Mobile Lockers',
      description: 'Secure storage for smartphones, tablets, and personal electronics with smart charging capabilities.',
      icon: Smartphone,
      features: ['Smart Charging', 'Biometric Access', 'Real-time Monitoring'],
      images: [
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
      ],
      imageIndex: mobileImageIndex,
      setImageIndex: setMobileImageIndex
    },
    {
      id: 2,
      title: 'Baggage Lockers',
      description: 'Spacious storage for luggage, bags, and larger personal belongings with advanced security.',
      icon: ShoppingBag,
      features: ['Multiple Sizes', 'CCTV Surveillance', '24/7 Access'],
      images: [
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
      ],
      imageIndex: baggageImageIndex,
      setImageIndex: setBaggageImageIndex
    }
  ];

  const handleLearnMore = (productId: number) => {
    if (productId === 1) {
      scrollToSection('features');
    } else {
      scrollToSection('locations');
    }
  };

  const nextImage = (product: any) => {
    const nextIndex = (product.imageIndex + 1) % product.images.length;
    product.setImageIndex(nextIndex);
  };

  const prevImage = (product: any) => {
    const prevIndex = product.imageIndex === 0 ? product.images.length - 1 : product.imageIndex - 1;
    product.setImageIndex(prevIndex);
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Smart Locker Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our range of intelligent storage solutions designed for modern convenience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl overflow-hidden">
              <div className="relative">
                <div 
                  className="relative overflow-hidden cursor-pointer"
                  onMouseEnter={() => nextImage(product)}
                >
                  <img 
                    src={product.images[product.imageIndex]} 
                    alt={`${product.title} - Smart Locker System`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Navigation buttons */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage(product);
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                  >
                    <ChevronLeft className="w-4 h-4 text-gray-700" />
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage(product);
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                  >
                    <ChevronRight className="w-4 h-4 text-gray-700" />
                  </button>
                  
                  {/* Image indicators */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
                    {product.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          product.setImageIndex(idx);
                        }}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          idx === product.imageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <product.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                
                <div className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <Shield className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  onClick={() => handleLearnMore(product.id)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 group"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
