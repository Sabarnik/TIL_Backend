import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface EventItem {
  id: number;
  title: string;
  image: string;
  date: string;
  description: string;
  location: string;
}

const Events: React.FC = () => {
  const navigate = useNavigate();
  const events: EventItem[] = [
    {
      id: 1,
      title: 'TIL Annual Picnic',
      image: `${__IMAGE_BASE_PATH__}/event1.jpeg`,
      date: '2025-03-14',
      description: 'Join us for our annual company picnic with fun activities and games',
      location: 'TIL Campus, Kolkata'
    },
    {
      id: 2,
      title: 'Republic Day 2025 Celebration',
      image: `${__IMAGE_BASE_PATH__}/event2.jpeg`,
      date: '2025-02-20',
      description: 'Celebrating India\'s Republic Day with cultural programs',
      location: 'TIL Headquarters, Delhi'
    },
    {
      id: 3,
      title: 'TIL 49th AGM',
      image: `${__IMAGE_BASE_PATH__}/event3.jpg`,
      date: '2025-02-15',
      description: 'Annual General Meeting for shareholders and stakeholders',
      location: 'TIL Corporate Office, Mumbai'
    },
    {
      id: 4,
      title: 'Viswakarma Puja 2024',
      image: `${__IMAGE_BASE_PATH__}/event4.jpg`,
      date: '2025-01-30',
      description: 'Traditional puja ceremony for machinery and tools',
      location: 'All TIL Facilities'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleEventClick = (eventTitle: string) => {
    navigate(`/media/events/${eventTitle.replace(/\s+/g, '-').toLowerCase()}`);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#f8f9fa] to-white">
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
            UPCOMING & PAST EVENTS
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            TIL <span className="text-[#F1B434]">Events</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#F1B434] to-[#FFE352] mx-auto rounded-full mb-6"></div>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-600 leading-relaxed">
            Join us at our upcoming events or browse through our past gatherings and celebrations.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="group cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => handleEventClick(event.title)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} className="text-[#F1B434]" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#F1B434] transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{event.description}</p>
                <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
                  <svg className="w-3 h-3 text-[#F1B434]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </p>
                
                <motion.div
                  className="inline-flex items-center text-sm font-medium text-[#F1B434] group"
                  whileHover={{ x: 5 }}
                >
                  <span className="group-hover:underline">View Event</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;