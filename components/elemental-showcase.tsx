'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ElementalData {
  id: string
  type: string
  description: string
  color: string
  status: 'completed' | 'coming-soon'
  icon: string
}

const elementalData: ElementalData[] = [
  {
    id: 'hydro',
    type: 'Hydro',
    description: 'Water Element',
    color: '#0ea5e9',
    status: 'completed',
    icon: '/hydro.jpg',
  },
  {
    id: 'electro',
    type: 'Electro',
    description: 'Lightning Element',
    color: '#f59e0b',
    status: 'coming-soon',
    icon: '/electro.jpg',
  },
  {
    id: 'cryo',
    type: 'Cryo',
    description: 'Ice Element',
    color: '#06b6d4',
    status: 'coming-soon',
    icon: '/cryo.jpg',
  },
  {
    id: 'dendro',
    type: 'Dendro',
    description: 'Nature Element',
    color: '#10b981',
    status: 'coming-soon',
    icon: '/dendro.jpg',
  },
  {
    id: 'pyro',
    type: 'Pyro',
    description: 'Fire Element',
    color: '#ef4444',
    status: 'coming-soon',
    icon: '/pyro.jpg',
  },
]

export default function ElementalShowcase() {
  const [selectedElement, setSelectedElement] = useState<ElementalData>(elementalData[0])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20 mx-auto max-w-6xl lg:max-w-screen-2xl">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-3">
          Elemental Resonance
        </h2>
        <p className="text-slate-400 text-base sm:text-lg">
          Explore my journey through different elements and technologies
        </p>
      </div>

      {/* Elemental Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
        {elementalData.map((element, idx) => (
          <button
            key={element.id}
            onClick={() => setSelectedElement(element)}
            className="group relative rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black"
            style={{
              focusRingColor: element.color,
            }}
          >
            {/* Card Background */}
            <div
              className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
              style={{ backgroundColor: element.color }}
            />

            {/* Border glow */}
            <div
              className="absolute inset-0 border-2 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"
              style={{ borderColor: element.color }}
            />

            {/* Content */}
            <div className="relative p-4 sm:p-5 flex flex-col items-center justify-center h-32 sm:h-40 backdrop-blur-sm">
              {/* Icon */}
              <div className="mb-3 w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden border border-white/20">
                <Image
                  src={element.icon}
                  alt={element.type}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Type */}
              <h3
                className="text-lg sm:text-xl font-bold mb-1 transition-colors duration-300"
                style={{ color: element.color }}
              >
                {element.type}
              </h3>

              {/* Status Badge */}
              <div
                className={cn(
                  'px-3 py-1 rounded-full text-xs font-medium transition-all duration-300',
                  element.status === 'completed'
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                    : 'bg-slate-500/20 text-slate-300 border border-slate-500/30'
                )}
              >
                {element.status === 'completed' ? '✓ Completed' : 'Coming Soon'}
              </div>
            </div>

            {/* Animated pulse for completed */}
            {element.status === 'completed' && (
              <div
                className="absolute top-2 right-2 w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: element.color }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Selected Element Detail */}
      <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-br from-neutral-900/50 to-black/50 backdrop-blur-sm p-6 sm:p-8">
        {/* Gradient background */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: selectedElement.color }}
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Image */}
          <div className="flex justify-center">
            <div
              className="relative w-full aspect-square max-w-sm rounded-2xl overflow-hidden border-2 transform transition-transform duration-300"
              style={{ borderColor: selectedElement.color }}
            >
              <div
                className="absolute inset-0 opacity-30"
                style={{ backgroundColor: selectedElement.color }}
              />
              <Image
                src={selectedElement.icon}
                alt={selectedElement.type}
                fill
                className="object-cover"
              />

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            {/* Title */}
            <div>
              <h3
                className="text-4xl sm:text-5xl font-bold mb-2 transition-colors duration-300"
                style={{ color: selectedElement.color }}
              >
                {selectedElement.type}
              </h3>
              <p className="text-slate-300 text-lg">
                {selectedElement.description}
              </p>
            </div>

            {/* Status */}
            <div className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: selectedElement.color }}
              />
              <span className="text-slate-300 font-medium">
                Status:{' '}
                <span
                  style={{ color: selectedElement.color }}
                  className="font-bold"
                >
                  {selectedElement.status === 'completed'
                    ? 'Completed'
                    : 'Announced Soon'}
                </span>
              </span>
            </div>

            {/* CTA Button */}
            {selectedElement.status === 'completed' ? (
              <button
                className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2"
                style={{
                  backgroundColor: `${selectedElement.color}20`,
                  borderColor: selectedElement.color,
                  color: selectedElement.color,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${selectedElement.color}40`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = `${selectedElement.color}20`
                }}
              >
                Explore Projects
              </button>
            ) : (
              <div
                className="px-6 py-3 rounded-lg font-semibold text-center border-2 opacity-50"
                style={{
                  backgroundColor: `${selectedElement.color}10`,
                  borderColor: selectedElement.color,
                  color: selectedElement.color,
                }}
              >
                Coming Soon
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
