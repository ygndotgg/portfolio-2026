import { ElementStackTimeline } from '@/components/elements-stack-timeline'
import { Footer } from '@/components/Footer'
import Portfolio, { timelineItems } from '@/components/portfolio'
// import React from 'react'

const page = () => {
  return (
    <div >
      <Portfolio />
      <ElementStackTimeline items={timelineItems} />

      <Footer />
    </div>

  )
}

export default page