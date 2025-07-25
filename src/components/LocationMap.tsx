
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { openExternalLink } from '@/utils/scrollUtils';

const LocationMap = () => {
  const handleOpenGoogleMaps = () => {
    openExternalLink('https://www.google.com/maps/search/yatigo+smart+lockers');
  };

  const handleGetDirections = () => {
    openExternalLink('https://maps.google.com/?q=smart+lockers+near+me');
  };

  const locations = [
    { city: 'Mumbai', count: '25+ Locations', status: 'Active' },
    { city: 'Delhi', count: '20+ Locations', status: 'Active' },
    { city: 'Bangalore', count: '18+ Locations', status: 'Active' },
    { city: 'Chennai', count: '15+ Locations', status: 'Active' },
    { city: 'Pune', count: '12+ Locations', status: 'Active' },
    { city: 'Hyderabad', count: '10+ Locations', status: 'Active' }
  ];

  return (
    <section id="locations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Yatigo Lockers Near You
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our smart locker network spans across major cities in India, providing convenient and secure storage solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <img 
                src="https://res.cloudinary.com/djuq4h8lm/image/upload/v1752066688/ChatGPT_20Image_20Jul_209_2C_202025_20at_2008_46_54_20AM_jcouub.png" 
                alt="Smart Locker Network - Storage Facility Locations" 
                className="w-full h-80 object-cover rounded-xl"
              />
              
              {/* Interactive buttons overlay */}
              <div className="absolute top-8 right-8 space-y-3">
                <Button 
                  onClick={handleOpenGoogleMaps}
                  className="bg-pink-600 hover:bg-pink-700 text-white rounded-xl shadow-lg"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View on Maps
                </Button>
              </div>
            </div>
          </div>

          {/* Location List */}
          <div className="space-y-6">
            <div className="grid gap-4">
              {locations.map((location, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-pink-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{location.city}</h3>
                        <p className="text-gray-600">{location.count}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600 font-medium">{location.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 space-y-4">
              <Button 
                onClick={handleGetDirections}
                className="w-full bg-pink-600 hover:bg-pink-700 text-white rounded-xl py-3"
              >
                <Navigation className="mr-2 h-5 w-5" />
                Get Directions to Nearest Locker
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
