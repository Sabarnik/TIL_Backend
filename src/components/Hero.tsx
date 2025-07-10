import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Hero3D from './Hero3D';

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div 
      className="relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/75  z-10" />

      {/* 3D Model - Hidden on Mobile */}
      {!isMobile && (
        <div 
          className="absolute inset-y-0 z-20 hidden md:block"
          style={{ right: '-10%', left: '45%' }}
        >
          <Hero3D />
        </div>
      )}

      {/* Text Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
        <div className="h-screen flex items-center pt-16 pb-16">
          <div className={`${isMobile ? 'w-full flex justify-center' : 'w-full lg:w-1/2'}`}>
            <motion.div 
              className={`space-y-6 ${isMobile ? 'max-w-none w-full text-center px-4' : 'max-w-2xl'}`}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Brand Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
                className="inline-flex items-center px-4 py-2 bg-black/70 backdrop-blur-md border border-yellow-500 rounded-full text-yellow-400 text-xs font-bold uppercase tracking-widest shadow-xl"
              >
                Tractors India Ltd
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="space-y-2"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                  <motion.span 
                    className="block text-white"
                    style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9)' }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  >
                    HEAVY
                  </motion.span>
                  <motion.span 
                    className="block text-yellow-400"
                    style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9)' }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                  >
                    DUTY
                  </motion.span>
                  <motion.span 
                    className="block text-white text-2xl md:text-3xl lg:text-4xl font-light"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                  >
                    Excellence
                  </motion.span>
                </h1>

                <motion.p 
                  className="text-base md:text-lg lg:text-xl text-white font-light leading-relaxed"
                  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  Precision-engineered machinery for the world's toughest jobs.
                </motion.p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.7 }}
                className={`flex gap-3 ${isMobile ? 'flex-col w-full' : 'flex-col sm:flex-row'}`}
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255, 193, 7, 0.8)" }}
                  whileTap={{ scale: 0.95 }}
                  className={`group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-xl transition-all duration-300 shadow-xl border border-yellow-400/60 ${isMobile ? 'w-full' : ''}`}
                >
                  <span className="text-sm lg:text-base">Explore Products</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.8)", borderColor: "rgba(255, 193, 7, 0.8)" }}
                  whileTap={{ scale: 0.95 }}
                  className={`group inline-flex items-center justify-center px-6 py-3 border-2 border-white/80 bg-black/60 text-white font-semibold rounded-xl transition-all duration-300 backdrop-blur-md hover:text-yellow-400 shadow-xl ${isMobile ? 'w-full' : ''}`}
                >
                  <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm lg:text-base">Watch Demo</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
