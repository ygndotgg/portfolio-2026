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
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Back */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">{project.title}</h1>
          <Link
            href="/#resonance"
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200"
          >
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section - Two Images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {/* Nature Resonance Image */}
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden border border-white/20">
            <Image
              src={project.natureImage}
              alt="Nature Resonance"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-end justify-start p-6">
              <h2 className="text-2xl font-bold bg-black/50 px-4 py-2 rounded-lg">
                Nature Resonance
              </h2>
            </div>
          </div>

          {/* Project Title Image */}
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden border border-white/20 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-5xl font-bold text-white mb-4">{project.title}</h2>
              <p className="text-lg text-gray-400">{project.status}</p>
            </div>
          </div>
        </motion.div>

        {/* Project UI Home Page Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 rounded-lg border border-white/20 overflow-hidden bg-gradient-to-b from-gray-900/50 to-black"
        >
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6">Project Overview</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {project.description}
            </p>
          </div>
        </motion.div>

        {/* Information Section - Grid Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Title Section - Full Width on Mobile */}
          <div className="lg:col-span-3 rounded-lg border border-white/20 p-6 bg-gradient-to-br from-gray-900/50 to-black">
            <h4 className="text-xl font-bold mb-4">Project Information</h4>
          </div>

          {/* Description Section - Takes 2 columns on desktop */}
          <div className="lg:col-span-2 rounded-lg border border-white/20 p-6 bg-gradient-to-br from-gray-900/50 to-black">
            <h5 className="text-lg font-semibold mb-4">Description & Features</h5>
            <ul className="space-y-3">
              {project.features.map((feature: string, idx: number) => (
                <li key={idx} className="text-gray-300 flex items-start gap-3">
                  <span className="text-blue-400 font-bold mt-1">→</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <h6 className="font-semibold mb-4">Technologies & Tools</h6>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(project.technologies).map(([category, techs]: [string, any]) => (
                  <div key={category}>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">{category}</p>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-300 text-xs border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Progress/Status Section - 1 column on desktop */}
          <div className="rounded-lg border border-white/20 p-6 bg-gradient-to-br from-gray-900/50 to-black">
            <h5 className="text-lg font-semibold mb-6">Progress & Status</h5>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Completion</span>
                <span className="text-sm font-semibold">{project.progress}%</span>
              </div>
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${project.progress}%` }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                />
              </div>
            </div>

            {/* Status Info */}
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-sm mb-1">Status</p>
                <p className={`font-semibold ${project.status === 'In Progress' ? 'text-green-400' :
                  project.status === 'Upcoming' ? 'text-yellow-400' :
                    'text-gray-400'
                  }`}>
                  {project.status}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-gray-500 text-sm mb-1">Start Date</p>
                <p className="font-semibold">{project.startDate}</p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-gray-500 text-sm mb-1">Expected Completion</p>
                <p className="font-semibold">{project.expectedDate}</p>
              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </div>
  )
}
