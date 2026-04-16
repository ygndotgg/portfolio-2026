import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import RevealOnView from "@/components/reveal-on-view"

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
}

// Server Component (no client hooks)
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
}: Props) {
  return (
    <article className={cn("group relative", containerClassName)}>
      <RevealOnView
        delay={revealDelay}
        className={cn("rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)]", isMainProject && "lg:h-full")}
        style={{
          backgroundImage: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
        }}
      >
        <div className={cn("relative overflow-hidden rounded-[1.35rem] bg-black", isMainProject ? "flex flex-col" : "flex flex-col h-auto")}>
          {/* Tags - Positioned absolutely on both layouts */}
          <div className="pointer-events-none absolute left-4 top-4 flex flex-wrap gap-2 z-20">
            {tags.map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="pointer-events-auto bg-black/50 text-white border-white/20 backdrop-blur-sm"
              >
                {t}
              </Badge>
            ))}
          </div>

          {/* Main Project Layout: Content on top, Image on bottom */}
          {isMainProject ? (
            <>
              {/* Content Section */}
              <div className="p-4 sm:p-6 lg:p-10 flex flex-col justify-between flex-1 bg-gradient-to-b from-white/5 via-white/2 to-transparent">
                <div className="space-y-3 sm:space-y-4">
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="font-bold leading-tight text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">{title}</h3>
                    <p className="text-white/60 text-sm sm:text-base lg:text-lg font-light leading-relaxed">{subtitle}</p>
                  </div>
                  
                  {/* Visual Separator */}
                  <div className="h-px bg-gradient-to-r from-blue-500/50 via-blue-500/30 to-transparent w-12 mt-2 sm:mt-4" />
                </div>

                {/* CTA Button with enhanced styling */}
                <Link
                  href={href}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:from-blue-500 hover:to-blue-400 hover:shadow-lg hover:shadow-blue-500/50 self-start group/btn mt-4 sm:mt-6 border border-blue-400/30"
                  aria-label={`Open case study: ${title}`}
                >
                  Explore Project
                  <ArrowRight className="h-3.5 sm:h-4 w-3.5 sm:w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>

              {/* Image Section */}
              <div className="relative w-full h-48 sm:h-56 lg:h-80">
                <Image
                  src={imageSrc || "/placeholder.svg"}
                  alt={title}
                  fill
                  sizes="(min-width: 1024px) 100vw, (min-width: 640px) 100vw, 100vw"
                  priority={priority}
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
              </div>
            </>
          ) : (
            <>
              {/* Compact Project Layout: Image on top, Content on bottom */}
              <div className="relative w-full aspect-video">
                <Image
                  src={imageSrc || "/placeholder.svg"}
                  alt={title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority={priority}
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-5 flex flex-col gap-3 justify-between">
                <div>
                  <h3 className="font-semibold leading-tight text-lg sm:text-xl">{title}</h3>
                  <p className="text-white/70 text-sm line-clamp-2">{subtitle}</p>
                </div>
                <Link
                  href={href}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm font-medium backdrop-blur transition-colors hover:bg-white/20 self-start group/btn"
                  aria-label={`Open case study: ${title}`}
                >
                  Case study
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </>
          )}
        </div>
      </RevealOnView>
    </article>
  )
}
