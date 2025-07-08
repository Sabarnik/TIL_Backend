import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Search, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const TopBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      data-component="TopBar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl h-14' 
          : 'bg-gray-900 h-16'
      } border-b border-yellow-500/20`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 h-full">
        <div className="flex items-center justify-between h-full">
          {/* TIL India Logo */}
          <motion.a 
            href="/"
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img 
              src="/logo1.png" 
              alt="TIL India" 
              className="h-15 w-auto brightness-0 invert"
            />
          </motion.a>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Social Media Icons and Search Icon - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-2">
              {/* WhatsApp */}
              <button className="p-2 text-white hover:text-green-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12a11.94 11.94 0 001.48 6.52l-1.48 5.48 5.48-1.48A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12a11.94 11.94 0 00-3.48-8.52zM12 21.5a9.5 9.5 0 01-5.2-1.5l-.4-.25-3.1.83.83-3.1-.25-.4A9.5 9.5 0 012.5 12 9.5 9.5 0 0112 2.5 9.5 9.5 0 0121.5 12 9.5 9.5 0 0112 21.5z" />
                  <path d="M17.5 14.5c-.3 0-1.7-.8-2-1-.3-.2-.5-.2-.7 0-.2.2-.8.9-1 1.1-.2.2-.4.3-.7.1s-1.3-.5-2.5-1.5c-.9-.8-1.5-1.8-1.7-2-.2-.2 0-.3.1-.5.1-.1.2-.3.3-.5.1-.2.1-.3 0-.5-.1-.2-.7-1.7-1-2.3-.3-.6-.6-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.5.2-.7.5s-1 1-1 2.5 1 2.9 1.2 3.1c.2.2 2 3 4.8 4.2 2.8 1.2 2.8.8 3.3.7.5-.1 1.7-.7 1.9-1.3.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.3z" />
                </svg>
              </button>
              
              {/* YouTube */}
              <button className="p-2 text-white hover:text-red-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M23.498 6.186a2.998 2.998 0 00-2.11-2.11C19.668 3.5 12 3.5 12 3.5s-7.668 0-9.388.576a2.998 2.998 0 00-2.11 2.11C.5 7.906.5 12 .5 12s0 4.094.002 5.814a2.998 2.998 0 002.11 2.11c1.72.576 9.388.576 9.388.576s7.668 0 9.388-.576a2.998 2.998 0 002.11-2.11c.002-1.72.002-5.814.002-5.814s0-4.094-.002-5.814zM9.75 15.02V8.98l6.5 3.02-6.5 3.02z" />
                </svg>
              </button>
              
              {/* Facebook */}
              <button className="p-2 text-white hover:text-blue-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.594 1.324-1.326V1.326C24 .593 23.406 0 22.675 0z" />
                </svg>
              </button>
              
              {/* LinkedIn */}
              <button className="p-2 text-white hover:text-blue-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 11-.001-4.124 2.062 2.062 0 010 4.124zM7.119 20.452H3.554V9h3.565v11.452z" />
                </svg>
              </button>

              {/* Search Icon */}
              <button className="p-2 text-gray-300 hover:text-yellow-400 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Get Quote Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 193, 7, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black px-6 py-2 rounded-md font-bold text-sm transition-all duration-200 shadow-lg border border-yellow-400"
            >
              GET QUOTE
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-yellow-400 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-gray-800 border-t border-gray-700"
        >
          <div className="py-4 space-y-3">
            <div className="flex items-center space-x-2 text-gray-300 px-4">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">WhatsApp: +91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 px-4">
              <Phone className="w-4 h-4" />
              <span className="text-sm">Hotline: +91 11 2345 6789</span>
            </div>
            <div className="px-4">
              <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-2 rounded-md font-bold text-sm transition-all">
                GET QUOTE
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TopBar;
