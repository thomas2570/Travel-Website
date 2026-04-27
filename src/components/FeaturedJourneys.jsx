import React from 'react';
import { motion } from 'framer-motion';

const journeys = [
  {
    title: 'The Silent Peaks',
    location: 'Himalayas, India',
    image: '/images/adventure.png',
    emotion: 'Freedom',
  },
  {
    title: 'Echoes of the Past',
    location: 'Kyoto, Japan',
    image: '/images/culture.png',
    emotion: 'Peace',
  },
  {
    title: 'Infinite Horizons',
    location: 'Namib Desert',
    image: '/images/solo.png',
    emotion: 'Solitude',
  },
];

const FeaturedJourneys = () => {
  return (
    <section className="py-32 bg-brand-charcoal text-brand-beige overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="text-center mb-24">
          <span className="text-brand-orange text-xs uppercase tracking-widest font-bold mb-4 block">Selection</span>
          <h2 className="text-5xl md:text-7xl font-display leading-tight">Featured Journeys</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {journeys.map((j, i) => (
            <motion.div
              key={j.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-8 rounded-sm">
                <img
                  src={j.image}
                  alt={j.title}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-8 left-8">
                  <span className="px-4 py-2 bg-brand-beige/10 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest rounded-full">
                    {j.emotion}
                  </span>
                </div>
              </div>
              <h4 className="text-sm uppercase tracking-widest text-brand-orange font-bold mb-2">{j.location}</h4>
              <h3 className="text-3xl font-display group-hover:italic transition-all">{j.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJourneys;
