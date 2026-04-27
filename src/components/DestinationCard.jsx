import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const DestinationCard = ({ image, title, location, price, rating, onBookClick }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="text-yellow-400 fill-yellow-400" size={16} />
          <span className="text-sm font-bold text-gray-800 dark:text-white">{rating}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-1 text-primary-500 mb-2">
          <MapPin size={16} />
          <span className="text-xs font-bold uppercase tracking-wider">{location}</span>
        </div>
        <h3 className="text-xl font-bold mb-4 group-hover:text-primary-500 transition-colors dark:text-white">
          {title}
        </h3>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Starting from</span>
            <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">${price}</p>
          </div>
          <button 
            onClick={onBookClick}
            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-2xl group-hover:bg-primary-600 group-hover:text-white transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
