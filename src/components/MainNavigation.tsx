import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  Eye,
  ChevronRight,
  Calendar,
  Construction,
  Ship,
  Truck,
  Wrench,
  Mountain,
  Anchor,
  Building,
  Fuel,
  Train,
  Shield,
  Zap,
  Phone,
  Download,
  Star,
  Package,
  Settings,
  Award,
  Users,
  MessageSquare,
  Mail,
  Linkedin,
  MessageCircle,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AboutMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('company');
  const [activeItem, setActiveItem] = useState(null);

  const primaryCategories = [
    {
      id: 'company',
      name: 'Corporate Profile',
      icon: <Building className="w-4 h-4" />,
      description: 'Our heritage and leadership in construction equipment'
    },
    {
      id: 'leadership',
      name: 'Board of Directors',
      icon: <Users className="w-4 h-4" />,
      description: 'Meet our executive team and board of directors'
    },
    {
      id: 'milestones',
      name: 'Milestones',
      icon: <Shield className="w-4 h-4" />,
      description: 'Key achievements and historical moments'
    },
    {
      id: 'values',
      name: 'Values & Vision',
      icon: <Star className="w-4 h-4" />,
      description: 'Our mission, vision, and core values'
    },
    {
      id: 'corporate',
      name: 'Corporate Social Responsibility',
      icon: <Shield className="w-4 h-4" />,
      description: 'Environmental responsibility and green initiatives'
    },
    {
      id: 'codeofconduct',
      name: 'Code of Conduct',
      icon: <Shield className="w-4 h-4" />,
      description: 'Our ethical guidelines and business practices'
    },
    {
      id: 'facilities',
      name: 'Facilities',
      icon: <Shield className="w-4 h-4" />,
      description: 'Our manufacturing plants and offices'
    }
  ];

  const submenuData = {
    'company': {
      items: [
        {
          name: 'Company History',
          description: 'Explore our 80+ years of engineering excellence',
          image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          name: 'Milestones',
          description: 'Key achievements in our journey',
          image: '/milestones.jpg'
        },
        {
          name: 'Awards & Recognition',
          description: 'Industry accolades and certifications',
          image: '/awards.jpg'
        },
        {
          name: 'Global Presence',
          description: 'Our international footprint and partnerships',
          image: '/global-presence.jpg'
        },
        {
          name: 'Manufacturing Facilities',
          description: 'State-of-the-art production plants',
          image: '/manufacturing.jpg'
        },
        {
          name: 'Quality Standards',
          description: 'Our commitment to excellence',
          image: '/quality-standards.jpg'
        }
      ],
      media: {
        image: '/company-banner.jpg',
        title: 'Our Legacy',
        description: '80+ years of engineering excellence in construction and material handling equipment.',
        cta: 'Learn More',
        features: ['80+ Years Experience', 'Global Presence', 'ISO Certified']
      }
    },
    'leadership': {
      items: [
        {
          name: 'Board of Directors',
          description: 'Meet our governing body and strategic advisors',
          image: '/board-directors.jpg'
        },
        {
          name: 'Executive Team',
          description: 'Our day-to-day leadership team',
          image: '/executive-team.jpg'
        },
        {
          name: 'Management Committee',
          description: 'Department heads and functional leaders',
          image: '/management-committee.jpg'
        },
        {
          name: 'Advisory Board',
          description: 'Industry experts guiding our strategy',
          image: '/advisory-board.jpg'
        }
      ],
      media: {
        image: '/leadership-banner.jpg',
        title: 'Leadership Team',
        description: 'Experienced leaders driving innovation and growth in the construction industry.',
        cta: 'Meet Our Team',
        features: ['Industry Veterans', 'Global Experience', 'Innovation Focus']
      }
    },
    'milestones': {
      items: [
        {
          name: 'Foundation & Early Years',
          description: 'Our humble beginnings and initial successes',
          image: '/foundation.jpg'
        },
        {
          name: 'Key Innovations',
          description: 'Breakthrough products and technologies',
          image: '/innovations.jpg'
        },
        {
          name: 'Expansion Phases',
          description: 'Growth of our operations and facilities',
          image: '/expansion.jpg'
        },
        {
          name: 'Recent Achievements',
          description: 'Our latest accomplishments and awards',
          image: '/achievements.jpg'
        }
      ],
      media: {
        image: '/milestones-banner.jpg',
        title: 'Our Journey',
        description: 'Key milestones that define our growth and success in the industry.',
        cta: 'View Timeline',
        features: ['80+ Years', '100+ Innovations', 'Global Reach']
      }
    },
    'values': {
      items: [
        {
          name: 'Mission Statement',
          description: 'Our purpose and reason for being',
          image: '/mission.jpg'
        },
        {
          name: 'Vision 2030',
          description: 'Our aspirations for the future',
          image: '/vision.jpg'
        },
        {
          name: 'Core Values',
          description: 'Principles that guide our actions',
          image: '/values.jpg'
        },
        {
          name: 'Ethics & Integrity',
          description: 'Our commitment to doing business right',
          image: '/ethics.jpg'
        }
      ],
      media: {
        image: '/values-banner.jpg',
        title: 'Our Values',
        description: 'Committed to excellence, innovation, and sustainable growth.',
        cta: 'Our Philosophy',
        features: ['Customer First', 'Innovation', 'Sustainability']
      }
    },
    'corporate': {
      items: [
        {
          name: 'Environmental Policy',
          description: 'Our commitment to sustainable operations',
          image: '/environmental.jpg'
        },
        {
          name: 'Green Manufacturing',
          description: 'Eco-friendly production processes',
          image: '/green-manufacturing.jpg'
        },
        {
          name: 'Community Impact',
          description: 'Initiatives that benefit local communities',
          image: '/community.jpg'
        },
        {
          name: 'Employee Welfare',
          description: 'Programs for our workforce wellbeing',
          image: '/employee-welfare.jpg'
        }
      ],
      media: {
        image: '/csr-banner.jpg',
        title: 'Sustainability',
        description: 'Leading the way in environmentally responsible manufacturing and operations.',
        cta: 'Green Initiatives',
        features: ['Carbon Neutral', 'Green Tech', 'Eco-Friendly']
      }
    },
    'codeofconduct': {
      items: [
        {
          name: 'Business Ethics',
          description: 'Our standards for ethical business practices',
          image: '/ethics.jpg'
        },
        {
          name: 'Anti-Corruption',
          description: 'Policies against bribery and corruption',
          image: '/anti-corruption.jpg'
        },
        {
          name: 'Compliance Framework',
          description: 'Ensuring adherence to laws and regulations',
          image: '/compliance.jpg'
        }
      ],
      media: {
        image: '/conduct-banner.jpg',
        title: 'Code of Conduct',
        description: 'Our commitment to ethical business practices and corporate governance.',
        cta: 'View Policy',
        features: ['Ethical Standards', 'Compliance', 'Transparency']
      }
    },
    'facilities': {
      items: [
        {
          name: 'Kolkata Headquarters',
          description: 'Our corporate office and main facility',
          image: 'https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          name: 'Manufacturing Plants',
          description: 'State-of-the-art production facilities',
          image: '/plants.jpg'
        },
        {
          name: 'R&D Centers',
          description: 'Innovation hubs driving product development',
          image: '/rd-centers.jpg'
        },
        {
          name: 'Regional Offices',
          description: 'Our presence across India',
          image: '/regional-offices.jpg'
        }
      ],
      media: {
        image: '/facilities-banner.jpg',
        title: 'Our Facilities',
        description: 'World-class manufacturing plants and offices supporting our operations.',
        cta: 'Virtual Tour',
        features: ['Modern Infrastructure', 'Advanced Equipment', 'Sustainable Design']
      }
    }
  };

  const currentSubmenu = submenuData[activeCategory as keyof typeof submenuData];
  const activeMedia = activeItem || currentSubmenu?.media;

  return (
    <>
      <style>{`
        .mega-menu-height {
          height: 60vh;
          max-height: 60vh;
        }
        .scroll-hover::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .scroll-hover::-webkit-scrollbar-track {
          background: transparent;
        }
        .scroll-hover::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .scroll-hover:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 193, 7, 0.3);
        }
        .scroll-hover::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 193, 7, 0.5);
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <div className="bg-[#0f1419]/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20 mega-menu-height overflow-y-auto scroll-hover">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-0">
            
            {/* Left: Categories */}
            <div className="lg:col-span-3 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  About Us
                </h3>
              </div>
              <div className="p-4 pt-0">
                <div className="space-y-1">
                  {primaryCategories.map((category) => (
                    <motion.div
                      key={category.id}
                      className={`cursor-pointer transition-all duration-200 rounded w-full
                        ${activeCategory === category.id
                          ? 'bg-yellow-500/8 shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                          : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                        }`}
                      onMouseEnter={() => {
                        setActiveCategory(category.id);
                        setActiveItem(null);
                      }}
                      whileHover={{ x: 2 }}
                    >
                      <div className="flex items-center space-x-3 px-3 py-2.5">
                        <div className={`p-1.5 rounded flex-shrink-0 ${
                          activeCategory === category.id 
                            ? 'bg-yellow-500 text-black' 
                            : 'bg-gray-700 text-yellow-400'
                        }`}>
                          {category.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`font-semibold text-sm ${
                            activeCategory === category.id ? 'text-yellow-400' : 'text-gray-200'
                          }`}>
                            {category.name}
                          </div>
                          <div className="text-xs text-gray-500 truncate">
                            {category.description}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle: Items */}
            <div className="lg:col-span-6 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Information'}
                </h3>
              </div>
              <div className="p-4 pt-0">
                <ul className="space-y-4">
                  {currentSubmenu?.items.map((item, index) => (
                    <li
                      key={index}
                      onMouseEnter={() => setActiveItem(item)}
                      className="flex items-start gap-3 border border-gray-700/40 p-3 rounded hover:border-yellow-500 transition duration-200 bg-gray-800/20 cursor-pointer"
                    >
                      <div className="pt-1">
                        <ChevronRight className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-100 hover:text-yellow-400 transition">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

        {/* Right: Details */}
            <div className="lg:col-span-3 bg-gradient-to-br from-[#0f1419] to-[#1a2233] min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#1a2233] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  Details
                </h3>
              </div>
              <div className="p-4 pt-0">
                <motion.div
                  key={activeMedia?.title || activeMedia?.name}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 flex flex-col"
                >
                  <div className="relative mb-3 overflow-hidden rounded">
                    <img
                      src={activeMedia?.image}
                      alt={activeMedia?.title || activeMedia?.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-base text-yellow-400 mb-2">
                      {activeMedia?.title || activeMedia?.name}
                    </h4>
                    <p className="text-gray-300 mb-3 leading-relaxed text-xs">
                      {activeMedia?.description}
                    </p>
                    
                    {activeMedia?.features && (
                      <div className="mb-4">
                        <h5 className="font-semibold text-yellow-400 mb-2 text-xs">Key Features:</h5>
                        <div className="space-y-1">
                          {activeMedia.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <Award className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                              <span className="text-gray-300 text-xs">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="space-y-2 sticky bottom-0 bg-[#1a2233]/80 backdrop-blur-sm py-2 -mx-4 px-4">
                      <motion.button 
                        className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black py-2 px-3 rounded font-bold text-xs transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                        whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(255, 193, 7, 0.3)" }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Phone className="w-3 h-3" />
                        <span>{activeMedia?.cta || 'Learn More'}</span>
                      </motion.button>
                      
                      <button 
                        className="w-full border border-yellow-500/50 hover:bg-yellow-500/10 text-yellow-400 py-1.5 px-3 rounded font-semibold text-xs transition-all duration-200 flex items-center justify-center space-x-2"
                        onClick={onClose}
                      >
                        <Download className="w-3 h-3" />
                        <span>Download Brochure</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
const ProductsMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('all-products');
  const [activeProduct, setActiveProduct] = useState(null);

  const primaryCategories = [
    {
      id: 'all-products',
      name: 'TIL Range',
      icon: <Package className="w-4 h-4" />,
      description: 'Reliable lifting and handling for Indian industries'
    },
    {
      id: 'new-arrivals',
      name: 'Manitowoc Range',
      icon: <Zap className="w-4 h-4" />,
      description: 'Heavy-duty cranes with global performance'
    },
    {
      id: 'best-sellers',
      name: 'Hyster TIL Range',
      icon: <Star className="w-4 h-4" />,
      description: 'Reliable forklifts and handling systems from Hyster-TIL'
    },
    {
      id: 'services',
      name: 'Snorkel Range',
      icon: <Settings className="w-4 h-4" />,
      description: 'Aerial work platforms and access equipment by Snorkel'
    }
  ];

  const submenuData = {
    'all-products': {
      products: [
        {
          name: 'Truck Cranes',
          description: 'High-capacity cranes ideal for tall construction sites',
          image: '/truck-cranes.jpeg',
          features: ['Telescopic Boom', 'High Lifting Range', 'On-road Mobility']
        },
        {
          name: 'Pick n Carry Cranes',
          description: 'Mobile cranes suitable for fast on-site operations',
          image: '/pick-n-carry.png',
          features: ['360° Mobility', 'Operator Cabin Comfort', 'Quick Load Handling']
        },
        {
          name: 'Rough Terrain Cranes',
          description: 'Designed for challenging job site conditions',
          image: '/rough-terrain.png',
          features: ['All-Terrain Tyres', 'Four-Wheel Steering', 'Hydraulic Outriggers']
        },
        {
          name: 'Articulating Cranes',
          description: 'Flexible, jointed cranes ideal for tight spaces',
          image: '/articulating.jpg',
          features: ['Knuckle Boom Design', 'Compact Operation', 'Remote Control']
        }
      ],
      media: {
        image: '/articulating.jpg',
        title: 'TIL Product Range',
        description: 'Comprehensive lifting solutions for all your construction needs.',
        cta: 'View All Products',
        features: ['Durable Construction', 'Advanced Safety', 'Easy Maintenance']
      }
    },
    'new-arrivals': {
      products: [
        {
          name: 'Grove Range',
          description: 'Smart lifting solutions engineered for precision and durability',
          image: '/grove-range.png',
          features: ['Advanced Safety Systems', 'Optimized Weight Distribution', 'Digital Load Monitoring']
        },
        {
          name: 'Crawler Cranes',
          description: 'Robust tracked cranes for heavy-duty lifting',
          image: '/crawler-cranes.png',
          features: ['Track Mobility', 'High Stability', 'Heavy Lifting Capacity']
        }
      ],
      media: {
        image: '/crawler-cranes.png',
        title: 'Latest Innovations',
        description: 'Cutting-edge technology and smart features for enhanced productivity.',
        cta: 'Explore New Tech',
        features: ['Smart Telematics', 'Eco-Friendly Powertrain', 'IoT Integration']
      }
    },
    'best-sellers': {
      products: [
        {
          name: 'Forklift Trucks',
          description: 'Efficient material handling for warehouses and logistics',
          image: '/forklift.png',
          features: ['Precision Steering', 'High Load Capacity', 'Compact Turning Radius']
        },
        {
          name: 'Reachstackers',
          description: 'Container handling equipment for ports and yards',
          image: '/reachstackers.png',
          features: ['Extended Reach', 'Twistlock Compatibility', 'High Stack Efficiency']
        }
      ],
      media: {
        image: '/forklift.png',
        title: 'Proven Performers',
        description: 'Most trusted equipment by businesses across India.',
        cta: 'Request Demo',
        features: ['Uptime Guarantee', 'Nationwide Service', 'Spare Part Availability']
      }
    },
    'services': {
      products: [
        {
          name: 'Boom Lifts',
          description: 'Elevated work platforms for maintenance and construction',
          image: '/boomlifts.png',
          features: ['Articulating Arm', 'Vertical and Horizontal Reach', 'Safe Cage Platform']
        }
      ],
      media: {
        image: '/boomlifts.png',
        title: 'Complete Support',
        description: 'Comprehensive after-sales support and services.',
        cta: 'Service Support',
        features: ['Certified Engineers', 'Rapid On-Site Service', 'OEM Spare Assurance']
      }
    }
  };

  const currentSubmenu = submenuData[activeCategory as keyof typeof submenuData];
  const activeMedia = activeProduct || currentSubmenu?.media;

  return (
    <>
      <style>{`
        .mega-menu-height {
          height: 60vh;
          max-height: 60vh;
        }
        .scroll-hover::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .scroll-hover::-webkit-scrollbar-track {
          background: transparent;
        }
        .scroll-hover::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .scroll-hover:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 193, 7, 0.3);
        }
        .scroll-hover::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 193, 7, 0.5);
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <div className="bg-[#0f1419]/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20 mega-menu-height overflow-y-auto scroll-hover">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-0">
            
            {/* Left: Categories - Updated with consistent scroll */}
            <div className="lg:col-span-3 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  Product Categories
                </h3>
              </div>
              <div className="p-4 pt-0">
                <div className="space-y-1">
                  {primaryCategories.map((category) => (
                    <motion.div
                      key={category.id}
                      className={`cursor-pointer transition-all duration-200 rounded w-full
                        ${activeCategory === category.id
                          ? 'bg-yellow-500/8 shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                          : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                        }`}
                      onMouseEnter={() => {
                        setActiveCategory(category.id);
                        setActiveProduct(null);
                      }}
                      whileHover={{ x: 2 }}
                    >
                      <div className="flex items-center space-x-3 px-3 py-2.5">
                        <div className={`p-1.5 rounded flex-shrink-0 ${
                          activeCategory === category.id 
                            ? 'bg-yellow-500 text-black' 
                            : 'bg-gray-700 text-yellow-400'
                        }`}>
                          {category.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`font-semibold text-sm ${
                            activeCategory === category.id ? 'text-yellow-400' : 'text-gray-200'
                          }`}>
                            {category.name}
                          </div>
                          <div className="text-xs text-gray-500 truncate">
                            {category.description}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle: Product Items - Updated with consistent scroll */}
            <div className="lg:col-span-6 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Products'}
                </h3>
              </div>
              <div className="p-4 pt-0">
                <ul className="space-y-4">
                  {currentSubmenu?.products.map((product, index) => (
                    <li
                      key={index}
                      onMouseEnter={() => setActiveProduct(product)}
                      className="flex items-start gap-3 border border-gray-700/40 p-3 rounded hover:border-yellow-500 transition duration-200 bg-gray-800/20 cursor-pointer"
                    >
                      <div className="pt-1">
                        <ChevronRight className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-100 hover:text-yellow-400 transition">
                          {product.name}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">{product.description}</p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {product.features.map((feature, i) => (
                            <span key={i} className="text-xs bg-yellow-500/10 text-yellow-400 px-2 py-0.5 rounded">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Dynamic Media Panel - Updated with consistent scroll */}
            <div className="lg:col-span-3 bg-gradient-to-br from-[#0f1419] to-[#1a2233] min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#1a2233] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  Details
                </h3>
              </div>
              <div className="p-4 pt-0">
                <motion.div
                  key={activeMedia?.title || activeMedia?.name}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 flex flex-col"
                >
                  <div className="relative mb-3 overflow-hidden rounded">
                    <img
                      src={activeMedia?.image}
                      alt={activeMedia?.title || activeMedia?.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-base text-yellow-400 mb-2">
                      {activeMedia?.title || activeMedia?.name}
                    </h4>
                    <p className="text-gray-300 mb-3 leading-relaxed text-xs">
                      {activeMedia?.description}
                    </p>
                    
                    {activeMedia?.features && (
                      <div className="mb-4">
                        <h5 className="font-semibold text-yellow-400 mb-2 text-xs">Key Features:</h5>
                        <div className="space-y-1">
                          {activeMedia.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <Award className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                              <span className="text-gray-300 text-xs">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="space-y-2 sticky bottom-0 bg-[#1a2233]/80 backdrop-blur-sm py-2 -mx-4 px-4">
                      <motion.button 
                        className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black py-2 px-3 rounded font-bold text-xs transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                        whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(255, 193, 7, 0.3)" }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Phone className="w-3 h-3" />
                        <span>{activeProduct ? 'Get Quote' : activeMedia?.cta}</span>
                      </motion.button>
                      
                      <button 
                        className="w-full border border-yellow-500/50 hover:bg-yellow-500/10 text-yellow-400 py-1.5 px-3 rounded font-semibold text-xs transition-all duration-200 flex items-center justify-center space-x-2"
                        onClick={onClose}
                      >
                        <Download className="w-3 h-3" />
                        <span>Download Specs</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const CustomerSupportMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('heavy-industries');
  const [activePoint, setActivePoint] = useState(null);

  const primaryCategories = [
    { id: 'heavy-industries', name: 'Maintenance Contract', icon: <Mountain className="w-4 h-4" /> },
    { id: 'infrastructure', name: 'Parts & Warehouse', icon: <Building className="w-4 h-4" /> },
    { id: 'specialized', name: 'Training', icon: <Shield className="w-4 h-4" /> },
    { id: 'energy', name: 'Service Locations', icon: <Zap className="w-4 h-4" /> }
  ];

  const submenuData = {
    'heavy-industries': {
      points: [
        {
          name: 'Annual Service Contracts',
          description: 'Minimize downtime and ensure preventive care with our comprehensive contracts',
          image: '/maintenance.jpg'
        },
        {
          name: 'Pre-Purchase Consultancy',
          description: 'Expert guidance for optimal equipment investment decisions',
          image: '/consultancy.jpg'
        },
        {
          name: 'Quick Parts Delivery',
          description: 'Wide and responsive supply network for fast delivery',
          image: '/parts-delivery.jpg'
        },
        {
          name: 'Pan-India On-Site Support',
          description: 'Qualified engineers available on call across India',
          image: '/onsite-support.jpg'
        },
        {
          name: 'Rebuild & Refurbishment',
          description: 'Services to extend your equipment lifecycle',
          image: '/rebuild.jpg'
        }
      ],
      media: {
        image: '/maintenance-banner.jpg',
        title: 'Maintenance Contracts',
        description: 'Keep your machines in peak condition with our comprehensive annual maintenance services.',
        cta: 'Download Brochure'
      }
    },
    'infrastructure': {
      points: [
        {
          name: 'Authentic TIL Parts',
          description: 'Genuine parts for safety, reliability, and longer equipment life',
          image: '/authentic-parts.jpg'
        },
        {
          name: 'Real-Time Inventory',
          description: 'Advanced Warehouse Management System for parts tracking',
          image: '/inventory.jpg'
        },
        {
          name: 'Wide Range Availability',
          description: 'Filters, oils, fluids, undercarriage components & more',
          image: '/parts-range.jpg'
        },
        {
          name: 'Expert Support',
          description: 'Trained product specialists for the right-fit solutions',
          image: '/expert-support.jpg'
        },
        {
          name: 'ERP-Enabled Warehouse',
          description: 'Central warehouse at Dankuni for nationwide fulfillment',
          image: '/warehouse.jpg'
        }
      ],
      media: {
        image: '/parts-banner.jpg',
        title: 'Parts & Warehouse',
        description: 'Rapid access to critical parts with optimized logistics and warehouse coverage.',
        cta: 'Check Availability'
      }
    },
    'specialized': {
      points: [
        {
          name: 'Operator Training',
          description: 'Boost ROI & Safety with skilled operators who unlock full machine potential',
          image: '/operator-training.jpg'
        },
        {
          name: 'Hands-On Training',
          description: 'Practical sessions in basic operations and scheduled maintenance',
          image: '/hands-on.jpg'
        },
        {
          name: 'Customized Modules',
          description: 'Training tailored to operator and maintenance staff needs',
          image: '/custom-training.jpg'
        },
        {
          name: 'Downtime Prevention',
          description: 'Minimize downtime through better handling and issue prevention',
          image: '/downtime.jpg'
        },
        {
          name: 'Competitive Edge',
          description: 'Enhanced knowledge, confidence, and efficiency for your team',
          image: '/competitive-edge.jpg'
        }
      ],
      media: {
        image: '/training-banner.jpg',
        title: 'Training Programs',
        description: 'Empower your workforce with certified technical and operator training.',
        cta: 'Training Calendar'
      }
    },
    'energy': {
      points: [
        {
          name: 'Kolkata Service Center',
          description: 'Full-service support for Eastern India operations',
          image: 'https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          name: 'Chennai Service Center',
          description: 'Comprehensive support for Southern region',
          image: 'https://plus.unsplash.com/premium_photo-1697729444936-8c6a6f643312?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          name: 'Delhi NCR Service Center',
          description: 'Strategic support hub for Northern India',
          image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          name: 'Mumbai Service Center',
          description: 'West zone operational support center',
          image: 'https://images.unsplash.com/photo-1580581096469-8afb38d3dbd5?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          name: 'Singrauli Service Depot',
          description: 'Industrial logistics and support in central India',
          image: '/singrauli-service.jpg'
        }
      ],
      media: {
        image: '/locations-banner.jpg',
        title: 'Service Locations',
        description: 'Our nationwide network of service centers and support facilities.',
        cta: 'View Network'
      }
    }
  };

  const currentSubmenu = submenuData[activeCategory as keyof typeof submenuData];
  const activeMedia = activePoint || currentSubmenu?.media;

  return (
    <>
      <style>{`
        .mega-menu-height {
          height: 60vh;
          max-height: 60vh;
        }
        .scroll-hover::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .scroll-hover::-webkit-scrollbar-track {
          background: transparent;
        }
        .scroll-hover::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .scroll-hover:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 193, 7, 0.3);
        }
        .scroll-hover::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 193, 7, 0.5);
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <div className="bg-[#0f1419]/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20 mega-menu-height overflow-y-auto scroll-hover">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-0">
            
            {/* Left: Categories */}
            <div className="lg:col-span-3 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  Support Categories
                </h3>
              </div>
              <div className="p-4 pt-0">
                <div className="space-y-1">
                  {primaryCategories.map((category) => (
                    <motion.div
                      key={category.id}
                      className={`cursor-pointer transition-all duration-200 rounded w-full
                        ${activeCategory === category.id
                          ? 'bg-yellow-500/8 shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                          : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                        }`}
                      onMouseEnter={() => {
                        setActiveCategory(category.id);
                        setActivePoint(currentSubmenu.points[0]);
                      }}
                      whileHover={{ x: 2 }}
                    >
                      <div className="flex items-center space-x-3 px-3 py-2.5">
                        <div className={`p-1.5 rounded flex-shrink-0 ${
                          activeCategory === category.id 
                            ? 'bg-yellow-500 text-black' 
                            : 'bg-gray-700 text-yellow-400'
                        }`}>
                          {category.icon}
                        </div>
                        <span className={`font-semibold text-sm ${
                          activeCategory === category.id ? 'text-yellow-400' : 'text-gray-200'
                        }`}>
                          {category.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle: Point-wise Info - Updated to match Contact Us style */}
            <div className="lg:col-span-6 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Support Info'}
                </h3>
              </div>
              <div className="p-4 pt-0">
                <ul className="space-y-4">
                  {currentSubmenu?.points.map((point, index) => (
                    <li
                      key={index}
                      onMouseEnter={() => setActivePoint(point)}
                      className="flex items-start gap-3 border border-gray-700/40 p-3 rounded hover:border-yellow-500 transition duration-200 bg-gray-800/20 cursor-pointer"
                    >
                      <div className="pt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-yellow-500 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 11.5a2 2 0 100-4 2 2 0 000 4z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10c0 6-7.5 11.5-7.5 11.5S4.5 16 4.5 10a7.5 7.5 0 1115 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-100 hover:text-yellow-400 transition">
                          {point.name}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">{point.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Media Panel */}
            <div className="lg:col-span-3 bg-gradient-to-br from-[#0f1419] to-[#1a2233] min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#1a2233] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  Details
                </h3>
              </div>
              <div className="p-4 pt-0">
                <motion.div
                  key={activeMedia?.title || activeMedia?.name}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 flex flex-col"
                >
                  <div className="relative mb-3 overflow-hidden rounded">
                    <img
                      src={activeMedia?.image}
                      alt={activeMedia?.title || activeMedia?.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-base text-yellow-400 mb-2">
                      {activeMedia?.title || activeMedia?.name}
                    </h4>
                    <p className="text-gray-300 mb-3 leading-relaxed text-xs">
                      {activeMedia?.description}
                    </p>
                    
                    <div className="space-y-2 sticky bottom-0 bg-[#1a2233]/80 backdrop-blur-sm py-2 -mx-4 px-4">
                      <motion.button 
                        className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black py-2 px-3 rounded font-bold text-xs transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Phone className="w-3 h-3" />
                        <span>{activeMedia?.cta || 'Learn More'}</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const MediaMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  console.log('MediaMegamenu component rendering...');
  
  const [activeCategory, setActiveCategory] = useState('blogs');
  const [selectedVideo, setSelectedVideo] = useState(null);
  console.log('Active category:', activeCategory);

  const primaryCategories = [
    {
      id: 'blogs',
      name: 'Blogs',
      icon: <Building className="w-4 h-4" />,
      description: 'Industry insights and company updates'
    },
    {
      id: 'video',
      name: 'Videos',
      icon: <Users className="w-4 h-4" />,
      description: 'Product demos and company highlights'
    },
    {
      id: 'news',
      name: 'News',
      icon: <Shield className="w-4 h-4" />,
      description: 'Latest company announcements'
    },
    {
      id: 'til',
      name: 'TIL@bauma2024',
      icon: <Star className="w-4 h-4" />,
      description: 'Trade show highlights and innovations'
    },
    {
      id: 'events',
      name: 'Events',
      icon: <Calendar className="w-4 h-4" />,
      description: 'Upcoming events and exhibitions'
    },
    {
      id: 'press',
      name: 'Press Release',
      icon: <FileText className="w-4 h-4" />,
      description: 'Official press announcements'
    },
    {
      id: 'downloads',
      name: 'Downloads',
      icon: <Download className="w-4 h-4" />,
      description: 'Brochures and technical documents'
    }
  ];

  const submenuData = {
    'blogs': {
      items: [
        {
          title: 'How to Buy a Reachstacker? 6 Factors to Consider',
          description: 'When comparing reachstackers, the specifications listed on paper are only the first step. If you..',
          image: '/blog1.png',
          link: '/blogs/reachstacker-buying-guide',
          type: 'blog',
          date: '2024-12-15'
        },
        {
          title: '6 Powerful Cranes Used in Modern Construction',
          description: 'Let\'s be real—on any serious construction site, cranes aren\'t treated as just any other machine...',
          image: '/blog2.jpg',
          link: '/blogs/modern-construction-cranes',
          type: 'blog',
          date: '2024-12-10'
        },
        {
          title: '7 Proven Ways Rough Terrain Cranes Power Up Business Efficiency',
          description: 'In the world of construction and heavy lifting, the right equipment isn\'t just helpful—it\'s business critical...',
          image: '/blog3.jpg',
          link: '/blogs/rough-terrain-crane-efficiency',
          type: 'blog',
          date: '2024-12-05'
        },
        {
          title: 'The Ultimate Rough Terrain Cranes Guide in 2025 For Your Next Project',
          description: 'When you picture a Rough Terrain crane, you probably imagine a beastly machine...',
          image: '/blog4.jpg',
          link: '/blogs/rough-terrain-cranes-guide-2025',
          type: 'blog',
          date: '2024-11-28'
        },
      ],
      media: {
        image: '/blog-hero.jpg',
        title: 'Industry Insights',
        description: 'Stay ahead with our expert analysis, equipment guides, and industry best practices.',
        cta: 'Read All Blogs',
        features: ['Expert Analysis', 'Equipment Guides', 'Industry Trends']
      }
    },
    'video': {
      items: [
        {
          title: 'Why Operators Prefer Hyster TIL ReachStackers',
          description: 'What’s it like to operate a Hyster TIL ReachStacker in one of India’s busiest logistics hubs?',
          videoId: 'RDgU-xTDyZc',
          embedUrl: 'https://www.youtube.com/embed/RDgU-xTDyZc',
          thumbnail: '/video1.jpg',
          link: 'https://youtu.be/RDgU-xTDyZc',
          type: 'youtube',
          duration: '4:32'
        },
        {
          title: 'How Hyster-TIL’s Reach Stacker Revolutionizing Material Handling | TIL Limited',
          description: 'Join us as Mr. Rajesh Wazarkar, MD of Hyster India, shares his favorite features of TIL’s new High Series Reach Stacker...',
          videoId: 'ABC123XYZ',
          embedUrl: 'https://www.youtube.com/embed/ABC123XYZ',
          thumbnail: '/video2.jpg',
          link: 'https://youtu.be/wavwFvrs128',
          type: 'youtube',
          duration: '8:15'
        },
        {
          title: 'How TIL Built India’s First Mobile Crane | Factory Tour',
          description: 'In this exclusive conversation with Mr. Jayanta Kumar Patra, Production Head at TIL Limited, we trace the incredible journey of our factory...',
          videoId: 'DEF456GHI',
          embedUrl: 'https://www.youtube.com/embed/DEF456GHI',
          thumbnail: '/video3.jpg',
          link: 'https://youtu.be/omGk8PMTtX8',
          type: 'youtube',
          duration: '6:45'
        },
        {
          title: 'How TIL Hyster ReachStacker Redefines Material Handling ft Ben Newey',
          description: 'Revolutionizing Material Handling! In this exclusive interview, Ben Newey, VP of Sales & Marketing APIC at Hyster-Yale Materials Handling...',
          videoId: 'JKL789MNO',
          embedUrl: 'https://www.youtube.com/embed/JKL789MNO',
          thumbnail: '/video4.jpg',
          link: 'https://youtu.be/aAM7PIMA25k',
          type: 'youtube',
          duration: '5:20'
        }
      ],
      media: {
        image: '/video-hero.jpg',
        title: 'Video Library',
        description: 'Comprehensive collection of product demos, training videos, and customer testimonials.',
        cta: 'Watch All Videos',
        features: ['HD Quality', 'Multiple Languages', 'Mobile Optimized']
      }
    },
    'news': {
      items: [
        {
          title: 'Smart Manufacturing and Enterprises',
          description: 'We will launch new cranes and forklifts in next 4 years',
          image: '/news1.png',
          link: '/news/new-manufacturing-facility',
          type: 'news',
          date: '2024-12-20'
        },
        {
          title: 'NDTV',
          description: 'TIL Forms Strategic Business Unit Supporting Its Defence Portfolio Read mo...',
          image: '/news2.jpg',
          link: '/news/strategic-partnership',
          type: 'news',
          date: '2024-12-18'
        },
        {
          title: 'EPC&I',
          description: 'Built to Meet the Toughest Demands',
          image: '/news3.png',
          link: '/news/innovation-award',
          type: 'news',
          date: '2024-12-15'
        },
        {
          title: 'Equipment Times',
          description: 'Handling The Future! MHE\'s Role in Construction & Infrastructure',
          image: '/news4.png',
          link: '/news/q4-2024-results',
          type: 'news',
          date: '2024-12-12'
        }
      ],
      media: {
        image: '/news-hero.jpg',
        title: 'Latest News',
        description: 'Stay informed with our latest announcements, partnerships, and industry developments.',
        cta: 'Read All News',
        features: ['Breaking News', 'Industry Analysis', 'Market Insights']
      }
    },
    'til': {
      items: [
        {
          title: 'Construction And Architecture Magazine',
          description: 'FUELING INNOVATION AND GROWTH IN INDIA\'S MATERIAL HANDLING AND CONSTRUCTION...',
          image: '/til1.png',
          link: '/til/bauma-2024-highlights',
          type: 'event',
          date: '2024-10-15'
        },
        {
          title: 'Construction And Architecture Magazine',
          description: 'TIL: A LEGACY OF INNOVATION AND STRATEGIC GROWTH IN MATERIAL HANDLING AT BA...',
          image: '/til2.jpeg',
          link: '/til/smart-crane-controls',
          type: 'event',
          date: '2024-10-12'
        },
        {
          title: 'BAUMA 2024',
          description: 'We are committed to increasing local manufacturing in India.',
          image: '/til3.jpg',
          link: '/til/sustainability-initiatives',
          type: 'event',
          date: '2024-10-10'
        },
        {
          title: 'Construction Week',
          description: 'Bauma ConExpo India 2024: TIL debuts Snorkel A62JRT articulating boom lift',
          image: '/til4.jpg',
          link: '/til/customer-experience-center',
          type: 'event',
          date: '2024-10-08'
        }
      ],
      media: {
        image: '/til-hero.jpg',
        title: 'TIL@bauma2024',
        description: 'Discover innovations and highlights from Bauma 2024 and our ongoing technology initiatives.',
        cta: 'Explore TIL',
        features: ['Innovation Showcase', 'Live Demos', 'Expert Talks']
      }
    },
    'events': {
      items: [
        {
          title: 'TIL Annual Picnic',
          image: '/event1.jpeg',
          link: '/events/conexpo-2025',
          date: '2025-03-14',
        },
        {
          title: 'Republic day 2025 celebration at TIL',
          image: '/event2.jpeg',
          link: '/events/operator-training-workshop',
    
          date: '2025-02-20',
        },
        {
          title: 'TIL 49th AGM',
          image: '/event3.jpg',
          link: '/events/infrastructure-summit',

          date: '2025-02-15',
        },
        {
          title: 'Viswakarma Puja 2024',
          image: '/event4.jpg',
          link: '/events/customer-appreciation',
          date: '2025-01-30',
        }
      ],
      media: {
        image: '/events-hero.jpg',
        title: 'Upcoming Events',
        description: 'Join us at our upcoming events, trade shows, and training sessions worldwide.',
        cta: 'View All Events',
        features: ['Global Events', 'Expert Sessions', 'Networking']
      }
    },
    'press': {
      items: [
        {
          title: 'TIL Limited Reports Record Q4 2024 Performance',
          description: 'Official press release detailing financial results and growth milestones.',
          image: '/press1.jpg',
          link: '/press/q4-2024-performance',
          type: 'press',
          date: '2024-12-22'
        },
        {
          title: 'New CEO Appointment Announcement',
          description: 'Leadership transition and strategic vision for the company\'s future.',
          image: '/press2.jpg',
          link: '/press/new-ceo-appointment',
          type: 'press',
          date: '2024-12-20'
        },
        {
          title: 'Environmental Sustainability Initiative Launch',
          description: 'Commitment to carbon neutrality and sustainable manufacturing practices.',
          image: '/press3.jpg',
          link: '/press/sustainability-initiative',
          type: 'press',
          date: '2024-12-18'
        },
        {
          title: 'International Expansion Plans Revealed',
          description: 'Strategic expansion into new markets and establishment of regional offices.',
          image: '/press4.jpg',
          link: '/press/international-expansion',
          type: 'press',
          date: '2024-12-15'
        }
      ],
      media: {
        image: '/press-hero.jpg',
        title: 'Press Releases',
        description: 'Official company announcements, press statements, and media resources.',
        cta: 'View All Press',
        features: ['Official News', 'Media Kit', 'Contact Info']
      }
    },
    'downloads': {
      items: [
        {
          title: 'Product Catalog 2025',
          description: 'Comprehensive catalog featuring our complete range of construction equipment.',
          image: '/download1.jpg',
          link: '/downloads/product-catalog-2025.pdf',
          type: 'catalog',
          fileSize: '15.2 MB',
          fileType: 'PDF'
        },
        {
          title: 'Crane Safety Manual',
          description: 'Essential safety guidelines and best practices for crane operation.',
          image: '/download2.jpg',
          link: '/downloads/crane-safety-manual.pdf',
          type: 'manual',
          fileSize: '8.7 MB',
          fileType: 'PDF'
        },
        {
          title: 'Technical Specifications Sheet',
          description: 'Detailed technical specifications for all equipment models.',
          image: '/download3.jpg',
          link: '/downloads/technical-specifications.pdf',
          type: 'specifications',
          fileSize: '12.4 MB',
          fileType: 'PDF'
        },
        {
          title: 'Maintenance Guidelines',
          description: 'Comprehensive maintenance schedules and procedures for optimal performance.',
          image: '/download4.jpg',
          link: '/downloads/maintenance-guidelines.pdf',
          type: 'guide',
          fileSize: '6.8 MB',
          fileType: 'PDF'
        }
      ],
      media: {
        image: '/downloads-hero.jpg',
        title: 'Downloads',
        description: 'Access our comprehensive library of brochures, manuals, and technical documents.',
        cta: 'Browse All Downloads',
        features: ['Product Specs', 'User Manuals', 'Technical Guides']
      }
    }
  };

  const currentSubmenu = submenuData[activeCategory as keyof typeof submenuData];
  console.log('Current submenu data:', currentSubmenu);

  // Safe hover handler with debouncing
  const handleCategoryHover = (categoryId: string) => {
    console.log('Category hovered:', categoryId);
    try {
      setActiveCategory(categoryId);
      console.log('Category set successfully to:', categoryId);
    } catch (error) {
      console.error('Error setting category on hover:', error);
    }
  };

  // Video modal handler
  const openVideoModal = (item: any) => {
    setSelectedVideo(item);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  console.log('Rendering MediaMegamenu with activeCategory:', activeCategory);

 return (
    <>
      <style>{`
        .mega-menu-height {
          height: 60vh;
          max-height: 60vh;
        }
        .scroll-hover::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .scroll-hover::-webkit-scrollbar-track {
          background: transparent;
        }
        .scroll-hover::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .scroll-hover:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 193, 7, 0.3);
        }
        .scroll-hover::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 193, 7, 0.5);
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <div className="bg-[#0f1419]/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20 mega-menu-height overflow-y-auto scroll-hover">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-0">
            
            {/* Left: Categories */}
            <div className="lg:col-span-3 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  Media Center
                </h3>
              </div>
              <div className="p-4 pt-0">
                <div className="space-y-1">
                  {primaryCategories.map((category) => (
                    <motion.div
                      key={category.id}
                      className={`cursor-pointer transition-all duration-200 rounded w-full
                        ${activeCategory === category.id
                          ? 'bg-yellow-500/10 shadow-[0_0_15px_rgba(255,193,7,0.1)] border border-yellow-500/30'
                          : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                        }`}
                      onMouseEnter={() => setActiveCategory(category.id)}
                      whileHover={{ x: 2 }}
                    >
                      <div className="flex items-center space-x-3 px-3 py-3">
                        <div className={`p-2 rounded-lg flex-shrink-0 transition-all duration-200 ${
                          activeCategory === category.id 
                            ? 'bg-yellow-500 text-black shadow-lg' 
                            : 'bg-gray-700 text-yellow-400'
                        }`}>
                          {category.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`font-semibold text-sm transition-colors duration-200 ${
                            activeCategory === category.id ? 'text-yellow-400' : 'text-gray-200'
                          }`}>
                            {category.name}
                          </div>
                          <div className="text-xs text-gray-500 truncate mt-0.5">
                            {category.description}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle: Content Items */}
            <div className="lg:col-span-6 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Content'}
                </h3>
              </div>
              <div className="p-4 pt-0">
                {activeCategory === 'press' ? (
                  // Special Press Release Table Layout
                  <div className="bg-[#1c2128] border border-gray-700/40 rounded-lg overflow-hidden">
                    {/* Table Header */}
                    <div className="grid grid-cols-12 bg-yellow-500 text-black font-bold text-sm">
                      <div className="col-span-8 px-4 py-3 border-r border-yellow-600">
                        Details
                      </div>
                      <div className="col-span-4 px-4 py-3">
                        Actions
                      </div>
                    </div>
                    
                    {/* Table Rows */}
                    <div className="divide-y divide-gray-700/40">
                      {currentSubmenu?.items.map((item, index) => (
                        <div key={index} className="grid grid-cols-12 hover:bg-gray-700/20 transition-colors duration-200">
                          <div className="col-span-8 px-4 py-3 border-r border-gray-700/40">
                            <div className="text-sm font-medium text-gray-200 mb-1">
                              {item.title}
                            </div>
                            {item.description && (
                              <div className="text-xs text-gray-400 leading-relaxed">
                                {item.description}
                              </div>
                            )}
                          </div>
                          <div className="col-span-4 px-4 py-3 flex items-center space-x-2">
                            <button className="flex items-center space-x-1 text-yellow-400 hover:text-yellow-300 text-xs transition-colors duration-200">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              <span>View</span>
                            </button>
                            <span className="text-gray-500">|</span>
                            <button className="flex items-center space-x-1 text-yellow-400 hover:text-yellow-300 text-xs transition-colors duration-200">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <span>Download Document</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Regular Card Layout for Other Sections
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentSubmenu?.items.map((item, index) => (
                      <div
                        key={index}
                        className="group bg-[#1c2128] border border-gray-700/40 rounded-lg overflow-hidden hover:border-yellow-500/60 hover:shadow-lg transition-all duration-300"
                      >
                        {item.type === 'youtube' ? (
                          // YouTube Video Card
                          <div 
                            className="cursor-pointer h-full"
                            onClick={() => openVideoModal(item)}
                          >
                            <div className="h-32 overflow-hidden relative">
                              <img 
                                src={item.thumbnail} 
                                alt={item.title} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                style={{ objectPosition: 'top center' }}
                              />
                              
                              {/* Play Button Overlay */}
                              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-all duration-300">
                                <div className="bg-red-600 hover:bg-red-700 rounded-full p-3 transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                                  </svg>
                                </div>
                              </div>
                              
                              {/* Duration Badge */}
                              {item.duration && (
                                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                  {item.duration}
                                </div>
                              )}
                              
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                            </div>
                            <div className="p-3">
                              <h4 className="text-sm font-semibold text-yellow-400 group-hover:text-yellow-300 mb-1 transition-colors duration-200">
                                {item.title}
                              </h4>
                              <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ) : (
                          // Regular Content Card
                          <a href={item.link} className="block h-full">
                            <div className="h-32 overflow-hidden relative">
                              <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                style={{ objectPosition: 'top center' }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                              
                              {/* Content Type Badge */}
                              {item.type && (
                                <div className="absolute top-2 left-2 bg-yellow-500 text-black text-xs px-2 py-1 rounded font-semibold uppercase">
                                  {item.type}
                                </div>
                              )}
                              
                              {/* Date Badge */}
                              {item.date && (
                                <div className="absolute top-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                  {new Date(item.date).toLocaleDateString()}
                                </div>
                              )}
                              
                              {/* File Info for Downloads */}
                              {item.fileSize && (
                                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                  {item.fileType} • {item.fileSize}
                                </div>
                              )}
                            </div>
                            <div className="p-3">
                              <h4 className="text-sm font-semibold text-yellow-400 group-hover:text-yellow-300 mb-1 transition-colors duration-200">
                                {item.title}
                              </h4>
                              <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                                {item.description}
                              </p>
                              {item.location && (
                                <p className="text-xs text-yellow-500 mt-1">
                                  📍 {item.location}
                                </p>
                              )}
                            </div>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Media Panel - remains the same */}
            <div className="lg:col-span-3 bg-gradient-to-br from-[#0f1419] to-[#1a2233] min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#1a2233] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  Highlights
                </h3>
              </div>
              <div className="p-4 pt-0">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  <div className="relative mb-4 overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={currentSubmenu?.media.image}
                      alt={currentSubmenu?.media.title}
                      className="w-full h-40 object-cover"
                      style={{ objectPosition: 'top center' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-2 left-3 right-3">
                      <h4 className="font-bold text-white text-sm">
                        {currentSubmenu?.media.title}
                      </h4>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {currentSubmenu?.media.description}
                    </p>
                    
                    <div className="mb-6">
                      <h5 className="font-semibold text-yellow-400 mb-3 text-sm">Key Features:</h5>
                      <div className="space-y-2">
                        {currentSubmenu?.media.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Award className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-3 sticky bottom-0 bg-[#1a2233]/80 backdrop-blur-sm py-3 -mx-4 px-4">
                      <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black py-2.5 px-4 rounded-lg font-bold text-sm transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg">
                        <Eye className="w-4 h-4" />
                        <span>{currentSubmenu?.media.cta}</span>
                      </button>
                      
                      <button className="w-full border border-yellow-500/50 hover:bg-yellow-500/10 text-yellow-400 py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span>Download Resources</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Video Modal - remains the same */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeVideoModal}>
          <div className="bg-[#1c2128] rounded-lg overflow-hidden max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <div className="relative">
              <iframe 
                width="100%" 
                height="400" 
                src={selectedVideo.embedUrl}
                title={selectedVideo.title}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="w-full"
              />
              <button 
                className="absolute top-2 right-2 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 transition-all duration-200"
                onClick={closeVideoModal}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-yellow-400 mb-2">{selectedVideo.title}</h3>
              <p className="text-gray-300 text-sm">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};






const CareersMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('life');
  const [activePoint, setActivePoint] = useState<{name: string, description: string, image: string} | null>(null);

  const primaryCategories = [
    { id: 'life', name: 'Life @TIL', icon: <Mountain className="w-4 h-4" /> },
    { id: 'team', name: 'Meet our Team', icon: <Building className="w-4 h-4" /> },
    { id: 'vacant', name: 'Vacancies', icon: <Shield className="w-4 h-4" /> },
    { id: 'equal', name: 'Equal Opportunity Employer', icon: <Zap className="w-4 h-4" /> }
  ];

  const submenuData = {
    'life': {
      points: [
        {
          name: 'Inclusive Culture',
          description: 'Collaborative work environment that values diversity',
          image: '/culture.jpg'
        },
        {
          name: 'Flexible Work',
          description: 'Hybrid options and adaptable working hours',
          image: '/flexible-work.jpg'
        },
        {
          name: 'Wellness Programs',
          description: 'Initiatives supporting mental and physical health',
          image: '/wellness.jpg'
        },
        {
          name: 'Recognition',
          description: 'Programs celebrating employee achievements',
          image: '/recognition.jpg'
        }
      ],
      media: {
        image: '/life.jpg',
        title: 'Life @TIL',
        description: 'Work-life balance, diversity, and innovation thrive in our dynamic culture.',
        cta: 'Explore Culture'
      }
    },
    'team': {
      members: [
        {
          name: 'Pinaki Niyogy',
          title: 'Chief Executive Officer',
          image: '/pinaki.jpg'
        },
        {
          name: 'Arvind Rishi',
          title: 'AVP- Sales & After Market',
          image: '/arvind.jpeg'
        },
        {
          name: 'Mr. Kanhaiya Gupta',
          title: 'Chief Financial Officer',
          image: '/Kanhaiya.png'
        },
        {
          name: 'Ms. Shamita Nandi',
          title: 'Chief Human Resource Officer',
          image: '/Shamita.png'
        },
        {
          name: 'Chandrani Chatterjee',
          title: 'Company Secretary',
          image: '/chandrani.jpg'
        },
        {
          name: 'Mr. Saikat Bagchi',
          title: 'Head - Supply Chain & Commercial',
          image: '/saiket.png'
        },
        {
          name: 'Rishabh P Nair',
          title: 'Head Of Brand, Content & PR',
          image: '/Risabh.png'
        }
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&h=240&fit=crop&crop=center',
        title: 'Meet Our Team',
        description: 'Get to know the passionate minds building the future of infrastructure.',
        cta: 'Meet the Team'
      }
    },
    'vacant': {
      points: [
        {
          name: 'Open Roles',
          description: 'Positions across engineering, sales, and operations',
          image: '/open-roles.jpg'
        },
        {
          name: 'Campus Programs',
          description: 'Placement and intern opportunities for students',
          image: '/campus.jpg'
        },
        {
          name: 'Hiring Process',
          description: 'Quick and transparent recruitment journey',
          image: '/hiring.jpg'
        },
        {
          name: 'Career Growth',
          description: 'Structured learning and development paths',
          image: '/growth.jpg'
        }
      ],
      media: {
        image: '/job.jpg',
        title: 'Current Openings',
        description: "Explore vacancies and apply to be a part of TIL's next chapter.",
        cta: 'View Jobs'
      }
    },
    'equal': {
      points: [
        {
          name: 'Diversity & Inclusion',
          description: 'Commitment across all departments and levels',
          image: '/diversity.jpg'
        },
        {
          name: 'Zero Tolerance',
          description: 'Against discrimination or bias of any kind',
          image: '/zero-tolerance.jpg'
        },
        {
          name: 'Women Leadership',
          description: 'Initiatives to promote gender equality',
          image: '/women-leadership.jpg'
        },
        {
          name: 'Accessibility',
          description: 'Inclusive workplace policies and facilities',
          image: '/accessibility.jpg'
        }
      ],
      media: {
        image: '/equal.jpg',
        title: 'Equal Opportunity',
        description: 'We are committed to an inclusive, safe, and diverse work environment.',
        cta: 'Our Policy'
      }
    }
  };

  const currentSubmenu = submenuData[activeCategory as keyof typeof submenuData];
  const activeMedia = activePoint || currentSubmenu?.media;

  return (
    <>
      <style>{`
        .mega-menu-height {
          height: 60vh;
          max-height: 60vh;
        }
        .scroll-hover::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .scroll-hover::-webkit-scrollbar-track {
          background: transparent;
        }
        .scroll-hover::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .scroll-hover:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 193, 7, 0.3);
        }
        .scroll-hover::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 193, 7, 0.5);
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <div className="bg-[#0f1419]/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20 mega-menu-height overflow-y-auto scroll-hover">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-0">
            
            {/* Left: Categories */}
            <div className="lg:col-span-3 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  Career Focus
                </h3>
              </div>
              <div className="p-4 pt-0">
                <div className="space-y-1">
                  {primaryCategories.map((category) => (
                    <motion.div
                      key={category.id}
                      className={`cursor-pointer transition-all duration-200 rounded w-full
                        ${activeCategory === category.id
                          ? 'bg-yellow-500/8 shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                          : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                        }`}
                      onMouseEnter={() => {
                        setActiveCategory(category.id);
                        if (category.id !== 'team') {
                          setActivePoint(currentSubmenu.points[0]);
                        }
                      }}
                      whileHover={{ x: 2 }}
                    >
                      <div className="flex items-center space-x-3 px-3 py-2.5">
                        <div className={`p-1.5 rounded flex-shrink-0 ${
                          activeCategory === category.id 
                            ? 'bg-yellow-500 text-black' 
                            : 'bg-gray-700 text-yellow-400'
                        }`}>
                          {category.icon}
                        </div>
                        <span className={`font-semibold text-sm ${
                          activeCategory === category.id ? 'text-yellow-400' : 'text-gray-200'
                        }`}>
                          {category.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle: Content */}
            <div className="lg:col-span-6 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Details'}
                </h3>
              </div>
              <div className="p-4 pt-0">
                {activeCategory === 'team' ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {currentSubmenu?.members?.map((member, index) => (
                      <div key={index} className="text-center">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-20 h-20 mx-auto rounded-full object-cover shadow-lg border-2 border-yellow-500"
                        />
                        <h4 className="mt-3 text-sm font-semibold text-yellow-400">{member.name}</h4>
                        <p className="text-xs text-gray-400">{member.title}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-4">
                    {currentSubmenu?.points?.map((point, index) => (
                      <li
                        key={index}
                        onMouseEnter={() => setActivePoint(point)}
                        className="flex items-start gap-3 border border-gray-700/40 p-3 rounded hover:border-yellow-500 transition duration-200 bg-gray-800/20 cursor-pointer"
                      >
                        <div className="pt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-yellow-500 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 11.5a2 2 0 100-4 2 2 0 000 4z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 10c0 6-7.5 11.5-7.5 11.5S4.5 16 4.5 10a7.5 7.5 0 1115 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-100 hover:text-yellow-400 transition">
                            {point.name}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">{point.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Right: Media Panel */}
            <div className="lg:col-span-3 bg-gradient-to-br from-[#0f1419] to-[#1a2233] min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#1a2233] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  Highlights
                </h3>
              </div>
              <div className="p-4 pt-0">
                <motion.div
                  key={activeMedia?.title || activeMedia?.name}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  <div className="relative mb-3 overflow-hidden rounded">
                    <img
                      src={activeMedia?.image}
                      alt={activeMedia?.title || activeMedia?.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-base text-yellow-400 mb-2">
                      {activeMedia?.title || activeMedia?.name}
                    </h4>
                    <p className="text-gray-300 mb-4 leading-relaxed text-xs">
                      {activeMedia?.description}
                    </p>
                    
                    <div className="space-y-2 sticky bottom-0 bg-[#1a2233]/80 backdrop-blur-sm py-2 -mx-4 px-4">
                      <motion.button 
                        className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black py-2 px-3 rounded font-bold text-xs transition-all duration-200 shadow-lg"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {activeMedia?.cta}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const ContactMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('locations');
  const [activeLocation, setActiveLocation] = useState(null);

  const primaryCategories = [
    { id: 'locations', name: 'Locations', icon: <Mountain className="w-4 h-4" /> },
    { id: 'inquiry', name: 'Inquiry', icon: <Building className="w-4 h-4" /> }
  ];

  const submenuData = {
    'locations': {
      points: [
        {
          name: 'Kolkata',
          image: 'https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Kolkata',
          description: 'Corporate headquarters of TIL, located in the heart of the city.',
          cta: 'View Kolkata Office'
        },
        {
          name: 'Chennai',
          image: 'https://plus.unsplash.com/premium_photo-1697729444936-8c6a6f643312?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Chennai',
          description: 'Serving the southern region with excellence.',
          cta: 'View Chennai Office'
        },
        {
          name: 'Delhi NCR',
          image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Delhi NCR ',
          description: 'Our strategic presence in the capital region.',
          cta: 'View Delhi NCR Office'
        },
        {
          name: 'Mumbai',
          image: 'https://images.unsplash.com/photo-1580581096469-8afb38d3dbd5?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Mumbai',
          description: 'West zone operational hub for TIL.',
          cta: 'View Mumbai Office'
        },
        {
          name: 'Singrauli',
          image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=240&fit=crop&crop=center',
          title: 'Singrauli',
          description: 'Industrial logistics and support in central India.',
          cta: 'View Singrauli Depot'
        }
      ],
      media: {} // fallback not used when dynamic hover is active
    },
    'inquiry': {
      contacts: [
        { label: 'WhatsApp', value: '+91 89815 30153', icon: <MessageCircle className="w-5 h-5 text-green-400" /> },
        { label: 'Email', value: 'mktg-til@tilindia.com', icon: <Mail className="w-5 h-5 text-blue-400" /> },
        { label: 'Phone', value: '+91 033 6633 2000', icon: <Phone className="w-5 h-5 text-yellow-400" /> },
        { label: 'LinkedIn', value: 'https://www.linkedin.com/company/til-limited-ind/', icon: <Linkedin className="w-5 h-5 text-[#0A66C2]" /> }
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=240&fit=crop&crop=center',
        title: 'Get In Touch',
        description: 'Reach out to our team through your preferred channel. We’re here to help.',
        cta: 'Contact Us'
      }
    }
  };

  const currentSubmenu = submenuData[activeCategory as keyof typeof submenuData];
  const activeMedia = activeCategory === 'locations'
    ? activeLocation || currentSubmenu.points[0]
    : currentSubmenu.media;

  return (
    <>
      <style>{`
        .mega-menu-height {
          height: 60vh;
          max-height: 60vh;
        }
        .scroll-hover::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .scroll-hover::-webkit-scrollbar-track {
          background: transparent;
        }
        .scroll-hover::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .scroll-hover:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 193, 7, 0.3);
        }
        .scroll-hover::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 193, 7, 0.5);
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <div className="bg-[#0f1419]/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20 mega-menu-height overflow-y-auto scroll-hover">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-0">
            
            {/* Left: Categories */}
            <div className="lg:col-span-3 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  Contact Channels
                </h3>
              </div>
              <div className="p-4 pt-0">
                <div className="space-y-1">
                  {primaryCategories.map((category) => (
                    <motion.div
                      key={category.id}
                      className={`cursor-pointer transition-all duration-200 rounded w-full
                        ${activeCategory === category.id
                          ? 'bg-yellow-500/8 shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                          : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                        }`}
                      onMouseEnter={() => {
                        setActiveCategory(category.id);
                        if (category.id === 'locations') {
                          setActiveLocation(currentSubmenu.points[0]);
                        }
                      }}
                      whileHover={{ x: 2 }}
                    >
                      <div className="flex items-center space-x-3 px-3 py-2.5">
                        <div className={`p-1.5 rounded flex-shrink-0 ${
                          activeCategory === category.id 
                            ? 'bg-yellow-500 text-black' 
                            : 'bg-gray-700 text-yellow-400'
                        }`}>
                          {category.icon}
                        </div>
                        <span className={`font-semibold text-sm ${
                          activeCategory === category.id ? 'text-yellow-400' : 'text-gray-200'
                        }`}>
                          {category.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle: Info List */}
            <div className="lg:col-span-6 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Contact'}
                </h3>
              </div>
              <div className="p-4 pt-0">
                {activeCategory === 'inquiry' ? (
                  <ul className="space-y-3 text-gray-200 text-sm">
                    {currentSubmenu?.contacts.map((contact, index) => {
                      const isPhone = contact.label.toLowerCase().includes('phone');
                      const isEmail = contact.label.toLowerCase().includes('email');
                      const isWhatsApp = contact.label.toLowerCase().includes('whatsapp');
                      const isLinkedIn = contact.label.toLowerCase().includes('linkedin');

                      let href = '#';
                      if (isPhone) href = `tel:${contact.value}`;
                      else if (isEmail) href = `mailto:${contact.value}`;
                      else if (isWhatsApp) href = `https://wa.me/${contact.value.replace(/\D/g, '')}`;
                      else if (isLinkedIn) href = contact.value;

                      return (
                        <li key={index}>
                          <a
                            href={href}
                            target={isLinkedIn || isWhatsApp ? "_blank" : "_self"}
                            rel={isLinkedIn || isWhatsApp ? "noopener noreferrer" : ""}
                            className="flex items-center space-x-3 hover:text-yellow-300 transition-colors"
                            aria-label={`Contact via ${contact.label}`}
                          >
                            <div>{contact.icon}</div>
                            <div>
                              <span className="block font-medium text-gray-300">{contact.label}</span>
                              <span className="text-yellow-400 underline underline-offset-2">{contact.value}</span>
                            </div>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <ul className="space-y-4">
                    {currentSubmenu?.points.map((location, index) => (
                      <li
                        key={index}
                        onMouseEnter={() => setActiveLocation(location)}
                        className="flex items-start gap-3 border border-gray-700/40 p-3 rounded hover:border-yellow-500 transition duration-200 bg-gray-800/20 cursor-pointer"
                      >
                        <div className="pt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-yellow-500 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 11.5a2 2 0 100-4 2 2 0 000 4z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 10c0 6-7.5 11.5-7.5 11.5S4.5 16 4.5 10a7.5 7.5 0 1115 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-100 hover:text-yellow-400 transition">
                            {location.name}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Right: Dynamic Media Panel */}
            <div className="lg:col-span-3 bg-gradient-to-br from-[#0f1419] to-[#1a2233] min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#1a2233] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  Details
                </h3>
              </div>
              <div className="p-4 pt-0">
                <motion.div
                  key={activeMedia?.title || activeMedia?.name}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  <div className="relative mb-3 overflow-hidden rounded">
                    <img
                      src={activeMedia?.image}
                      alt={activeMedia?.title || activeMedia?.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-base text-yellow-400 mb-2">
                      {activeMedia?.title || activeMedia?.name}
                    </h4>
                    <p className="text-gray-300 mb-4 leading-relaxed text-xs">
                      {activeMedia?.description}
                    </p>

                    {activeMedia?.cta && (
                      <div className="space-y-2 sticky bottom-0 bg-[#1a2233]/80 backdrop-blur-sm py-2 -mx-4 px-4">
                        <motion.button
                          className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black py-2 px-3 rounded font-bold text-xs transition-all duration-200 shadow-lg"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {activeMedia?.cta}
                        </motion.button>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};


const MainNavigation: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrollingDown(currentScrollY > lastScrollY && currentScrollY > 100);
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: 'About Us', hasSubmenu: true },
    { name: 'Products', hasSubmenu: true },
    { name: 'Customer Support', hasSubmenu: true },
    { name: 'Investor Relations', hasSubmenu: false },
    { name: 'Media', hasSubmenu: true },
    { name: 'Careers', hasSubmenu: true },
    { name: 'Contact Us', hasSubmenu: true },
  ];

  return (
    <div 
      className="relative"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <motion.nav
        data-component="MainNavigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrollingDown ? '-translate-y-full' : 'translate-y-0'
        } ${
          isScrolled ? 'bg-[#1a2233]/85 backdrop-blur-md shadow-2xl' : 'bg-[#1a2233]'
        }`}
        style={{ marginTop: isScrolled ? '53px' : '60px' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
          <div className="flex h-14 overflow-x-hidden whitespace-nowrap">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="flex-1"
                onMouseEnter={() => item.hasSubmenu && setActiveMenu(item.name)}
              >
                <motion.button 
                  className={`flex items-center justify-center space-x-1 px-4 font-bold text-sm uppercase tracking-wide transition-all duration-200 w-full h-full
                    ${
                      activeMenu === item.name 
                        ? 'bg-yellow-500 text-black'
                        : 'text-gray-200 hover:text-white hover:bg-gray-600'
                    }
                  `}
                  whileHover={{ scale: 1.005 }}
                  whileTap={{ scale: 0.995 }}
                >
                  <span>{item.name}</span>
                  {item.hasSubmenu && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                      activeMenu === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </motion.button>
              </div>
            ))}
          </div>
        </div>

        {/* Full-width Mega Menus */}
        <AnimatePresence>
          {activeMenu === 'About Us' && (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="absolute top-full left-0 right-0 z-50"
  >
    <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
      <AboutMegamenu onClose={() => setActiveMenu(null)} />
    </div>
  </motion.div>
)}

          {/* Products mega-menu */}
          {activeMenu === 'Products' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 z-50"
            >
              <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                <ProductsMegamenu onClose={() => setActiveMenu(null)} />
              </div>
            </motion.div>
          )}

          {/* Industries mega-menu */}
          {activeMenu === 'Customer Support' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 z-50"
            >
              <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                <CustomerSupportMegamenu onClose={() => setActiveMenu(null)} />
              </div>
            </motion.div>
          )}
          {activeMenu === 'Media' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 z-50"
            >
              <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                <MediaMegamenu onClose={() => setActiveMenu(null)} />
              </div>
            </motion.div>
          )}
          {activeMenu === 'Careers' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 z-50"
            >
              <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                <CareersMegamenu onClose={() => setActiveMenu(null)} />
              </div>
            </motion.div>
          )}
          {activeMenu === 'Contact Us' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 z-50"
            >
              <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                <ContactMegamenu onClose={() => setActiveMenu(null)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default MainNavigation;