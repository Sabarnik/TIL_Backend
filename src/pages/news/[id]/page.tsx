import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CalendarDays, Clock, Share2 } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

const NewsArticlePage: React.FC = () => {
  // Mock data - in a real app, this would come from an API
  const newsArticles = [
    {
      id: 1,
      title: 'TIL Launches Revolutionary Electric Excavator Series',
      excerpt: 'Our new electric excavator line delivers 40% more efficiency while reducing emissions by 90%, setting new industry standards.',
      content: `
        <p>TIL Limited has unveiled its groundbreaking electric excavator series, marking a significant leap forward in sustainable construction equipment. The new line features advanced battery technology that provides 8-10 hours of continuous operation on a single charge.</p>
        
        <p>With 40% greater efficiency than conventional models and a 90% reduction in emissions, these excavators are poised to transform urban construction projects where emissions regulations are becoming increasingly strict. The series includes three models ranging from 1.8 to 5.5 tons, all featuring reduced noise levels for urban environments.</p>
        
        <h3>Key Features:</h3>
        <ul>
          <li>Advanced lithium-ion battery systems with fast-charging capability</li>
          <li>Regenerative braking that recovers up to 25% of energy</li>
          <li>Integrated telematics for real-time performance monitoring</li>
          <li>Noise levels below 70dB for urban compliance</li>
        </ul>
        
        <p>"This launch represents a major milestone in our commitment to sustainable construction solutions," said TIL CEO Michael Andersen. "We're not just meeting emissions standards—we're redefining what's possible in electric construction equipment."</p>
        
        <p>The first units will be available in European markets in Q2 2024, with global rollout continuing through 2025. Early orders have already exceeded projections by 30%, with particular interest from municipal contractors facing strict urban emissions regulations.</p>
      `,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Product Launch',
      featured: true,
      tags: ['Electric', 'Innovation', 'Sustainability', 'Construction'],
      author: {
        name: 'Sarah Johnson',
        role: 'Chief Technology Officer',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
      }
    },
    {
      id: 2,
      title: 'Global Expansion: New TIL Manufacturing Facility in Southeast Asia',
      excerpt: 'Strategic investment of $200M in our new facility will serve growing Asian markets with locally manufactured equipment.',
      content: `
        <p>TIL Limited has announced a $200 million investment in a state-of-the-art manufacturing facility in Vietnam to better serve the rapidly growing Southeast Asian market. The 500,000 square foot facility will produce our full range of compact construction equipment and is expected to create over 800 local jobs when fully operational in 2025.</p>
        
        <p>This strategic move allows TIL to reduce shipping costs and delivery times for customers in the region while maintaining our rigorous quality standards. The facility will incorporate renewable energy sources and water recycling systems to minimize environmental impact.</p>
        
        <h3>Facility Highlights:</h3>
        <ul>
          <li>500,000 sq ft production space with expansion capability</li>
          <li>80% renewable energy usage through solar and biomass</li>
          <li>Advanced robotics for precision manufacturing</li>
          <li>On-site training center for local workforce development</li>
        </ul>
        
        <p>"Southeast Asia represents one of our fastest growing markets," explained COO Raj Patel. "Local production means we can better serve our customers with faster delivery times and products tailored to regional requirements."</p>
        
        <p>The Vietnam facility is TIL's third manufacturing site in Asia, joining existing plants in India and China. The company plans to source 60% of components locally within three years, creating additional economic benefits for the region.</p>
      `,
      image: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: '2024-01-10',
      readTime: '3 min read',
      category: 'Company News',
      featured: true,
      tags: ['Expansion', 'Manufacturing', 'Asia', 'Investment'],
      author: {
        name: 'Raj Patel',
        role: 'Chief Operations Officer',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
      }
    },
    {
      id: 3,
      title: 'TIL Wins 2023 Sustainable Construction Award',
      excerpt: 'Recognized for our eco-friendly designs and commitment to reducing carbon footprint in the construction industry.',
      content: `
        <p>TIL Limited has been honored with the prestigious 2023 Sustainable Construction Award for our innovative approach to reducing environmental impact in the construction equipment sector. The award recognizes our achievements in developing low-emission machinery and implementing sustainable manufacturing practices across our global operations.</p>
        
        <p>Our award submission highlighted three key initiatives: the electric excavator line (launched earlier this year), our closed-loop water recycling system in manufacturing, and the company-wide commitment to achieve carbon neutrality by 2030.</p>
        
        <h3>Award Highlights:</h3>
        <ul>
          <li>Recognized for industry-leading sustainability initiatives</li>
          <li>Selected from over 200 international applicants</li>
          <li>Particular praise for real-world impact of our technologies</li>
          <li>Commitment to continuous improvement in sustainability</li>
        </ul>
        
        <p>"This award validates our team's hard work and vision," said Sustainability Director Elena Rodriguez. "But more importantly, it demonstrates that environmental responsibility and business success can go hand-in-hand in our industry."</p>
        
        <p>The award ceremony took place in Berlin, with judges noting TIL's "holistic approach to sustainability" that addresses not just end products but the entire manufacturing and supply chain process. This marks the third major sustainability award for TIL in the past five years.</p>
      `,
      image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: '2023-12-05',
      readTime: '4 min read',
      category: 'Awards',
      featured: true,
      tags: ['Awards', 'Sustainability', 'Recognition', 'Environment'],
      author: {
        name: 'Elena Rodriguez',
        role: 'Sustainability Director',
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
      }
    }
  ];

  const { id } = useParams<{ id: string }>();
  const article = newsArticles.find(article => article.id === Number(id));
  const relatedArticles = newsArticles.filter(a => a.id !== Number(id)).slice(0, 2);

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-white flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">The requested article could not be found.</p>
          <Link 
            to="/news" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#F1B434] to-[#FFE352] text-[#1a2233] rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      }).catch(err => console.log('Error sharing:', err));
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-white min-h-screen">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link 
            to="/news" 
            className="inline-flex items-center text-[#1a2233] font-medium hover:text-[#F1B434] transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to News
          </Link>
        </motion.div>
      </div>

      {/* Article Header */}
      <motion.section 
        className="py-8 md:py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-[#F1B434] rounded-full">
              {article.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="flex items-center">
              <img 
                src={article.author.avatar} 
                alt={article.author.name} 
                className="w-10 h-10 rounded-full mr-3 object-cover"
              />
              <div>
                <p className="font-medium text-gray-900">{article.author.name}</p>
                <p className="text-sm text-gray-600">{article.author.role}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center text-sm text-gray-600">
                <CalendarDays className="w-4 h-4 mr-2" />
                {formatDate(article.date)}
              </span>
              <span className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                {article.readTime}
              </span>
              <button 
                onClick={handleShare}
                className="flex items-center text-sm text-gray-600 hover:text-[#F1B434] transition-colors"
                aria-label="Share article"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Featured Image */}
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-auto max-h-[500px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>

      {/* Article Content */}
      <motion.section 
        className="pb-16 md:pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          ></div>

          {/* Tags */}
          <div className="mt-12 flex flex-wrap gap-2">
            {article.tags?.map((tag, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-[#F1B434] hover:text-white transition-colors cursor-default"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">More Headlines</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedArticles.map(relatedArticle => (
                  <Link 
                    key={relatedArticle.id} 
                    to={`/news/${relatedArticle.id}`}
                    className="group block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={relatedArticle.image} 
                        alt={relatedArticle.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-[#F1B434] rounded-full mb-2">
                        {relatedArticle.category}
                      </span>
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#F1B434] transition-colors">
                        {relatedArticle.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{formatDate(relatedArticle.date)}</span>
                        <span>{relatedArticle.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Share Buttons */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
            <div className="flex space-x-4">
              <button 
                onClick={handleShare}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F1B434] text-white hover:bg-[#1a2233] transition-colors"
                aria-label="Share article"
              >
                <Share2 className="w-5 h-5" />
              </button>
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1DA1F2] text-white hover:bg-[#1991db] transition-colors"
                aria-label="Share on Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a 
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(article.title)}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0077B5] text-white hover:bg-[#006097] transition-colors"
                aria-label="Share on LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Back to News Button */}
          <div className="mt-12 text-center">
            <Link 
              to="/news" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#F1B434] to-[#FFE352] text-[#1a2233] rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to News
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default NewsArticlePage;