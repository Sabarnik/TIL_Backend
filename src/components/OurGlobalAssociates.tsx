import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const OurGlobalAssociates = () => {

const ref = useRef(null);
const isInView = useInView(ref, {
  amount: 0.2,   // Use 'amount' instead of 'threshold'
  once: true,
});

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const logos = [
    { name: 'GROVE', src: '/GROOVE.jpg' },
    { name: 'HYSTER', src: '/HYSTER.jpg' },
    { name: 'MANITOWOC', src: '/MANITOWOC.jpg' },
    { name: 'SNORKEL', src: '/SNORKEL.jpg' },
  ];

 return (
  <section className="relative bg-cover bg-center py-16 overflow-hidden">
    {/* Background Image with Fixed Parallax Effect */}
    <div 
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: "url('/global.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        willChange: 'transform',
      }}
    />
    
    {/* Lighter Dark Overlay */}
    <div className="absolute inset-0 bg-black/30 z-0" />
    
    {/* Lighter Gradient Overlay for Better Text Contrast */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40 z-0" />

    {/* Content Container */}
    <div className="relative z-10 max-w-6xl mx-auto px-6">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center"
      >
        {/* Top Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-xs uppercase tracking-wide text-yellow-400 mb-3"
        >
          Customer at its core … since 1944.
        </motion.p>

        {/* Section Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Our <span className="text-yellow-400">Global</span> Associates
        </motion.h2>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="w-12 h-0.5 bg-yellow-400 rounded-full mx-auto mb-5"
        />

        {/* Paragraph */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-base text-white/90 leading-relaxed mb-8"
        >
          We strive to uphold excellence in design and manufacturing by partnering 
          with internationally renowned associates, enabling us to elevate our 
          infra-equipment manufacturing capabilities to a global scale. With our 
          steadfast commitment to quality and customer centricity, we aim to deliver 
          exceptional solutions that meet the demands of the global market.
        </motion.p>

        {/* Logo Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              variants={logoVariants}
              className="flex items-center justify-center p-3 rounded-lg transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="h-10 mx-auto object-contain opacity-100 transition-opacity duration-300"
              />
              <span 
                className="text-white font-semibold text-sm hidden"
                style={{ display: 'none' }}
              >
                {logo.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>

    {/* Optional: Subtle bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/10 to-transparent z-0" />
  </section>
);

};

export default OurGlobalAssociates;
