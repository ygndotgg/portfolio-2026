'use client'

import { useEffect, useRef, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface ProjectDetailSectionProps {
  title: string
  subtitle: string
  tags: string[]
  href: string
  elementalColor: string
}

const tagColors = [
  'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'bg-pink-500/20 text-pink-300 border-pink-500/30',
  'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  'bg-amber-500/20 text-amber-300 border-amber-500/30',
  'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
]

export default function ProjectDetailSection({
  title,
  subtitle,
  tags,
  href,
  elementalColor
}: ProjectDetailSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative py-20 bg-gradient-to-b from-neutral-950 to-black"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background glow */}
        <div
          className="absolute -top-40 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ backgroundColor: elementalColor }}
        />

        {/* Title with staggered animation */}
        <div
          className={`mb-8 transition-all duration-700 transform ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </div>

        {/* Tags with staggered fade-in */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, idx) => (
              <div
                key={tag}
                className={`transition-all duration-700 transform ${
                  isVisible
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 scale-95 translate-y-5'
                }`}
                style={{
                  transitionDelay: `${idx * 50}ms`
                }}
              >
                <span
                  className={`inline-block px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 ${
                    tagColors[idx % tagColors.length]
                  } hover:scale-110 hover:shadow-lg cursor-pointer`}
                  style={{
                    boxShadow: `0 0 0 0 transparent`
                  }}
                >
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Visit Project Button */}
        <div
          className={`transition-all duration-700 transform ${
            isVisible
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95'
          }`}
          style={{
            transitionDelay: '200ms'
          }}
        >
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300"
            style={{
              backgroundColor: `${elementalColor}20`,
              borderColor: `${elementalColor}60`,
              border: '2px solid',
              boxShadow: `0 0 20px ${elementalColor}30`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${elementalColor}30`
              e.currentTarget.style.boxShadow = `0 0 30px ${elementalColor}50`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = `${elementalColor}20`
              e.currentTarget.style.boxShadow = `0 0 20px ${elementalColor}30`
            }}
          >
            Visit Live Project
            <ExternalLink size={20} />
          </Link>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-12 border-t border-white/10">
          <p className="text-white/50 text-sm">
            Explore the project details and see it in action
          </p>
        </div>
      </div>
    </section>
  )
}
