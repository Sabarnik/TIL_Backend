import React, { useRef, useState } from 'react';
import { Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const Testimonials: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [expandedCard, setExpandedCard] = useState<{ id: number; row: 'top' | 'bottom'; position: { left: number; top: number } } | null>(null);

  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);
  const hoverCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        expandedCard &&
        hoverCardRef.current &&
        !hoverCardRef.current.contains(event.target as Node)
      ) {
        setExpandedCard(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expandedCard]);

  const topTestimonials = [
    { id: 1, name: 'Sarah Johnson', position: 'Marketing Director', company: 'TechCorp', image: 'https://randomuser.me/api/portraits/women/44.jpg', rating: 5, text: "This service transformed our digital presence. Our engagement metrics doubled within weeks of implementation." },
    { id: 2, name: 'Michael Chen', position: 'CTO', company: 'StartUp Labs', image: 'https://randomuser.me/api/portraits/men/32.jpg', rating: 4, text: "Reliable and scalable solution that grew with our business needs. Excellent support team." },
    { id: 3, name: 'Emma Williams', position: 'Product Manager', company: 'DesignHub', image: 'https://randomuser.me/api/portraits/women/63.jpg', rating: 5, text: "Intuitive interface and powerful features. Our team adopted it with minimal training." },
    { id: 4, name: 'David Kim', position: 'Operations Lead', company: 'LogiChain', image: 'https://randomuser.me/api/portraits/men/71.jpg', rating: 5, text: "Streamlined our entire workflow. The automation features saved us hundreds of hours monthly." },
  ];

  const bottomTestimonials = [
    { id: 5, name: 'Neeraj Arora', position: 'Master Coach', company: 'Skill91', image: 'https://randomuser.me/api/portraits/men/75.jpg', rating: 5, text: "With 800K+ YouTube subscribers, I can confidently say this platform has all elements needed for successful online coaching businesses." },
    { id: 6, name: 'Priya Patel', position: 'Edupreneur', company: 'MathMagic', image: 'https://randomuser.me/api/portraits/women/25.jpg', rating: 5, text: "Created 12 courses with 50K+ students. The platform makes content delivery and student engagement seamless." },
    { id: 7, name: 'Rajesh Kumar', position: 'Project Director', company: 'L&T Construction', image: 'https://randomuser.me/api/portraits/men/45.jpg', rating: 5, text: "Our metro rail projects rely on this equipment. The durability and performance are unmatched in the industry." },
    { id: 8, name: 'Ananya Singh', position: 'CEO', company: 'CodeYoung', image: 'https://randomuser.me/api/portraits/women/15.jpg', rating: 4, text: "Perfect solution for our coding bootcamps. Students love the interactive learning features and clean interface." },
  ];

  const doubledTop = [...topTestimonials, ...topTestimonials];
  const doubledBottom = [...bottomTestimonials, ...bottomTestimonials];

  const handleReadMoreClick = (e: React.MouseEvent, testimonial: any, row: 'top' | 'bottom') => {
    e.stopPropagation();
    const rect = (e.currentTarget as HTMLDivElement).closest('.testimonial-card')?.getBoundingClientRect();
    if (!rect) return;

    const alreadyExpanded = expandedCard?.id === testimonial.id;
    if (alreadyExpanded) {
      setExpandedCard(null);
    } else {
      setExpandedCard({
        id: testimonial.id,
        row,
        position: { left: rect.left, top: rect.top },
      });
    }
  };

  const shouldPause = hovered || expandedCard !== null;

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 w-full overflow-hidden relative">
      <div className="w-full px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">What Our Clients Say</h2>
        <p className="text-lg text-gray-600">Trusted by professionals and industry leaders worldwide</p>
      </div>

      {/* Top Row */}
      <div
        className="relative w-full overflow-hidden mb-5" // gap below
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          ref={topRowRef}
          className={`flex gap-6 w-max animate-scroll-left whitespace-nowrap px-4 ${shouldPause ? 'pause' : ''}`}
        >
          {doubledTop.map((testimonial, i) => (
            <div key={`top-${i}`} className="relative h-auto">
              <TestimonialCard
                testimonial={testimonial}
                onReadMore={(e) => handleReadMoreClick(e, testimonial, 'top')}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row */}
      <div
        className="relative w-full overflow-hidden mt-5" // gap above
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          ref={bottomRowRef}
          className={`flex gap-6 w-max animate-scroll-right whitespace-nowrap px-4 ${shouldPause ? 'pause' : ''}`}
        >
          {doubledBottom.map((testimonial, i) => (
            <div key={`bottom-${i}`} className="relative h-auto">
              <TestimonialCard
                testimonial={testimonial}
                onReadMore={(e) => handleReadMoreClick(e, testimonial, 'bottom')}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Hover Card */}
      <AnimatePresence>
        {expandedCard && (
          <motion.div
            ref={hoverCardRef}
            initial={{ opacity: 0, y: expandedCard.row === 'top' ? -10 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: expandedCard.row === 'top' ? -10 : 10 }}
            transition={{ duration: 0.2 }}
            className="fixed z-30 w-[380px]"
            style={{
              left: expandedCard.position.left,
              top:
                expandedCard.row === 'top'
                  ? expandedCard.position.top + 208
                  : expandedCard.position.top - 208,
            }}
          >
            <HoverCardContent
              testimonial={[...topTestimonials, ...bottomTestimonials].find((t) => t.id === expandedCard.id)!}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

const TestimonialCard: React.FC<{ testimonial: any; onReadMore: (e: React.MouseEvent) => void }> = ({ testimonial, onReadMore }) => (
  <div className="testimonial-card w-[380px] bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
    <div className="flex items-center mb-4">
      <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-blue-100" />
      <div className="text-left">
        <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
        <p className="text-sm text-blue-600 font-medium">{testimonial.position} | {testimonial.company}</p>
      </div>
    </div>
    <div className="flex mb-3">
      {Array(testimonial.rating).fill(0).map((_, j) => <Star key={j} size={16} className="text-yellow-400 fill-current" />)}
    </div>
    <p className="text-gray-700 text-base mb-4 leading-relaxed line-clamp-3 overflow-hidden">
      "{testimonial.text}"
    </p>
    <div 
      onClick={(e) => {
        e.stopPropagation();
        onReadMore(e);
      }} 
      className="text-xs text-blue-500 font-medium cursor-pointer select-none"
    >
      Read full review →
    </div>
  </div>
);

const HoverCardContent: React.FC<{ testimonial: any }> = ({ testimonial }) => (
  <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg">
    <div className="flex items-center mb-4">
      <img 
        src={testimonial.image} 
        alt={testimonial.name} 
        className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-amber-400/30" 
      />
      <div className="text-left">
        <h3 className="font-bold text-white">{testimonial.name}</h3>
        <p className="text-sm text-amber-400/80 font-medium">
          {testimonial.position} | {testimonial.company}
        </p>
      </div>
    </div>
    <div className="flex mb-3">
      {Array(testimonial.rating).fill(0).map((_, j) => (
        <Star key={j} size={16} className="text-amber-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-300 text-base mb-4 leading-relaxed whitespace-normal">
      "{testimonial.text}"
    </p>
  </div>
);

export default Testimonials;