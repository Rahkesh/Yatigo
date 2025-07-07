
import React from 'react';
import { Shield, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Products: [
      { name: 'Mobile Lockers', href: '#mobile-lockers' },
      { name: 'Baggage Lockers', href: '#baggage-lockers' },
      { name: 'Pricing', href: '#pricing' }
    ],
    Company: [
      { name: 'Home', href: '#home' },
      { name: 'About Us', href: '#about' },
      { name: 'Locate Us', href: '#locations' }
    ],
    Support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'Help Center', href: '#help' },
      { name: 'Privacy Policy', href: '#privacy' }
    ]
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Yatigo</span>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              India's first smart locker network providing secure and convenient storage solutions.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-600" />
                <span className="text-gray-600 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-600" />
                <span className="text-gray-600 text-sm">hello@yatigo.in</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-gray-900 mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2024 Yatigo Technologies Pvt. Ltd. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <MapPin className="w-4 h-4" />
              <span>Registered Office: Tech Hub, Bangalore, Karnataka</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
