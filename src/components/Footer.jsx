import React from 'react';
import { Send, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 pt-24 pb-12 border-t border-gray-100 dark:border-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                T
              </div>
              <span className="text-2xl font-bold tracking-tight dark:text-white">
                Travel<span className="text-primary-500">India</span>
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
              Making your travel dreams come true since 2024. We provide premium travel experiences across India and the world.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 dark:text-white">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Destinations', 'Packages', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 dark:text-white">Destinations</h4>
            <ul className="space-y-4">
              {['Taj Mahal', 'Paris', 'Dubai', 'Goa', 'Manali'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 dark:text-white">Newsletter</h4>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Subscribe to get latest travel updates and offers.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-gray-100 dark:bg-gray-900 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary-500 outline-none dark:text-white"
              />
              <button className="absolute right-2 top-2 bg-primary-600 text-white p-2 rounded-xl hover:bg-primary-700 transition-colors">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2026 TravelIndia. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
