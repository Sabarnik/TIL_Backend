import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, Building2, Globe } from 'lucide-react';

const AboutSection: React.FC = () => {
  const achievements = [
    { icon: Target, value: '75+', label: 'Years Experience', color: 'bg-blue-100 text-blue-600' },
    { icon: Shield, value: '95%', label: 'Customer Satisfaction', color: 'bg-green-100 text-green-600' },
    { icon: Building2, value: '10K+', label: 'Equipment Delivered', color: 'bg-amber-100 text-amber-600' },
    { icon: Globe, value: '25+', label: 'Countries Served', color: 'bg-purple-100 text-purple-600' }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 text-lg font-bold tracking-tight"
            initial={{ 
              opacity: 0,
              letterSpacing: "-0.05em" // Starts condensed
            }}
            whileInView={{
              opacity: 1,
              letterSpacing: "0.02em", // Slightly expands
            }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 0.77, 0.47, 0.97] // Smooth bounce-out
            }}
            viewport={{ once: true, margin: "-20%" }}
          >
            OUR LEGACY
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
            Building India's Infrastructure <span className="text-orange-500">Since 1944</span>
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
  {/* Text Content */}
  <motion.div 
    className="lg:w-1/2"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 h-full">
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                TIL Limited (formerly Tractors India Limited) was established in 1944 as India's 
                first heavy equipment distributor. Today, as part of the Gainwell Group, we've 
                adopted new values while maintaining our commitment to excellence.
              </p>
              
              <motion.a
                href="/about-us"
                className="flex items-center text-orange-500 font-semibold text-lg mb-8 group"
                whileHover={{ x: 5 }}
              >
                <span className="group-hover:underline">Read More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </motion.a>

              {/* Achievement Grid */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    className={`p-5 rounded-xl ${achievement.color} shadow-sm hover:shadow-md transition-all`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${achievement.color.replace('text', 'bg').replace('100', '200')} bg-opacity-50`}>
                        <achievement.icon size={24} className="opacity-90" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{achievement.value}</div>
                        <div className="text-sm opacity-80">{achievement.label}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
    className="lg:w-1/2"
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="relative rounded-xl overflow-hidden shadow-xl h-full min-h-[100%]">
      <motion.img
        src="/crawler-cranes.png"
        alt="TIL Limited heavy equipment"
        className="w-full h-full object-cover"
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-2">Engineering Excellence Since 1944</h3>
                  <p className="text-slate-200">Pioneering India's infrastructure development with world-class equipment</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;