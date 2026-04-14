'use client'

import { motion } from 'motion/react'

const roles = [
  {
    title: 'Full Stack Development',
    icon: '🚀',
    color: 'from-blue-500 to-cyan-400',
    delay: 0,
  },
  {
    title: 'Backend Engineer',
    icon: '⚙️',
    color: 'from-purple-500 to-pink-400',
    delay: 0.1,
  },
  {
    title: 'System Engineer',
    icon: '🔧',
    color: 'from-green-500 to-emerald-400',
    delay: 0.2,
  },
  {
    title: 'Infra Engineer',
    icon: '🏗️',
    color: 'from-orange-500 to-red-400',
    delay: 0.3,
  },
]

export default function EligibleRoles() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="rounded-lg border border-white/20 overflow-hidden bg-gradient-to-br from-gray-900/50 to-black p-8"
    >
      <h3 className="text-2xl font-bold mb-8 text-center">Eligible For</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {roles.map((role, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + role.delay }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative group"
          >
            {/* Animated gradient background */}
            <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${role.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur`} />
            
            {/* Card */}
            <div className={`relative rounded-lg border border-white/20 bg-gradient-to-br ${role.color} bg-opacity-5 p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-white/40`}>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 }}
                className="flex items-center gap-4 mb-3"
              >
                <span className="text-4xl">{role.icon}</span>
                <h4 className="text-lg font-semibold text-white">{role.title}</h4>
              </motion.div>
              
              {/* Animated line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + role.delay }}
                className={`h-0.5 bg-gradient-to-r ${role.color} origin-left`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
