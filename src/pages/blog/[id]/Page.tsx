/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  ArrowLeft,
  Eye,
  ThumbsUp
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * --------------------------------------------------------------------------
 * 1.  Sample post data – now using the same structure as BlogListPage
 * --------------------------------------------------------------------------
 */
interface Author {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  author: Author;
  column: string;
  date: string;
  readTime: string;
  likes: number;
  comments: number;
  image: string;
  tags: string[];
  views: number;
}

interface Comment {
  id: number;
  author: string;
  avatar: string;
  text: string;
  date: string;
  likes: number;
}

const featuredPosts: Post[] = [
  {
    id: 1,
    title: 'The Future of Heavy Machinery in Construction',
    content: `
      <h2>Introduction</h2>
      <p>The construction industry is undergoing a technological revolution, with heavy machinery at its core. From autonomous vehicles to AI-powered diagnostics, the future is arriving faster than we anticipated.</p>
      
      <h2>Autonomous Equipment</h2>
      <p>Self-driving excavators and bulldozers are no longer science fiction. Companies like Caterpillar and Komatsu have already deployed autonomous machines in mining operations, with construction sites following suit.</p>
      
      <blockquote>
        "The efficiency gains from autonomous machinery are undeniable. We're seeing 30-40% productivity improvements in controlled environments." — Rajesh Kumar
      </blockquote>
      
      <h2>Electric Revolution</h2>
      <p>The shift to electric power isn't limited to passenger vehicles. Major manufacturers are introducing full electric lines of excavators, loaders, and cranes, reducing both emissions and operational costs.</p>
      
      <h2>Predictive Maintenance</h2>
      <p>IoT sensors combined with machine learning algorithms now predict equipment failures before they happen, saving thousands in unplanned downtime.</p>
    `,
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
    content: `
      <h2>The Green Manufacturing Imperative</h2>
      <p>As environmental regulations tighten globally, equipment manufacturers are finding innovative ways to reduce their carbon footprint while maintaining performance.</p>
      
      <h2>Material Innovations</h2>
      <p>New composite materials and recycled steel alloys are reducing the weight of machinery while maintaining structural integrity, leading to lower fuel consumption.</p>
      
      <h2>Energy-Efficient Designs</h2>
      <p>Hydraulic systems are being re-engineered for maximum efficiency, with some models achieving 30% better energy utilization than previous generations.</p>
      
      <blockquote>
        "Sustainability isn't just good for the planet—it's good for business. Our green initiatives have reduced costs by 18% while attracting environmentally-conscious clients." — Priya Sharma
      </blockquote>
    `,
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
    content: `
      <h2>The Human Factor</h2>
      <p>Despite technological advances, human error remains the leading cause of accidents on construction sites. New systems are addressing this challenge head-on.</p>
      
      <h2>AI-Powered Collision Avoidance</h2>
      <p>Machine vision systems can now detect workers in blind spots and automatically stop equipment movement before accidents occur.</p>
      
      <blockquote>
        "Our safety systems have reduced site accidents by 62% in the past two years. That's hundreds of families spared from tragedy." — Amit Patel
      </blockquote>
      
      <h2>Operator Fatigue Monitoring</h2>
      <p>Advanced sensors track operator alertness, triggering warnings and even automatic shutdowns when fatigue levels become dangerous.</p>
      
      <h2>Virtual Reality Training</h2>
      <p>New VR simulators allow operators to practice in high-risk scenarios without real-world consequences, dramatically improving skill acquisition.</p>
    `,
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
  }
];

const BlogViewPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = featuredPosts.find((p) => p.id === Number(id));

  /**
   * ------------------------------------------------------------------
   * 2.  Local state – likes, saves, comments, share-menu visibility.
   * ------------------------------------------------------------------
   */
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [commentInput, setCommentInput] = useState('');
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: 'Construction Pro',
      avatar:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
      text: "Great insights! We've implemented similar tech on our sites with excellent results.",
      date: '2024-06-16T10:30:00',
      likes: 24
    },
    {
      id: 2,
      author: 'Engineering Student',
      avatar:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80',
      text: 'Could you elaborate on the AI integration aspects? Would love to learn more.',
      date: '2024-06-15T14:45:00',
      likes: 12
    },
    {
      id: 3,
      author: 'Site Manager',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      text: 'Predictive maintenance has already saved us thousands in downtime costs.',
      date: '2024-06-14T09:15:00',
      likes: 31
    }
  ]);

  /* -------------------------------------------------------------
   * 3.  Utility functions
   * ----------------------------------------------------------- */
  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });

  const formatDateTime = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

  const formatNumber = (n: number) => (n >= 1_000 ? `${(n / 1_000).toFixed(1)}K` : `${n}`);

  /* -------------------------------------------------------------
   * 4.  Event handlers
   * ----------------------------------------------------------- */
  const toggleLike = () => setLiked((prev) => !prev);
  const toggleSave = () => setSaved((prev) => !prev);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentInput.trim()) return;
    const newComment: Comment = {
      id: comments.length + 1,
      author: 'You',
      avatar:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=200&q=80',
      text: commentInput.trim(),
      date: new Date().toISOString(),
      likes: 0
    };
    setComments((prev) => [...prev, newComment]);
    setCommentInput('');
  };

  const handleShare = (platform: 'twitter' | 'linkedin' | 'facebook' | 'copy') => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post?.title ?? '');
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
        break;
    }
    setShowShareMenu(false);
  };

  /* -------------------------------------------------------------
   * 5.  Fallback if post not found
   * ----------------------------------------------------------- */
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-gray-900">Article Not Found</h1>
          <p className="text-gray-600">The article you are looking for does not exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 px-4 py-2 rounded-md bg-yellow-500 text-white hover:bg-yellow-600"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  /* -------------------------------------------------------------
   * 6.  Render
   * ----------------------------------------------------------- */
  return (
    <div className="min-h-screen bg-white">
      {/* ---------- Sticky Nav ---------- */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
          <Link to="/blog" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5" />
            TIL Blog
          </Link>

          <div className="flex items-center gap-2">
            {/* Like btn */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm ${
                liked
                  ? 'text-red-600 bg-red-50 hover:bg-red-100'
                  : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
              }`}
              onClick={toggleLike}
            >
              <Heart className="w-4 h-4" fill={liked ? 'currentColor' : 'none'} />
              {formatNumber(liked ? post.likes + 1 : post.likes)}
            </motion.button>

            {/* Save btn */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className={`rounded-full p-2 ${
                saved
                  ? 'text-yellow-500 bg-yellow-50 hover:bg-yellow-100'
                  : 'text-gray-600 hover:text-yellow-500 hover:bg-yellow-50'
              }`}
              onClick={toggleSave}
            >
              <Bookmark className="w-4 h-4" fill={saved ? 'currentColor' : 'none'} />
            </motion.button>

            {/* Share dropdown */}
            <div className="relative">
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="rounded-full p-2 text-gray-600 hover:bg-gray-100"
                onClick={() => setShowShareMenu((prev) => !prev)}
              >
                <Share2 className="w-4 h-4" />
              </motion.button>

              <AnimatePresence>
                {showShareMenu && (
                  <motion.ul
                    initial={{ opacity: 0, scale: 0.95, y: -6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -6 }}
                    className="absolute right-0 mt-2 w-48 rounded-lg border bg-white shadow-xl"
                  >
                    {[
                      { id: 'twitter', label: 'Share on Twitter' },
                      { id: 'linkedin', label: 'Share on LinkedIn' },
                      { id: 'facebook', label: 'Share on Facebook' },
                      { id: 'copy', label: 'Copy Link' }
                    ].map(({ id, label }) => (
                      <li
                        key={id}
                        className="px-4 py-2 cursor-pointer text-sm hover:bg-gray-50"
                        onClick={() =>
                          handleShare(id as 'twitter' | 'linkedin' | 'facebook' | 'copy')
                        }
                      >
                        {label}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </nav>

      {/* ---------- Main ---------- */}
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <article className="pt-8 pb-12">
          {/* Tags / Column */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-yellow-500 px-3 py-1 text-sm font-medium text-white">
              {post.column}
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="mb-6 text-4xl font-bold text-gray-900">{post.title}</h1>

          {/* Excerpt */}
          <p className="mb-8 text-xl text-gray-600">{post.excerpt}</p>

          {/* Meta */}
          <div className="mb-8 flex flex-wrap items-center gap-6 border-b pb-8 text-sm text-gray-500">
            <Link
              to={`/blog/author/${post.author.name.replace(/\s+/g, '-').toLowerCase()}`}
              className="flex items-center gap-3 hover:text-yellow-600"
            >
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-11 w-11 rounded-full object-cover ring-2 ring-gray-200"
              />
              <span className="font-medium text-gray-900">{post.author.name}</span>
            </Link>

            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime} read
            </span>
            <span className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              {formatNumber(post.views)} views
            </span>
          </div>

          {/* Hero Image */}
          <div className="mb-12 overflow-hidden rounded-2xl shadow-lg">
            <img src={post.image} alt={post.title} className="w-full object-cover" />
          </div>

          {/* Body */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* --------- Comments --------- */}
        <section className="mb-16">
          <h3 className="mb-8 text-2xl font-bold text-gray-900">
            {formatNumber(post.comments)} {post.comments === 1 ? 'Comment' : 'Comments'}
          </h3>

          {/* Comment form */}
          <form onSubmit={handleCommentSubmit} className="mb-10">
            <div className="flex gap-4">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=200&q=80"
                alt="User avatar"
              />
              <textarea
                className="flex-1 resize-none rounded-lg border border-gray-300 px-4 py-2 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                rows={3}
                placeholder="Share your thoughts…"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
              />
            </div>
            <div className="mt-3 flex justify-end">
              <button
                disabled={!commentInput.trim()}
                className="rounded-lg bg-yellow-500 px-5 py-2 text-white transition hover:bg-yellow-600 disabled:opacity-50"
              >
                Post comment
              </button>
            </div>
          </form>

          {/* List */}
          <ul className="space-y-8">
            {comments.map((c) => (
              <li key={c.id} className="flex gap-4 border-b pb-6 last:border-0">
                <img
                  src={c.avatar}
                  alt={c.author}
                  className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="mb-1 flex items-center justify-between">
                    <h4 className="font-medium text-gray-900">{c.author}</h4>
                    <span className="text-xs text-gray-500">{formatDateTime(c.date)}</span>
                  </div>
                  <p className="mb-2 text-gray-700">{c.text}</p>
                  <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-600">
                    <ThumbsUp className="h-4 w-4" /> {formatNumber(c.likes)}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* ---------- Global styles (remove `jsx` prop) ---------- */}
      <style>{`
        /* Custom prose overrides */
        .prose h2 { margin-top: 3rem; }
        .prose blockquote {
          border-left: 4px solid #facc15;
          padding: 1.25rem 1.5rem;
          background: #fffbeb;
          border-radius: 0 0.5rem 0.5rem 0;
        }
        .prose table {
          width: 100%;
          border-collapse: collapse;
          box-shadow: 0 1px 3px rgba(0,0,0,.06);
        }
        .prose th {
          background: #facc15;
          color: #fff;
          padding: 0.75rem 1rem;
          text-align: left;
        }
        .prose td {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid #e5e7eb;
        }
        .prose tr:nth-child(even) td { background: #f9fafb; }
      `}</style>
    </div>
  );
};

export default BlogViewPage;