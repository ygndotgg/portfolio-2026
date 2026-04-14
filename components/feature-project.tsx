'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

type Props = {
  title?: string
  subtitle?: string
  imageSrc?: string
  tags?: string[]
  href?: string
  priority?: boolean
  revealDelay?: number
}

const tagColors = [
  'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'bg-pink-500/20 text-pink-300 border-pink-500/30',
  'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  'bg-amber-500/20 text-amber-300 border-amber-500/30',
  'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
]

export default function FeatureProject({
  title = "Project title",
  subtitle = "Project subtitle",
  imageSrc = "/placeholder.svg?height=400&width=800",
  tags = ["Design", "Web"],
  href = "#",
  priority = false,
  revealDelay = 0,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), revealDelay * 1000)
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [revealDelay])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative w-full transition-all duration-700",
        isVisible ? "opacity-100" : "opacity-0"
      )}
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
      }}
    >
      {/* Animated background gradient following mouse */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
        style={{
          background: `radial-gradient(500px at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.4), transparent 80%)`,
        }}
      />

      <article className="group relative rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-br from-neutral-900/50 to-black/50 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
        
        {/* Container for landscape layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-6 p-4 sm:p-6 lg:p-8 min-h-[320px] lg:min-h-[400px]">
          
          {/* Left: Image in landscape */}
          <div className="relative w-full order-2 lg:order-1">
            <div className="relative w-full h-[250px] sm:h-[300px] lg:h-full rounded-xl overflow-hidden">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={title}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority={priority}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Subtle vignette */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-between order-1 lg:order-2">
            
            {/* Top: Title and description */}
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-blue-300">
                {title}
              </h3>
              <p className="text-sm sm:text-base text-white/70 mb-4 leading-relaxed max-w-xl group-hover:text-white/90 transition-colors duration-300">
                {subtitle}
              </p>

              {/* Tags with varied colors */}
              <div className="flex flex-wrap gap-2">
                {tags.map((t, idx) => {
                  const colorClass = tagColors[idx % tagColors.length]
                  return (
                    <span
                      key={t}
                      className={cn(
                        "inline-block px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300",
                        colorClass,
                        "hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                      )}
                    >
                      {t}
                    </span>
                  )
                })}
              </div>
            </div>

            {/* Bottom: Visit link */}
            <div className="flex items-center gap-3">
              <Link
                href={href}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-400/30 text-white font-semibold text-sm transition-all duration-300 hover:from-blue-500/50 hover:to-purple-500/50 hover:border-blue-400/60 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] group/link"
                aria-label={`Visit ${title}`}
              >
                Visit Project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
