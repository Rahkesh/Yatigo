
import React from 'react';
import { Shield, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Story', href: '#story' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' }
    ],
    Services: [
      { name: 'Mobile Lockers', href: '#products' },
      { name: 'Baggage Lockers', href: '#products' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Enterprise', href: '#enterprise' }
    ],
    Support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Locate Us', href: '#locations' },
      { name: 'Safety Guidelines', href: '#safety' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Refund Policy', href: '#refund' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-20 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold">Yatigo</span>
            </div>
            
            <p className="text-gray-400 mb-8 leading-relaxed font-light text-lg">
              India's first smart locker network providing secure, convenient, and intelligent storage solutions for modern living.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">123 Tech Hub, Bangalore, Karnataka 560001</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">hello@yatigo.com</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-bold mb-6">{category}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group font-light"
                    >
                      {link.name}
                      <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-16 pt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-6 md:mb-0 font-light">
            © 2024 Yatigo Technologies Pvt. Ltd. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 group"
              >
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Security Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-3 bg-gray-800/50 rounded-2xl px-8 py-4 backdrop-blur-sm">
            <Shield className="w-6 h-6 text-green-400" />
            <span className="text-sm text-gray-300 font-light">
              <span className="text-green-400 font-medium">Secured by</span> Bank-Grade Encryption
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
