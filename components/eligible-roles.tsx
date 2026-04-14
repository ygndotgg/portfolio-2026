'use client'

import { motion } from 'motion/react'
import { Check } from 'lucide-react'

const roles = [
  {
    title: 'Full Stack Development',
    description: 'End-to-end application development',
    delay: 0,
  },
  {
    title: 'Backend Engineer',
    description: 'Server-side architecture & APIs',
    delay: 0.15,
  },
  {
    title: 'System Engineer',
    description: 'Complex system design & optimization',
    delay: 0.3,
  },
  {
    title: 'Infra Engineer',
    description: 'Infrastructure & DevOps solutions',
    delay: 0.45,
  },
]

export default function EligibleRoles() {
  return (
    <div className="w-full">
      <motion.h3 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl font-bold mb-8 text-white"
      >
        Roles I&apos;m Eligible For
      </motion.h3>
      
      <div className="space-y-4">
        {/* Timeline line */}
        <div className="absolute left-8 sm:left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/50 to-blue-500/0 rounded-full hidden sm:block" />
        
        <div className="relative space-y-6">
          {roles.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: role.delay }}
              className="relative pl-6 sm:pl-16"
            >
              {/* Blue tick mark with animation */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: role.delay + 0.2, type: 'spring', stiffness: 200 }}
                className="absolute left-0 sm:left-0 top-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center border-2 border-blue-400 shadow-lg shadow-blue-500/50"
              >
                <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
              </motion.div>

              {/* Card content */}
              <motion.div
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-lg border border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-transparent p-4 sm:p-6 backdrop-blur-sm hover:border-blue-500/60 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-transparent transition-all duration-300"
              >
                {/* Animated glow on hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" style={{
                  background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.2), transparent)'
                }} />
                
                <div className="relative z-10">
                  <motion.h4 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: role.delay + 0.1 }}
                    className="text-lg sm:text-xl font-semibold text-white mb-1"
                  >
                    {role.title}
                  </motion.h4>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: role.delay + 0.2 }}
                    className="text-sm sm:text-base text-gray-300"
                  >
                    {role.description}
                  </motion.p>
                  
                  {/* Animated underline */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: role.delay + 0.3 }}
                    className="h-0.5 bg-gradient-to-r from-blue-400 to-transparent mt-3 origin-left"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
