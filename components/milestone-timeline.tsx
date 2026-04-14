'use client'

import { cn } from "@/lib/utils"

type Milestone = {
  id: string
  label: string
  date: string
}

type Props = {
  milestones?: Milestone[]
}

export default function MilestoneTimeline({
  milestones = [
    { id: '1', label: 'Frontend Dev', date: 'Jan 2022' },
    { id: '2', label: 'Full Stack Dev', date: 'Jun 2022' },
    { id: '3', label: 'System Eng', date: 'Dec 2022' },
    { id: '4', label: 'Distributed Systems', date: 'Jun 2024' },
  ],
}: Props) {
  return (
    <div className="space-y-1">
      {milestones.map((milestone, idx) => (
        <div key={milestone.id} className="flex gap-4 relative">
          {/* Timeline vertical line */}
          <div className="flex flex-col items-center">
            {/* Dot */}
            <div className="w-3 h-3 rounded-full bg-gradient-to-b from-blue-400 to-blue-600 shadow-lg shadow-blue-500/50 relative z-10" />
            
            {/* Connecting line */}
            {idx !== milestones.length - 1 && (
              <div className="w-0.5 h-12 bg-gradient-to-b from-blue-500/60 to-blue-500/20 mt-1" />
            )}
          </div>

          {/* Content */}
          <div className="pb-4 min-w-0">
            <h4 className="text-sm font-semibold text-white leading-tight">
              {milestone.label}
            </h4>
            <p className="text-xs text-white/60 mt-0.5">
              {milestone.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
