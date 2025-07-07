
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, ShoppingBag, ArrowRight, Shield, Lock } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      title: 'Mobile Lockers',
      description: 'Secure storage for your mobile devices and electronics with smart charging capabilities.',
      icon: Smartphone,
      features: ['Smart Charging', 'Biometric Access', 'Real-time Monitoring', 'Insurance Coverage'],
      image: '/api/placeholder/400/300',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      id: 2,
      title: 'Baggage Lockers',
      description: 'Spacious and secure storage for luggage, bags, and personal belongings.',
      icon: ShoppingBag,
      features: ['Multiple Sizes', 'Climate Control', 'CCTV Surveillance', '24/7 Access'],
      image: '/api/placeholder/400/300',
      gradient: 'from-indigo-500 to-purple-700'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Our Products
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Smart Storage Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our range of intelligent locker systems designed for modern living
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card key={product.id} className={`group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden animate-fade-in`} style={{animationDelay: `${index * 200}ms`}}>
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-80`}></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Available Now
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                
                <div className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group">
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
