import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DestinationCard from './components/DestinationCard';
import PackageSection from './components/PackageSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

const destinations = [
  {
    id: 1,
    title: 'Taj Mahal',
    location: 'Agra, India',
    price: '199',
    rating: '4.9',
    image: '/images/taj_mahal.png'
  },
  {
    id: 2,
    title: 'Eiffel Tower',
    location: 'Paris, France',
    price: '299',
    rating: '4.8',
    image: '/images/paris.png'
  },
  {
    id: 3,
    title: 'Burj Khalifa',
    location: 'Dubai, UAE',
    price: '249',
    rating: '4.7',
    image: '/images/dubai.png'
  },
  {
    id: 4,
    title: 'Goa Beaches',
    location: 'Goa, India',
    price: '149',
    rating: '4.6',
    image: '/images/goa.png'
  },
  {
    id: 5,
    title: 'Manali Peaks',
    location: 'Himachal, India',
    price: '179',
    rating: '4.9',
    image: '/images/manali.png'
  },
  {
    id: 6,
    title: 'Grand Canyon',
    location: 'Arizona, USA',
    price: '349',
    rating: '4.8',
    image: '/images/hero.png' // Using hero image as fallback for variety
  }
];

import BookingModal from './components/BookingModal';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} onBookClick={() => setIsModalOpen(true)} />
      
      <main>
        <Hero />

        {/* Destinations Section */}
        <section id="destinations" className="py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4 inline-block"
                >
                  Featured Destinations
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl font-bold dark:text-white"
                >
                  Pick Your Next <br />
                  <span className="text-gray-400 dark:text-gray-600">Adventure</span>
                </motion.h2>
              </div>
              <p className="text-gray-500 dark:text-gray-400 max-w-md">
                We've handpicked some of the most beautiful and exciting destinations around the world just for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((dest, index) => (
                <motion.div
                  key={dest.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <DestinationCard {...dest} onBookClick={() => setIsModalOpen(true)} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <PackageSection onBookClick={() => setIsModalOpen(true)} />

        <Testimonials />

        {/* Call to Action */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="relative rounded-[50px] overflow-hidden bg-primary-600 p-12 md:p-24 text-center">
              <div className="absolute inset-0 z-0 opacity-20">
                 <img src="/images/bg.png" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                  Ready to Start Your <br /> Journey?
                </h2>
                <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-medium">
                  Join thousands of travelers who have found their dream vacation with TravelIndia. Book your trip today!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button className="px-10 py-5 bg-white text-primary-600 rounded-full font-bold text-lg hover:scale-105 transition-transform active:scale-95 shadow-2xl">
                    Get Started Now
                  </button>
                  <button className="px-10 py-5 border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all active:scale-95">
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
