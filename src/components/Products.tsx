
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, ShoppingBag, ArrowRight, Shield, Zap, Clock } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      title: 'Mobile Lockers',
      description: 'Secure storage for your mobile devices and electronics with smart charging capabilities and biometric access.',
      icon: Smartphone,
      features: ['Smart Charging', 'Biometric Access', 'Real-time Monitoring', 'Insurance Coverage'],
      image: '/api/placeholder/500/400',
    },
    {
      id: 2,
      title: 'Baggage Lockers',
      description: 'Spacious and secure storage for luggage, bags, and personal belongings with climate control.',
      icon: ShoppingBag,
      features: ['Multiple Sizes', 'Climate Control', 'CCTV Surveillance', '24/7 Access'],
      image: '/api/placeholder/500/400',
    }
  ];

  return (
    <section id="products" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-8 border border-blue-100">
            Our Products
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            Smart Storage
            <br />
            <span className="text-blue-600">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Choose from our range of intelligent locker systems designed for modern living
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card key={product.id} className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden bg-white rounded-3xl">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <product.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="absolute top-6 right-6">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Available Now
                  </div>
                </div>
              </div>
              
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{product.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg font-light">{product.description}</p>
                
                <div className="space-y-4 mb-10">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white group rounded-2xl py-4 text-lg font-medium">
                  Learn More
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
