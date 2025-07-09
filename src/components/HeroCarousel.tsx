
import React from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { MapPin, Phone } from 'lucide-react';
import { scrollToSection, initiateCall } from '@/utils/scrollUtils';
import Autoplay from 'embla-carousel-autoplay';

const HeroCarousel = () => {
  const slides = [
    {
      title: "Secure Storage at",
      subtitle: "Pilgrim Centers",
      description: "Keep your belongings safe while you focus on your spiritual journey. Our smart lockers are available at major temples and pilgrimage sites across India.",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Pilgrim center with smart lockers"
    },
    {
      title: "Convenient Storage at",
      subtitle: "Railway Stations",
      description: "Travel light and worry-free. Store your luggage securely at railway stations nationwide with our digital smart locker network.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Railway station with smart lockers"
    },
    {
      title: "Smart Storage at",
      subtitle: "Shopping Malls",
      description: "Shop hands-free and enjoy your mall experience. Our lockers provide secure storage while you explore, dine, and shop.",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Shopping mall with smart lockers"
    },
    {
      title: "Reliable Storage at",
      subtitle: "Tourist Attractions",
      description: "Explore India's beautiful destinations without the burden of carrying bags. Secure storage available at popular tourist spots.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Tourist attraction with smart lockers"
    }
  ];

  const handleLocateUs = () => {
    scrollToSection('locations');
  };

  const handleContactUs = () => {
    initiateCall('+917598840724');
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      <Carousel 
        className="w-full" 
        opts={{ 
          align: "start", 
          loop: true 
        }}
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative bg-gradient-to-br from-pink-50 to-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                {/* Content Section */}
                <div className="grid lg:grid-cols-2 gap-10 p-10 lg:p-16">
                  {/* Text Content */}
                  <div className="flex flex-col justify-center space-y-8">
                    <div>
                      <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        {slide.title}
                        <br />
                        <span className="text-pink-600">{slide.subtitle}</span>
                      </h2>
                      <p className="text-xl text-gray-600 leading-relaxed">
                        {slide.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        size="lg" 
                        onClick={handleLocateUs}
                        className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-xl text-lg"
                      >
                        <MapPin className="mr-2 h-6 w-6" />
                        Find Locations
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        onClick={handleContactUs}
                        className="border-2 border-pink-200 text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-xl text-lg"
                      >
                        <Phone className="mr-2 h-6 w-6" />
                        Contact Us
                      </Button>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="relative">
                    <img 
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-96 lg:h-[500px] object-cover rounded-xl shadow-lg"
                    />
                    
                    {/* Locker Overlay Badge */}
                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-md">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-base font-medium text-gray-900">Smart Lockers Available</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation */}
        <CarouselPrevious className="left-6 w-12 h-12" />
        <CarouselNext className="right-6 w-12 h-12" />
      </Carousel>
      
      {/* Slide Indicators */}
      <div className="flex justify-center mt-8 space-x-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className="w-3 h-3 bg-gray-300 rounded-full opacity-50"
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
