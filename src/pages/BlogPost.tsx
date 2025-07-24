import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { blogPosts } from '@/data/blogPosts';

const BlogPost: React.FC = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Article not found.
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-white py-16">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 mb-8 text-sm font-medium text-gray-600 hover:text-[#F1B434] transition-colors"
        >
          <ArrowLeft size={16} /> Back to articles
        </Link>

        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {post.title}
        </motion.h1>

        <div className="flex items-center gap-3 text-xs text-gray-500 mb-10">
          <span className="flex items-center gap-1">
            <Calendar size={12} className="text-[#F1B434]" />
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} className="text-[#F1B434]" />
            {post.readTime}
          </span>
          <span className="flex items-center gap-1 pl-3 border-l border-gray-300">
            {post.column}
          </span>
        </div>

        <motion.img
          src={post.image}
          alt={post.title}
          className="w-full h-72 md:h-96 object-cover rounded-xl mb-10 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        <ReactMarkdown className="prose prose-lg max-w-none text-gray-800">
          {post.content}
        </ReactMarkdown>

        <div className="mt-16 flex items-start gap-4 p-6 bg-white rounded-xl shadow-md border border-gray-100">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-800">{post.author.name}</h3>
            <p className="text-sm text-[#F1B434]">{post.author.role}</p>
            <p className="text-sm text-gray-600 mt-1">{post.author.bio}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
