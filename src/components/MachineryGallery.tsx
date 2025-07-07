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
    img: '/src/assets/rough-terrain.png',
    specs: ['Off-road ready', '32 m boom', '80 t capacity'],
    price: '$185,000',
    tag: 'POPULAR',
  },
  {
    id: 'truck-crane',
    title: 'Truck Crane',
    img: '/src/assets/truck-cranes.jpeg',
    specs: ['High mobility', '200 t max', 'Long-reach boom'],
    price: '$220,000',
  },
  {
    id: 'pick-carry',
    title: 'Pick-n-Carry Crane',
    img: '/src/assets/pick-n-carry.png',
    specs: ['Compact design', '25 t capacity', 'Tight radius'],
    price: '$95,000',
    tag: 'NEW',
  },
  {
    id: 'grove',
    title: 'Grove™ Range',
    img: '/src/assets/grove-range.png',
    specs: ['Telescopic boom', 'Full-power lift', '300 t max'],
    price: '$350,000',
    tag: 'FEATURED',
  },
  {
    id: 'crawler',
    title: 'Crawler Crane',
    img: '/src/assets/crawler-cranes.png',
    specs: ['Mud-friendly', '400 t max', 'Wide tracks'],
    price: '$420,000',
  },
  {
    id: 'reachstacker',
    title: 'ReachStacker',
    img: '/src/assets/reachstackers.png',
    specs: ['Container lift', '45 t', 'Port-grade power'],
    price: '$150,000',
  },
  {
    id: 'forklift',
    title: 'Forklift Truck',
    img: '/src/assets/forklift.png',
    specs: ['Warehouse pro', '3 t lift', 'Electric / Diesel'],
    price: '$45,000',
  },
  {
    id: 'boom-lift',
    title: 'Boom Lift',
    img: '/src/assets/boomlifts.png',
    specs: ['45 m reach', 'Hybrid drive', '360° rotation'],
    price: '$75,000',
    tag: 'NEW',
  },
  {
    id: 'articulating',
    title: 'Articulating Crane',
    img: '/src/assets/articulating.jpg',
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
      whileHover={{ scale: 1.02 }}
      className="relative h-48 rounded-xl overflow-hidden transition-transform duration-300 group shadow-lg hover:shadow-xl bg-white border border-gray-200"
    >
      {/* Image Container */}
      <div className="w-full h-full bg-gray-100 flex items-center justify-center relative overflow-hidden">
        <img
          src={m.img}
          alt={m.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          style={{ mixBlendMode: 'multiply' }}
        />
        
        {/* Title overlay - always visible */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 z-10">
          <h3 className="text-lg font-bold text-white">{m.title}</h3>
        </div>
        
        {/* Get Quote Button - appears at bottom-right on hover */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <button className="flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-all transform translate-x-2 group-hover:translate-x-0">
            <Mail className="h-3.5 w-3.5" />
            Get Quote
          </button>
        </div>
      </div>

      {/* Tag Badge */}
      {m.tag && <TagBadge label={m.tag} />}
    </motion.li>
  )
}

/* -------------------------------------------------------------------------- */
/*                               MAIN SECTION                                 */
/* -------------------------------------------------------------------------- */
const MachineryGallery: FC<{ products?: Machine[] }> = ({
  products = MACHINES,
}) => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.span
          className="inline-block px-6 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-lg text-sm font-semibold mb-4 shadow-md"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          PREMIUM MACHINERY
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
          Industrial <span className="text-orange-500">Equipment</span>
        </h2>
        <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
        <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-600">
          High-performance machinery solutions with flexible financing options.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.ul
        variants={gridV}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-120px' }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {products.map((m) => (
          <ProductCard key={m.id} m={m} />
        ))}
      </motion.ul>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-md hover:shadow-lg"
        >
          Request Custom Quote <ArrowRight className="h-5 w-5" />
        </motion.a>
      </motion.div>
    </div>
  </section>
)

export default MachineryGallery