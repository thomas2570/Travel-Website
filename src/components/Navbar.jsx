import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Globe, User } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'py-4 bg-brand-beige/80 backdrop-blur-lg border-b border-brand-charcoal/5' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center space-x-12">
          <a href="/" className="text-2xl font-display font-bold tracking-tighter text-brand-charcoal">
            ADVENT<span className="text-brand-orange">URE</span>
          </a>
          <div className="hidden md:flex space-x-8">
            {['Escapes', 'Journeys', 'Our Story', 'Journal'].map((item) => (
              <a key={item} href="#" className="text-xs uppercase tracking-widest font-medium text-brand-charcoal/60 hover:text-brand-orange transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <button className="text-brand-charcoal/80 hover:text-brand-orange transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="text-brand-charcoal/80 hover:text-brand-orange transition-colors">
            <Globe size={20} strokeWidth={1.5} />
          </button>
          <div className="h-4 w-px bg-brand-charcoal/10 mx-2" />
          <button className="hidden sm:block text-xs uppercase tracking-widest font-bold text-brand-charcoal">
            Member
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
