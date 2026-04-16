import { ElementStackTimeline } from '@/components/elements-stack-timeline'
import { Footer } from '@/components/Footer'
import Portfolio, { timelineItems } from '@/components/portfolio'

const page = () => {
  return (
    <div className="relative">
      <Portfolio />
      <ElementStackTimeline items={timelineItems} />
      <Footer />
    </div>
  )
}

export default page
