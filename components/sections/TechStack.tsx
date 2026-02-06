"use client";

import { DotPattern } from "@/components/ui/dot-pattern";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { cn } from "@/lib/utils";
import { Bot, Zap, Code, Globe } from "lucide-react";

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
          <h2 className="text-h1 mb-6 font-serif font-bold">Technology Stack Powering Worksthal Solutions</h2>
          <p className="text-body-lg mx-auto max-w-3xl text-muted-foreground">
            Worksthal uses industry-leading AI models, automation platforms, and modern web frameworks to build solutions that are reliable, scalable, and optimized for performance.
          </p>
        </div>

        {/* Tech Display with Orbiting Icons */}
        <div className="relative z-10 mx-auto flex h-[500px] w-full max-w-4xl items-center justify-center overflow-hidden rounded-3xl border-2 border-border/50 bg-gradient-to-br from-muted/50 to-card/30 shadow-2xl">
          {/* Center Logo/Icon */}
          <div className="relative z-30 flex h-28 w-28 items-center justify-center rounded-full border-4 border-primary bg-card shadow-2xl backdrop-blur-sm">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">W</div>
            </div>
          </div>

          {/* Orbiting Tech Icons - Outer Circle */}
          <OrbitingCircles iconSize={64} radius={180} duration={20}>
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-muted shadow-lg backdrop-blur-sm">
              <Bot className="h-8 w-8 text-primary" />
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-muted shadow-lg backdrop-blur-sm">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-secondary bg-muted shadow-lg backdrop-blur-sm">
              <Code className="h-8 w-8 text-secondary" />
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-secondary bg-muted shadow-lg backdrop-blur-sm">
              <Globe className="h-8 w-8 text-secondary" />
            </div>
          </OrbitingCircles>

          {/* Orbiting Tech Icons - Inner Circle (Reverse) */}
          <OrbitingCircles iconSize={48} radius={100} duration={15} reverse>
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-card shadow-lg backdrop-blur-sm">
              <Bot className="h-6 w-6 text-accent" />
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-card shadow-lg backdrop-blur-sm">
              <Code className="h-6 w-6 text-accent" />
            </div>
          </OrbitingCircles>
        </div>

        {/* Tech Categories */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
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

          <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-secondary/50 hover:shadow-lg">
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

          <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg">
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
