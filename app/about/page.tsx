"use client"

import type { Metadata } from "next"
import { motion } from "framer-motion"
import { HoverVideoPlayer } from "@/components/ui/hover-video-player"
import { NumberTicker } from "@/components/ui/number-ticker"
import { Target, Users, Code, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { BlurFade } from "@/components/ui/blur-fade"
import { cn } from "@/lib/utils"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full px-4 pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        
        <div className="relative z-10 mx-auto max-w-7xl">
          <BlurFade delay={0} inView>
            <div className="mb-8 text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm font-medium text-primary backdrop-blur-sm">
                About Worksthal
              </div>
              <h1 className="mb-6 font-serif text-5xl font-bold text-foreground md:text-6xl lg:text-7xl max-w-4xl mx-auto leading-tight">
                Building Digital Solutions That Actually Work
              </h1>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Main Content Section with Video */}
      <section className="relative w-full px-4 py-12 md:py-20">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Video Player - Left Side (40% on desktop) */}
            <BlurFade delay={0.1} inView className="lg:col-span-5">
              <div className="sticky top-24 flex flex-col items-center">
                <motion.div
                  initial={{ maxWidth: "100%" }}
                  whileHover={{ 
                    maxWidth: "80vw",
                    transition: {
                      duration: 0.5,
                      ease: [0.32, 0.72, 0, 1],
                    }
                  }}
                  className={cn(
                    "group relative flex flex-col overflow-hidden rounded-2xl w-full",
                    "bg-card shadow-lg ring-2 ring-border/50"
                  )}
                >
                  <HoverVideoPlayer
                    videoSrc="/Use_the_provided_reference_image_to_generate_a_hyp_f58e06ec44.mp4"
                    enableControls
                    style={{
                      width: "100%",
                      maxWidth: "100vw",
                      aspectRatio: "16/9",
                    }}
                  />
                </motion.div>
                <p className="mt-4 text-center text-sm text-muted-foreground italic">
                  Hover to expand • Plays automatically
                </p>
              </div>
            </BlurFade>

            {/* Content - Right Side (60% on desktop) */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Opening Statement */}
              <BlurFade delay={0.2} inView>
                <div className="space-y-6">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">
                    Most businesses struggle with the same problem
                  </h2>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      They know they need modern technology. They know AI and automation could save time and reduce costs. 
                      But they don't know where to start, who to trust, or how to avoid wasting money on solutions that don't deliver.
                    </p>
                    <p className="text-foreground font-medium">
                      Worksthal exists to solve this problem.
                    </p>
                  </div>
                </div>
              </BlurFade>

              {/* Core Philosophy */}
              <BlurFade delay={0.25} inView>
                <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    Our Approach
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    We implement practical AI solutions and build modern websites that generate measurable results. 
                    No buzzwords. No overpromises. Just clear execution focused on outcomes that matter to your business — 
                    time saved, revenue generated, costs reduced.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Every project starts with understanding your existing workflows and identifying specific problems worth solving. 
                    We then build solutions using proven technology — Next.js, React, TypeScript, and AI tools from OpenAI, Claude, and Gemini — 
                    following industry best practices to ensure your solution scales as your business grows.
                  </p>
                </div>
              </BlurFade>

              {/* Inline Metrics */}
              <BlurFade delay={0.3} inView>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm">
                    <div className="mb-2 flex items-baseline justify-center gap-1">
                      <span className="text-4xl md:text-5xl font-bold text-primary">
                        <NumberTicker value={50} />
                      </span>
                      <span className="text-2xl font-bold text-primary/60">+</span>
                    </div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Projects
                    </p>
                  </div>
                  
                  <div className="text-center p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm">
                    <div className="mb-2 flex items-baseline justify-center gap-1">
                      <span className="text-4xl md:text-5xl font-bold text-primary">
                        <NumberTicker value={20} />
                      </span>
                      <span className="text-2xl font-bold text-primary/60">hrs</span>
                    </div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Saved Weekly
                    </p>
                  </div>
                  
                  <div className="text-center p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm">
                    <div className="mb-2 flex items-baseline justify-center gap-1">
                      <span className="text-4xl md:text-5xl font-bold text-primary">
                        <NumberTicker value={98} />
                      </span>
                      <span className="text-2xl font-bold text-primary/60">%</span>
                    </div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Satisfaction
                    </p>
                  </div>
                </div>
              </BlurFade>

              {/* What Makes Us Different */}
              <BlurFade delay={0.35} inView>
                <div className="space-y-6">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                    What Makes Us Different
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          We start with your existing workflow
                        </h4>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          Before recommending any solution, we map your current processes to identify bottlenecks, 
                          repetitive tasks, and opportunities for automation. This ensures every implementation 
                          integrates seamlessly with how your team already works.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          We validate ROI before scaling
                        </h4>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          Every automation starts as a pilot. We build a minimal version, measure actual time saved 
                          and costs reduced, then expand only when the numbers prove it's worth it. No guesswork.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          We build for the long term
                        </h4>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          Solutions are built with modern, maintainable technology stacks. Clear documentation, 
                          modular architecture, and adherence to industry best practices ensure your solution 
                          remains valuable as your business evolves.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>

            </div>
          </div>
        </div>
      </section>

      {/* Core Principles - Three Columns */}
      <section className="relative w-full px-4 py-20 md:py-32 bg-gradient-to-b from-background via-card/30 to-background">
        <div className="relative z-10 mx-auto max-w-7xl">
          
          <BlurFade delay={0.4} inView>
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl md:text-4xl font-bold text-foreground">
                How We Work
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Three principles that guide every project we take on
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Principle 1 */}
            <BlurFade delay={0.45} inView>
              <div className="group relative h-full rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 rounded-2xl" />
                <div className="relative space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    Practical AI Implementation
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    We implement AI tools that solve real business problems with measurable ROI. 
                    Every automation is built around your existing tools and workflows, ensuring seamless 
                    integration and immediate value without disrupting how your team operates.
                  </p>
                </div>
              </div>
            </BlurFade>

            {/* Principle 2 */}
            <BlurFade delay={0.5} inView>
              <div className="group relative h-full rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 rounded-2xl" />
                <div className="relative space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    Transparent Partnership
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Full transparency with clear project scopes, defined milestones, and regular progress updates. 
                    You understand exactly what is being built, why it matters, and what results to expect. 
                    No surprises, no scope creep.
                  </p>
                </div>
              </div>
            </BlurFade>

            {/* Principle 3 */}
            <BlurFade delay={0.55} inView>
              <div className="group relative h-full rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 rounded-2xl" />
                <div className="relative space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <Code className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    Technical Excellence
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Modern technology stack built to scale — Next.js, React, TypeScript, and Tailwind CSS — 
                    following industry best practices. Solutions require minimal ongoing maintenance and 
                    adapt as your business grows.
                  </p>
                </div>
              </div>
            </BlurFade>

          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="relative w-full px-4 py-20 md:py-32">
        <div className="relative z-10 mx-auto max-w-4xl">
          
          <BlurFade delay={0.6} inView>
            <div className="space-y-8">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center">
                Why This Matters
              </h2>
              
              <div className="rounded-3xl border border-border bg-gradient-to-br from-card to-card/50 p-8 md:p-12 space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  Most agencies sell you on vision and potential. They promise transformation, innovation, and disruption. 
                  Then they deliver generic templates, overcomplicated systems, and solutions that require constant maintenance.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Worksthal takes a different approach. We focus on solving specific, measurable problems. 
                  We start small, validate results, and scale what works. We use AI as a practical tool to eliminate 
                  repetitive work — not as a marketing buzzword to justify inflated budgets.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The result? Solutions that actually get used. Automations that save real time. 
                  Websites that perform well and require minimal upkeep. Projects delivered on scope and on budget.
                </p>

                <div className="pt-6 border-t border-border">
                  <p className="text-base text-foreground font-medium">
                    We're based in India and work with clients worldwide. 
                    Every project is measured against clear success metrics — not vanity numbers.
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>

        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full px-4 py-20 md:py-32 bg-gradient-to-b from-background to-card/30">
        <div className="relative z-10 mx-auto max-w-4xl">
          
          <BlurFade delay={0.65} inView>
            <div className="rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-card/50 to-background p-8 md:p-12 text-center space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Ready to Work Together?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Whether you need to automate repetitive workflows, build a modern website, 
                or optimize your content for AI search engines — let's discuss your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:scale-105"
                >
                  Get a Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/#services"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-border bg-background px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-card hover:border-primary/50"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </BlurFade>

        </div>
      </section>

    </main>
  )
}
