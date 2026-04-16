"use client"


import { RecentProjects } from "./recent-projects"
import { MusicPlayer } from "./music-player"
import Bio from "./Bio"
import { BibleVerse } from "./bible-verse"
// import { TextGenerateEffectDemo } from "./texteffect"

export function HeroWithSidebar() {
  return (
    <div id="about" className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 mt-8 sm:mt-12 lg:mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
        {/* Left Side - Bio with Card Styling */}
        <div className="lg:col-span-1 flex flex-col gap-6 order-2 lg:order-1">
          <div className="border border-white/10 rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
            <Bio/>
          </div>
          <div className="border border-white/10 rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
            <BibleVerse/>
          </div>
        </div>

        {/* Right Side - Stacked Components */}
        <div className="lg:col-span-2 flex flex-col gap-6 order-1 lg:order-2">
          {/* Top - Recent Projects */}
          <div className="min-h-56 md:min-h-96">
            <RecentProjects />
          </div>

          {/* Bottom - Music Player */}
          <div className="border border-white/10 rounded-2xl p-4 md:p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
            <MusicPlayer />
          </div>
        </div>
      </div>
    </div>
  )
}
