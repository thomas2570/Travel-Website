import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MapPin, Calendar, Users } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-xl glass rounded-[40px] overflow-hidden shadow-2xl"
        >
          <div className="p-8 md:p-12">
            <button
              onClick={onClose}
              className="absolute top-8 right-8 text-gray-500 hover:text-primary-600 transition-colors"
            >
              <X size={28} />
            </button>

            <h2 className="text-3xl font-bold mb-2 dark:text-white">Book Your Trip</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Fill in the details below and our travel experts will get back to you within 24 hours.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Destination</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-500" size={20} />
                    <input
                      type="text"
                      placeholder="e.g. Taj Mahal"
                      className="w-full bg-gray-100 dark:bg-gray-900 border-none rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary-500 dark:text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-gray-100 dark:bg-gray-900 border-none rounded-2xl py-4 px-6 outline-none focus:ring-2 focus:ring-primary-500 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Travel Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-500" size={20} />
                    <input
                      type="date"
                      className="w-full bg-gray-100 dark:bg-gray-900 border-none rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary-500 dark:text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Number of Guests</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-500" size={20} />
                    <input
                      type="number"
                      placeholder="1"
                      className="w-full bg-gray-100 dark:bg-gray-900 border-none rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary-500 dark:text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Message (Optional)</label>
                <textarea
                  rows="3"
                  placeholder="Tell us about your preferences..."
                  className="w-full bg-gray-100 dark:bg-gray-900 border-none rounded-2xl py-4 px-6 outline-none focus:ring-2 focus:ring-primary-500 dark:text-white"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-2"
              >
                Send Request <Send size={20} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;
