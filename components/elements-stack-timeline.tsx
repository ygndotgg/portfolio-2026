/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { cn } from "@/lib/utils"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export interface TimelineItem {
  id: string
  label: string
  date: string
  description: string
  gradientColor: string
  icon: string
  status?: "completed" | "in-progress" | "upcoming"
  statusLabel?: string
  imge: string
  route?: string
}

interface ElementStackTimelineProps {
  title?: string
  subtitle?: string
  items: TimelineItem[]
  gradientStart?: string
  gradientEnd?: string
}

const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  )
}

const TimelineCard = ({
  item,
  hovered,
  onHover,
}: {
  item: TimelineItem
  hovered: boolean
  onHover: (id: string | null) => void
}) => {
  const router = useRouter()
  
  const handleNavigate = (e: React.MouseEvent | React.TouchEvent | React.KeyboardEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (item.route) {
      router.push(item.route)
    }
  }

  return (
    <div
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
      onClick={(e) => handleNavigate(e)}
      onTouchEnd={(e) => handleNavigate(e)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && item.route) {
          handleNavigate(e)
        }
      }}
      aria-expanded={hovered}
      className="border border-gray-700 group/canvas-card flex items-center justify-center dark:border-white/[0.2] w-full min-h-[200px] sm:min-h-[240px] md:h-64 p-3 sm:p-4 relative rounded-lg overflow-hidden bg-black cursor-pointer transition-all duration-300 hover:border-white/50 hover:shadow-lg hover:shadow-white/20 z-50 active:scale-95 sm:active:scale-100"
    >
      {/* Corner decorations */}
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

      <AnimatePresence>
        {/* If an image URL exists, show it and let it fully occupy the card */}
        {hovered && item.imge && item.imge.trim() !== "" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 h-full w-full rounded-lg overflow-hidden pointer-events-none"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            {/* Use a relative container so Next/Image `fill` works correctly */}
            <div className="relative h-full w-full">
              <Image src={item.imge} alt={item.label} fill className="object-cover brightness-95" />
              {/* A subtle dark overlay to keep text readable when shown */}
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </motion.div>
        )}

        {/* Fallback gradient when there is no image to show */}
        {hovered && (!item.imge || item.imge.trim() === "") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0 rounded-lg"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${item.gradientColor}, rgba(0, 0, 0, 0.5))`,
            }}
          />
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20">
        <div className={`text-center transition-transform duration-200 w-full mx-auto flex items-center justify-center ${hovered ? '-translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}>
          <Image src={item.icon} alt={item.label} width={250} height={250} />
        </div>
        <h2 className={`text-white text-xl relative z-10 text-center -mt-20 font-bold transition-all duration-200 ${hovered ? 'opacity-100 -translate-y-2' : 'opacity-0 translate-y-2'}`}>
          {item.label}
        </h2>
        {item.statusLabel && (
          <p className={`text-gray-300 text-sm transition duration-200 text-center mt-2 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
            {item.statusLabel}
          </p>
        )}
      </div>
    </div>
  )
}

export function ElementStackTimeline({
  title = "Elemental Resonance",
  subtitle = "Timeline",
  items,
  
}: ElementStackTimelineProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const getTimelineGradient = () => {
    const colors = items.map((item) => item.gradientColor).join(", ")
    return `linear-gradient(90deg, ${colors})`
  }

  return (
    <div id="resonance" className="w-full bg-black text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-balance">{title}</h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 text-balance">{subtitle}</p>
        </div>

        {/* Card Stack */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 mb-10 sm:mb-12">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-3 sm:gap-4">
              <TimelineCard item={item} hovered={hoveredCard === item.id} onHover={setHoveredCard} />

              {/* Bottom Info */}
              <div className="text-center w-full">
                <p className="text-sm sm:text-base font-medium">{item.date}</p>
                {item.status && (
                  <p
                    className={cn(
                      "text-xs sm:text-sm mt-1",
                      item.status === "completed" || item.status == "in-progress"
                        ? "text-green-400"
                        : item.status === "upcoming"
                          ? "text-yellow-400"
                          : "text-gray-400",
                    )}
                  >
                    {item.status === "upcoming" ? "Expected" : item.status}
                  </p>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-300 text-xs sm:text-sm text-center">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline Bar */}
        <div className="h-1.5 sm:h-2 rounded-full mb-6 sm:mb-8 shadow-lg" style={{ background: getTimelineGradient() }} />
      </div>
    </div>
  )
}
