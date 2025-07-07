
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Smartphone, Users, MapPin, Award, Clock, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '100+', label: 'Locations', icon: MapPin },
    { number: '50K+', label: 'Happy Users', icon: Users },
    { number: '99.9%', label: 'Uptime', icon: Shield },
    { number: '24/7', label: 'Support', icon: Clock }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Advanced encryption, biometric access, and 24/7 monitoring ensure your belongings are always safe and secure.'
    },
    {
      icon: Smartphone,
      title: 'Smart Technology',
      description: 'App-controlled access, real-time notifications, and IoT integration for seamless user experience.'
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'Your data and belongings are protected with end-to-end encryption and strict privacy policies.'
    }
  ];

  return (
    <section id="about" className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-8 border border-blue-100">
              About Yatigo
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
              India's Most
              <br />
              <span className="text-blue-600">Trusted Digital</span>
              <br />
              Locker Platform
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-light">
              Yatigo revolutionizes storage solutions with our network of smart, secure, and accessible digital lockers. 
              We provide safe, sturdy, and secure storage for your valuables.
            </p>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed font-light">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative animate-fade-in delay-300">
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Yatigo Smart Lockers - Secure Digital Storage Solutions" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating elements */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-blue-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">99.9%</div>
                    <div className="text-sm text-gray-600">Security Rating</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <Star className="w-8 h-8 text-green-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">4.9</div>
                    <div className="text-sm text-gray-600">User Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
