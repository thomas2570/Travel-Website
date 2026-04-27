import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-brand-charcoal">
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <img
          src="/images/hero_v2.png"
          alt="Emotional Travel"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/80 via-brand-charcoal/40 to-transparent" />
      </motion.div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-brand-orange text-xs uppercase tracking-[0.3em] font-bold mb-6">
              Exclusive Journeys
            </span>
            <h1 className="text-7xl md:text-9xl font-display text-brand-beige leading-none mb-8">
              Don’t Just Travel. <br />
              <span className="italic font-light">Experience the World.</span>
            </h1>
            <p className="text-lg md:text-2xl text-brand-beige/60 font-light max-w-2xl mb-12 leading-relaxed">
              Unlock the hidden stories of the earth. We curate immersive, emotionally charged escapes for the soul that seeks more than just a destination.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="btn-luxury bg-brand-orange text-white border-none group">
                Start Your Journey <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </button>
              <button className="px-8 py-4 text-brand-beige uppercase text-xs tracking-widest font-bold flex items-center gap-2 hover:text-brand-orange transition-colors">
                Watch the Film <div className="w-8 h-px bg-brand-orange" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 hidden lg:flex items-center space-x-4">
        <span className="text-brand-beige/30 text-[10px] uppercase tracking-widest vertical-text transform rotate-90 origin-bottom-right">Explore</span>
        <div className="w-px h-24 bg-gradient-to-b from-brand-orange to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
