'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowLeft } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

interface EventDetail {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  location: string;
  address: string;
  organizer: string;
  contactEmail: string;
  contactPhone: string;
  registrationLink?: string;
  highlights?: string[];
}

const EventDetail: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();

  // Event data mapping based on eventId
  const eventsData: Record<string, EventDetail> = {
    '1-til-annual-picnic': {
      id: '1',
      title: 'TIL Annual Picnic',
      description: 'Join us for our annual company picnic at the beautiful Riverside Park. This year we have exciting team-building activities, delicious food, and fun games planned for all employees and their families. The event will feature live music, raffle prizes, and special recognition for our top performers.',
      image: `${__IMAGE_BASE_PATH__}/event1.jpeg`,
      date: '2025-03-14',
      time: '11:00 AM - 4:00 PM',
      location: 'Riverside Park',
      address: '123 Park Avenue, Kolkata, West Bengal 700001',
      organizer: 'TIL HR Department',
      contactEmail: 'events@tilindia.com',
      contactPhone: '+91 9876543210',
      registrationLink: 'https://events.tilindia.com/register/picnic2025',
      highlights: [
        'Team-building activities and games',
        'Live music and entertainment',
        'Delicious buffet lunch',
        'Recognition awards ceremony',
        'Raffle prizes and giveaways'
      ]
    },
    '2-republic-day-2025-celebration': {
      id: '2',
      title: 'Republic Day 2025 Celebration',
      description: 'Celebrate India\'s 76th Republic Day with us at TIL Headquarters. The event will include flag hoisting ceremony, cultural performances by employees, and patriotic songs. Special guest speaker from the Ministry of Heavy Industries will grace the occasion.',
      image: `${__IMAGE_BASE_PATH__}/event2.jpeg`,
      date: '2025-01-26',
      time: '8:00 AM - 12:00 PM',
      location: 'TIL Headquarters',
      address: '456 Industrial Avenue, Delhi 110001',
      organizer: 'TIL Corporate Communications',
      contactEmail: 'corpcomms@tilindia.com',
      contactPhone: '+91 9876543211',
      highlights: [
        'Flag hoisting ceremony',
        'Cultural performances',
        'Patriotic songs',
        'Guest speaker session',
        'Traditional breakfast'
      ]
    },
    '3-til-49th-agm': {
      id: '3',
      title: 'TIL 49th Annual General Meeting',
      description: 'All shareholders are cordially invited to attend the 49th Annual General Meeting of TIL Limited. The meeting will cover the financial results for FY 2024-25, dividend declaration, and other business matters. Board members and senior management will be present to address shareholder queries.',
      image: `${__IMAGE_BASE_PATH__}/event3.jpg`,
      date: '2025-02-15',
      time: '2:00 PM - 5:00 PM',
      location: 'TIL Corporate Office',
      address: '789 Business Tower, Mumbai 400001',
      organizer: 'TIL Company Secretary',
      contactEmail: 'secretarial@tilindia.com',
      contactPhone: '+91 9876543212',
      registrationLink: 'https://investors.tilindia.com/agm-registration',
      highlights: [
        'Financial results presentation',
        'Dividend declaration',
        'Management Q&A session',
        'Voting on resolutions',
        'Shareholder networking'
      ]
    },
    '4-viswakarma-puja-2024': {
      id: '4',
      title: 'Viswakarma Puja 2024',
      description: 'Join us in celebrating Viswakarma Puja across all TIL facilities. This traditional ceremony honors the divine architect and is particularly significant for our manufacturing plants. The puja will be followed by cultural programs and employee feast at each location.',
      image: `${__IMAGE_BASE_PATH__}/event4.jpg`,
      date: '2024-09-17',
      time: '9:00 AM - 2:00 PM',
      location: 'All TIL Facilities',
      address: 'Various locations across India',
      organizer: 'TIL Employee Welfare Committee',
      contactEmail: 'welfare@tilindia.com',
      contactPhone: '+91 9876543213',
      highlights: [
        'Traditional puja ceremony',
        'Machine blessing ritual',
        'Cultural performances',
        'Employee feast',
        'Prize distribution'
      ]
    }
  };

  // Get the current event data based on URL parameter
  const eventData = eventsData[eventId || '1-til-annual-picnic'] || eventsData['1-til-annual-picnic'];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#f8f9fa] to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/events" 
            className="inline-flex items-center text-[#F1B434] font-medium mb-6 hover:underline"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Events
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            {eventData.title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#F1B434] to-[#FFE352] rounded-full mb-6"></div>
        </motion.div>

        {/* Event Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Event Image */}
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={eventData.image}
                alt={eventData.title}
                className="w-full h-auto max-h-[500px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80';
                }}
              />
            </motion.div>

            {/* Event Description */}
            <motion.div
              className="prose max-w-none mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Event Details</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{eventData.description}</p>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">What to Expect</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                {eventData.highlights?.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Event Information</h3>
              
              {/* Date & Time */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2 bg-[#F1B434]/10 rounded-lg">
                  <Calendar className="w-6 h-6 text-[#F1B434]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-1">DATE & TIME</h4>
                  <p className="text-gray-800 font-medium">{formatDate(eventData.date)}</p>
                  <p className="text-gray-600">{eventData.time}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2 bg-[#F1B434]/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#F1B434]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-1">LOCATION</h4>
                  <p className="text-gray-800 font-medium">{eventData.location}</p>
                  <p className="text-gray-600">{eventData.address}</p>
                </div>
              </div>

              {/* Organizer */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2 bg-[#F1B434]/10 rounded-lg">
                  <svg className="w-6 h-6 text-[#F1B434]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-1">ORGANIZER</h4>
                  <p className="text-gray-800 font-medium">{eventData.organizer}</p>
                  <a href={`mailto:${eventData.contactEmail}`} className="text-gray-600 hover:text-[#F1B434] transition-colors block">{eventData.contactEmail}</a>
                  <a href={`tel:${eventData.contactPhone.replace(/\D/g, '')}`} className="text-gray-600 hover:text-[#F1B434] transition-colors block">{eventData.contactPhone}</a>
                </div>
              </div>

              {/* Registration Button */}
              {eventData.registrationLink && (
                <motion.a
                  href={eventData.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-[#F1B434] to-[#FFE352] text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Register Now
                </motion.a>
              )}
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Event Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={`https://source.unsplash.com/random/300x300/?${eventData.title.toLowerCase().replace(/\s+/g, '-')},${item}`}
                  alt={`${eventData.title} photo ${item}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetail;