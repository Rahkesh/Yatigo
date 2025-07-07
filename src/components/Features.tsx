
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Shield, Smartphone, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Hassle-free',
      description: 'Simple booking process and seamless access through our intuitive mobile application.',
    },
    {
      icon: Shield,
      title: 'Secured',
      description: 'Bank-grade security with biometric access and comprehensive insurance coverage.',
    },
    {
      icon: Smartphone,
      title: 'Instant Product',
      description: 'Immediate access to lockers with real-time availability and instant confirmation.',
    },
    {
      icon: Clock,
      title: 'Customer Privacy',
      description: 'Complete privacy protection with encrypted data handling and secure transactions.',
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Yatigo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the future of secure storage with our advanced features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border border-gray-100 rounded-2xl bg-white text-center p-6"
            >
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
