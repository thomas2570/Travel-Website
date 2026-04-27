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
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-white uppercase bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
            Premium Travel Experience
          </span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-6 leading-tight">
            Explore the World <br />
            <span className="text-accent-400 italic">With Us</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light tracking-wide">
            Discover breathtaking destinations, unique cultures, and unforgettable adventures. Your journey starts here.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto glass p-2 md:p-3 rounded-2xl md:rounded-[32px] shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="flex-1 w-full flex items-center gap-3 px-6 py-4 md:border-r border-gray-200/50 dark:border-gray-700/50">
              <MapPin className="text-accent-500" size={22} />
              <div className="text-left">
                <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest">Location</p>
                <input
                  type="text"
                  placeholder="Where to?"
                  className="bg-transparent border-none outline-none w-full text-gray-800 dark:text-white font-medium placeholder:text-gray-400/60"
                />
              </div>
            </div>
            
            <div className="flex-1 w-full flex items-center gap-3 px-6 py-4 md:border-r border-gray-200/50 dark:border-gray-700/50">
              <Calendar className="text-accent-500" size={22} />
              <div className="text-left">
                <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest">Date</p>
                <input
                  type="text"
                  placeholder="Add dates"
                  className="bg-transparent border-none outline-none w-full text-gray-800 dark:text-white font-medium placeholder:text-gray-400/60"
                />
              </div>
            </div>

            <div className="flex-1 w-full flex items-center gap-3 px-6 py-4">
              <Users className="text-accent-500" size={22} />
              <div className="text-left">
                <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest">Guests</p>
                <input
                  type="text"
                  placeholder="Add guests"
                  className="bg-transparent border-none outline-none w-full text-gray-800 dark:text-white font-medium placeholder:text-gray-400/60"
                />
              </div>
            </div>

            <button className="w-full md:w-auto bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl md:rounded-[24px] flex items-center justify-center gap-3 transition-all font-bold shadow-lg shadow-primary-900/20 group">
              <Search size={20} />
              <span>Search</span>
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
