import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Adventure', image: '/images/adventure.png', desc: 'Push your limits' },
  { name: 'Luxury', image: '/images/luxury.png', desc: 'Refined indulgence' },
  { name: 'Culture', image: '/images/culture.png', desc: 'Heritage & stories' },
  { name: 'Solo Travel', image: '/images/solo.png', desc: 'Self discovery' },
];

const EscapeSection = () => {
  return (
    <section className="py-32 bg-brand-beige">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <span className="text-brand-orange text-xs uppercase tracking-widest font-bold mb-4 block">Categories</span>
            <h2 className="text-5xl md:text-7xl font-display text-brand-charcoal leading-tight">
              Find Your <span className="italic font-light">Escape</span>
            </h2>
          </div>
          <p className="text-brand-charcoal/60 max-w-sm mt-8 md:mt-0 leading-relaxed font-light">
            Every traveler seeks something different. Discover the path that resonates with your spirit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative h-[600px] overflow-hidden rounded-[2px] cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-charcoal/20 transition-colors group-hover:bg-brand-charcoal/40" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <h3 className="text-3xl font-display mb-2">{cat.name}</h3>
                <p className="text-sm uppercase tracking-widest text-white/60 group-hover:text-brand-orange transition-colors">
                  {cat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EscapeSection;
