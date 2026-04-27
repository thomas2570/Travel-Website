import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-charcoal/90 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="relative w-full max-w-2xl bg-brand-beige p-8 md:p-16 rounded-sm shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-8 right-8 text-brand-charcoal hover:text-brand-orange transition-colors"
            >
              <X size={32} strokeWidth={1} />
            </button>

            <div className="text-center mb-12">
              <span className="text-brand-orange text-xs uppercase tracking-widest font-bold mb-4 block">Application</span>
              <h2 className="text-5xl font-display text-brand-charcoal">Apply for a Journey</h2>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/40">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-brand-charcoal/20 py-3 outline-none focus:border-brand-orange transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/40">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-brand-charcoal/20 py-3 outline-none focus:border-brand-orange transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/40">Your Vision for the Trip</label>
                <textarea
                  rows="3"
                  className="w-full bg-transparent border-b border-brand-charcoal/20 py-3 outline-none focus:border-brand-orange transition-colors resize-none"
                ></textarea>
              </div>

              <div className="pt-8">
                <button
                  type="button"
                  className="w-full btn-luxury bg-brand-orange text-white border-none py-6 text-base"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
