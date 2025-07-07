import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Download, Building } from 'lucide-react';

const GlobalPresence: React.FC = () => {
  const offices = [
    { code: 'IN', name: 'India', offices: 5, cities: 'Kolkata, Pune, Delhi, Bangalore, Chennai' },
    { code: 'US', name: 'USA', offices: 1, cities: 'Houston' },
    { code: 'GB', name: 'UK', offices: 1, cities: 'London' },
    { code: 'AE', name: 'UAE', offices: 1, cities: 'Dubai' },
    { code: 'SG', name: 'Singapore', offices: 1, cities: 'Singapore' },
    { code: 'ID', name: 'Indonesia', offices: 1, cities: 'Jakarta' }
  ];

  return (
  <section className="pt-24 pb-20 bg-white"> {/* Updated line */}
  <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            GLOBAL PRESENCE
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            Serving customers worldwide with local expertise
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            TIL Limited's global network ensures world-class support for your projects
          </p>
        </motion.div>

        {/* Offices Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {offices.map((office, index) => (
            <motion.div
              key={office.code}
              className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600">{office.code}</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-1">{office.name}</h3>
              <p className="text-sm text-slate-600">{office.offices} {office.offices === 1 ? 'office' : 'offices'}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-6 py-3 bg-white border border-gray-300 rounded-lg font-medium text-slate-900 hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Show All Offices
          </motion.button>
          <motion.button
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Find Nearest Office
          </motion.button>
        </motion.div>

        {/* Download Brochure */}
        <motion.div
          className="bg-blue-50 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Building className="mx-auto mb-4 text-blue-600" size={40} />
          <h3 className="text-xl font-bold text-slate-900 mb-2">Global Network Brochure</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Download our complete global presence brochure with detailed office locations and contact information
          </p>
          <motion.button
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} />
            <span>Download Brochure</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalPresence;