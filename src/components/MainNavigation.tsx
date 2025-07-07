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
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductsMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('all-products');

  const primaryCategories = [
    { id: 'all-products', name: 'All Products', icon: <Package className="w-4 h-4" />, description: 'Complete range' },
    { id: 'new-arrivals', name: 'New Arrivals', icon: <Zap className="w-4 h-4" />, description: 'Latest equipment' },
    { id: 'best-sellers', name: 'Best Sellers', icon: <Star className="w-4 h-4" />, description: 'Popular choices' },
    { id: 'services', name: 'Services & Parts', icon: <Settings className="w-4 h-4" />, description: 'Support solutions' }
  ];

  const submenuData = {
    'all-products': {
      items: [
        'Tower Cranes', 'Mobile Cranes', 'Crawler Cranes', 'Overhead Cranes',
        'Excavators', 'Bulldozers', 'Wheel Loaders', 'Motor Graders',
        'Dump Trucks', 'Compactors', 'Road Pavers', 'Concrete Mixers',
        'Asphalt Plants', 'Crushing Equipment', 'Material Handlers'
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=240&fit=crop&crop=center',
        title: 'Complete Equipment Range',
        description: 'Comprehensive solutions for construction, mining, and infrastructure projects with 80+ years of engineering excellence.',
        cta: 'View All Products',
        features: ['80+ Years Experience', 'ISO Certified', 'Pan-India Service']
      }
    },
    'new-arrivals': {
      items: [
        'STC750 Mobile Crane', 'Advanced Tower Crane Series', 'Smart Excavator Line',
        'Eco-Friendly Bulldozers', 'Digital Control Systems', 'IoT-Enabled Equipment',
        'Hybrid Power Solutions', 'Automated Safety Systems', 'Remote Monitoring'
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=240&fit=crop&crop=center',
        title: 'Latest Innovations',
        description: 'Cutting-edge technology and smart features for enhanced productivity and safety in modern construction.',
        cta: 'Explore New Tech',
        features: ['Smart Controls', 'Eco-Friendly', 'IoT Integration']
      }
    },
    'best-sellers': {
      items: [
        'TIL Mobile Crane 50T', 'Tower Crane TC5013', 'Excavator EX200',
        'Bulldozer BD150', 'Wheel Loader WL200', 'Motor Grader MG140',
        'Dump Truck DT300', 'Compactor RC120', 'Asphalt Paver AP180'
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=240&fit=crop&crop=center',
        title: 'Proven Performers',
        description: 'Most trusted equipment by contractors across India. Reliable, efficient, and backed by comprehensive support.',
        cta: 'Request Demo',
        features: ['Proven Reliability', '24/7 Support', 'Genuine Parts']
      }
    },
    'services': {
      items: [
        'Maintenance Services', 'Genuine Spare Parts', 'Equipment Retrofitting',
        'Operator Training', 'Technical Support', 'Warranty Extensions',
        'Equipment Financing', 'Rental Solutions', 'Insurance Services'
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=240&fit=crop&crop=center',
        title: 'Complete Support',
        description: 'Comprehensive after-sales support including maintenance, genuine parts, and technical assistance.',
        cta: 'Service Support',
        features: ['Expert Technicians', 'Quick Response', 'Genuine Parts']
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
  className="overflow-hidden" // Remove all background classes
>
  <div className="px-6 md:px-12 xl:px-20 bg-[#0f1419]/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20">
    <div className="grid grid-cols-1 lg:grid-cols-12 w-full min-h-0">
      {/* Left: Primary Categories */}
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
                {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Products'}
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

const IndustriesMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('heavy-industries');

  const primaryCategories = [
    { id: 'heavy-industries', name: 'Heavy Industries', icon: <Mountain className="w-4 h-4" /> },
    { id: 'infrastructure', name: 'Infrastructure', icon: <Building className="w-4 h-4" /> },
    { id: 'specialized', name: 'Specialized', icon: <Shield className="w-4 h-4" /> },
    { id: 'energy', name: 'Energy & Power', icon: <Zap className="w-4 h-4" /> }
  ];

  const submenuData = {
    'heavy-industries': {
      items: [
        'Mining & Quarry', 'Steel & Metal', 'Cement Production', 'Chemical Plants',
        'Aluminum Smelting', 'Coal Handling', 'Ore Processing', 'Material Handling',
        'Heavy Manufacturing'
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&h=240&fit=crop&crop=center',
        title: 'Heavy Industries',
        description: 'Robust equipment solutions for mining, steel, cement, and heavy manufacturing industries.',
        cta: 'Industry Solutions'
      }
    },
    'infrastructure': {
      items: [
        'Construction', 'Railways', 'Ports & Terminals', 'Airports',
        'Highways & Roads', 'Bridges', 'Tunnels', 'Urban Development',
        'Water Treatment'
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=240&fit=crop&crop=center',
        title: 'Infrastructure Development',
        description: 'Comprehensive solutions for building India\'s infrastructure backbone.',
        cta: 'View Projects'
      }
    },
    'specialized': {
      items: [
        'Oil & Gas', 'Defense', 'Nuclear', 'Aerospace',
        'Shipbuilding', 'Automotive', 'Pharmaceuticals', 'Food Processing',
        'Petrochemicals'
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=240&fit=crop&crop=center',
        title: 'Specialized Applications',
        description: 'Advanced equipment for critical and specialized industrial applications.',
        cta: 'Learn More'
      }
    },
    'energy': {
      items: [
        'Thermal Power', 'Renewable Energy', 'Hydroelectric', 'Nuclear Power',
        'Solar Projects', 'Wind Energy', 'Biomass', 'Energy Storage',
        'Grid Infrastructure'
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=240&fit=crop&crop=center',
        title: 'Energy & Power',
        description: 'Equipment solutions for power generation and renewable energy projects.',
        cta: 'Energy Solutions'
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
  className="overflow-hidden" // Remove all background classes
>
  <div className="px-6 md:px-12 xl:px-20 bg-[#0f1419]/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20">
    <div className="grid grid-cols-1 lg:grid-cols-12 w-full min-h-0">
      {/* Left: Primary Categories */}
      <div className="lg:col-span-3 border-r border-gray-700/50 min-w-0">
        <div className="p-4">
              <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                Industry Sectors
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

          {/* Middle: Multi-Column Submenu */}
      <div className="lg:col-span-6 border-r border-gray-700/50 min-w-0">
        <div className="p-4">
              <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                Applications
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
                <p className="text-gray-300 mb-4 leading-relaxed text-xs">
                  {currentSubmenu?.media.description}
                </p>
                
                <motion.button 
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black py-2 px-3 rounded font-bold text-xs transition-all duration-200 shadow-lg"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(255, 193, 7, 0.3)" }}
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
    { name: 'Products', hasSubmenu: true },
    { name: 'Industries', hasSubmenu: true },
    { name: 'Projects', hasSubmenu: false },
    { name: 'Services', hasSubmenu: false },
    { name: 'Parts', hasSubmenu: false },
    { name: 'Support', hasSubmenu: false },
    { name: 'About', hasSubmenu: false },
    { name: 'Contact', hasSubmenu: false },
  ];

  return (
    <div className="relative">
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
                onMouseLeave={() => setActiveMenu(null)}
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
{/* Full-width Mega Menus */}
<AnimatePresence>
  {/* Products mega-menu */}
   {activeMenu === 'Products' && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute top-full left-0 right-0 z-50"
      onMouseEnter={() => setActiveMenu('Products')}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
        <ProductsMegamenu onClose={() => setActiveMenu(null)} />
      </div>
    </motion.div>
  )}


  {/* Industries mega-menu */}
  {activeMenu === 'Industries' && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute top-full left-0 right-0 z-50"
      onMouseEnter={() => setActiveMenu('Industries')}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
        <IndustriesMegamenu onClose={() => setActiveMenu(null)} />
      </div>
    </motion.div>
  )}
</AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default MainNavigation;