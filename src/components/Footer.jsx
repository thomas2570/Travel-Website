import React from 'react';
import { Instagram, Twitter, Facebook, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-beige py-24 border-t border-brand-charcoal/5">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
          <div>
            <h2 className="text-6xl md:text-8xl font-display text-brand-charcoal mb-12 leading-none">
              Your next <br />
              <span className="italic font-light text-brand-orange">story starts here.</span>
            </h2>
            <button className="btn-luxury">
              Contact an Expert <ArrowUpRight className="inline-block ml-2" size={16} />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-brand-charcoal mb-8 opacity-40">Navigation</h4>
              <ul className="space-y-4">
                {['About', 'Destinations', 'Experiences', 'Contact'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm text-brand-charcoal hover:text-brand-orange transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-brand-charcoal mb-8 opacity-40">Follow</h4>
              <ul className="space-y-4">
                {['Instagram', 'Pinterest', 'Vimeo', 'Spotify'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm text-brand-charcoal hover:text-brand-orange transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-charcoal/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-widest text-brand-charcoal/40 font-bold">
            © 2026 Adventure Studio. All rights reserved.
          </p>
          <div className="flex space-x-12">
            <a href="#" className="text-[10px] uppercase tracking-widest text-brand-charcoal/40 hover:text-brand-orange font-bold transition-colors">Privacy</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-brand-charcoal/40 hover:text-brand-orange font-bold transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
