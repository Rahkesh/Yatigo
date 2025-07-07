
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Shield, Smartphone, Clock, ArrowRight } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Instant Access',
      description: 'Quick and seamless access to your locker through our mobile app or biometric authentication systems.',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Complete privacy protection with end-to-end encryption and secure data handling protocols.',
      color: 'from-green-400 to-blue-500',
    },
    {
      icon: Smartphone,
      title: 'Smart Technology',
      description: 'Advanced IoT integration, real-time monitoring, and intelligent security systems for peace of mind.',
      color: 'from-blue-400 to-purple-500',
    },
    {
      icon: Clock,
      title: 'Hassle-Free',
      description: 'Simple booking process, flexible rental periods, and 24/7 customer support when you need it.',
      color: 'from-purple-400 to-pink-500',
    }
  ];

  return (
    <section id="features" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-8 border border-blue-100">
            Why Choose Yatigo
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            Powerful Features
            <br />
            <span className="text-blue-600">For Modern Living</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Experience the future of storage with our cutting-edge features designed for your convenience and security
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden hover:-translate-y-2 bg-white rounded-3xl"
            >
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light text-lg">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-16 text-center text-white">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Experience the Future?</h3>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Join thousands of satisfied customers who trust Yatigo for their storage needs
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-medium text-lg group shadow-xl hover:shadow-2xl transition-all duration-300">
              Start Using Yatigo
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-2 border-gray-400 text-white hover:bg-white/10 px-10 py-4 rounded-2xl font-medium text-lg transition-all duration-300">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
