import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  ChevronRight,
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
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AboutMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('company');

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
      description: 'Environmental responsibility and green initiatives'
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
      description: 'Environmental responsibility and green initiatives'
    },
    {
      id: 'facilities',
      name: 'Facilities',
      icon: <Shield className="w-4 h-4" />,
      description: 'Environmental responsibility and green initiatives'
    }
  ];

  const submenuData = {
    'company': {
      items: [
        'Company History', 'Milestones', 'Awards & Recognition', 'Global Presence',
        'Manufacturing Facilities', 'Quality Standards', 'Certifications', 'Corporate Profile'
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=240&fit=crop&crop=center',
        title: 'Our Legacy',
        description: '80+ years of engineering excellence in construction and material handling equipment.',
        cta: 'Learn More',
        features: ['80+ Years Experience', 'Global Presence', 'ISO Certified']
      }
    },
    'leadership': {
      items: [
        'Board of Directors', 'Executive Team', 'Management Committee', 'Advisory Board',
        'Regional Heads', 'Technical Experts', 'Innovation Leaders', 'Corporate Governance'
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=240&fit=crop&crop=center',
        title: 'Leadership Team',
        description: 'Experienced leaders driving innovation and growth in the construction industry.',
        cta: 'Meet Our Team',
        features: ['Industry Veterans', 'Global Experience', 'Innovation Focus']
      }
    },
    'milestones': {
      items: [
        'Mission Statement', 'Vision 2030', 'Core Values', 'Ethics & Integrity',
        'Customer Focus', 'Innovation Culture', 'Safety First', 'Quality Commitment'
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=240&fit=crop&crop=center',
        title: 'Our Values',
        description: 'Committed to excellence, innovation, and sustainable growth.',
        cta: 'Our Philosophy',
        features: ['Customer First', 'Innovation', 'Sustainability']
      }
    },
    'values': {
      items: [
        'Mission Statement', 'Vision 2030', 'Core Values', 'Ethics & Integrity',
        'Customer Focus', 'Innovation Culture', 'Safety First', 'Quality Commitment'
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=240&fit=crop&crop=center',
        title: 'Our Values',
        description: 'Committed to excellence, innovation, and sustainable growth.',
        cta: 'Our Philosophy',
        features: ['Customer First', 'Innovation', 'Sustainability']
      }
    },
    'corporate': {
      items: [
        'Mission Statement', 'Vision 2030', 'Core Values', 'Ethics & Integrity',
        'Customer Focus', 'Innovation Culture', 'Safety First', 'Quality Commitment'
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=240&fit=crop&crop=center',
        title: 'Our Values',
        description: 'Committed to excellence, innovation, and sustainable growth.',
        cta: 'Our Philosophy',
        features: ['Customer First', 'Innovation', 'Sustainability']
      }
    },
    'codeofconduct': {
      items: [
        'Mission Statement', 'Vision 2030', 'Core Values', 'Ethics & Integrity',
        'Customer Focus', 'Innovation Culture', 'Safety First', 'Quality Commitment'
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=240&fit=crop&crop=center',
        title: 'Our Values',
        description: 'Committed to excellence, innovation, and sustainable growth.',
        cta: 'Our Philosophy',
        features: ['Customer First', 'Innovation', 'Sustainability']
      }
    },
    'facilities': {
      items: [
        'Environmental Policy', 'Green Manufacturing', 'Carbon Footprint', 'Waste Management',
        'Energy Efficiency', 'Sustainable Products', 'Community Impact', 'ESG Reports'
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=240&fit=crop&crop=center',
        title: 'Sustainability',
        description: 'Leading the way in environmentally responsible manufacturing and operations.',
        cta: 'Green Initiatives',
        features: ['Carbon Neutral', 'Green Tech', 'Eco-Friendly']
      }
    }
  };

  const currentSubmenu = submenuData[activeCategory as keyof typeof submenuData];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="overflow-hidden"
    >
      <div className="px-6 md:px-12 xl:px-20 bg-[#0f1419]/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full min-h-0">
          {/* Left: Primary Categories */}
          <div className="lg:col-span-3 border-r border-gray-700/50 min-w-0">
            <div className="p-4">
              <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                About Us
              </h3>
              <div className="space-y-1">
                {primaryCategories.map((category) => (
                  <motion.div
                    key={category.id}
                    className={`cursor-pointer transition-all duration-200 rounded w-full
                      ${activeCategory === category.id
                        ? 'bg-yellow-500/8 shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                        : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                      }`}
                    onMouseEnter={() => setActiveCategory(category.id)}
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

          {/* Middle: Multi-Column Submenu */}
          <div className="lg:col-span-6 border-r border-gray-700/50 min-w-0">
            <div className="p-4">
              <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Information'}
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-1">
                {currentSubmenu?.items.map((item, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="group px-3 py-2 rounded transition-all duration-200 w-full min-w-0
                      hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.02 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex items-center justify-between min-w-0">
                      <span className="text-gray-200 group-hover:text-yellow-400 font-medium text-sm truncate flex-1">
                        {item}
                      </span>
                      <ChevronRight className="w-3 h-3 text-yellow-600 group-hover:text-yellow-400 transition-colors flex-shrink-0 ml-2" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Dynamic Media Panel */}
          <div className="lg:col-span-3 bg-gradient-to-br from-[#0f1419] to-[#1a2233] min-w-0">
            <div className="p-4">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 h-full flex flex-col"
              >
                <div className="relative mb-3 overflow-hidden rounded">
                  <img
                    src={currentSubmenu?.media.image}
                    alt={currentSubmenu?.media.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-base text-yellow-400 mb-2">
                    {currentSubmenu?.media.title}
                  </h4>
                  <p className="text-gray-300 mb-3 leading-relaxed text-xs">
                    {currentSubmenu?.media.description}
                  </p>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-yellow-400 mb-2 text-xs">Key Features:</h5>
                    <div className="space-y-1">
                      {currentSubmenu?.media.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Award className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                          <span className="text-gray-300 text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-auto">
                    <motion.button 
                      className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black py-2 px-3 rounded font-bold text-xs transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                      whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(255, 193, 7, 0.3)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone className="w-3 h-3" />
                      <span>{currentSubmenu?.media.cta}</span>
                    </motion.button>
                    
                    <button className="w-full border border-yellow-500/50 hover:bg-yellow-500/10 text-yellow-400 py-1.5 px-3 rounded font-semibold text-xs transition-all duration-200 flex items-center justify-center space-x-2">
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
  );
};
const ProductsMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  type ProductItem = {
    name: string;
    image: string;
    title: string;
    description: string;
    features: string[];
  };
  const [activeCategory, setActiveCategory] = useState('all-products');
  const [hoveredItem, setHoveredItem] = useState<ProductItem | null>(null);

  const primaryCategories = [
    {
    id: 'all-products',
    name: 'TIL Range',
    icon: <Package className="w-4 h-4" />,
    description: 'Reliable lifting and handling for Indian industries.'
  },
  {
    id: 'new-arrivals',
    name: 'Manitowoc Range',
    icon: <Zap className="w-4 h-4" />,
    description: 'Heavy-duty cranes with global performance.'
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
  }  ];
const submenuData = {
  'all-products': {
    items: [
      {
        name: 'Truck Cranes',
        image: '/truck-cranes.jpeg',
        title: 'Truck Cranes',
        description: 'High-capacity cranes ideal for tall construction sites.',
        features: ['Telescopic Boom', 'High Lifting Range', 'On-road Mobility']
      },
      {
        name: 'Pick n Carry Cranes',
        image: '/pick-n-carry.png',
        title: 'Pick & Carry Cranes',
        description: 'Mobile cranes suitable for fast on-site operations.',
        features: ['360° Mobility', 'Operator Cabin Comfort', 'Quick Load Handling']
      },
      {
        name: 'Rough Terrain Cranes',
        image: '/rough-terrain.png',
        title: 'Tower Cranes',
        description: 'High-capacity cranes ideal for tall construction sites.',
        features: ['All-Terrain Tyres', 'Four-Wheel Steering', 'Hydraulic Outriggers']
      },
      {
        name: 'Articulating Cranes',
        image: '/articulating.jpg',
        title: 'Articulating Cranes',
        description: 'Flexible, jointed cranes ideal for tight spaces.',
        features: ['Knuckle Boom Design', 'Compact Operation', 'Remote Control']
      }
    ],
    media: {
      image: '/articulating.jpg',
      title: 'Articulating Cranes',
      description: 'Mobile cranes suitable for fast on-site operations.',
      cta: 'View All Products',
      features: ['Compact Footprint', 'Easy Maintenance', 'Multi-Angle Lifting']
    }
  },

  'new-arrivals': {
    items: [
      {
        name: 'Groove Range',
        image: '/grove-range.png',
        title: 'Groove Range',
        description: 'Smart lifting solutions engineered for precision and durability.',
        features: ['Advanced Safety Systems', 'Optimized Weight Distribution', 'Digital Load Monitoring']
      },
      {
        name: 'Crawler Cranes',
        image: '/crawler-cranes.png',
        title: 'Crawler Cranes',
        description: 'Robust tracked cranes for heavy-duty lifting on challenging terrains.',
        features: ['Track Mobility', 'High Stability', 'Heavy Lifting Capacity']
      }
    ],
    media: {
      image: '/crawler-cranes.png',
      title: 'Latest Innovations',
      description: 'Cutting-edge technology and smart features for enhanced productivity and safety in modern construction.',
      cta: 'Explore New Tech',
      features: ['Smart Telematics', 'Eco-Friendly Powertrain', 'IoT Integration']
    }
  },

  'best-sellers': {
    items: [
      {
        name: 'Forklift Trucks',
        image: '/forklift.png',
        title: 'Forklift Trucks',
        description: 'Efficient material handling for warehouses and logistics hubs.',
        features: ['Precision Steering', 'High Load Capacity', 'Compact Turning Radius']
      },
      {
        name: 'Reachstackers',
        image: '/reachstackers.png',
        title: 'Reachstackers',
        description: 'Container handling equipment used in ports and yards.',
        features: ['Extended Reach', 'Twistlock Compatibility', 'High Stack Efficiency']
      }
    ],
    media: {
      image: '/forklift.png',
      title: 'Proven Performers',
      description: 'Most trusted equipment by contractors across India. Reliable, efficient, and backed by comprehensive support.',
      cta: 'Request Demo',
      features: ['Uptime Guarantee', 'Nationwide Service Network', 'Spare Part Availability']
    }
  },

  'services': {
    items: [
      {
        name: 'Boom Lifts',
        image: '/boomlifts.png',
        title: 'Boom Lifts',
        description: 'Elevated work platforms for maintenance and construction tasks.',
        features: ['Articulating Arm', 'Vertical and Horizontal Reach', 'Safe Cage Platform']
      }
    ],
    media: {
      image: '/boomlifts.png',
      title: 'Complete Support',
      description: 'Comprehensive after-sales support including maintenance, genuine parts, and technical assistance.',
      cta: 'Service Support',
      features: ['Certified Engineers', 'Rapid On-Site Service', 'OEM Spare Assurance']
    }
  }
};


 const currentSubmenu = submenuData[activeCategory as keyof typeof submenuData];
  const mediaToShow = hoveredItem || currentSubmenu?.media;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="overflow-hidden"
    >
      <div className="px-6 md:px-12 xl:px-20 bg-[#0f1419]/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full min-h-0">
          
          {/* LEFT: CATEGORIES */}
          <div className="lg:col-span-3 border-r border-gray-700/50 min-w-0">
            <div className="p-4">
              <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                Categories
              </h3>
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
                      setHoveredItem(null);
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

          {/* MIDDLE: ITEMS */}
          <div className="lg:col-span-6 border-r border-gray-700/50 min-w-0">
            <div className="p-4">
              <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Products'}
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-1">
                {currentSubmenu?.items.map((item, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    onMouseEnter={() => setHoveredItem(item)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="group px-3 py-2 rounded transition-all duration-200 w-full min-w-0
                      hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.02 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex items-center justify-between min-w-0">
                      <span className="text-gray-200 group-hover:text-yellow-400 font-medium text-sm truncate flex-1">
                        {item.name}
                      </span>
                      <ChevronRight className="w-3 h-3 text-yellow-600 group-hover:text-yellow-400 transition-colors flex-shrink-0 ml-2" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: MEDIA PANEL */}
          <div className="lg:col-span-3 bg-gradient-to-br from-[#0f1419] to-[#1a2233] min-w-0">
            <div className="p-4">
              <motion.div
                key={mediaToShow?.title}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 h-full flex flex-col"
              >
                <div className="relative mb-3 overflow-hidden rounded">
                  <img
                    src={mediaToShow?.image}
                    alt={mediaToShow?.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-base text-yellow-400 mb-2">
                    {mediaToShow?.title}
                  </h4>
                  <p className="text-gray-300 mb-3 leading-relaxed text-xs">
                    {mediaToShow?.description}
                  </p>
                  
                  {mediaToShow?.features && (
                    <div className="mb-4">
                      <h5 className="font-semibold text-yellow-400 mb-2 text-xs">Key Features:</h5>
                      <div className="space-y-1">
                        {mediaToShow.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Award className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                            <span className="text-gray-300 text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-2 mt-auto">
                    <motion.button 
                      className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black py-2 px-3 rounded font-bold text-xs transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                      whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(255, 193, 7, 0.3)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone className="w-3 h-3" />
                      <span>{hoveredItem ? 'Get Quote' : currentSubmenu?.media.cta}</span>
                    </motion.button>
                    
                    <button className="w-full border border-yellow-500/50 hover:bg-yellow-500/10 text-yellow-400 py-1.5 px-3 rounded font-semibold text-xs transition-all duration-200 flex items-center justify-center space-x-2">
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
  );
};

const CustomerSupportMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('heavy-industries');

  const primaryCategories = [
    { id: 'heavy-industries', name: 'Maintenance Contract', icon: <Mountain className="w-4 h-4" /> },
    { id: 'infrastructure', name: 'Parts & Warehouse', icon: <Building className="w-4 h-4" /> },
    { id: 'specialized', name: 'Training', icon: <Shield className="w-4 h-4" /> },
    { id: 'energy', name: 'Service Locations', icon: <Zap className="w-4 h-4" /> }
  ];

  const submenuData = {
    'heavy-industries': {
      points: [
        'Annual Service Contracts to minimize downtime and ensure preventive care',
        'Pre-Purchase Consultancy to guide optimal equipment investment decisions',
        'Quick Parts Delivery through a wide and responsive supply network',
        'Pan-India On-Site Support with qualified engineers on call',
        'Rebuild & Refurbishment Services for extended equipment lifecycle'
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&h=240&fit=crop&crop=center',
        title: 'Maintenance Contracts',
        description: 'Keep your machines in peak condition with our comprehensive annual maintenance services.',
        cta: 'Download Brochure'
      }
    },
    'infrastructure': {
      points: [
        'Authentic TIL Parts for safety, reliability, and longer equipment life',
        'Real-Time Inventory Control with advanced Warehouse Management System',
        'Wide Range Availability — filters, oils, fluids, undercarriage components & more',
        'Expert Support from trained product specialists for the right-fit solutions',
        'ERP-Enabled Central Warehouse at Dankuni for seamless nationwide fulfillment'
      ],
      media: {
        image: '/parts-warehouse.png',
        title: 'Parts & Warehouse',
        description: 'Rapid access to critical parts with optimized logistics and warehouse coverage.',
        cta: 'Check Availability'
      }
    },
    'specialized': {
      points: [
        'Boost ROI & Safety with skilled operators who unlock full machine potential',
        'Hands-On Training in basic operations and scheduled maintenance',
        'Customized Modules to suit operator and maintenance staff needs',
        'Minimized Downtime through better handling and issue prevention',
        'Competitive Edge with enhanced knowledge, confidence, and efficiency'
      ],
      media: {
        image: '/training.jpg',
        title: 'Training Programs',
        description: 'Empower your workforce with certified technical and operator training.',
        cta: 'Traning Calender'
      }
    },
    'energy': {
      points: [
        '📍Kolkata',
        '📍Chennai',
        '📍Delhi NCR',
        '📍Mumbai',
        '📍Singrauli'
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=240&fit=crop&crop=center',
        title: 'Service Locations',
        description: 'Our digital backbone supports you with high-redundancy servers and real-time data access.',
        cta: 'View Network'
      }
    }
  };

  const currentSubmenu = submenuData[activeCategory as keyof typeof submenuData];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="overflow-hidden"
    >
      <div className="px-6 md:px-12 xl:px-20 bg-[#0f1419]/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full min-h-0">
          
          {/* Left: Categories */}
          <div className="lg:col-span-3 border-r border-gray-700/50 min-w-0">
            <div className="p-4">
              <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                Support Categories
              </h3>
              <div className="space-y-1">
                {primaryCategories.map((category) => (
                  <motion.div
                    key={category.id}
                    className={`cursor-pointer transition-all duration-200 rounded w-full
                      ${activeCategory === category.id
                        ? 'bg-yellow-500/8 shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                        : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                      }`}
                    onMouseEnter={() => setActiveCategory(category.id)}
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

          {/* Middle: Point-wise Info */}
          <div className="lg:col-span-6 border-r border-gray-700/50 min-w-0">
            <div className="p-4">
              <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Support Info'}
              </h3>
              <ul className="space-y-2 list-disc list-inside text-gray-200 text-sm">
                {currentSubmenu?.points.map((point, index) => (
                  <li key={index} className="hover:text-yellow-400 transition duration-200">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Media Panel */}
          <div className="lg:col-span-3 bg-gradient-to-br from-[#0f1419] to-[#1a2233] min-w-0">
            <div className="p-4">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 h-full flex flex-col"
              >
                <div className="relative mb-3 overflow-hidden rounded">
                  <img
                    src={currentSubmenu?.media.image}
                    alt={currentSubmenu?.media.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-base text-yellow-400 mb-2">
                    {currentSubmenu?.media.title}
                  </h4>
                  <p className="text-gray-300 mb-4 leading-relaxed text-xs">
                    {currentSubmenu?.media.description}
                  </p>
                  
                  <motion.button 
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black py-2 px-3 rounded font-bold text-xs transition-all duration-200 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {currentSubmenu?.media.cta}
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


const MediaMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('media');

  const primaryCategories = [
    {
      id: 'blogs',
      name: 'Blogs',
      icon: <Building className="w-4 h-4" />,
      description: 'Our heritage and leadership in construction equipment'
    },
    {
      id: 'video',
      name: 'Videos',
      icon: <Users className="w-4 h-4" />,
      description: 'Meet our executive team and board of directors'
    },
        {
      id: 'news',
      name: 'News',
      icon: <Shield className="w-4 h-4" />,
      description: 'Environmental responsibility and green initiatives'
    },
    {
      id: 'til',
      name: 'TIL@bauma2024',
      icon: <Star className="w-4 h-4" />,
      description: 'Our mission, vision, and core values'
    },

    {
      id: 'events',
      name: 'Events',
      icon: <Shield className="w-4 h-4" />,
      description: 'Environmental responsibility and green initiatives'
    },
    {
      id: 'press',
      name: 'Press Release',
      icon: <Shield className="w-4 h-4" />,
      description: 'Environmental responsibility and green initiatives'
    },
    {
      id: 'downloads',
      name: 'Downloads',
      icon: <Shield className="w-4 h-4" />,
      description: 'Environmental responsibility and green initiatives'
    }
  ];

  const submenuData = {
    'blogs': {
      items: [
        'Company History', 'Milestones', 'Awards & Recognition', 'Global Presence',
        'Manufacturing Facilities', 'Quality Standards', 'Certifications', 'Corporate Profile'
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=240&fit=crop&crop=center',
        title: 'Our Legacy',
        description: '80+ years of engineering excellence in construction and material handling equipment.',
        cta: 'Learn More',
        features: ['80+ Years Experience', 'Global Presence', 'ISO Certified']
      }
    },
    'video': {
      items: [
        'Board of Directors', 'Executive Team', 'Management Committee', 'Advisory Board',
        'Regional Heads', 'Technical Experts', 'Innovation Leaders', 'Corporate Governance'
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=240&fit=crop&crop=center',
        title: 'Leadership Team',
        description: 'Experienced leaders driving innovation and growth in the construction industry.',
        cta: 'Meet Our Team',
        features: ['Industry Veterans', 'Global Experience', 'Innovation Focus']
      }
    },
    'news': {
      items: [
        'Mission Statement', 'Vision 2030', 'Core Values', 'Ethics & Integrity',
        'Customer Focus', 'Innovation Culture', 'Safety First', 'Quality Commitment'
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=240&fit=crop&crop=center',
        title: 'Our Values',
        description: 'Committed to excellence, innovation, and sustainable growth.',
        cta: 'Our Philosophy',
        features: ['Customer First', 'Innovation', 'Sustainability']
      }
    },
    'til': {
      items: [
        'Mission Statement', 'Vision 2030', 'Core Values', 'Ethics & Integrity',
        'Customer Focus', 'Innovation Culture', 'Safety First', 'Quality Commitment'
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=240&fit=crop&crop=center',
        title: 'Our Values',
        description: 'Committed to excellence, innovation, and sustainable growth.',
        cta: 'Our Philosophy',
        features: ['Customer First', 'Innovation', 'Sustainability']
      }
    },
    'events': {
      items: [
        'Mission Statement', 'Vision 2030', 'Core Values', 'Ethics & Integrity',
        'Customer Focus', 'Innovation Culture', 'Safety First', 'Quality Commitment'
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=240&fit=crop&crop=center',
        title: 'Our Values',
        description: 'Committed to excellence, innovation, and sustainable growth.',
        cta: 'Our Philosophy',
        features: ['Customer First', 'Innovation', 'Sustainability']
      }
    },
    'press': {
      items: [
        'Mission Statement', 'Vision 2030', 'Core Values', 'Ethics & Integrity',
        'Customer Focus', 'Innovation Culture', 'Safety First', 'Quality Commitment'
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=240&fit=crop&crop=center',
        title: 'Our Values',
        description: 'Committed to excellence, innovation, and sustainable growth.',
        cta: 'Our Philosophy',
        features: ['Customer First', 'Innovation', 'Sustainability']
      }
    },
    'downloads': {
      items: [
        'Environmental Policy', 'Green Manufacturing', 'Carbon Footprint', 'Waste Management',
        'Energy Efficiency', 'Sustainable Products', 'Community Impact', 'ESG Reports'
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=240&fit=crop&crop=center',
        title: 'Sustainability',
        description: 'Leading the way in environmentally responsible manufacturing and operations.',
        cta: 'Green Initiatives',
        features: ['Carbon Neutral', 'Green Tech', 'Eco-Friendly']
      }
    }
  };

  const currentSubmenu = submenuData[activeCategory as keyof typeof submenuData];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="overflow-hidden"
    >
      <div className="px-6 md:px-12 xl:px-20 bg-[#0f1419]/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full min-h-0">
          {/* Left: Primary Categories */}
          <div className="lg:col-span-3 border-r border-gray-700/50 min-w-0">
            <div className="p-4">
              <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                About Us
              </h3>
              <div className="space-y-1">
                {primaryCategories.map((category) => (
                  <motion.div
                    key={category.id}
                    className={`cursor-pointer transition-all duration-200 rounded w-full
                      ${activeCategory === category.id
                        ? 'bg-yellow-500/8 shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                        : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                      }`}
                    onMouseEnter={() => setActiveCategory(category.id)}
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

          {/* Middle: Multi-Column Submenu */}
          <div className="lg:col-span-6 border-r border-gray-700/50 min-w-0">
            <div className="p-4">
              <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Information'}
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-1">
                {currentSubmenu?.items.map((item, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="group px-3 py-2 rounded transition-all duration-200 w-full min-w-0
                      hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.02 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex items-center justify-between min-w-0">
                      <span className="text-gray-200 group-hover:text-yellow-400 font-medium text-sm truncate flex-1">
                        {item}
                      </span>
                      <ChevronRight className="w-3 h-3 text-yellow-600 group-hover:text-yellow-400 transition-colors flex-shrink-0 ml-2" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Dynamic Media Panel */}
          <div className="lg:col-span-3 bg-gradient-to-br from-[#0f1419] to-[#1a2233] min-w-0">
            <div className="p-4">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 h-full flex flex-col"
              >
                <div className="relative mb-3 overflow-hidden rounded">
                  <img
                    src={currentSubmenu?.media.image}
                    alt={currentSubmenu?.media.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-base text-yellow-400 mb-2">
                    {currentSubmenu?.media.title}
                  </h4>
                  <p className="text-gray-300 mb-3 leading-relaxed text-xs">
                    {currentSubmenu?.media.description}
                  </p>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-yellow-400 mb-2 text-xs">Key Features:</h5>
                    <div className="space-y-1">
                      {currentSubmenu?.media.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Award className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                          <span className="text-gray-300 text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-auto">
                    <motion.button 
                      className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black py-2 px-3 rounded font-bold text-xs transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                      whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(255, 193, 7, 0.3)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone className="w-3 h-3" />
                      <span>{currentSubmenu?.media.cta}</span>
                    </motion.button>
                    
                    <button className="w-full border border-yellow-500/50 hover:bg-yellow-500/10 text-yellow-400 py-1.5 px-3 rounded font-semibold text-xs transition-all duration-200 flex items-center justify-center space-x-2">
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
  );
};

const CareersMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('life');

  const primaryCategories = [
    { id: 'life', name: 'Life @TIL', icon: <Mountain className="w-4 h-4" /> },
    { id: 'team', name: 'Meet our Team', icon: <Building className="w-4 h-4" /> },
    { id: 'vacant', name: 'Vacancies', icon: <Shield className="w-4 h-4" /> },
    { id: 'equal', name: 'Equal Opportunity Employer', icon: <Zap className="w-4 h-4" /> }
  ];

  const submenuData = {
    'life': {
      points: [
        'Inclusive and collaborative work culture',
        'Flexible working hours and hybrid options',
        'Employee wellness & mental health initiatives',
        'Recognition programs and team outings'
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
        'Open roles across engineering, sales, and operations',
        'Campus placement and intern programs',
        'Quick and transparent hiring process',
        'Career growth with structured L&D paths'
      ],
      media: {
        image: '/job.jpg',
        title: 'Current Openings',
        description: 'Explore vacancies and apply to be a part of TIL’s next chapter.',
        cta: 'View Jobs'
      }
    },
    'equal': {
      points: [
        'Diversity & inclusion across all departments',
        'Zero-tolerance for discrimination or bias',
        'Women in leadership initiatives',
        'Accessible workplace and inclusive policies'
      ],
      media: {
        image: '/equal.jpg',
        title: 'Equal Opportunity',
        description: 'We’re committed to an inclusive, safe, and diverse work environment.',
        cta: 'Our Policy'
      }
    }
  };

  const currentSubmenu = submenuData[activeCategory as keyof typeof submenuData];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="overflow-hidden"
    >
      <div className="px-6 md:px-12 xl:px-20 bg-[#0f1419]/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full min-h-0">
          
          {/* Left Panel: Career Categories */}
          <div className="lg:col-span-3 border-r border-gray-700/50 min-w-0">
            <div className="p-4">
              <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                Career Focus
              </h3>
              <div className="space-y-1">
                {primaryCategories.map((category) => (
                  <motion.div
                    key={category.id}
                    className={`cursor-pointer transition-all duration-200 rounded w-full
                      ${activeCategory === category.id
                        ? 'bg-yellow-500/8 shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                        : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                      }`}
                    onMouseEnter={() => setActiveCategory(category.id)}
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

          {/* Middle Panel: Bullet Points */}
          <div className="lg:col-span-6 border-r border-gray-700/50 min-w-0">
            <div className="p-4">
              <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Details'}
              </h3>
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
  <ul className="space-y-2 list-disc list-inside text-gray-200 text-sm">
    {currentSubmenu?.points?.map((point, index) => (
      <li key={index} className="hover:text-yellow-400 transition duration-200">
        {point}
      </li>
    ))}
  </ul>
)}

            </div>
          </div>

          {/* Right Panel: Dynamic Media */}
          <div className="lg:col-span-3 bg-gradient-to-br from-[#0f1419] to-[#1a2233] min-w-0">
            <div className="p-4">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 h-full flex flex-col"
              >
                <div className="relative mb-3 overflow-hidden rounded">
                  <img
                    src={currentSubmenu?.media.image}
                    alt={currentSubmenu?.media.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-base text-yellow-400 mb-2">
                    {currentSubmenu?.media.title}
                  </h4>
                  <p className="text-gray-300 mb-4 leading-relaxed text-xs">
                    {currentSubmenu?.media.description}
                  </p>
                  
                  <motion.button 
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black py-2 px-3 rounded font-bold text-xs transition-all duration-200 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {currentSubmenu?.media.cta}
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

const ContactMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('locations');

  const primaryCategories = [
    { id: 'locations', name: 'Locations', icon: <Mountain className="w-4 h-4" /> },
    { id: 'inquiry', name: 'Inquiry', icon: <Building className="w-4 h-4" /> }
  ];

  const submenuData = {
    'locations': {
      points: [
        'Kolkata',
        'Chennai',
        'Delhi NCR ',
        'Mumbai ',
        'Singrauli'
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=240&fit=crop&crop=center',
        title: 'Our Offices',
        description: 'Find us across India with regional support in major cities and industrial zones.',
        cta: 'View on Map'
      }
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

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="overflow-hidden"
    >
      <div className="px-6 md:px-12 xl:px-20 bg-[#0f1419]/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full min-h-0">

          {/* Left: Categories */}
          <div className="lg:col-span-3 border-r border-gray-700/50 min-w-0">
            <div className="p-4">
              <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                Contact Channels
              </h3>
              <div className="space-y-1">
                {primaryCategories.map((category) => (
                  <motion.div
                    key={category.id}
                    className={`cursor-pointer transition-all duration-200 rounded w-full
                      ${activeCategory === category.id
                        ? 'bg-yellow-500/8 shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                        : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                      }`}
                    onMouseEnter={() => setActiveCategory(category.id)}
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

          {/* Middle: Info Panel (Bullet Style) */}
          <div className="lg:col-span-6 border-r border-gray-700/50 min-w-0">
            <div className="p-4">
              <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Contact'}
              </h3>

              {/* Conditional Rendering */}
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
      className="flex items-start gap-3 border border-gray-700/40 p-3 rounded hover:border-yellow-500 transition duration-200 bg-gray-800/20"
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
          {location}
        </p>
      </div>
    </li>
  ))}
</ul>

              )}
            </div>
          </div>

          {/* Right: Dynamic Media Panel */}
          <div className="lg:col-span-3 bg-gradient-to-br from-[#0f1419] to-[#1a2233] min-w-0">
            <div className="p-4">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 h-full flex flex-col"
              >
                <div className="relative mb-3 overflow-hidden rounded">
                  <img
                    src={currentSubmenu?.media.image}
                    alt={currentSubmenu?.media.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-base text-yellow-400 mb-2">
                    {currentSubmenu?.media.title}
                  </h4>
                  <p className="text-gray-300 mb-4 leading-relaxed text-xs">
                    {currentSubmenu?.media.description}
                  </p>

                  <motion.button 
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black py-2 px-3 rounded font-bold text-xs transition-all duration-200 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {currentSubmenu?.media.cta}
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
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
    { name: 'Home', hasSubmenu: false },
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
          <div className="flex h-14">
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