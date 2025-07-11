import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero3D: React.FC = () => {
  const images = [
    {
      src: '/rough-terrain-crane.png',
      className: 'filter brightness-110 contrast-110 saturate-110'
    },
    {
      src: '/Grove_Range.png',
      className: 'filter brightness-110 contrast-110 saturate-110 '
    },
    {
      src: '/ok3.png',
      className: 'filter brightness-110 contrast-110 saturate-110 '
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Slideshow container */}
      <div className="relative z-20 w-full h-full">
        <AnimatePresence mode="wait">
        <motion.div
  key={currentImageIndex}
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -50 }}
  transition={{ duration: 1 }}
  className="absolute inset-0 flex items-center justify-center"
>
  <div className="relative flex items-center justify-center">
  {/* Subtle blurred shadow behind image */}
  <div
    className="absolute z-0 blur-3xl opacity-40"
    style={{
      width: images[currentImageIndex].src === '/rough-terrain-crane.png' ? 'w-full' : 'w-full',
      height: images[currentImageIndex].src === '/rough-terrain-crane.png' ? '75vh' : '50vh',
      backgroundImage: `url(${images[currentImageIndex].src})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      filter: 'blur(60px)',
    }}
  />
    <img 
      src={images[currentImageIndex].src} 
      alt="Heavy Equipment"
      className={`w-auto object-contain pr-6 relative z-10 ${
        images[currentImageIndex].src === '/rough-terrain-crane.png' 
          ? 'h-[75vh] max-w-[85vw]' 
          : 'h-[60vh] max-w-full'
      } ${images[currentImageIndex].className}`}
      style={{
        paddingLeft: '1.5rem',
        height: images[currentImageIndex].src === '/rough-terrain-crane.png' ? '75vh' : '50vh',
        maxWidth: images[currentImageIndex].src === '/rough-terrain-crane.png' ? '85vw' : '70vw',
        objectFit: 'contain'
      }}
    />
  </div>
</motion.div>
        </AnimatePresence>

        {/* Enhanced shadow effect */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-gradient-to-r from-yellow-500/20 via-transparent to-yellow-500/20 blur-xl rounded-full" />
      </div>

      {/* Floating elements with enhanced animation */}
      <div className="absolute top-1/4 right-10 w-20 h-20 border border-white/20 rotate-45 animate-spin-slow" />
      <div className="absolute bottom-1/3 right-20 w-12 h-12 border border-yellow-500/30 rotate-12 animate-float" />
      <div className="absolute top-1/2 right-32 w-6 h-6 bg-yellow-500/20 rounded-full animate-pulse" />
    </div>
  );
};

export default Hero3D;
