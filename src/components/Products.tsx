
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, ShoppingBag, ArrowRight, Shield } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      title: 'Mobile Lockers',
      description: 'Secure storage for smartphones, tablets, and personal electronics with smart charging capabilities.',
      icon: Smartphone,
      features: ['Smart Charging', 'Biometric Access', 'Real-time Monitoring'],
      image: '/api/placeholder/400/300',
    },
    {
      id: 2,
      title: 'Baggage Lockers',
      description: 'Spacious storage for luggage, bags, and larger personal belongings with advanced security.',
      icon: ShoppingBag,
      features: ['Multiple Sizes', 'CCTV Surveillance', '24/7 Access'],
      image: '/api/placeholder/400/300',
    }
  ];

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
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white rounded-2xl overflow-hidden">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />
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
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 group">
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
