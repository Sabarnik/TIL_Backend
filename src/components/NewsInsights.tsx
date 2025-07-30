import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const NewsInsights: React.FC = () => {
  const news = [
    // Featured News (Left Column - Vertical Split)
    {
      id: 1,
      title: 'TIL Launches Revolutionary Electric Excavator Series',
      excerpt: 'Our new electric excavator line delivers 40% more efficiency while reducing emissions by 90%, setting new industry standards.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Product Launch',
      featured: true,
      position: 'top'
    },
    {
      id: 2,
      title: 'Global Expansion: New TIL Manufacturing Facility in Southeast Asia',
      excerpt: 'Strategic investment of $200M in our new facility will serve growing Asian markets with locally manufactured equipment.',
      image: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: '2024-01-10',
      readTime: '3 min read',
      category: 'Company News',
      featured: true,
      position: 'bottom'
    },
    // Right Column News (Now 3 blocks)
    {
      id: 3,
      title: 'TIL Partners with Leading Construction Giants',
      excerpt: 'Strategic partnerships with top construction companies to deliver innovative solutions for mega infrastructure projects.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: '2024-01-05',
      readTime: '4 min read',
      category: 'Partnerships',
      featured: false,
      size: 'medium'
    },
    {
      id: 4,
      title: 'Industry 4.0: TIL Smart Machinery with IoT Integration',
      excerpt: 'Advanced IoT sensors and AI-powered analytics transform equipment monitoring and predictive maintenance.',
      image: 'https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: '2023-12-28',
      readTime: '6 min read',
      category: 'Technology',
      featured: false,
      size: 'small'
    },
    {
      id: 5,
      title: 'TIL Achieves Sustainability Milestone: Carbon Neutral Certification',
      excerpt: 'TIL achieves carbon neutral status across all European operations ahead of schedule.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: '2023-12-15',
      readTime: '3 min read',
      category: 'Sustainability',
      featured: false,
      size: 'small'
    },
    {
      id: 6,
      title: 'TIL Launches Employee Innovation Program',
      excerpt: 'New $10M initiative to fund employee-driven R&D projects with potential for commercialization.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: '2023-12-10',
      readTime: '4 min read',
      category: 'Company News',
      featured: false,
      size: 'medium'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            TIL <span className="text-[#F1B434]">Limited</span> in the News
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F1B434] to-[#FFE352] mx-auto rounded-full"></div>
        </motion.div>

        {/* Aligned News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured News (Left) - Vertical Split */}
          <div className="flex flex-col gap-6 h-full">
            {news.filter(article => article.featured).map((article, index) => (
              <motion.div
                key={article.id}
                className={`relative rounded-xl overflow-hidden shadow-xl flex-1 ${article.position === 'top' ? 'h-1/2' : 'h-1/2'}`}
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2233]/90 via-[#1a2233]/50 to-transparent flex flex-col justify-end p-6">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-[#F1B434] rounded-full mb-3 w-fit">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{article.title}</h3>
                  <p className="text-gray-200 mb-4 text-sm">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-300">{formatDate(article.date)} • {article.readTime}</span>
                    <motion.a
                      href="#"
                      className="flex items-center text-white font-medium group text-sm"
                      whileHover={{ x: 5 }}
                    >
                      <span className="group-hover:underline">Read more</span>
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* News List (Right) - Now 3 blocks with different sizes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            {/* Medium sized card (top left) */}
            {news.filter(article => !article.featured && article.size === 'medium' && article.id === 3).map((article, index) => (
              <motion.div
                key={article.id}
                className="relative rounded-xl overflow-hidden shadow-lg md:col-span-2 h-64"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2233]/90 via-[#1a2233]/50 to-transparent flex flex-col justify-end p-6">
                  <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-[#F1B434] rounded-full mb-2 w-fit">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1">{article.title}</h3>
                  <p className="text-gray-200 text-sm mb-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-300">{formatDate(article.date)} • {article.readTime}</span>
                    <motion.a
                      href="#"
                      className="flex items-center text-[#FFE352] text-sm font-medium group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="group-hover:underline">Read</span>
                      <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Small cards (bottom row) */}
            {news.filter(article => !article.featured && article.size === 'small').map((article, index) => (
              <motion.div
                key={article.id}
                className="relative rounded-xl overflow-hidden shadow-lg h-48"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2233]/90 via-[#1a2233]/50 to-transparent flex flex-col justify-end p-4">
                  <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-[#F1B434] rounded-full mb-2 w-fit">
                    {article.category}
                  </span>
                  <h3 className="text-base font-bold text-white mb-1">{article.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-300">{formatDate(article.date)} • {article.readTime}</span>
                    <motion.a
                      href="#"
                      className="flex items-center text-[#FFE352] text-xs font-medium group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="group-hover:underline">Read</span>
                      <ArrowRight className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Medium sized card (bottom right) */}
            {news.filter(article => !article.featured && article.size === 'medium' && article.id === 6).map((article, index) => (
              <motion.div
                key={article.id}
                className="relative rounded-xl overflow-hidden shadow-lg md:col-span-2 h-64"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2233]/90 via-[#1a2233]/50 to-transparent flex flex-col justify-end p-6">
                  <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-[#F1B434] rounded-full mb-2 w-fit">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1">{article.title}</h3>
                  <p className="text-gray-200 text-sm mb-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-300">{formatDate(article.date)} • {article.readTime}</span>
                    <motion.a
                      href="#"
                      className="flex items-center text-[#FFE352] text-sm font-medium group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="group-hover:underline">Read</span>
                      <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href={`${__BASE_PATH__}/media/news`}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#F1B434] to-[#FFE352] text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
          >
            View All News Articles
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsInsights;