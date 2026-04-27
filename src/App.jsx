import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EscapeSection from './components/EscapeSection';
import FeaturedJourneys from './components/FeaturedJourneys';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-brand-beige selection:bg-brand-orange/30">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-orange z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        <EscapeSection />

        {/* Transitional Quote */}
        <section className="py-24 bg-brand-beige overflow-hidden">
          <div className="container mx-auto px-8">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="text-3xl md:text-6xl font-display text-brand-charcoal text-center leading-tight max-w-5xl mx-auto"
            >
              "Travel is the only thing you buy that <span className="italic text-brand-orange">makes you richer.</span>"
            </motion.p>
          </div>
        </section>

        <FeaturedJourneys />

        <WhyUs />

        <Testimonials />

        {/* Final CTA Section */}
        <section className="py-32 bg-brand-charcoal relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src="/images/hero_v2.png" alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-6xl md:text-9xl font-display text-brand-beige mb-12 leading-none">
                Your next story <br />
                <span className="italic font-light">is waiting.</span>
              </h2>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-luxury bg-brand-orange border-none px-12 py-6 text-base"
              >
                Apply for a Journey
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
