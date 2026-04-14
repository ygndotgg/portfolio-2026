import { notFound } from 'next/navigation'
import ProjectDetailHero from '@/components/project-detail-hero'
import ProjectDetailSection from '@/components/project-detail-section'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

// Define project data type
interface Project {
  slug: string
  title: string
  subtitle: string
  imageSrc: string
  tags: string[]
  href: string
  priority: boolean
  gradientFrom: string
  gradientTo: string
  referenceImage: string
  homePageImage: string
  elementalResonance: {
    type: string
    color: string
    status: string
  }
}

// This would ideally come from your projects component
const projects: Project[] = [
  {
    slug: "temple-campaigning",
    title: " Temple Campaigning ",
    subtitle: "Web App for Temple Donations",
    imageSrc: "/camp.jpg",
    tags: ["Web", "Payment", "Api"],
    href: "https://www.linkedin.com/posts/ygn_missed-chances-harsh-truths-relentless-activity-7329812907288866816-CiS7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADKw2u0Bmhil5w-yGcAdLHqDth7ig7SDHEk",
    priority: true,
    gradientFrom: "#0f172a",
    gradientTo: "#6d28d9",
    referenceImage: "/camp.jpg",
    homePageImage: "/camp.jpg",
    elementalResonance: {
      type: "Hydro",
      color: "#0ea5e9",
      status: "Completed"
    }
  },
  {
    slug: "ygn-techstack",
    title: "YGN TECHSTACK",
    subtitle: "CLI tool & design system",
    imageSrc: "/createygn.png",
    tags: ["Nodejs", "Design System", "Web"],
    href: "https://createygn.vercel.app/",
    priority: true,
    gradientFrom: "#111827",
    gradientTo: "#2563eb",
    referenceImage: "/createygn.png",
    homePageImage: "/createygn.png",
    elementalResonance: {
      type: "Electro",
      color: "#f59e0b",
      status: "Completed"
    }
  },
  {
    slug: "build-bharat-ai",
    title: "Build Bharat Through AI",
    subtitle: "Hackathon Registration Platform",
    imageSrc: "/bbtai.png",
    tags: ["Onboarding_Page", "Info", "Web"],
    href: "https://buildbharatthroughai.in/",
    priority: false,
    gradientFrom: "#0b132b",
    gradientTo: "#5bc0be",
    referenceImage: "/bbtai.png",
    homePageImage: "/bbtai.png",
    elementalResonance: {
      type: "Cryo",
      color: "#06b6d4",
      status: "Completed"
    }
  },
  {
    slug: "genesis-nexus",
    title: "Genesis Nexus ",
    subtitle: "AI Freelancing Platform ",
    imageSrc: "/genesis-nexus.png",
    tags: ["FreeLancing", "Web App", "AI"],
    href: "https://genesis-nexus-yze6.vercel.app/",
    priority: false,
    gradientFrom: "#0f172a",
    gradientTo: "#10b981",
    referenceImage: "/genesis-nexus.png",
    homePageImage: "/genesis-nexus.png",
    elementalResonance: {
      type: "Dendro",
      color: "#10b981",
      status: "Completed"
    }
  },
  {
    slug: "profinati",
    title: "Profinati",
    subtitle: "Content Moderation Api",
    imageSrc: "/profinati.png",
    tags: [ "Real-time", "API"],
    href: "https://profinati-ui.vercel.app/",
    priority: false,
    gradientFrom: "#1f2937",
    gradientTo: "#8b5cf6",
    referenceImage: "/profinati.png",
    homePageImage: "/profinati.png",
    elementalResonance: {
      type: "Pyro",
      color: "#ef4444",
      status: "Completed"
    }
  },
  {
    slug: "pokeguess",
    title: "PokeGuess",
    subtitle: "A Simple Pokemon Guessing Game",
    imageSrc: "/pokeguess.png",
    tags: [ "Pokemon API", "Game"],
    href: "https://pokeguess-silk.vercel.app/",
    priority: false,
    gradientFrom: "#0b132b",
    gradientTo: "#10b981",
    referenceImage: "/pokeguess.png",
    homePageImage: "/pokeguess.png",
    elementalResonance: {
      type: "Geo",
      color: "#dc2626",
      status: "Completed"
    }
  },
]

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = params as unknown as { slug: string }
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="bg-neutral-950 min-h-screen text-white">
      {/* Back button */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="#projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:border-white/30 transition-all duration-300 hover:bg-white/10"
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-medium">Back</span>
        </Link>
      </div>

      {/* Hero section with images */}
      <ProjectDetailHero
        title={project.title}
        subtitle={project.subtitle}
        referenceImage={project.referenceImage}
        homePageImage={project.homePageImage}
        elementalResonance={project.elementalResonance}
      />

      {/* Content section */}
      <ProjectDetailSection
        title={project.title}
        subtitle={project.subtitle}
        tags={project.tags}
        href={project.href}
        elementalColor={project.elementalResonance.color}
      />
    </div>
  )
}
