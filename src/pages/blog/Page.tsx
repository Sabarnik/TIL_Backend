import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Heart, MessageCircle, Bookmark, Share2, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogListPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'featured' | 'popular' | 'latest'>('featured');
  const [savedPosts, setSavedPosts] = useState<number[]>([]);
  const [expandedAuthor, setExpandedAuthor] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of Heavy Machinery in Construction',
      excerpt: 'Exploring how innovative technologies are transforming the construction equipment industry and what it means for the future of infrastructure development.',
      author: {
        name: 'Rajesh Kumar',
        role: 'Chief Engineer',
        bio: 'With 15 years experience in heavy machinery development and innovation. Former lead engineer at Caterpillar India.',
        avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
      },
      column: 'Industry Insights',
      date: '2024-04-05',
      readTime: '10 min',
      likes: 7123,
      comments: 426,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      tags: ['Technology', 'Innovation', 'Construction'],
      views: 12500
    },
    {
      id: 2,
      title: 'Sustainable Practices in Equipment Manufacturing',
      excerpt: 'How TIL is leading the way in eco-friendly heavy equipment production with groundbreaking sustainability initiatives.',
      author: {
        name: 'Priya Sharma',
        role: 'Sustainability Officer',
        bio: 'Head of Environmental Initiatives at TIL with a focus on green manufacturing. PhD in Environmental Engineering from IIT Delhi.',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
      },
      column: 'Green Tech',
      date: '2024-05-21',
      readTime: '15 min',
      likes: 3921,
      comments: 116,
      image: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      tags: ['Sustainability', 'Eco-Friendly', 'Manufacturing'],
      views: 8700
    },
    {
      id: 3,
      title: 'Safety Innovations in Heavy Equipment Operation',
      excerpt: 'New technologies making construction sites safer for operators and workers through AI and advanced monitoring systems.',
      author: {
        name: 'Amit Patel',
        role: 'Safety Director',
        bio: 'Developed award-winning safety protocols for heavy machinery operations. Certified Safety Professional with 12 years in the field.',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
      },
      column: 'Safety First',
      date: '2024-06-15',
      readTime: '8 min',
      likes: 5234,
      comments: 342,
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      tags: ['Safety', 'AI', 'Construction'],
      views: 14300
    },
    {
      id: 4,
      title: 'The Evolution of Excavator Technology',
      excerpt: 'From steam shovels to intelligent hydraulic systems - tracing the remarkable journey of excavator development.',
      author: {
        name: 'Rajesh Kumar',
        role: 'Chief Engineer',
        bio: 'With 15 years experience in heavy machinery development and innovation. Former lead engineer at Caterpillar India.',
        avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
      },
      column: 'Machinery History',
      date: '2024-03-18',
      readTime: '12 min',
      likes: 4321,
      comments: 198,
      image: 'https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      tags: ['History', 'Excavators', 'Technology'],
      views: 9200
    },
    {
      id: 5,
      title: 'Electric vs Diesel: The Future of Construction Equipment',
      excerpt: 'Comparing the performance, cost, and environmental impact of electric and diesel-powered heavy machinery.',
      author: {
        name: 'Priya Sharma',
        role: 'Sustainability Officer',
        bio: 'Head of Environmental Initiatives at TIL with a focus on green manufacturing. PhD in Environmental Engineering from IIT Delhi.',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
      },
      column: 'Green Tech',
      date: '2024-07-02',
      readTime: '14 min',
      likes: 5876,
      comments: 254,
      image: 'https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      tags: ['Electric', 'Sustainability', 'Comparison'],
      views: 15600
    }
  ];

  // Get all unique tags from posts
  const allTags = Array.from(new Set(featuredPosts.flatMap(post => post.tags)));

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const toggleSavePost = (postId: number) => {
    setSavedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId) 
        : [...prev, postId]
    );
  };

  const toggleAuthorDetails = (postId: number) => {
    setExpandedAuthor(prev => prev === postId ? null : postId);
  };

  const handleTagClick = (tag: string) => {
    setActiveTags(prev => {
      if (prev.includes(tag)) {
        return prev.filter(t => t !== tag);
      } else {
        return [...prev, tag];
      }
    });
    setSearchQuery('');
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: 'featured' | 'popular' | 'latest') => {
    setActiveTab(category);
    setCurrentPage(1);
  };

  // Filter posts based on search query, active tags, and category
  const filteredPosts = featuredPosts.filter(post => {
    if (searchQuery) {
      return (
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (activeTags.length > 0) {
      return activeTags.every(tag => post.tags.includes(tag));
    }

    if (activeTab === 'popular') {
      return post.views > 10000;
    } else if (activeTab === 'latest') {
      const postDate = new Date(post.date);
      const cutoffDate = new Date();
      cutoffDate.setMonth(cutoffDate.getMonth() - 1);
      return postDate >= cutoffDate;
    }

    return true;
  });

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeTags, activeTab]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Blog Header Section - Left Aligned with Animations */}
        <div className="mb-12">
          <motion.div 
            className="relative pl-4 border-l-4 mt-4 border-[#F1B434] mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.span
              className="inline-block mt-6 text-transparent bg-clip-text bg-gradient-to-r from-[#F1B434] to-[#FFE352] text-lg font-bold tracking-tight"

              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              INDUSTRY INSIGHTS
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              TIL <span className="text-[#F1B434]">Blog</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Stay updated with the latest trends, innovations, and news in the heavy equipment industry.
            </motion.p>
          </motion.div>
          
          {/* Search and Tabs */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434] sm:text-sm"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setActiveTags([]);
                }}
              />
            </div>
            
            <div className="flex space-x-4">
              <button 
                className={`text-sm font-medium px-4 py-2 rounded-md ${activeTab === 'featured' ? 'bg-[#F1B434] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                onClick={() => handleCategoryChange('featured')}
              >
                Featured
              </button>
              <button 
                className={`text-sm font-medium px-4 py-2 rounded-md ${activeTab === 'popular' ? 'bg-[#F1B434] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                onClick={() => handleCategoryChange('popular')}
              >
                Popular
              </button>
              <button 
                className={`text-sm font-medium px-4 py-2 rounded-md ${activeTab === 'latest' ? 'bg-[#F1B434] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                onClick={() => handleCategoryChange('latest')}
              >
                Latest
              </button>
            </div>
          </div>
        </div>

        {/* Active filters display */}
        {(activeTags.length > 0 || searchQuery) && (
          <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-gray-600">Showing results for:</span>
              
              {searchQuery && (
                <span className="px-3 py-1 bg-[#F1B434]/10 text-[#F1B434] rounded-full flex items-center">
                  Search: "{searchQuery}"
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="ml-2 text-[#F1B434] hover:text-[#d89c2a]"
                  >
                    &times;
                  </button>
                </span>
              )}
              
              {activeTags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-[#F1B434]/10 text-[#F1B434] rounded-full flex items-center">
                  {tag}
                  <button 
                    onClick={() => setActiveTags(prev => prev.filter(t => t !== tag))}
                    className="ml-2 text-[#F1B434] hover:text-[#d89c2a]"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
            
            <button 
              onClick={() => {
                setActiveTags([]);
                setSearchQuery('');
              }}
              className="text-sm text-[#F1B434] hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Articles Column */}
          <div className="lg:w-2/3">
            {/* Articles List */}
            <div className="space-y-8">
              {currentPosts.map((post) => (
                <motion.article 
                  key={post.id}
                  className="group cursor-pointer bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link to={`/blog/${post.id}`} className="flex gap-5">
                    {/* Content on the left */}
                    <div className="flex-1">
                      {/* Author Info */}
                      <div className="flex items-center gap-3 mb-2">
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            toggleAuthorDetails(post.id);
                          }}
                          className="flex-shrink-0"
                        >
                          <img 
                            src={post.author.avatar} 
                            alt={post.author.name}
                            className="w-8 h-8 rounded-full object-cover hover:ring-2 hover:ring-[#F1B434] transition-all"
                          />
                        </button>
                        <div className="text-xs text-gray-600">
                          <span>In </span>
                          <span className="font-semibold text-gray-700">{post.column}</span>
                          <span> by </span>
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              toggleAuthorDetails(post.id);
                            }}
                            className="font-medium text-gray-700 hover:text-[#F1B434]"
                          >
                            {post.author.name}
                          </button>
                        </div>
                      </div>

                      {/* Author Details Popup */}
                      {expandedAuthor === post.id && (
                        <div className="bg-white p-3 rounded-lg shadow-md mb-3 border border-gray-200 text-sm">
                          <div className="flex items-start gap-3">
                            <img 
                              src={post.author.avatar} 
                              alt={post.author.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <h4 className="font-bold text-gray-800">{post.author.name}</h4>
                              <p className="text-xs text-[#F1B434]">{post.author.role}</p>
                              <p className="text-xs text-gray-600 mt-1">{post.author.bio}</p>
                              <Link 
                                to={`/blog/author/${post.author.name.replace(/\s+/g, '-').toLowerCase()}`}
                                className="text-xs text-[#F1B434] mt-2 inline-block hover:underline"
                              >
                                View all articles →
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Post Content */}
                      <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#F1B434] transition-colors">
                        {post.title}
                      </h4>
                      
                      <p className="text-sm text-gray-600 mb-3">{post.excerpt}</p>
                      
                      {/* Post Actions and Metadata */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar size={12} className="text-[#F1B434]" />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={12} className="text-[#F1B434]" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              toggleSavePost(post.id);
                            }}
                            className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#F1B434]"
                          >
                            <Heart size={14} className={savedPosts.includes(post.id) ? 'fill-[#F1B434] text-[#F1B434]' : ''} />
                            <span>{formatNumber(post.likes)}</span>
                          </button>
                          <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#F1B434]">
                            <MessageCircle size={14} />
                            <span>{formatNumber(post.comments)}</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Image on the right */}
                    <div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="absolute w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-600">No articles found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
              </div>
            )}

            {/* Pagination */}
            {filteredPosts.length > postsPerPage && (
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 rounded-full ${currentPage === page ? 'bg-[#F1B434] text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 rounded-md ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    Next
                  </button>
                </nav>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-8 space-y-8">
              {/* About Section */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">About TIL Blog</h3>
                <p className="text-gray-600 mb-4">
                  The official blog of TIL Limited, sharing insights, innovations, and stories from the world of heavy equipment manufacturing.
                </p>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors">
                  Follow
                </button>
              </div>

              {/* Topics Section */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Topics</h3>
                  <button 
                    className="text-sm text-[#F1B434] hover:underline"
                    onClick={() => setActiveTags([])}
                  >
                    See all
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((topic) => (
                    <button 
                      key={topic}
                      onClick={() => handleTagClick(topic)}
                      className={`text-sm px-3 py-1.5 rounded-full transition-colors ${
                        activeTags.includes(topic)
                          ? 'bg-[#F1B434] text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Authors */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Authors</h3>
                <div className="space-y-4">
                  {featuredPosts
                    .filter((post, index, self) => 
                      index === self.findIndex((p) => p.author.name === post.author.name)
                    )
                    .slice(0, 3)
                    .map((post) => (
                      <Link 
                        key={post.author.name}
                        to={`/blog/author/${post.author.name.replace(/\s+/g, '-').toLowerCase()}`}
                        className="flex items-center gap-3 group"
                      >
                        <img 
                          src={post.author.avatar} 
                          alt={post.author.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-medium text-gray-900 group-hover:text-[#F1B434] transition-colors">
                            {post.author.name}
                          </h4>
                          <p className="text-xs text-gray-500">{post.author.role}</p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-r from-[#F1B434] to-[#FFE352] rounded-xl shadow-sm p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Subscribe to our newsletter</h3>
                <p className="text-sm mb-4">Get the latest articles and industry news delivered to your inbox</p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-md border border-white/30 bg-white/20 placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white"
                  />
                  <button className="w-full bg-white text-[#F1B434] font-medium py-2 px-4 rounded-md hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogListPage;