import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Clock, Mail, Share2, Bookmark } from 'lucide-react';

const NewsPage: React.FC = () => {
  const news = [
    {
      id: 1,
      title: 'TIL Launches Revolutionary Electric Excavator Series',
      excerpt: 'Our new electric excavator line delivers 40% more efficiency while reducing emissions by 90%, setting new industry standards.',
      content: 'TIL Limited has unveiled its groundbreaking electric excavator series, marking a significant leap forward in sustainable construction equipment. The new line features advanced battery technology that provides 8-10 hours of continuous operation on a single charge. With 40% greater efficiency than conventional models and a 90% reduction in emissions, these excavators are poised to transform urban construction projects where emissions regulations are becoming increasingly strict. The series includes three models ranging from 1.8 to 5.5 tons, all featuring reduced noise levels for urban environments.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Product Launch',
      featured: true
    },
    {
      id: 2,
      title: 'Global Expansion: New TIL Manufacturing Facility in Southeast Asia',
      excerpt: 'Strategic investment of $200M in our new facility will serve growing Asian markets with locally manufactured equipment.',
      content: 'TIL Limited has announced a $200 million investment in a state-of-the-art manufacturing facility in Vietnam to better serve the rapidly growing Southeast Asian market. The 500,000 square foot facility will produce our full range of compact construction equipment and is expected to create over 800 local jobs when fully operational in 2025. This strategic move allows TIL to reduce shipping costs and delivery times for customers in the region while maintaining our rigorous quality standards. The facility will incorporate renewable energy sources and water recycling systems to minimize environmental impact.',
      image: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: '2024-01-10',
      readTime: '3 min read',
      category: 'Company News',
      featured: true
    },
    {
      id: 3,
      title: 'TIL Partners with Leading Construction Giants',
      excerpt: 'Strategic partnerships with top construction companies to deliver innovative solutions for mega infrastructure projects.',
      content: 'TIL Limited has formed strategic alliances with three of the world\'s largest construction firms to co-develop specialized equipment for upcoming mega-projects. These partnerships will focus on creating customized solutions for tunnel boring, high-rise construction, and offshore wind farm installation. The collaboration brings together TIL\'s engineering expertise with the real-world operational knowledge of these construction leaders. Initial projects include equipment for the new Trans-European Rail network and several Asian smart city developments.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: '2024-01-05',
      readTime: '4 min read',
      category: 'Partnerships',
      featured: false
    },
    {
      id: 4,
      title: 'Industry 4.0: TIL Smart Machinery with IoT Integration',
      excerpt: 'Advanced IoT sensors and AI-powered analytics transform equipment monitoring and predictive maintenance.',
      content: 'TIL Limited is rolling out its next-generation IoT-enabled machinery across all product lines. Each machine now comes equipped with dozens of sensors that monitor everything from engine performance to hydraulic pressure in real-time. The data is analyzed by AI systems that can predict maintenance needs with 92% accuracy, potentially saving customers thousands in unplanned downtime. The system also provides operators with real-time performance feedback to improve efficiency. Fleet managers can monitor all equipment through a unified dashboard that highlights potential issues before they become problems.',
      image: 'https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: '2023-12-28',
      readTime: '6 min read',
      category: 'Technology',
      featured: false
    },
    {
      id: 5,
      title: 'TIL Achieves Sustainability Milestone: Carbon Neutral Certification',
      excerpt: 'TIL achieves carbon neutral status across all European operations ahead of schedule.',
      content: 'TIL Limited has been certified carbon neutral for all its European manufacturing and operational facilities, achieving this milestone two years ahead of its 2025 target. The accomplishment comes through a combination of renewable energy adoption (including 25MW of onsite solar capacity), extensive energy efficiency measures, and verified carbon offset projects. The certification covers Scope 1 and 2 emissions, with plans to address Scope 3 supply chain emissions by 2026. This achievement positions TIL as an environmental leader in the heavy equipment sector.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: '2023-12-15',
      readTime: '3 min read',
      category: 'Sustainability',
      featured: false
    },
    {
      id: 6,
      title: 'TIL Launches Employee Innovation Program',
      excerpt: 'New $10M initiative to fund employee-driven R&D projects with potential for commercialization.',
      content: 'TIL Limited has established a $10 million internal innovation fund to support employee-generated ideas. The program, called "TIL Innovate," allows any employee to submit proposals for new products, processes, or technologies. Selected projects receive funding and dedicated time to develop their concepts, with successful innovations potentially leading to new product lines or process improvements. The first round of funding has already approved 14 projects ranging from alternative fuel systems to novel attachment designs. Employees whose projects reach commercialization will share in the profits through a new royalty program.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: '2023-12-10',
      readTime: '4 min read',
      category: 'Company News',
      featured: false
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2233]/90 to-[#1a2233]/60 z-0"></div>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-noise opacity-10"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-32">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span 
              className="inline-block px-4 py-2 mb-6 text-sm font-medium text-[#F1B434] bg-[#F1B434]/10 rounded-full backdrop-blur-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Latest Updates
            </motion.span>
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              TIL <span className="text-[#F1B434]">Newsroom</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Discover the latest innovations, partnerships, and achievements shaping the future of construction technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20">
          {/* Featured Articles */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center mb-10"
            >
              <span className="w-12 h-1 bg-[#F1B434] mr-4"></span>
              <h2 className="text-3xl font-bold text-gray-900">
                <span className="text-[#F1B434]">Featured</span> Stories
              </h2>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {news.filter(article => article.featured).map((article) => (
                <motion.article 
                  key={article.id}
                  variants={item}
                  className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500"
                  whileHover="hover"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-[#1a2233] opacity-30 group-hover:opacity-40 transition-opacity duration-500 z-0"></div>
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
                    <div className="flex justify-between items-start mb-4">
                      <span className="inline-block px-3 py-1 text-sm font-semibold text-[#1a2233] bg-[#F1B434] rounded-full">
                        {article.category}
                      </span>
                      <div className="flex space-x-2">
                        <button className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                          <Bookmark className="w-4 h-4 text-white" />
                        </button>
                        <button className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                          <Share2 className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 leading-tight">{article.title}</h3>
                    <p className="text-gray-200 mb-5 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center text-sm text-gray-300">
                          <CalendarDays className="w-4 h-4 mr-2" />
                          {formatDate(article.date)}
                        </span>
                        <span className="flex items-center text-sm text-gray-300">
                          <Clock className="w-4 h-4 mr-2" />
                          {article.readTime}
                        </span>
                      </div>
                      <motion.a
                        href={`/news/${article.id}`}
                        className="flex items-center text-white font-medium group text-sm"
                        whileHover={{ x: 5 }}
                      >
                        <span className="group-hover:underline">Read full story</span>
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </motion.a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>

          {/* All Articles */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center mb-10"
            >
              <span className="w-12 h-1 bg-[#F1B434] mr-4"></span>
              <h2 className="text-3xl font-bold text-gray-900">
                Latest <span className="text-[#F1B434]">Updates</span>
              </h2>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {news.filter(article => !article.featured).map((article) => (
                <motion.article
                  key={article.id}
                  variants={item}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold text-white bg-[#F1B434] rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <span className="flex items-center mr-4">
                        <CalendarDays className="w-3 h-3 mr-1" />
                        {formatDate(article.date)}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">{article.title}</h3>
                    <p className="text-gray-600 mb-5 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <motion.a
                        href={`/news/${article.id}`}
                        className="flex items-center text-[#1a2233] font-medium group text-sm"
                        whileHover={{ x: 5 }}
                      >
                        <span className="group-hover:underline">Read more</span>
                        <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </motion.a>
                      <div className="flex space-x-2">
                        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                          <Bookmark className="w-4 h-4 text-gray-400 hover:text-[#F1B434]" />
                        </button>
                        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                          <Share2 className="w-4 h-4 text-gray-400 hover:text-[#F1B434]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>

          {/* Newsletter Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a2233] to-[#2c3a58] shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-10"></div>
            <div className="relative z-10 p-10 md:p-16">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-[#F1B434] bg-[#F1B434]/10 rounded-full">
                  Stay Connected
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Get TIL News Delivered</h3>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Subscribe to our newsletter for exclusive updates, product launches, and industry insights directly to your inbox.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-transparent backdrop-blur-sm"
                      required
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="px-8 py-4 bg-[#F1B434] text-[#1a2233] font-semibold rounded-lg hover:bg-[#FFE352] transition-colors duration-300 flex items-center justify-center"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-xs text-gray-400 mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Styles */}
      <style jsx global>{`
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.20'/%3E%3C/svg%3E");
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default NewsPage;