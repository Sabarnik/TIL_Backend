'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Heart, MessageCircle, Share2, Bookmark, ChevronLeft } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const BlogViewPage: React.FC = () => {
  const navigate = useNavigate();
  const { postTitle } = useParams<{ postTitle: string }>();
  const [savedPosts, setSavedPosts] = useState<number[]>([]);
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<{id: number, text: string, author: string, date: string}[]>([]);
  const [isCommenting, setIsCommenting] = useState(false);

  // Mock data - in a real app, this would come from an API
  const allPosts = [
    {
      id: 1,
      title: 'the-future-of-heavy-machinery-in-construction',
      displayTitle: 'The Future of Heavy Machinery in Construction',
      excerpt: 'Exploring how innovative technologies are transforming the construction equipment industry',
      content: `
        <h2>The Evolution of Construction Machinery</h2>
        <p>The construction industry has witnessed remarkable transformations over the past decade, with heavy machinery at the forefront of this revolution. From autonomous bulldozers to AI-powered cranes, technology is reshaping how we build our world.</p>
        
        <h3>Autonomous Equipment</h3>
        <p>One of the most significant advancements is the development of autonomous construction equipment. These machines can operate with minimal human intervention, improving safety and efficiency on job sites. Companies like Caterpillar and Komatsu have already deployed semi-autonomous bulldozers and excavators that can follow pre-programmed routes and complete repetitive tasks with precision.</p>
        
        <p><img src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80" alt="Autonomous construction vehicle" /></p>
        
        <h3>Electric Power</h3>
        <p>The shift toward electric-powered machinery is another critical trend. Electric excavators and loaders produce zero emissions at the point of use, making them ideal for urban construction projects with strict environmental regulations. While battery life remains a challenge for larger equipment, rapid charging technology and swappable battery systems are helping overcome these limitations.</p>
        
        <h2>Smart Technology Integration</h2>
        <p>Modern heavy machinery is increasingly equipped with IoT sensors and connectivity features that enable:</p>
        <ul>
          <li>Real-time performance monitoring</li>
          <li>Predictive maintenance alerts</li>
          <li>Remote diagnostics</li>
          <li>Fleet management optimization</li>
        </ul>
        
        <p>These smart features not only reduce downtime but also provide valuable data that can improve project planning and resource allocation.</p>
        
        <h3>3D Printing in Construction</h3>
        <p>While not strictly heavy machinery, 3D printing technology is beginning to intersect with traditional construction equipment. Specialized printers can now create building components on-site, working in tandem with conventional machinery to accelerate construction timelines.</p>
        
        <h2>The Future Outlook</h2>
        <p>As we look ahead, several emerging technologies promise to further revolutionize the industry:</p>
        <ol>
          <li>Fully autonomous construction sites</li>
          <li>Advanced materials that reduce equipment weight while maintaining strength</li>
          <li>AI-assisted equipment operation for precision tasks</li>
          <li>Hybrid power systems combining electric and alternative fuels</li>
        </ol>
        
        <p>The future of heavy machinery in construction is undoubtedly exciting, with innovations that will make construction faster, safer, and more sustainable.</p>
      `,
      author: {
        name: 'Rajesh Kumar',
        role: 'Chief Engineer',
        bio: 'With 15 years experience in heavy machinery development and innovation',
        avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80'
      },
      column: 'Industry Insights',
      date: '2024-04-05',
      readTime: '10 min',
      likes: '7K',
      comments: '426',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80',
      featuredImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=628&q=80',
      tags: ['Technology', 'Innovation', 'Construction']
    },
    {
      id: 2,
      title: 'sustainable-practices-in-equipment-manufacturing',
      displayTitle: 'Sustainable Practices in Equipment Manufacturing',
      excerpt: 'How TIL is leading the way in eco-friendly heavy equipment production',
      content: `
        <h2>The Green Manufacturing Revolution</h2>
        <p>Sustainability has become a cornerstone of modern heavy equipment manufacturing. At TIL, we've implemented numerous initiatives to reduce our environmental footprint while maintaining the high performance our customers expect.</p>
        
        <h3>Material Innovation</h3>
        <p>We've transitioned to using more recycled materials in our manufacturing processes. Our latest line of excavators incorporates 30% recycled steel without compromising structural integrity. Additionally, we're pioneering the use of bio-based composites for non-structural components.</p>
        
        <p><img src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80" alt="Eco-friendly manufacturing" /></p>
        
        <h3>Energy Efficiency</h3>
        <p>Our manufacturing plants now run on 60% renewable energy, with plans to reach 100% by 2026. We've installed solar arrays at all our facilities and utilize waste heat recovery systems to maximize energy efficiency.</p>
        
        <h2>Circular Economy Approach</h2>
        <p>We've implemented a comprehensive equipment lifecycle program that includes:</p>
        <ul>
          <li>Design for disassembly and recyclability</li>
          <li>Remanufacturing programs for core components</li>
          <li>Take-back schemes for end-of-life equipment</li>
          <li>Refurbishment services to extend product life</li>
        </ul>
        
        <h3>Emission Reductions</h3>
        <p>Our Tier 4 Final engines reduce particulate matter by 90% compared to previous generations. We're also investing heavily in electric and hybrid powertrain development, with our first fully electric loader coming to market next year.</p>
        
        <h2>Sustainable Supply Chain</h2>
        <p>Sustainability extends beyond our factories. We work closely with suppliers to ensure responsible sourcing of materials and minimize transportation emissions through regional manufacturing hubs.</p>
        
        <p>The journey toward sustainable manufacturing is ongoing, but we're committed to leading our industry toward a greener future.</p>
      `,
      author: {
        name: 'Priya Sharma',
        role: 'Sustainability Officer',
        bio: 'Head of Environmental Initiatives at TIL with a focus on green manufacturing',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80'
      },
      column: 'Green Tech',
      date: '2024-05-21',
      readTime: '15 min',
      likes: '3.9K',
      comments: '116',
      image: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80',
      featuredImage: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=628&q=80',
      tags: ['Sustainability', 'Eco-Friendly', 'Manufacturing']
    },
    {
      id: 3,
      title: 'safety-innovations-in-heavy-equipment-operation',
      displayTitle: 'Safety Innovations in Heavy Equipment Operation',
      excerpt: 'New technologies making construction sites safer for operators and workers',
      content: `
        <h2>Transforming Construction Site Safety</h2>
        <p>Safety remains the top priority in heavy equipment operation, and recent technological advancements are revolutionizing how we protect both operators and ground personnel.</p>
        
        <h3>Collision Avoidance Systems</h3>
        <p>Modern equipment now features advanced proximity detection systems that use radar, cameras, and ultrasonic sensors to identify potential collisions. These systems can automatically slow or stop equipment when workers or obstacles are detected in danger zones.</p>
        
        <p><img src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80" alt="Safety technology in construction" /></p>
        
        <h3>Operator Assistance Features</h3>
        <p>New operator assistance technologies include:</p>
        <ul>
          <li>Load moment indicators for cranes</li>
          <li>Stability control systems for rough terrain</li>
          <li>Automatic grade control for excavators</li>
          <li>Fatigue monitoring through eye-tracking</li>
        </ul>
        
        <h2>Virtual Reality Training</h2>
        <p>We've implemented VR training simulations that allow operators to practice in high-risk scenarios without real-world consequences. This has reduced onboarding accidents by 42% in our pilot programs.</p>
        
        <h3>Wearable Technology</h3>
        <p>Smart helmets and vests now provide real-time alerts to workers when they enter equipment danger zones. These wearables also monitor vital signs and can detect falls or impacts, automatically alerting safety personnel.</p>
        
        <h2>The Future of Safety</h2>
        <p>Looking ahead, we're developing:</p>
        <ol>
          <li>AI-powered predictive safety systems</li>
          <li>Augmented reality displays for better visibility</li>
          <li>Biometric authentication to ensure only certified operators can use equipment</li>
          <li>Remote operation capabilities for high-risk tasks</li>
        </ol>
        
        <p>These innovations represent just the beginning of our safety transformation journey.</p>
      `,
      author: {
        name: 'Amit Patel',
        role: 'Safety Director',
        bio: 'Developed award-winning safety protocols for heavy machinery operations',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80'
      },
      column: 'Safety First',
      date: '2024-06-15',
      readTime: '8 min',
      likes: '5.2K',
      comments: '342',
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80',
      featuredImage: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=628&q=80',
      tags: ['Safety', 'AI', 'Construction']
    }
  ];

  // Find the current post based on URL parameter
  const currentPost = allPosts.find(post => post.title === postTitle);
  
  // If post not found, redirect to blog list
  useEffect(() => {
    if (!currentPost && postTitle) {
      navigate('/media/blog');
    }
  }, [currentPost, postTitle, navigate]);

  // Get related posts (same tags or same author)
  const relatedPosts = currentPost 
    ? allPosts.filter(post => 
        post.id !== currentPost.id && 
        (post.tags.some(tag => currentPost.tags.includes(tag)) || 
         post.author.name === currentPost.author.name)
      ).slice(0, 3)
    : [];

  // Get other posts by the same author
  const authorPosts = currentPost 
    ? allPosts.filter(post => 
        post.id !== currentPost.id && 
        post.author.name === currentPost.author.name
      ).slice(0, 2)
    : [];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const toggleSavePost = (postId: number) => {
    setSavedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId) 
        : [...prev, postId]
    );
  };

  const toggleLikePost = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId) 
        : [...prev, postId]
    );
  };

  const handleShare = () => {
    setIsShareOpen(!isShareOpen);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsShareOpen(false);
    // Show a toast notification in a real app
    alert('Link copied to clipboard!');
  };

  const shareOnSocialMedia = (platform: string) => {
    let url = '';
    const shareUrl = encodeURIComponent(window.location.href);
    const shareText = encodeURIComponent(currentPost?.displayTitle || 'Check out this article');
    
    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareText}`;
        break;
      default:
        break;
    }
    
    window.open(url, '_blank', 'width=600,height=400');
    setIsShareOpen(false);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim() && currentPost) {
      setComments(prev => [
        ...prev,
        {
          id: Date.now(),
          text: comment,
          author: 'You', // In a real app, this would be the logged in user
          date: new Date().toISOString()
        }
      ]);
      setComment('');
      setIsCommenting(false);
    }
  };

  if (!currentPost) {
    return null; // or a loading spinner
  }

  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-white min-h-screen">
      <main className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-12">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/media/blog')}
          className="flex items-center text-[#F1B434] hover:text-[#d89c2a] mb-8 transition-colors"
        >
          <ChevronLeft size={18} className="mr-1" />
          Back to all articles
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            {/* Article Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Link 
                  to={`/media/blog?category=${currentPost.column.toLowerCase().replace(' ', '-')}`}
                  className="text-xs font-semibold text-[#F1B434] hover:underline"
                >
                  {currentPost.column}
                </Link>
                <span className="text-gray-400">•</span>
                <span className="text-xs text-gray-600">
                  By <Link 
                    to={`/media/blog?author=${currentPost.author.name.toLowerCase().replace(' ', '-')}`}
                    className="font-medium text-gray-700 hover:text-[#F1B434]"
                  >
                    {currentPost.author.name}
                  </Link>
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {currentPost.displayTitle}
              </h1>

              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} className="text-[#F1B434]" />
                    <span>{formatDate(currentPost.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} className="text-[#F1B434]" />
                    <span>{currentPost.readTime} read</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button 
                    className="flex items-center gap-1 text-sm text-gray-600 hover:text-[#F1B434]"
                    onClick={() => toggleLikePost(currentPost.id)}
                  >
                    <Heart 
                      size={16} 
                      fill={likedPosts.includes(currentPost.id) ? "#F1B434" : "none"} 
                      className={likedPosts.includes(currentPost.id) ? "text-[#F1B434]" : ""}
                    />
                    <span>{currentPost.likes}</span>
                  </button>
                  
                  <button 
                    className="flex items-center gap-1 text-sm text-gray-600 hover:text-[#F1B434]"
                    onClick={() => setIsCommenting(true)}
                  >
                    <MessageCircle size={16} />
                    <span>{currentPost.comments}</span>
                  </button>
                  
                  <div className="relative">
                    <button 
                      className="flex items-center gap-1 text-sm text-gray-600 hover:text-[#F1B434]"
                      onClick={handleShare}
                    >
                      <Share2 size={16} />
                      <span>Share</span>
                    </button>
                    
                    {isShareOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                        <button 
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => shareOnSocialMedia('twitter')}
                        >
                          Twitter
                        </button>
                        <button 
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => shareOnSocialMedia('facebook')}
                        >
                          Facebook
                        </button>
                        <button 
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => shareOnSocialMedia('linkedin')}
                        >
                          LinkedIn
                        </button>
                        <button 
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={copyToClipboard}
                        >
                          Copy Link
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <button 
                    className="text-gray-600 hover:text-[#F1B434]"
                    onClick={() => toggleSavePost(currentPost.id)}
                  >
                    <Bookmark 
                      size={16} 
                      fill={savedPosts.includes(currentPost.id) ? "#F1B434" : "none"} 
                      className={savedPosts.includes(currentPost.id) ? "text-[#F1B434]" : ""}
                    />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              className="mb-8 rounded-xl overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src={currentPost.image} 
                alt={currentPost.displayTitle}
                className="w-full h-auto rounded-lg object-cover"
              />
            </motion.div>

            {/* Article Content */}
            <motion.article
              className="prose max-w-none mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              dangerouslySetInnerHTML={{ __html: currentPost.content }}
            />

            {/* Tags */}
            <div className="mb-12">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {currentPost.tags.map(tag => (
                  <Link
                    key={tag}
                    to={`/media/blog?tag=${tag.toLowerCase()}`}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-[#F1B434] hover:text-white transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-gray-50 p-6 rounded-xl mb-12">
              <div className="flex items-start gap-4">
                <img 
                  src={currentPost.author.avatar} 
                  alt={currentPost.author.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{currentPost.author.name}</h3>
                  <p className="text-sm text-[#F1B434] mb-2">{currentPost.author.role}</p>
                  <p className="text-gray-600 text-sm mb-3">{currentPost.author.bio}</p>
                  <Link 
                    to={`/media/blog?author=${currentPost.author.name.toLowerCase().replace(' ', '-')}`}
                    className="text-sm font-medium text-[#F1B434] hover:underline"
                  >
                    View all articles by {currentPost.author.name.split(' ')[0]}
                  </Link>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Comments ({currentPost.comments})</h3>
              
              {isCommenting ? (
                <form onSubmit={handleCommentSubmit} className="mb-6">
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share your thoughts..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434] mb-3"
                    rows={4}
                  />
                  <div className="flex justify-end gap-3">
                    <button 
                      type="button"
                      onClick={() => setIsCommenting(false)}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="px-4 py-2 text-sm font-medium text-white bg-[#F1B434] rounded-md hover:bg-[#d89c2a]"
                    >
                      Post Comment
                    </button>
                  </div>
                </form>
              ) : (
                <button 
                  onClick={() => setIsCommenting(true)}
                  className="w-full px-4 py-3 text-left border border-gray-300 rounded-lg hover:border-[#F1B434] mb-6 transition-colors"
                >
                  <p className="text-gray-500">Share your thoughts...</p>
                </button>
              )}
              
              <div className="space-y-6">
                {comments.length > 0 ? (
                  comments.map(comment => (
                    <div key={comment.id} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-medium text-gray-600">
                          {comment.author.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900">{comment.author}</h4>
                          <p className="text-xs text-gray-500">
                            {new Date(comment.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 pl-11">{comment.text}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center py-6">No comments yet. Be the first to comment!</p>
                )}
              </div>
            </div>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedPosts.map(post => (
                    <Link 
                      key={post.id}
                      to={`/media/blog/${post.title}`}
                      className="group block bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="mb-3 relative h-40 rounded overflow-hidden">
                        <img 
                          src={post.thumbnail} 
                          alt={post.displayTitle}
                          className="absolute w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-[#F1B434] transition-colors">
                        {post.displayTitle}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">{post.excerpt}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>{formatDate(post.date)}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* More from Author */}
            {authorPosts.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  More from {currentPost.author.name.split(' ')[0]}
                </h3>
                <div className="space-y-6">
                  {authorPosts.map(post => (
                    <Link 
                      key={post.id}
                      to={`/media/blog/${post.title}`}
                      className="group flex gap-4 items-start"
                    >
                      <div className="flex-shrink-0 w-20 h-20 rounded overflow-hidden">
                        <img 
                          src={post.thumbnail} 
                          alt={post.displayTitle}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-[#F1B434] transition-colors">
                          {post.displayTitle}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Newsletter */}
            <div className="bg-gradient-to-r from-[#F1B434] to-[#FFE352] rounded-xl shadow-sm p-6 mb-8 text-white">
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

            {/* Popular Posts */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Posts</h3>
              <div className="space-y-4">
                {allPosts
                  .sort((a, b) => parseInt(b.likes.replace('K', '000')) - parseInt(a.likes.replace('K', '000')))
                  .slice(0, 3)
                  .map(post => (
                    <Link 
                      key={post.id}
                      to={`/media/blog/${post.title}`}
                      className="group flex gap-3 items-start pb-3 border-b border-gray-100 last:border-0"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded overflow-hidden">
                        <img 
                          src={post.thumbnail} 
                          alt={post.displayTitle}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#F1B434] transition-colors">
                          {post.displayTitle}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                          <span>{formatDate(post.date)}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {Array.from(new Set(allPosts.map(post => post.column))).map(category => (
                  <Link
                    key={category}
                    to={`/media/blog?category=${category.toLowerCase().replace(' ', '-')}`}
                    className="block py-2 px-3 text-gray-700 hover:bg-gray-50 hover:text-[#F1B434] rounded-md transition-colors"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogViewPage;