import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Hero3D from './Hero3D';

const Hero: React.FC = () => {
  return (
    <div 
      className="relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/src/assets/image.jpg')" }}
    >
      {/* Lighter Gradient Overlay for Better Model Visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20 z-10" />

      {/* 3D Model Container - Better Visibility */}
      <div 
        className="absolute inset-0 z-20" // bump z-index above overlay
        style={{ right: '-10%', left: '40%' }}
      >
        <Hero3D />
      </div>

      {/* Main Content - Enhanced for Lighter Background */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
        <div className="h-screen flex items-center pt-16 pb-16">
          <div className="w-full lg:w-1/2">
            <motion.div 
              className="space-y-5 lg:space-y-6 max-w-2xl" // Reduced spacing
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Enhanced Brand Badge - Smaller */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
                className="inline-flex items-center px-4 py-2 bg-black/70 backdrop-blur-md border border-yellow-500/80 rounded-full text-yellow-400 text-xs font-bold uppercase tracking-widest shadow-xl" // Reduced padding and font size
              >
                TRACTORS INDIA LTD
              </motion.div>

              {/* Enhanced Headlines - Reduced Sizes */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="space-y-3" // Reduced spacing
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-none tracking-tight"> {/* Reduced from text-4xl md:text-5xl lg:text-6xl xl:text-7xl */}
                  <motion.span 
                    className="block text-white"
                    style={{ 
                      textShadow: '3px 3px 6px rgba(0,0,0,0.9), 1px 1px 3px rgba(0,0,0,0.8)' 
                    }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  >
                    HEAVY
                  </motion.span>
                  <motion.span 
                    className="block text-yellow-400"
                    style={{ 
                      textShadow: '3px 3px 6px rgba(0,0,0,0.9), 1px 1px 3px rgba(0,0,0,0.8)' 
                    }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                  >
                    DUTY
                  </motion.span>
                  <motion.span 
                    className="block text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light" // Reduced from text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                    style={{ 
                      textShadow: '3px 3px 6px rgba(0,0,0,0.9), 1px 1px 3px rgba(0,0,0,0.8)' 
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                  >
                    Excellence
                  </motion.span>
                </h1>
                
                <motion.p 
                  className="text-base md:text-lg lg:text-xl text-white font-light leading-relaxed" // Reduced from text-lg md:text-xl lg:text-2xl
                  style={{ 
                    textShadow: '2px 2px 4px rgba(0,0,0,0.9), 1px 1px 2px rgba(0,0,0,0.7)' 
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  Precision-engineered machinery for the world's toughest jobs.
                </motion.p>
              </motion.div>

              {/* Enhanced CTA Buttons - Smaller */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.7 }}
                className="flex flex-col sm:flex-row gap-3" // Reduced gap
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 40px rgba(255, 193, 7, 0.8)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-xl transition-all duration-300 shadow-2xl border border-yellow-400/50" // Reduced padding from px-8 py-4
                >
                  <span className="text-sm lg:text-base">Explore Products</span> {/* Reduced from text-base lg:text-lg */}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /> {/* Reduced icon size and margin */}
                </motion.button>
                
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    borderColor: "rgba(255, 193, 7, 0.8)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center px-6 py-3 border-2 border-white/80 bg-black/60 text-white font-semibold rounded-xl transition-all duration-300 backdrop-blur-md hover:text-yellow-400 shadow-xl" // Reduced padding from px-8 py-4
                >
                  <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" /> {/* Reduced icon size and margin */}
                  <span className="text-sm lg:text-base">Watch Demo</span> {/* Reduced from text-base lg:text-lg */}
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Brand Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center z-20"
      >
      </motion.div>
    </div>
  );
};

export default Hero;
