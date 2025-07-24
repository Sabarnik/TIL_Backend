import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogSection from '@/components/BlogSection';
import { blogPosts } from '@/data/blogPosts';

const BlogPage: React.FC = () => (
  <main className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-white py-16">
    <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20">
      <motion.h1
        className="text-center text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        All <span className="text-[#F1B434]">Articles</span>
      </motion.h1>

      {/* Reuse BlogSection as intro */}
      <BlogSection />

      <section className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map(post => (
          <motion.article
            key={post.id}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to={`/blog/${post.id}`} className="relative h-52 overflow-hidden block">
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#F1B434] transition-colors line-clamp-2">
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h2>
              <p className="text-sm text-gray-600 flex-1 line-clamp-3">{post.excerpt}</p>
              <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar size={12} className="text-[#F1B434]" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} className="text-[#F1B434]" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </section>
    </div>
  </main>
);

export default BlogPage;
