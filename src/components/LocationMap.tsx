import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation, Phone } from 'lucide-react';
import { openExternalLink, initiateCall } from '@/utils/scrollUtils';

const LocationMap = () => {
  const locations = [
    { id: 1, name: 'Delhi Central', address: 'Connaught Place, New Delhi', status: 'Active', lockers: 24 },
    { id: 2, name: 'Mumbai Gateway', address: 'Gateway of India, Mumbai', status: 'Active', lockers: 18 },
    { id: 3, name: 'Bangalore Tech Hub', address: 'Electronic City, Bangalore', status: 'Active', lockers: 32 },
    { id: 4, name: 'Chennai Express', address: 'Central Railway Station, Chennai', status: 'Coming Soon', lockers: 20 }
  ];

  const handleGetDirections = () => {
    openExternalLink('https://maps.google.com/');
  };

  const handleVisitLocation = (locationName: string) => {
    const query = encodeURIComponent(locationName);
    openExternalLink(`https://maps.google.com/maps?q=${query}`);
  };

  const handleContactUs = () => {
    initiateCall('+919876543210');
  };

  return (
    <section id="locations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            Find Us Near You
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Interactive Locker Locations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover Yatigo smart lockers across major cities in India
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <Card className="h-96 border-0 shadow-xl overflow-hidden">
              <div className="relative h-full">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Interactive Map - Yatigo Locker Locations Across India" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-600/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 text-center">
                    <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Map</h3>
                    <p className="text-gray-600">Find the nearest Yatigo locker location</p>
                    <Button onClick={handleGetDirections} className="mt-4 bg-blue-600 hover:bg-blue-700">
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Location List */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Locations</h3>
            {locations.map((location) => (
              <Card key={location.id} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{location.name}</h4>
                      <p className="text-gray-600 text-sm">{location.address}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      location.status === 'Active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {location.status}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {location.lockers} Lockers Available
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => handleVisitLocation(location.address)}
                      className="border-blue-600 text-blue-600 hover:bg-blue-50"
                    >
                      <MapPin className="w-4 h-4 mr-1" />
                      Visit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Card className="border-2 border-dashed border-blue-300 bg-blue-50/50">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-bold text-blue-700 mb-2">Request New Location</h4>
                <p className="text-blue-600 text-sm mb-4">Don't see a location near you?</p>
                <Button 
                  variant="outline" 
                  onClick={handleContactUs}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
