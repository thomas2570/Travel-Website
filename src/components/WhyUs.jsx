import React from 'react';
import { motion } from 'framer-motion';

const WhyUs = () => {
  return (
    <section className="py-32 bg-brand-beige">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl font-display text-brand-charcoal mb-12 leading-none">
              Real Experiences, <br />
              <span className="italic font-light">Not Just Packages</span>
            </h2>
            <p className="text-xl text-brand-charcoal/60 font-light leading-relaxed mb-12">
              We don't sell travel. We sell moments of clarity, spikes of adrenaline, and the quiet peace of discovering something new within yourself.
            </p>
            
            <div className="space-y-12">
              {[
                { title: 'Curated Journeys', desc: 'Hand-picked experiences that tell a story.' },
                { title: 'Personalized Plans', desc: 'Tailored to your emotional and physical rhythm.' },
                { title: 'Local Connection', desc: 'Beyond the tourist trail, into the heart of cultures.' }
              ].map((item, i) => (
                <div key={item.title} className="flex gap-8">
                  <span className="text-brand-orange font-bold text-sm tracking-tighter">0{i+1}</span>
                  <div>
                    <h4 className="text-lg font-bold text-brand-charcoal mb-2 uppercase tracking-widest">{item.title}</h4>
                    <p className="text-brand-charcoal/50 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
             <motion.div
               initial={{ scale: 0.9, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               transition={{ duration: 1.5 }}
               className="aspect-[4/5] rounded-sm overflow-hidden shadow-luxury"
             >
               <img src="/images/luxury.png" alt="Luxury Travel" className="w-full h-full object-cover" />
             </motion.div>
             <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-brand-orange/10 -z-10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
