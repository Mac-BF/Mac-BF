
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AIDemo from './components/AIDemo';
import TrustedExpertise from './components/TrustedExpertise';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Dynamic Background Elements */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(circle at ${50 + Math.sin(scrollY * 0.001) * 20}% ${50 + Math.cos(scrollY * 0.001) * 20}%, #4f46e5 0%, transparent 50%)`
        }}
      />
      <div 
        className="fixed inset-0 pointer-events-none opacity-10"
        style={{
          background: `radial-gradient(circle at ${20 + Math.cos(scrollY * 0.0005) * 30}% ${80 + Math.sin(scrollY * 0.0005) * 30}%, #ec4899 0%, transparent 40%)`
        }}
      />

      <Navbar />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="features" className="py-24">
          <Features />
        </section>

        <section id="ai-demo" className="py-24 bg-slate-900/50">
          <AIDemo />
        </section>

        <section id="about" className="py-24">
          <TrustedExpertise />
        </section>

        <section id="contact" className="py-24 bg-gradient-to-b from-transparent to-indigo-950/30">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
