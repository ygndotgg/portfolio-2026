'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, MessageSquare, Mail, } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/YGNTECHSTARTUP', label: 'GitHub' },
  { icon: Twitter, href: 'https://x.com/ygndotgg', label: 'X (Twitter)' },
  { icon: Linkedin, href: 'https://linkedin.com/in/ygn', label: 'LinkedIn' },
  { icon: MessageSquare, href: 'https://discord.com/users/ygntechstartup', label: 'Discord' },
  { icon: Mail, href: 'mailto:gaganyarramsetty@gmail.com', label: 'Email' },
 
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Footer() {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.footer
      variants={container}
      initial="hidden"
      animate="show"
      className="relative bottom-0 left-0 right-0 bg-gradient-to-b from-transparent via-black/50 to-black backdrop-blur-md border-t border-white/10 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 mt-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4">
          {/* Social Links */}
          <motion.div variants={item} className="flex space-x-4 sm:space-x-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-sky-400 transition-colors duration-300"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Footer Info */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/60">
            <p className="whitespace-nowrap">made by <span className='font-bold text-white'>ygn</span></p>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <p className="whitespace-nowrap">
              {date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
              {', '}
              {date.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
              }).toLowerCase()}
            </p>
          </motion.div>
        </div>

        {/* Bottom accent line */}
        <div className="mt-6 sm:mt-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </motion.footer>
  )
}
