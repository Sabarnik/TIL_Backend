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
    <section className="py-8 md:py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 xl:px-20">
        {/* Header */}
        <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.span
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F1B434] to-[#FFE352] text-lg font-bold tracking-tight"
                    initial={{ 
                      opacity: 0,
                      letterSpacing: "-0.05em"
                    }}
                    whileInView={{
                      opacity: 1,
                      letterSpacing: "0.02em",
                    }}
                    transition={{ 
                      duration: 0.8,
                      delay: 0.2,
                      ease: [0.16, 0.77, 0.47, 0.97]
                    }}
                    viewport={{ once: true, margin: "-20%" }}
                  >
                    OUR LEGACY
                  </motion.span>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                    Building India's Infrastructure <span className="text-[#F1B434]">Since 1944</span>
                  </h2>
                  <div className="w-24 h-1.5 bg-gradient-to-r from-[#F1B434] to-[#FFE352] mx-auto rounded-full mb-6"></div>
                  <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-600 leading-relaxed">
                  </p>
                </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch">
          {/* Text Content */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg border border-slate-100 h-full">
              <p className="text-slate-600 mb-4 md:mb-6 leading-relaxed text-sm sm:text-base md:text-lg">
                TIL Limited (formerly Tractors India Limited) was established in 1944 as India's 
                first heavy equipment distributor. Today, as part of the Gainwell Group, we've 
                adopted new values while maintaining our commitment to excellence.
              </p>
              
              <motion.a
                href="/about-us"
                className="flex items-center text-orange-500 font-semibold text-sm sm:text-base md:text-lg mb-6 md:mb-8 group"
                whileHover={{ x: 5 }}
              >
                <span className="group-hover:underline">Read More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transition-transform group-hover:translate-x-1 sm:w-5 sm:h-5">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </motion.a>

              {/* Achievement Grid - Responsive Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    className={`p-3 sm:p-4 md:p-5 rounded-xl ${achievement.color} shadow-sm hover:shadow-md transition-all`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`p-1.5 sm:p-2 rounded-lg ${achievement.color.replace('text', 'bg').replace('100', '200')} bg-opacity-50 flex-shrink-0`}>
                        <achievement.icon size={20} className="opacity-90 sm:w-6 sm:h-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-lg sm:text-xl md:text-2xl font-bold truncate">{achievement.value}</div>
                        <div className="text-xs sm:text-sm opacity-80 leading-tight">{achievement.label}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            className="w-full lg:w-1/2 order-first lg:order-last"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-[500px]">
              <motion.img
                src="/crawler-cranes.png"
                alt="TIL Limited heavy equipment"
                className="w-full h-full object-cover"
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 leading-tight">
                    Engineering Excellence Since 1944
                  </h3>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                    Pioneering India's infrastructure development with world-class equipment
                  </p>
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
