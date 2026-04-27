import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Adventure Enthusiast',
    image: '/images/user1.png',
    quote: "The most incredible experience of my life! The attention to detail and choice of locations was flawless.",
  },
  {
    id: 2,
    name: 'The Global Nomads',
    role: 'Frequent Travelers',
    image: '/images/user2.png',
    quote: "Traveling with TravelIndia made our group trip so much easier. Everything was organized perfectly.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 opacity-10 dark:opacity-5">
        <img src="/images/bg.png" alt="" className="w-[800px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
              What Our <span className="text-primary-600">Travelers Say</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Real stories from people who explored the world with us.
            </p>
          </div>
          <div className="flex gap-4">
             {/* Navigation buttons would go here */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass p-10 rounded-[40px] relative"
            >
              <div className="absolute top-10 right-10 text-primary-500/20">
                <Quote size={80} strokeWidth={3} />
              </div>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold dark:text-white">{item.name}</h4>
                  <p className="text-primary-600 font-medium">{item.role}</p>
                </div>
              </div>

              <p className="text-xl italic text-gray-700 dark:text-gray-300 leading-relaxed relative z-10">
                "{item.quote}"
              </p>

              <div className="mt-8 flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
