'use client'

import { type FC } from 'react'
import { motion, Variants } from 'framer-motion'
import {
  ArrowRight,
  Zap,
  Star,
  Award,
  ChevronRight,
  Mail,
} from 'lucide-react'

/* -------------------------------------------------------------------------- */
/*                                    DATA                                    */
/* -------------------------------------------------------------------------- */
export interface Machine {
  id: string
  title: string
  img: string
  specs: string[]
  price: string
  tag?: 'NEW' | 'POPULAR' | 'FEATURED'
}

const MACHINES: Machine[] = [
  {
    id: 'rough-terrain',
    title: 'Rough-Terrain Crane',
    img: '/rough-terrain.png',
    specs: ['Off-road ready', '32 m boom', '80 t capacity'],
    price: '$185,000',
    tag: 'POPULAR',
  },
  {
    id: 'truck-crane',
    title: 'Truck Crane',
    img: '/truck-cranes.jpeg',
    specs: ['High mobility', '200 t max', 'Long-reach boom'],
    price: '$220,000',
  },
  {
    id: 'pick-carry',
    title: 'Pick-n-Carry Crane',
    img: '/pick-n-carry.png',
    specs: ['Compact design', '25 t capacity', 'Tight radius'],
    price: '$95,000',
    tag: 'NEW',
  },
  {
    id: 'grove',
    title: 'Grove™ Range',
    img: '/grove-range.png',
    specs: ['Telescopic boom', 'Full-power lift', '300 t max'],
    price: '$350,000',
    tag: 'FEATURED',
  },
  {
    id: 'crawler',
    title: 'Crawler Crane',
    img: '/crawler-cranes.png',
    specs: ['Mud-friendly', '400 t max', 'Wide tracks'],
    price: '$420,000',
  },
  {
    id: 'reachstacker',
    title: 'ReachStacker',
    img: '/reachstackers.png',
    specs: ['Container lift', '45 t', 'Port-grade power'],
    price: '$150,000',
  },
  {
    id: 'forklift',
    title: 'Forklift Truck',
    img: '/forklift.png',
    specs: ['Warehouse pro', '3 t lift', 'Electric / Diesel'],
    price: '$45,000',
  },
  {
    id: 'boom-lift',
    title: 'Boom Lift',
    img: '/boomlifts.png',
    specs: ['45 m reach', 'Hybrid drive', '360° rotation'],
    price: '$75,000',
    tag: 'NEW',
  },
  {
    id: 'articulating',
    title: 'Articulating Crane',
    img: '/articulating.jpg',
    specs: ['Truck mounted', '20 t', 'Flexible boom'],
    price: '$110,000',
  },
]

/* -------------------------------------------------------------------------- */
/*                                  ANIMATION                                 */
/* -------------------------------------------------------------------------- */
const gridV: Variants = { show: { transition: { staggerChildren: 0.07 } } }
const cardV: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 120, damping: 18 },
  },
}

/* -------------------------------------------------------------------------- */
/*                                   BADGES                                   */
/* -------------------------------------------------------------------------- */
const TagBadge: FC<{ label: NonNullable<Machine['tag']> }> = ({ label }) => {
  const base = 'absolute top-3 right-3 flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold backdrop-blur'
  const style =
    label === 'NEW'
      ? 'bg-emerald-500/90 text-white'
      : label === 'POPULAR'
      ? 'bg-[#FFC700]/90 text-[#0A1A2F]'
      : 'bg-purple-600/90 text-white'
  const Icon = label === 'NEW' ? Zap : label === 'POPULAR' ? Star : Award
  return (
    <span className={`${base} ${style}`}>
      <Icon className="h-3 w-3" />
      {label}
    </span>
  )
}

/* -------------------------------------------------------------------------- */
/*                                   CARD                                     */
/* -------------------------------------------------------------------------- */
const ProductCard: FC<{ m: Machine }> = ({ m }) => {
  return (
    <motion.li
      variants={cardV}
      whileHover={{ scale: 1.03 }}
      className="relative w-full aspect-[4/3] rounded-xl overflow-hidden transition-all duration-300 group shadow-lg hover:shadow-xl bg-white m-1.5"
    >
      {/* Background fade layer */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500 z-0" />
      
      {/* Image Container */}
      <div className="w-full h-full bg-gray-50 flex items-center justify-center relative">
        {/* Main image area */}
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={m.img}
            alt={m.title}
            className="max-h-full max-w-full object-contain transition-all duration-500 group-hover:scale-[1.02]"
          />
        </div>

        {/* Instagram-style overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 z-10">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex justify-between items-end">
              <h3 className="text-xl font-bold text-white drop-shadow-md">{m.title}</h3>
              <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-md hover:scale-105 active:scale-95">
                <Mail className="h-4 w-4" />
                Get Quote
              </button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {m.specs.map((spec, i) => (
                <span 
                  key={i} 
                  className="text-xs text-white/90 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Prominent Tag/Label - Top Left with fade-in */}
      {m.tag && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className={`absolute top-0 left-0 z-20 px-4 py-2 rounded-br-xl shadow-lg ${
            m.tag.toLowerCase() === 'new' 
              ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white' 
              : 'bg-gradient-to-br from-amber-500 to-amber-600 text-white'
          }`}
        >
          <span className="text-sm font-bold uppercase tracking-wider drop-shadow-md">
            {m.tag}
          </span>
          {/* Decorative notch */}
          <div className="absolute -bottom-[5px] left-0 w-0 h-0 
            border-l-[5px] border-l-transparent
            border-t-[5px] ${m.tag.toLowerCase() === 'new' ? 'border-t-emerald-600' : 'border-t-amber-600'}"></div>
        </motion.div>
      )}
    </motion.li>
  )
};


/* -------------------------------------------------------------------------- */
/*                               MAIN SECTION                                 */
/* -------------------------------------------------------------------------- */
const MachineryGallery: FC<{ products?: Machine[] }> = ({
  products = MACHINES,
}) => (
  <section className="py-8 md:py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header - Simplified for mobile */}
      <motion.div
        className="text-center mb-8 md:mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.span
          className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 text-lg font-bold tracking-tight"
          initial={{ 
            opacity: 0,
            letterSpacing: "-0.05em"
          }}
          whileInView={{
            opacity: 1,
            letterSpacing: "0.02em",
          }}
          transition={{ 
            duration: 0.8,
            delay: 0.2,
            ease: [0.16, 0.77, 0.47, 0.97]
          }}
          viewport={{ once: true, margin: "-20%" }}
        >
          PREMIUM MACHINERY
        </motion.span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4 tracking-tight">
          Industrial <span className="text-orange-500">Equipment</span>
        </h2>
        <div className="w-20 md:w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
        <p className="mt-4 md:mt-6 mx-auto max-w-2xl text-base md:text-lg text-gray-600">
          High-performance machinery solutions with flexible financing options.
        </p>
      </motion.div>

      {/* Instagram-style Grid */}
      <motion.ul
        variants={gridV}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
        className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {products.map((m) => (
          <ProductCard key={m.id} m={m} />
        ))}
      </motion.ul>

      {/* CTA - Centered and full-width on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-12 md:mt-16 text-center"
      >
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold text-white shadow-md hover:shadow-lg w-full max-w-xs md:w-auto"
        >
          Request Custom Quote <ArrowRight className="h-5 w-5" />
        </motion.a>
      </motion.div>
    </div>
  </section>
)

export default MachineryGallery