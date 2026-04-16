'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import RevealOnView from '@/components/reveal-on-view'

interface ProjectDetailsPageProps {
  params: {
    id: string
  }
}

const projectData: Record<string, any> = {
  'Hydro': {
    title: 'Hydro',
    natureImage: '/hydroimge.jpeg',
    description: 'A distributed networking system designed to handle real-time communication across multiple nodes with high reliability and low latency.',
    status: 'In Progress',
    technologies: {
      'Languages': ['Rust'],
      'Backend': ['WebSockets', 'gRPC', 'Docker'],
      'Database': ['PostgreSQL'],
      'Infrastructure': ['Kubernetes']
    },
    features: [
      'Real-time message routing',
      'Fault tolerance and automatic recovery',
      'Scalable to thousands of nodes',
      'Zero-copy data transfer'
    ],
    progress: 65,
    startDate: 'January 2026',
    expectedDate: 'June 2026'
  },
  'Dendro': {
    title: 'Dendro',
    natureImage: '/dendroimg.jpeg',
    description: 'A distributed systems framework that simplifies building resilient, scalable applications with minimal boilerplate and maximum performance.',
    status: 'Upcoming',
    technologies: {
      'Languages': ['Rust'],
      'Backend': ['Protocol Buffers', 'gRPC'],
      'Database': ['PostgreSQL'],
      'Infrastructure': ['Kubernetes']
    },
    features: [
      'Consensus algorithm implementation',
      'Distributed transactions',
      'Load balancing',
      'Service discovery'
    ],
    progress: 25,
    startDate: 'May 2026',
    expectedDate: 'October 2026'
  },
  'Anemo': {
    title: 'Anemo',
    natureImage: '/dendroimg.jpeg',
    description: 'TBA - Coming soon with cutting-edge features for modern application development.',
    status: 'Upcoming',
    technologies: {
      'Languages': ['TBA'],
      'Backend': ['TBA'],
      'Database': ['TBA'],
      'Infrastructure': ['TBA']
    },
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    progress: 10,
    startDate: 'September 2026',
    expectedDate: 'December 2026'
  },
  'Pyro': {
    title: 'Pyro',
    natureImage: '/hydroimge.jpeg',
    description: 'TBA - Innovative solution for next-generation systems.',
    status: 'Upcoming',
    technologies: {
      'Languages': ['TBA'],
      'Backend': ['TBA'],
      'Database': ['TBA'],
      'Infrastructure': ['TBA']
    },
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    progress: 5,
    startDate: 'December 2026',
    expectedDate: 'Q2 2027'
  },
  'Cryo': {
    title: 'Cryo',
    natureImage: '/dendroimg.jpeg',
    description: 'TBA - Advanced technology platform.',
    status: 'Upcoming',
    technologies: {
      'Languages': ['TBA'],
      'Backend': ['TBA'],
      'Database': ['TBA'],
      'Infrastructure': ['TBA']
    },
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    progress: 0,
    startDate: 'April 2027',
    expectedDate: 'Q4 2027'
  }
}

export default function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const { id } = params
  const project = projectData[id as string] || projectData['Hydro']

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-slate-900 text-white overflow-hidden">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section - Two Images with Sky Blue Glow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 relative"
        >
          {/* Animated background glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/20 via-blue-500/20 to-cyan-500/20 rounded-2xl blur-3xl -z-10 opacity-50" />

          {/* Nature Resonance Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-64 md:h-80 rounded-xl overflow-hidden border-2 border-sky-400/50 shadow-2xl shadow-sky-500/20 hover:shadow-sky-500/40 group cursor-pointer transition-all duration-500"
          >
            <Image
              src={project.natureImage}
              alt="Nature Resonance"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 flex items-end justify-start p-6"
            >
              <h2 className="text-2xl font-bold bg-gradient-to-r from-sky-300 to-cyan-300 bg-clip-text text-transparent px-4 py-2 rounded-lg border border-sky-400/30 backdrop-blur-sm">
                Nature Resonance
              </h2>
            </motion.div>
          </motion.div>

          {/* Project Title Image with animated gradient */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-64 md:h-80 rounded-xl overflow-hidden border-2 border-sky-400/50 shadow-2xl shadow-sky-500/20 hover:shadow-sky-500/40 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-900/40 via-blue-900/30 to-cyan-900/40" />
            <motion.div
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(0, 150, 255, 0.15), transparent)",
                  "radial-gradient(circle at 80% 50%, rgba(34, 211, 238, 0.15), transparent)",
                  "radial-gradient(circle at 20% 50%, rgba(0, 150, 255, 0.15), transparent)"
                ]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute inset-0"
            />
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center">
                <motion.h2
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent mb-4 drop-shadow-lg"
                >
                  {project.title}
                </motion.h2>
                <motion.p
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-lg bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent font-semibold"
                >
                  {project.status}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Project UI Home Page Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16 relative rounded-xl border-2 border-sky-400/50 overflow-hidden bg-gradient-to-b from-sky-900/10 via-blue-900/10 to-black shadow-2xl shadow-sky-500/20"
        >
          {/* Animated background elements */}
          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute inset-0 opacity-30 bg-gradient-to-r from-sky-500/20 via-cyan-500/20 to-blue-500/20"
          />
          
          <div className="relative p-8 md:p-12">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-sky-300 to-cyan-300 bg-clip-text text-transparent"
            >
              Project Overview
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-100 text-lg leading-relaxed"
            >
              {project.description}
            </motion.p>
          </div>
        </motion.div>

        {/* Information Section - Grid Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Title Section - Full Width on Mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:col-span-3 relative rounded-xl border-2 border-sky-400/50 p-6 bg-gradient-to-r from-sky-900/20 via-blue-900/20 to-cyan-900/20 shadow-lg shadow-sky-500/10 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-sky-400 via-transparent to-cyan-400 blur-xl" />
            <h4 className="relative text-2xl font-bold bg-gradient-to-r from-sky-300 to-cyan-300 bg-clip-text text-transparent">Project Information</h4>
          </motion.div>

          {/* Description Section - Takes 2 columns on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="lg:col-span-2 relative rounded-xl border-2 border-sky-400/30 p-8 bg-gradient-to-br from-sky-900/10 via-blue-900/10 to-black shadow-lg shadow-sky-500/10 hover:shadow-sky-500/20 group transition-all duration-500"
          >
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-xl blur-xl transition-opacity duration-500" />
            <div className="relative">
              <h5 className="text-xl font-bold mb-6 bg-gradient-to-r from-sky-300 to-cyan-300 bg-clip-text text-transparent">Features & Implementation</h5>
              <ul className="space-y-3">
                {project.features.map((feature: string, idx: number) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                    className="text-gray-200 flex items-start gap-3 group/item"
                  >
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-sky-400 font-bold mt-1 group-hover/item:text-cyan-400 transition-colors"
                    >
                      →
                    </motion.span>
                    <span className="group-hover/item:text-sky-300 transition-colors duration-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-8 pt-8 border-t border-sky-400/20">
                <h6 className="font-bold mb-4 text-sky-300">Technologies & Tools</h6>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(project.technologies).map(([category, techs]: [string, any], catIdx: number) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 + catIdx * 0.1 }}
                    >
                      <p className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-3">{category}</p>
                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech: string, idx: number) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-sky-500/30 to-cyan-500/30 text-sky-200 text-xs border border-sky-400/50 hover:border-sky-300 font-semibold shadow-lg shadow-sky-500/20 cursor-pointer transition-all duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Progress/Status Section - 1 column on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative rounded-xl border-2 border-sky-400/30 p-8 bg-gradient-to-br from-sky-900/10 via-blue-900/10 to-black shadow-lg shadow-sky-500/10 hover:shadow-sky-500/20 group transition-all duration-500"
          >
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-xl blur-xl transition-opacity duration-500" />
            <div className="relative">
              <h5 className="text-xl font-bold mb-8 bg-gradient-to-r from-sky-300 to-cyan-300 bg-clip-text text-transparent">Progress & Status</h5>

              {/* Progress Bar with animation */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-sky-300 font-semibold">Completion</span>
                  <motion.span
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-sm font-bold text-cyan-400"
                  >
                    {project.progress}%
                  </motion.span>
                </div>
                <div className="w-full h-3 bg-gray-800/50 rounded-full overflow-hidden border border-sky-400/30">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${project.progress}%` }}
                    transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-400 shadow-lg shadow-sky-400/50 rounded-full"
                  />
                </div>
              </div>

              {/* Status Info with animations */}
              <div className="space-y-5">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="p-4 rounded-lg bg-sky-500/10 border border-sky-400/30 hover:bg-sky-500/20 transition-colors"
                >
                  <p className="text-sky-300 text-xs font-semibold uppercase tracking-wide mb-1">Status</p>
                  <motion.p
                    animate={{ x: [0, 2, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`font-bold text-sm ${project.status === 'In Progress' ? 'text-emerald-400' :
                      project.status === 'Upcoming' ? 'text-amber-400' :
                        'text-gray-400'
                      }`}>
                    {project.status}
                  </motion.p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="p-4 rounded-lg bg-sky-500/10 border border-sky-400/30 hover:bg-sky-500/20 transition-colors"
                >
                  <p className="text-sky-300 text-xs font-semibold uppercase tracking-wide mb-1">Start Date</p>
                  <p className="font-bold text-cyan-300">{project.startDate}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="p-4 rounded-lg bg-sky-500/10 border border-sky-400/30 hover:bg-sky-500/20 transition-colors"
                >
                  <p className="text-sky-300 text-xs font-semibold uppercase tracking-wide mb-1">Expected Completion</p>
                  <p className="font-bold text-cyan-300">{project.expectedDate}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>


      </div>
    </div>
  )
}
