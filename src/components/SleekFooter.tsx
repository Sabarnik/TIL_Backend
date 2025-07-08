import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Download, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  ArrowRight,
  Clock,
  ChevronRight,
  X
} from 'lucide-react';

const SleekFooter: React.FC = () => {
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);

  const toggleEmergency = () => {
    setIsEmergencyOpen(!isEmergencyOpen);
  };

  const footerLinks = {
    'Products': [
      'Excavators',
      'Cranes',
      'Bulldozers',
      'Loaders',
      'Dump Trucks',
      'Motor Graders'
    ],
    'Services': [
      'Equipment Rental',
      'Maintenance & Repair',
      'Parts & Accessories',
      'Training Programs',
      'Technical Support',
      'Warranty Services'
    ],
    'Company': [
      'About Us',
      'Our History',
      'Leadership Team',
      'Careers',
      'News & Events',
      'Investor Relations'
    ],
    'Support': [
      'Contact Us',
      'Find a Dealer',
      'Service Locator',
      'Documentation',
      'FAQs',
      'Customer Portal'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-slate-950 text-white relative">
      {/* Floating Emergency Button - Right Side */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <motion.button
            onClick={toggleEmergency}
            className={`flex items-center justify-center rounded-full p-4 shadow-lg ${
              isEmergencyOpen 
                ? 'bg-gradient-to-r from-amber-400'
                : 'bg-gradient-to-r from-amber-400 to-orange-500'
            } transition-colors`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Emergency support"
          >
            {isEmergencyOpen ? (
              <X size={20} className="text-white" />
            ) : (
              <Phone size={20} className="text-white" />
            )}
          </motion.button>

          <AnimatePresence>
            {isEmergencyOpen && (
              <motion.div
                className="absolute bottom-full right-0 mb-3 w-72 bg-slate-900 rounded-xl shadow-xl overflow-hidden border border-slate-700"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-white text-lg flex items-center">
                      <Phone size={18} className="mr-2" />
                      <span>Emergency Support</span>
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-slate-300 mb-1">24/7 Technical Assistance</p>
                      <a 
                        href="tel:+18004328911" 
                        className="text-xl font-bold text-white hover:text-red-300 transition-colors block"
                      >
                        +1 (800) HEAVY-911
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm text-slate-400">
                      <Clock size={14} />
                      <span>Available round the clock</span>
                    </div>
                    
                    <div className="pt-2">
                      <p className="text-sm text-slate-300 mb-2">Regional Emergency Contacts:</p>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <a href="tel:+911234567890" className="text-slate-300 hover:text-white flex items-center">
                            <ChevronRight size={14} className="mr-1 text-red-400" />
                            India: +91 123 456 7890
                          </a>
                        </li>
                        <li>
                          <a href="tel:+442012345678" className="text-slate-300 hover:text-white flex items-center">
                            <ChevronRight size={14} className="mr-1 text-red-400" />
                            UK: +44 20 1234 5678
                          </a>
                        </li>
                        <li>
                          <a href="tel:+6561234567" className="text-slate-300 hover:text-white flex items-center">
                            <ChevronRight size={14} className="mr-1 text-red-400" />
                            Singapore: +65 6123 4567
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800 px-5 py-3 border-t border-slate-700">
                  <p className="text-xs text-slate-400">
                    For immediate equipment breakdowns or safety concerns
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="flex items-center space-x-1 mb-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex items-center"
                >
                  <a href="/" className="flex items-center">
                    <img 
                      src="/logo1.png" 
                      alt="TIL India" 
                      className="h-15 w-auto brightness-0 invert"
                    />
                  </a>
                </motion.div>
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                Leading the future of heavy machinery with innovative solutions that power the world's most ambitious projects.
              </p>

              {/* Newsletter Signup */}
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-sm uppercase tracking-wider text-slate-400">Stay Updated</h4>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all"
                  />
                  <motion.button
                    className="bg-gradient-to-br from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 p-2 rounded-lg transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 bg-slate-900 hover:bg-gradient-to-br hover:from-orange-600 hover:to-amber-600 rounded-lg flex items-center justify-center transition-all border border-slate-700"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon size={16} className="text-slate-300 hover:text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-medium mb-4 text-orange-400 text-sm uppercase tracking-wider">{category}</h4>
                  <ul className="space-y-2.5">
                    {links.map((link, linkIndex) => (
                      <motion.li
                        key={link}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 + linkIndex * 0.05 }}
                        viewport={{ once: true, margin: "-20px" }}
                      >
                        <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm hover:underline underline-offset-4 decoration-orange-400">
                          {link}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact & Hotline */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Download Brochure */}
              <motion.button
                className="w-full bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl p-4 mb-6 group"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-slate-800 group-hover:bg-orange-500 p-2 rounded-lg transition-all">
                    <Download size={16} className="text-orange-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-sm">Product Catalog</div>
                    <div className="text-xs text-slate-400">Download PDF (12MB)</div>
                  </div>
                </div>
              </motion.button>

              {/* Quick Contact */}
              <div className="space-y-2.5">
                <h4 className="font-medium text-orange-400 mb-3 text-sm uppercase tracking-wider">Quick Contact</h4>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail size={14} className="text-slate-400" />
                  <a href="mailto:mktg-til@tilindia.com" className="text-slate-300 hover:text-white transition-colors">
                    mktg-til@tilindia.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone size={14} className="text-slate-400" />
                  <a href="tel:+9103366332000" className="text-slate-300 hover:text-white transition-colors">
                    +91 033 6633 2000
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-sm">
                  <MapPin size={14} className="text-slate-400 mt-0.5" />
                  <span className="text-slate-300 hover:text-white transition-colors">
                    Taratolla Road, Garden Reach<br />
                    Kolkata 700 024, West Bengal
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xs text-slate-400">
              © 2025 Tractors India Limited. All rights reserved.
            </div>
            <div className="flex space-x-6 text-xs text-slate-400">
              <motion.a 
                href="#" 
                className="hover:text-white transition-colors hover:underline underline-offset-4 decoration-orange-400" 
                whileHover={{ y: -1 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-white transition-colors hover:underline underline-offset-4 decoration-orange-400" 
                whileHover={{ y: -1 }}
              >
                Terms of Service
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-white transition-colors hover:underline underline-offset-4 decoration-orange-400" 
                whileHover={{ y: -1 }}
              >
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SleekFooter;