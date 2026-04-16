"use client"


import { RecentProjects } from "./recent-projects"
import { MusicPlayer } from "./music-player"
import Bio from "./Bio"
import { BibleVerse } from "./bible-verse"
// import { TextGenerateEffectDemo } from "./texteffect"

export function HeroWithSidebar() {
  return (
    <div id="about" className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 mt-8 sm:mt-12 lg:mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Side - Bio */}
        <div className="flex flex-col justify-start w-full">
          <Bio/>
          <div className="mt-8">
            <BibleVerse/>
          </div>
        </div>

        {/* Right Side - Stacked Components */}
        <div className="flex flex-col gap-8 w-full">
          {/* Top - Recent Projects */}
          <div className="min-h-56 md:min-h-96">
            <RecentProjects />
          </div>

          {/* Bottom - Music Player */}
          <div>
            <MusicPlayer />
          </div>
        </div>
      </div>
    </div>
  )
}
