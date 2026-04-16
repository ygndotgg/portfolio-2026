/* eslint-disable react/jsx-no-undef */
import DotGridShader from "@/components/DotGridShader";
import ProjectCard from "@/components/project-card";
import AnimatedHeading from "@/components/animated-heading";
import RevealOnView from "@/components/reveal-on-view";
import CompactDetails from "./compact-details";
import { ExperienceEducationGrid } from "./experience-education";

export default function ProjectPage() {
  const projects = [
    {
      title: "Triveni",
      subtitle: "Query-First IoT Pipeline",
      imageSrc: "/triveni.png",
      tags: ["Rust", "Systems Design", "Data Engineering"],
      href: "https://trivenii.vercel.app/",
      priority: true,
      gradientFrom: "#0f172a",
      gradientTo: "#0066ff",
      isMainProject: true,
      description:
        "Designed and documented a query-first IoT pipeline optimizing for analytical latency using Arrow, Parquet, hybrid caching, and pluggable query engines. Built end-to-end Rust prototype with columnar serialization, batch aggregation, hybrid caching and SQL Query Serving",
    },
    {
      title: "Aryavarth",
      subtitle: "Concurrent Key-Value Store",
      imageSrc: "/aryavarth.png",
      tags: ["Rust", "TCP", "Multithreading"],
      href: "https://aryavarth.vercel.app/",
      priority: true,
      gradientFrom: "#0f172a",
      gradientTo: "#00cc00",
      isMainProject: true,
      description:
        "Built persistent store with append-only logs and in-memory indexing for crash-safe operations. Implemented multi-threaded TCP server with pluggable thread-pool for scalable concurrency.",
    },
  ];

  return (
    <main id="projects" className="bg-black text-white">
      {/* Full width section with consistent padding */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="w-full">
          {/* HERO: grid with left sticky sidebar; right scrolls internally. */}
          <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[420px_minmax(0,1fr)]">
            {/* LEFT: sticky and full height sidebar */}
            <aside className="lg:sticky lg:top-4 lg:h-[calc(100svh-2rem)]">
              <RevealOnView
                as="div"
                intensity="hero"
                className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8"
                staggerChildren
              >
                {/* Texture background */}
                <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
                  <DotGridShader />
                </div>
                <div>
                  {/* Wordmark */}
                  <div className="mb-8 flex items-center gap-2">
                    <div className="text-2xl font-extrabold tracking-tight">
                      YGN
                    </div>
                    <div
                      className="h-2 w-2 rounded-full bg-white/60"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Headline with intro blur effect */}
                  <AnimatedHeading
                    className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl"
                    lines={["I design systems", "that scale and endure"]}
                  />

                  <p className="mt-4 max-w-[42ch] text-lg text-white/70">
                    YGN is a systems engineer who builds from first principles.
                    He works primarily in Rust and has hands-on experience
                    designing and shipping full-stack web systems
                  </p>

                  {/* Trusted by */}
                  <div className="mt-4">
                    <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">
                      Tools & Technologies I&apos;VE WORKED{" "}
                    </p>
                    <ul className="grid grid-cols-2 font-black text-white/25 sm:grid-cols-3">
                      <li className="text-yellow-500">Rust</li>
                      <li className="text-blue-500">Typescript</li>
                      <li className="text-white">Nextjs</li>
                      <li className="text-blue-400">Tailwindcss</li>

                      <li className="text-orange-500">Honojs</li>
                      <li className="text-yellow-500">DrizzleOrm</li>
                      <li className="text-white">Sql</li>
                      <li className="text-red-500">Redis</li>
                      <li className="text-blue-400">Docker</li>
                      <li className="text-orange-500">Cloudflare</li>

                      <li className="text-purple-400">Helix</li>
                      <li className="text-red-500">Git</li>

                      <li className="text-white">Excalidraw</li>
                      <li className="text-orange-500">Figma</li>
                    </ul>
                  </div>
                </div>
                <CompactDetails />
              </RevealOnView>
            </aside>

            {/* RIGHT: Vertical stack of cards */}
            <div className="flex flex-col gap-4">
              {projects.map((p, idx) => (
                <div key={p.title} className="w-full">
                  <ProjectCard
                    title={p.title}
                    subtitle={p.subtitle}
                    imageSrc={p.imageSrc}
                    tags={p.tags}
                    href={p.href}
                    priority={p.priority}
                    gradientFrom={p.gradientFrom}
                    gradientTo={p.gradientTo}
                    revealDelay={idx * 0.06}
                    isMainProject={p.isMainProject}
                    description={p.description}
                  />
                </div>
              ))}
              
              {/* Experience Section */}
              <div className="w-full pt-8">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-white">
                    Experience & Education
                  </h2>
                  <p className="text-white/70 text-base sm:text-lg">
                    Building my professional journey
                  </p>
                </div>
                <ExperienceEducationGrid />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
