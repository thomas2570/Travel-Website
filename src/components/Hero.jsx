import React from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-white uppercase bg-primary-600/30 backdrop-blur-sm border border-white/20 rounded-full">
            Premium Travel Experience
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Explore the World <br />
            <span className="text-primary-400">With Us</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto font-medium">
            Discover breathtaking destinations, unique cultures, and unforgettable adventures. Your journey starts here.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto glass p-2 md:p-4 rounded-2xl md:rounded-full shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 md:border-r border-gray-200 dark:border-gray-700">
              <MapPin className="text-primary-500" size={24} />
              <div className="text-left">
                <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase">Location</p>
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="bg-transparent border-none outline-none w-full text-gray-800 dark:text-white font-semibold placeholder:text-gray-400"
                />
              </div>
            </div>
            
            <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 md:border-r border-gray-200 dark:border-gray-700">
              <Calendar className="text-primary-500" size={24} />
              <div className="text-left">
                <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase">Date</p>
                <input
                  type="text"
                  placeholder="When?"
                  className="bg-transparent border-none outline-none w-full text-gray-800 dark:text-white font-semibold placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="flex-1 w-full flex items-center gap-3 px-4 py-3">
              <Users className="text-primary-500" size={24} />
              <div className="text-left">
                <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase">Guests</p>
                <input
                  type="text"
                  placeholder="How many?"
                  className="bg-transparent border-none outline-none w-full text-gray-800 dark:text-white font-semibold placeholder:text-gray-400"
                />
              </div>
            </div>

            <button className="w-full md:w-auto bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-xl md:rounded-full flex items-center justify-center gap-2 transition-all font-bold group">
              <Search size={24} />
              <span className="md:hidden">Search</span>
              <div className="hidden md:flex w-0 group-hover:w-16 overflow-hidden transition-all duration-300 items-center">
                Search
              </div>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/50 animate-bounce">
        <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
        <span className="text-xs font-bold uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
