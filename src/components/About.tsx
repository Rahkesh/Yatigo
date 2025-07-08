
import React from 'react';
import { Shield, Zap, Clock, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure & Safe',
      description: 'Advanced biometric locks and 24/7 surveillance ensure your belongings are completely secure.'
    },
    {
      icon: Zap,
      title: 'Instant Access',
      description: 'Quick and seamless access to your stored items with our smart digital interface.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Access your lockers anytime, anywhere across our nationwide network of locations.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Privacy-focused solutions designed with customer convenience and trust in mind.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Yatigo
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Yatigo is a platform of digital smart lockers with hassle-free, secured, and instant access. 
              We connect with our customers through privacy-focused and sturdy locker solutions across India.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Smart Locker Facility - Secure Storage Systems" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">100+</div>
                <div className="text-sm text-gray-600">Active Locations</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
