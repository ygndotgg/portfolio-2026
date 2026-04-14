'use client'

import { useEffect, useRef, useState } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ElementalResonanceCardProps {
  type: string
  color: string
  status: string
}

export default function ElementalResonanceCard({
  type = 'Hydro',
  color = '#0ea5e9',
  status = 'Completed'
}: ElementalResonanceCardProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative inline-flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-700 transform",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      )}
      style={{
        backgroundColor: `${color}20`,
        borderColor: `${color}60`,
        boxShadow: isVisible ? `0 0 30px ${color}40` : 'none'
      }}
    >
      {/* Animated glow background */}
      <div
        className="absolute inset-0 rounded-full opacity-0 blur-xl transition-opacity duration-1000 animate-pulse"
        style={{
          backgroundColor: color,
          opacity: isVisible ? 0.15 : 0
        }}
      />

      {/* Content */}
      <div className="relative flex items-center gap-3">
        {/* Pulse indicator */}
        <div className="relative w-3 h-3">
          <div
            className="absolute inset-0 rounded-full animate-pulse"
            style={{ backgroundColor: color }}
          />
          <div
            className="absolute inset-1 rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>

        {/* Type label */}
        <span
          className="font-semibold text-sm tracking-wide"
          style={{ color }}
        >
          {type}
        </span>

        {/* Divider */}
        <div
          className="w-px h-4"
          style={{ backgroundColor: `${color}40` }}
        />

        {/* Status with checkmark */}
        <div className="flex items-center gap-1.5">
          <Check
            size={16}
            style={{ color }}
            className="animate-bounce"
          />
          <span
            className="text-xs font-medium tracking-widest"
            style={{ color }}
          >
            {status}
          </span>
        </div>
      </div>

      {/* Animated border glow */}
      <div
        className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-700"
        style={{
          border: `2px solid ${color}`,
          boxShadow: `inset 0 0 20px ${color}30`
        }}
      />
    </div>
  )
}
