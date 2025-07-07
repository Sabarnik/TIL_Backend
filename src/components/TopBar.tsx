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
              src="/src/assets/logo.png" 
              alt="TIL India" 
              className="h-10 w-auto brightness-0 invert"
            />
          </motion.a>

          {/* Desktop Contact Info - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <div className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: +91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors">
              <Phone className="w-4 h-4" />
              <span>Hotline: +91 11 2345 6789</span>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Icon - Hidden on small screens */}
            <button className="hidden sm:block p-2 text-gray-300 hover:text-yellow-400 transition-colors">
              <Search className="w-5 h-5" />
            </button>

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
