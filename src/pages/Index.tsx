
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import About from '@/components/About';
import Features from '@/components/Features';
import LocationMap from '@/components/LocationMap';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Products />
        <About />
        <Features />
        <LocationMap />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
