import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, Award } from 'lucide-react';

const packages = [
  {
    id: 1,
    title: 'Mountain Adventure',
    description: 'Experience the thrill of the Himalayas with our expert guides.',
    image: '/images/camping.png',
    duration: '5 Days / 4 Nights',
    price: '499',
  },
  {
    id: 2,
    title: 'Tropical Bliss',
    description: 'Relax on the golden sands of Goa with luxury beach resorts.',
    image: '/images/beach_fun.png',
    duration: '4 Days / 3 Nights',
    price: '399',
  },
  {
    id: 3,
    title: 'Historic Europe',
    description: 'Journey through the cobblestone streets of ancient cities.',
    image: '/images/sightseeing.png',
    duration: '7 Days / 6 Nights',
    price: '1299',
  },
];

const PackageSection = ({ onBookClick }) => {
  return (
    <section id="packages" className="py-24 bg-gray-50 dark:bg-gray-950/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-4 dark:text-white"
          >
            Curated <span className="text-accent-600 italic tracking-tight">Travel Packages</span>
          </motion.h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-light">
            Choose from our most popular travel packages designed for every kind of traveler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-[500px] rounded-[40px] overflow-hidden cursor-pointer"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 p-8 w-full">
                <div className="flex items-center gap-2 text-primary-400 mb-2">
                  <Clock size={16} />
                  <span className="text-sm font-bold">{pkg.duration}</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{pkg.title}</h3>
                <p className="text-white/70 mb-6 line-clamp-2">{pkg.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-white">
                    <span className="text-xs uppercase font-bold tracking-widest text-white/50">Per Person</span>
                    <p className="text-3xl font-bold">${pkg.price}</p>
                  </div>
                  <button onClick={onBookClick} className="bg-white text-black font-bold px-6 py-3 rounded-2xl hover:bg-primary-600 hover:text-white transition-colors">
                    Explore
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 p-12 glass rounded-[40px]">
           <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center text-primary-600 mb-6">
                <Shield size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2 dark:text-white">Safe Travels</h4>
              <p className="text-gray-500 dark:text-gray-400">Full insurance and travel security on every trip.</p>
           </div>
           <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center text-primary-600 mb-6">
                <Award size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2 dark:text-white">Award Winning</h4>
              <p className="text-gray-500 dark:text-gray-400">Voted #1 travel startup in the region for 3 years.</p>
           </div>
           <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center text-primary-600 mb-6">
                <Clock size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2 dark:text-white">24/7 Support</h4>
              <p className="text-gray-500 dark:text-gray-400">Our team is always there to help you anywhere.</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default PackageSection;
