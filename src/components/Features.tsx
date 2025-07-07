
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Shield, Smartphone, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Instant Access',
      description: 'Quick and seamless access to your locker through our mobile app or biometric authentication.',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      icon: Shield,
      title: 'Privacy',
      description: 'Complete privacy protection with end-to-end encryption and secure data handling protocols.',
      color: 'from-green-400 to-blue-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Smartphone,
      title: 'Smart Technology',
      description: 'Advanced IoT integration, real-time monitoring, and intelligent security systems.',
      color: 'from-blue-400 to-purple-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Clock,
      title: 'Hassle-Free',
      description: 'Simple booking process, flexible rental periods, and 24/7 customer support.',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Why Choose Yatigo
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for Modern Living
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of storage with our cutting-edge features designed for your convenience and security
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden hover:-translate-y-2 animate-fade-in ${feature.bgColor}`}
              style={{animationDelay: `${index * 150}ms`}}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                
                <div className="mt-6 pt-6 border-t border-gray-200/50">
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: `${i * 100}ms`}}></div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Feature Highlight */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-800 border-0 overflow-hidden">
            <CardContent className="p-12 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust Yatigo for their storage needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors duration-300 hover:scale-105 transform">
                  Start Using Yatigo
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors duration-300 hover:scale-105 transform">
                  Contact Us
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
