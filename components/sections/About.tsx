"use client";

import { NumberTicker } from "@/components/ui/number-ticker";
import { Target, Users, Code, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "motion/react";

export function About() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" className="relative w-full px-4 py-20 md:py-32">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mx-auto max-w-7xl"
      >
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            About Worksthal
          </div>
          <h2 className="text-h1 mb-6 font-serif font-bold">Digital Agency Built for Growing Businesses</h2>
          <p className="text-body-lg mx-auto max-w-3xl text-muted-foreground">
            Worksthal is a digital agency based in Hyderabad, India, built around practical AI implementation and clean execution.
            Worksthal focuses on delivering useful work that generates measurable results — from custom AI automation workflows that eliminate repetitive tasks
            to modern websites built with Next.js that deliver exceptional performance and user experience.
          </p>
        </div>

        {/* Metrics Row */}
        <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-2 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-primary">
                  <NumberTicker value={50} />
                </span>
                <span className="text-2xl font-bold text-primary">+</span>
              </div>
              <p className="text-sm font-medium text-muted-foreground">Projects Delivered</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-secondary/50 hover:shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-2 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-secondary">
                  <NumberTicker value={20} />
                </span>
                <span className="text-2xl font-bold text-secondary">hrs</span>
              </div>
              <p className="text-sm font-medium text-muted-foreground">Saved Weekly</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-success/50 hover:shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-2 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-success">
                  <NumberTicker value={2.5} decimalPlaces={1} />
                </span>
                <span className="text-2xl font-bold text-success">x</span>
              </div>
              <p className="text-sm font-medium text-muted-foreground">Average ROI</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-2 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-accent">
                  <NumberTicker value={98} />
                </span>
                <span className="text-2xl font-bold text-accent">%</span>
              </div>
              <p className="text-sm font-medium text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                Practical AI Implementation
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Worksthal implements AI tools that solve real business problems and deliver measurable ROI. Every automation is built around your existing tools and workflows, ensuring seamless integration and immediate value.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-secondary/50 hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10">
                <Users className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                Transparent Partnership
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Worksthal operates with full transparency — clear project scopes, defined milestones, and regular progress updates. Clients understand exactly what is being built, why it matters, and what results to expect.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                <Code className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                Technical Excellence
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Worksthal uses a modern technology stack — Next.js, React, TypeScript, and Tailwind CSS — following industry best practices. Solutions are built to scale with your business and require minimal ongoing maintenance.
              </p>
            </div>
          </div>
        </div>

        {/* Why AI Section */}
        <div className="mt-16 rounded-3xl border border-border bg-gradient-to-br from-card to-card/50 p-8 md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
            <div className="flex-shrink-0">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary">
                <Zap className="h-10 w-10 text-primary-foreground" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-h3 mb-4 font-serif font-bold">Why AI — The Right Way</h3>
              <p className="text-body-lg mb-4 text-foreground">
                AI as a practical tool, not a buzzword
              </p>
              <p className="text-muted-foreground">
                Worksthal uses AI to reduce effort, improve clarity, and accelerate execution — not to overcomplicate things or replace human judgment.
                Worksthal&apos;s approach combines human expertise with AI capabilities from OpenAI, Claude, and Gemini to deliver solutions
                that produce measurable business outcomes. Every AI implementation is validated against real performance data before deployment.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
