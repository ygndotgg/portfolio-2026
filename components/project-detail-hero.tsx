'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import ElementalResonanceCard from './elemental-resonance-card'

interface ProjectDetailHeroProps {
  title: string
  subtitle: string
  referenceImage: string
  homePageImage: string
  elementalResonance: {
    type: string
    color: string
    status: string
  }
}

export default function ProjectDetailHero({
  title,
  subtitle,
  referenceImage,
  homePageImage,
  elementalResonance
}: ProjectDetailHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const { top, height } = containerRef.current.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, (window.innerHeight - top) / (window.innerHeight + height)))
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen bg-neutral-950 overflow-hidden pt-20">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-1000"
          style={{
            backgroundColor: elementalResonance.color,
            transform: `scale(${1 + scrollProgress * 0.2}) translateY(${scrollProgress * 50}px)`
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-15 blur-3xl transition-all duration-1000"
          style={{
            backgroundColor: elementalResonance.color,
            transform: `scale(${1 - scrollProgress * 0.1}) translateY(${-scrollProgress * 30}px)`
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Elemental Resonance Badge */}
        <div className="flex justify-center mb-12">
          <ElementalResonanceCard
            type={elementalResonance.type}
            color={elementalResonance.color}
            status={elementalResonance.status}
          />
        </div>

        {/* Title and subtitle */}
        <div className="text-center mb-16 space-y-4">
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white transition-all duration-700"
            style={{
              opacity: 1 - scrollProgress * 0.3,
              transform: `translateY(${scrollProgress * 20}px)`
            }}
          >
            {title}
          </h1>
          <p
            className="text-xl sm:text-2xl text-white/60 max-w-3xl mx-auto transition-all duration-700"
            style={{
              opacity: 1 - scrollProgress * 0.2,
              transform: `translateY(${scrollProgress * 15}px)`
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Reference Image */}
          <div
            className="group relative rounded-2xl overflow-hidden border border-white/10 transition-all duration-700"
            style={{
              transform: `perspective(1200px) rotateY(${scrollProgress * -5}deg) rotateX(${scrollProgress * 2}deg) scale(${1 - scrollProgress * 0.05})`,
              opacity: 1 - scrollProgress * 0.1
            }}
          >
            <div className="relative h-96 sm:h-[500px]">
              <Image
                src={referenceImage}
                alt="Reference"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-semibold text-sm">Reference</p>
            </div>
          </div>

          {/* Home Page Image */}
          <div
            className="group relative rounded-2xl overflow-hidden border border-white/10 transition-all duration-700"
            style={{
              transform: `perspective(1200px) rotateY(${scrollProgress * 5}deg) rotateX(${scrollProgress * 2}deg) scale(${1 - scrollProgress * 0.05})`,
              opacity: 1 - scrollProgress * 0.1
            }}
          >
            <div className="relative h-96 sm:h-[500px]">
              <Image
                src={homePageImage}
                alt="Home Page"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-semibold text-sm">Home Page</p>
            </div>
          </div>
        </div>

        {/* Animated accent line */}
        <div className="h-1 rounded-full overflow-hidden bg-white/10 mb-12">
          <div
            className="h-full transition-all duration-700"
            style={{
              width: `${scrollProgress * 100}%`,
              backgroundColor: elementalResonance.color,
              boxShadow: `0 0 20px ${elementalResonance.color}`
            }}
          />
        </div>
      </div>
    </section>
  )
}
