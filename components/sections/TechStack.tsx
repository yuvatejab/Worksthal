"use client";

import { DotPattern } from "@/components/ui/dot-pattern";
import { AnimatedTechShowcase } from "@/components/ui/animated-tech-showcase";
import { cn } from "@/lib/utils";

export function TechStack() {
  return (
    <section id="tech-stack" className="relative w-full px-4 py-20 md:py-32">
      {/* Background Pattern - Full Width */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-screen -translate-x-1/2 overflow-hidden">
        <DotPattern
          className={cn(
            "h-full w-full opacity-40 [mask-image:radial-gradient(1200px_at_center,white,transparent)]",
          )}
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            Technology
          </div>
          <h2 className="text-h1 font-serif font-bold">Powering Innovation with Modern Technology</h2>
        </div>

        {/* Animated Tech Showcase */}
        <AnimatedTechShowcase />

        {/* Tech Categories */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-[#f5f5f7] dark:bg-[#2a2a2e] p-6 transition-all hover:border-zinc-400 dark:hover:border-zinc-500 hover:shadow-lg">
            <h3 className="mb-3 text-xl font-semibold text-foreground">AI and Automation</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Worksthal integrates leading AI models (OpenAI, Claude, Gemini) with automation platforms (n8n, Make, Zapier) to build intelligent workflows that process data and trigger actions automatically.
            </p>
            <div className="flex flex-wrap gap-2">
              {["OpenAI", "Claude", "Gemini", "n8n", "Make", "Zapier"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-[#f5f5f7] dark:bg-[#2a2a2e] p-6 transition-all hover:border-zinc-400 dark:hover:border-zinc-500 hover:shadow-lg">
            <h3 className="mb-3 text-xl font-semibold text-foreground">Web Development</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Worksthal builds web applications using Next.js, React, TypeScript, Tailwind CSS, and Node.js — the same modern stack used by companies like Vercel and Netflix for sub-2-second load times.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "TypeScript", "Tailwind", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-[#f5f5f7] dark:bg-[#2a2a2e] p-6 transition-all hover:border-zinc-400 dark:hover:border-zinc-500 hover:shadow-lg">
            <h3 className="mb-3 text-xl font-semibold text-foreground">AEO/SEO Audit and Visibility</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Worksthal uses Google Analytics, Search Console, Ahrefs, and Semrush to audit, optimize, and track search engine and AI engine visibility for maximum organic traffic.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Google Analytics", "Search Console", "Ahrefs", "Semrush"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
