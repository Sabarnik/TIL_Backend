import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // The rest of your component code is already using currentTestimonial and setCurrentTestimonial,
  // so no changes are needed for their usage.

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      position: 'Project Director',
      company: 'Larsen & Toubro',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQHrZL_pxUPJLQ/profile-displayphoto-shrink_400_400/B56ZQ.wuwKGoAk-/0/1736219750055?e=1756944000&v=beta&t=exi09wNmV1il18tNqHLhk4fI8k9_ZptWfiOzGERq0SY',
      rating: 5,
      text: "TIL India's cranes have been instrumental in our metro rail projects across the country. Their reliability and after-sales support are unmatched in the industry.",
      project: 'Chennai Metro Phase II',
      location: 'Tamil Nadu'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      position: 'Operations Head',
      company: 'Gammon India',
      image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      rating: 5,
      text: "We've been using TIL's material handling equipment for over a decade. Their products withstand the toughest Indian job site conditions while maintaining efficiency.",
      project: 'Mumbai Coastal Road',
      location: 'Maharashtra'
    },
    {
      id: 3,
      name: 'Amit Patel',
      position: 'Construction Manager',
      company: 'Shapoorji Pallonji',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: "TIL's crawler cranes have been vital for our high-rise projects. The combination of Indian engineering with global standards gives us confidence in every lift.",
      project: 'Bangalore Tech Park',
      location: 'Karnataka'
    },
    {
      id: 4,
      name: 'Sunita Reddy',
      position: 'Plant Manager',
      company: 'UltraTech Cement',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: "TIL's reach stackers and forklifts have significantly improved our material handling efficiency at all our plants. Their service network covers even our remote locations.",
      project: 'Plant Modernization',
      location: 'Andhra Pradesh'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="pt-24 pb-20 bg-white text-gray-900 relative overflow-hidden"> {/* Updated line */}
  {/* Decorative elements */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute inset-0" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    }} />
  </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold mb-4 tracking-wider uppercase"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            CLIENT TESTIMONIALS
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Trusted by India's Infrastructure Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our valued customers about how TIL's equipment powers India's growth
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 p-3 bg-white border border-gray-200 rounded-full hover:bg-blue-50 transition-all duration-300 z-10 shadow-md hover:shadow-lg"
          >
            <ChevronLeft size={20} className="text-blue-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 p-3 bg-white border border-gray-200 rounded-full hover:bg-blue-50 transition-all duration-300 z-10 shadow-md hover:shadow-lg"
          >
            <ChevronRight size={20} className="text-blue-600" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              className="bg-white rounded-xl p-8 md:p-12 border border-gray-200 shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Customer Info */}
                <div className="text-center lg:text-left">
                  <motion.img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-20 rounded-full mx-auto lg:mx-0 mb-4 object-cover border-2 border-blue-500/30"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                  <h3 className="text-xl font-bold mb-1">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-blue-600 font-medium mb-1 text-sm">{testimonials[currentTestimonial].position}</p>
                  <p className="text-gray-600 text-sm mb-3">{testimonials[currentTestimonial].company}</p>
                  
                  {/* Rating */}
                  <div className="flex justify-center lg:justify-start space-x-1 mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Project Info */}
                  <div className="bg-blue-50 rounded-lg p-3 text-sm border border-blue-100">
                    <div className="font-medium text-blue-600 mb-1">Key Project:</div>
                    <div className="mb-2">{testimonials[currentTestimonial].project}</div>
                    <div className="text-gray-500">{testimonials[currentTestimonial].location}</div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="lg:col-span-2">
                  <Quote size={40} className="text-blue-400 mb-6 mx-auto lg:mx-0 opacity-80" />
                  <motion.blockquote
                    className="text-lg md:text-xl leading-relaxed text-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    "{testimonials[currentTestimonial].text}"
                  </motion.blockquote>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2.5 h-2.5 rounded-full ${
                  index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                animate={{
                  width: index === currentTestimonial ? 24 : 10
                }}
                transition={{ duration: 0.3 }}
            />
            ))}
          </div>
        </div>

        {/* Customer Logos */}
        <motion.div
          className="mt-16 pt-16 border-t border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-gray-500 mb-8 text-sm uppercase tracking-wider">Trusted by India's leading companies</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {['L&T Construction', 'Gammon India', 'Shapoorji Pallonji', 'UltraTech Cement'].map((company, index) => (
              <motion.div
                key={company}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gray-50 rounded-lg p-4 h-16 flex items-center justify-center border border-gray-200 hover:border-blue-200 transition-all shadow-sm">
                  <span className="font-bold text-sm text-gray-700">{company}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;