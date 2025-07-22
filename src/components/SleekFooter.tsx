import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from "react-icons/fa";
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
  MessageCircle
} from 'lucide-react';

const SleekFooter: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleEmergencyClick = () => {
    window.location.href = 'tel:+18004328911';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/18004328911', '_blank');
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
    <footer className="bg-[#0f1419] text-white relative">
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
        {/* WhatsApp Button - Original Green Color */}
        <motion.button
          onClick={handleWhatsAppClick}
          className="flex items-center justify-center rounded-full p-4 shadow-lg bg-[#25D366] hover:bg-[#128C7E] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="WhatsApp chat"
        >
          <FaWhatsapp size={24} className="text-white" />
        </motion.button>

        {/* Emergency Call Button */}
        <motion.button
          onClick={handleEmergencyClick}
          className="flex items-center justify-center rounded-full p-4 shadow-lg bg-gradient-to-r from-[#F1B434] to-[#FFE352] hover:from-[#F1B434] hover:to-[#FFE352]/90 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Emergency support"
        >
          <Phone size={20} className="text-white" />
        </motion.button>
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
                      src="/TIL/logo1.png" 
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
                    className="flex-1 px-3 py-2 bg-[#1a2233] border border-[#F1B434]/20 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434] transition-all"
                  />
                  <motion.button
                    className="bg-gradient-to-br from-[#F1B434] to-[#FFE352] hover:from-[#F1B434] hover:to-[#FFE352]/90 p-2 rounded-lg transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight size={16} className="text-white" />
                  </motion.button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 bg-[#1a2233] hover:bg-gradient-to-br hover:from-[#F1B434] hover:to-[#FFE352] rounded-lg flex items-center justify-center transition-all border border-[#F1B434]/20"
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
                  <h4 className="font-medium mb-4 text-[#F1B434] text-sm uppercase tracking-wider">{category}</h4>
                  <ul className="space-y-2.5">
                    {links.map((link, linkIndex) => (
                      <motion.li
                        key={link}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 + linkIndex * 0.05 }}
                        viewport={{ once: true, margin: "-20px" }}
                      >
                        <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm hover:underline underline-offset-4 decoration-[#F1B434]">
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
                className="w-full bg-[#1a2233] hover:bg-[#1a2233]/90 border border-[#F1B434]/20 rounded-xl p-4 mb-6 group"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-[#1a2233] group-hover:bg-[#F1B434] p-2 rounded-lg transition-all">
                    <Download size={16} className="text-[#F1B434] group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-sm">Product Catalog</div>
                    <div className="text-xs text-slate-400">Download PDF (12MB)</div>
                  </div>
                </div>
              </motion.button>

              {/* Quick Contact */}
              <div className="space-y-2.5">
                <h4 className="font-medium text-[#F1B434] mb-3 text-sm uppercase tracking-wider">Quick Contact</h4>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail size={14} className="text-[#F1B434]" />
                  <a href="mailto:mktg-til@tilindia.com" className="text-slate-300 hover:text-white transition-colors">
                    mktg-til@tilindia.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone size={14} className="text-[#F1B434]" />
                  <a href="tel:+9103366332000" className="text-slate-300 hover:text-white transition-colors">
                    +91 033 6633 2000
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-sm">
                  <MapPin size={14} className="text-[#F1B434] mt-0.5" />
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
      <div className="border-t border-[#F1B434]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xs text-slate-400">
              © 2025 Tractors India Limited. All rights reserved.
            </div>
            <div className="flex space-x-6 text-xs text-slate-400">
              <motion.a 
                href="#" 
                className="hover:text-white transition-colors hover:underline underline-offset-4 decoration-[#F1B434]" 
                whileHover={{ y: -1 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-white transition-colors hover:underline underline-offset-4 decoration-[#F1B434]" 
                whileHover={{ y: -1 }}
              >
                Terms of Service
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-white transition-colors hover:underline underline-offset-4 decoration-[#F1B434]" 
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