"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import RevealOnView from "@/components/reveal-on-view";
import { useState } from "react";

type Props = {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  tags?: string[];
  href?: string;
  priority?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
  imageContainerClassName?: string;
  containerClassName?: string;
  revealDelay?: number;
  isMainProject?: boolean;
  description?: string;
};

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article className={cn("group relative", containerClassName)}>
      <RevealOnView
        delay={revealDelay}
        className={cn("rounded-3xl border transition-all duration-500")}
        style={{
          backgroundImage: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
          borderColor: isHovered
            ? "rgba(255,255,255,0.3)"
            : "rgba(255,255,255,0.1)",
          boxShadow: isHovered
            ? `0 0 40px ${gradientFrom}40, inset 0 0 40px ${gradientFrom}20`
            : `0 0 20px ${gradientFrom}20`,
        }}
      >
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative overflow-hidden rounded-[1.35rem] bg-black flex flex-col h-full"
        >
          {/* Image Section on Top */}
          <div className="relative w-full flex-1 aspect-video overflow-hidden">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority={priority}
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: `linear-gradient(180deg, transparent 0%, ${gradientFrom}30 100%)`,
              }}
            />
          </div>

          {/* Content Section at Bottom */}
          <div className="p-4 sm:p-5 flex flex-col gap-3 justify-between">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <Badge
                  key={t}
                  className="bg-black/60 text-white border-white/30 backdrop-blur-md font-medium text-xs"
                >
                  {t}
                </Badge>
              ))}
            </div>

            {/* Title and Subtitle */}
            <div>
              <h3 className="font-semibold leading-tight text-lg sm:text-xl">
                {title}
              </h3>
              <p className="text-white/70 text-sm line-clamp-2">{subtitle}</p>
            </div>

            {/* Description */}
            {description && (
              <p className="text-white/60 text-xs sm:text-sm line-clamp-2">
                {description}
              </p>
            )}

            {/* Button */}
            <Link
              href={href}
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium backdrop-blur transition-all duration-300 self-start group/btn border border-white/20 hover:border-white/40 hover:bg-white/10"
              aria-label={`Open project: ${title}`}
            >
              <Github className="h-4 w-4" />
              View
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>
      </RevealOnView>
    </article>
  );
}
