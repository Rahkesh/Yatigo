
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import About from '@/components/About';
import Features from '@/components/Features';
import LocationMap from '@/components/LocationMap';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ContactIcons from '@/components/ContactIcons';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Products />
        <div id="about">
          <About />
        </div>
        <div id="features">
          <Features />
        </div>
        <LocationMap />
        <div id="faq">
          <FAQ />
        </div>
      </main>
      <Footer />
      <ContactIcons />
    </div>
  );
};

export default Index;
