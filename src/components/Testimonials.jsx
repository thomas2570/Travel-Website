import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Julian Vance',
    story: 'I went looking for adventure but found something much deeper. Standing on that ridge at dawn, I realized that the world is much larger than my problems.',
    image: '/images/user1.png'
  },
  {
    name: 'Elena & Mark',
    story: 'We wanted a luxury escape, but TravelIndia gave us a cultural rebirth. Every detail felt personalized, every moment felt like a scene from a movie.',
    image: '/images/user2.png'
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-brand-charcoal text-brand-beige">
      <div className="container mx-auto px-8">
        <div className="text-center mb-24">
          <span className="text-brand-orange text-xs uppercase tracking-widest font-bold mb-4 block">Voices</span>
          <h2 className="text-5xl md:text-7xl font-display leading-tight">Stories from the Road</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center text-center max-w-lg mx-auto"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-8 border-4 border-brand-orange/20">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover grayscale" />
              </div>
              <p className="text-2xl font-display italic font-light leading-relaxed mb-8">
                "{t.story}"
              </p>
              <span className="text-brand-orange font-bold uppercase tracking-widest text-[10px]">
                {t.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
