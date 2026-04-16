'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useState } from "react"

type Props = {
  title?: string
  subtitle?: string
  imageSrc?: string
  tags?: string[]
  href?: string
  priority?: boolean
  gradientFrom?: string
  gradientTo?: string
  imageContainerClassName?: string
  containerClassName?: string
  revealDelay?: number
  isMainProject?: boolean
  description?: string
}

export default function ProjectCard({
  title = "Project title",
  subtitle = "Project subtitle",
  imageSrc = "/placeholder.svg?height=720&width=1280",
  tags = ["Design", "Web"],
  href = "#",
  priority = false,
  gradientFrom = "#0f172a",
  gradientTo = "#6d28d9",
  imageContainerClassName,
  containerClassName,
  revealDelay = 0,
  isMainProject = false,
  description = "",
}: Props) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article className={cn("group relative h-screen w-full", containerClassName)}>
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full h-full overflow-hidden bg-black"
      >
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            fill
            sizes="100vw"
            priority={priority}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Dynamic gradient overlay */}
          <div 
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, ${gradientFrom}40 0%, ${gradientTo}30 50%, transparent 100%)`,
            }}
          />
          
          {/* Dark overlay for content readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* Content at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-8 lg:p-12">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((t) => (
              <Badge
                key={t}
                className="bg-black/60 text-white border-white/30 backdrop-blur-md font-medium text-xs sm:text-sm"
              >
                {t}
              </Badge>
            ))}
          </div>

          {/* Header */}
          <div className="space-y-3 sm:space-y-4 mb-6">
            <div className="space-y-1 sm:space-y-2">
              <h3 className="font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                {title}
              </h3>
              <p className="text-white/70 text-base sm:text-lg font-medium">
                {subtitle}
              </p>
            </div>

            {/* Accent line */}
            <div 
              className="h-1 w-16 rounded-full transition-all duration-500"
              style={{
                background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
              }}
            />
          </div>

          {/* Description */}
          {description && (
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
              {description}
            </p>
          )}

          {/* CTA Button */}
          <Link
            href={href}
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 group/btn border border-white/20 hover:border-white/40 hover:bg-white/10"
            aria-label={`Open project: ${title}`}
          >
            <Github className="h-4 w-4" />
            GitHub
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>

        {/* Animated gradient background on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${gradientFrom}20 0%, transparent 50%)`,
          }}
        />
      </div>
    </article>
  )
}
