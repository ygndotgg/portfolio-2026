'use client'

import { motion } from 'motion/react'
import { ElementStackTimeline } from '@/components/elements-stack-timeline'
import { timelineItems } from '@/components/portfolio'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-slate-900 text-white">
      {/* Back Button */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="fixed top-24 left-4 sm:left-6 lg:left-8 z-40"
      >
        <Link
          href="/#resonance"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div variants={item}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Elemental Journey
            </h1>
          </motion.div>
          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto"
          >
            Explore my projects timeline - from distributed networking systems to advanced infrastructure solutions
          </motion.p>
        </div>
      </motion.div>

      {/* Timeline Component */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        <ElementStackTimeline
          items={timelineItems}
          title="Project Timeline"
          subtitle="Watch the journey unfold"
        />
      </motion.div>

      {/* Bottom Decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative h-32 mt-20 flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-sky-500/10 to-transparent" />
        <p className="relative text-white/60 text-sm">
          Click any project to explore more details
        </p>
      </motion.div>
    </div>
  )
}
