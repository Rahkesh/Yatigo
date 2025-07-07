
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Smartphone, Users, MapPin } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '100+', label: 'Locations', icon: MapPin },
    { number: '50K+', label: 'Happy Users', icon: Users },
    { number: '99.9%', label: 'Uptime', icon: Shield },
    { number: '24/7', label: 'Support', icon: Lock }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              About Yatigo
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              India's Most Trusted
              <span className="block text-blue-600">Digital Locker Platform</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Yatigo revolutionizes storage solutions with our network of smart, secure, and accessible digital lockers. 
              We provide safe, sturdy, and secure storage for your valuables with cutting-edge technology and unmatched convenience.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Bank-Grade Security</h3>
                  <p className="text-gray-600">Advanced encryption, biometric access, and 24/7 monitoring ensure your belongings are always safe.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Technology</h3>
                  <p className="text-gray-600">App-controlled access, real-time notifications, and IoT integration for seamless user experience.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Lock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Privacy First</h3>
                  <p className="text-gray-600">Your data and belongings are protected with end-to-end encryption and strict privacy policies.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in delay-300">
            <div className="relative">
              <img 
                src="/api/placeholder/600/500" 
                alt="Yatigo Smart Lockers" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-1">99.9%</div>
              <div className="text-sm text-gray-600">Security Rating</div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="text-3xl font-bold text-green-600 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Available</div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
