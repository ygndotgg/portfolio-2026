'use client'

import { motion } from 'motion/react'
import { Code2, Zap, Users, Github } from 'lucide-react'

const details = [
  {
    label: 'Years Experience',
    value: '3+',
    icon: Zap,
    delay: 0,
  },
  {
    label: 'Projects Built',
    value: '20+',
    icon: Code2,
    delay: 0.1,
  },
  {
    label: 'Open Source',
    value: 'Active',
    icon: Github,
    delay: 0.2,
  },
  {
    label: 'Collaborations',
    value: '10+',
    icon: Users,
    delay: 0.3,
  },
]

export default function CompactDetails() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-2 gap-3 mt-8"
    >
      {details.map((detail, idx) => {
        const Icon = detail.icon
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: detail.delay }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
            <div className="relative rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-sm hover:border-white/20 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <Icon className="w-4 h-4 text-blue-400" />
                <p className="text-xs text-white/60 font-medium">{detail.label}</p>
              </div>
              <p className="text-xl font-bold text-white">{detail.value}</p>
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
