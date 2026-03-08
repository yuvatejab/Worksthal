"use client";

import { motion, useMotionValue, useTransform } from "motion/react";
import { Target, Users, Code, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { AboutVideoPlayer, StatTicker } from "@/components/about-interactive";
import { useState } from "react";

export function AboutPageClient() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <>
      {/* Main Content Section - Interactive 3D */}
      <section className="relative w-full px-4 py-12 md:py-16">
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Video Player - 3D Floating */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="sticky top-24">
                <motion.div 
                  whileHover={{ 
                    y: -8,
                    rotateY: 2,
                    rotateX: -2,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group relative overflow-hidden rounded-xl w-full bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-2xl"
                  style={{ 
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                  }}
                >
                  {/* 3D depth layers */}
                  <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ transform: "translateZ(-1px)" }} />
                  <div className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" style={{ transform: "translateZ(-2px)" }} />
                  
                  <AboutVideoPlayer />
                </motion.div>
                <p className="mt-3 text-center text-[10px] text-muted-foreground uppercase tracking-wider">
                  Hover to expand
                </p>
              </div>
            </motion.div>

            {/* Content - Right Side */}
            <div className="lg:col-span-3 space-y-8">
              {/* Opening Statement - Compact */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  Most businesses struggle with the{" "}
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    same problem
                  </span>
                </h2>
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    They know they need modern technology and AI automation to save time and reduce costs.
                    But they don&apos;t know where to start, who to trust, or how to avoid wasting money on solutions that don&apos;t deliver.
                  </p>
                  <p className="text-foreground font-semibold text-base">
                    Worksthal exists to solve this problem.
                  </p>
                </div>
              </motion.div>

              {/* Core Philosophy - Interactive 3D Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ 
                  y: -8,
                  rotateX: -2,
                  scale: 1.02,
                }}
                className="group relative rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 space-y-3 hover:shadow-2xl transition-all"
                style={{ 
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                {/* 3D depth layers */}
                <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ transform: "translateZ(-1px)" }} />
                <div className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" style={{ transform: "translateZ(-2px)" }} />
                
                <div className="relative">
                  <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    Our Approach
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We implement practical AI solutions and build modern websites that generate measurable results.
                    No buzzwords. No overpromises. Just clear execution focused on outcomes: time saved, revenue generated, costs reduced.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every project starts with understanding your workflows and identifying specific problems worth solving.
                    We build solutions using Next.js, React, TypeScript, and AI tools from OpenAI, Claude, and Gemini.
                  </p>
                </div>
              </motion.div>

              {/* Inline Metrics - Interactive 3D */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 50, suffix: "+", label: "Projects" },
                  { value: 20, suffix: "hrs", label: "Saved Weekly" },
                  { value: 98, suffix: "%", label: "Satisfaction" },
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.05, duration: 0.3 }}
                    whileHover={{ 
                      y: -6,
                      rotateY: idx === 1 ? 0 : (idx === 0 ? -3 : 3),
                      scale: 1.05,
                    }}
                    onHoverStart={() => setHoveredCard(idx)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className="group relative text-center p-4 rounded-lg border border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all cursor-pointer"
                    style={{ 
                      transformStyle: "preserve-3d",
                      perspective: "1000px",
                    }}
                  >
                    {/* 3D depth layers */}
                    <div className="absolute -inset-px rounded-lg bg-gradient-to-b from-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ transform: "translateZ(-1px)" }} />
                    <motion.div 
                      animate={{
                        opacity: hoveredCard === idx ? 0.6 : 0,
                        scale: hoveredCard === idx ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 rounded-lg bg-primary/20 blur-xl" 
                      style={{ transform: "translateZ(-3px)" }} 
                    />
                    
                    <div className="relative">
                      <div className="mb-1 flex items-baseline justify-center gap-1">
                        <span className="text-2xl md:text-3xl font-bold text-primary">
                          <StatTicker value={stat.value} />
                        </span>
                        <span className="text-lg font-bold text-primary/60">{stat.suffix}</span>
                      </div>
                      <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different - Interactive 3D Cards */}
      <section className="relative w-full px-4 py-12 md:py-16">
        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-2xl font-bold text-foreground mb-6"
          >
            What Makes Us{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Different
            </span>
          </motion.h3>
          
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Start with your workflow",
                description: "We map your current processes to identify bottlenecks and automation opportunities that integrate seamlessly.",
              },
              {
                title: "Validate ROI before scaling",
                description: "Every automation starts as a pilot. We measure actual time saved, then expand only when numbers prove it.",
              },
              {
                title: "Build for the long term",
                description: "Modern, maintainable tech stacks with clear documentation and industry best practices.",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                whileHover={{ 
                  y: -8,
                  rotateY: idx === 1 ? 0 : (idx === 0 ? 2 : -2),
                  scale: 1.02,
                }}
                onHoverStart={() => setHoveredCard(idx + 20)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm p-5 hover:shadow-xl transition-all cursor-pointer"
                style={{ 
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                {/* 3D depth layers */}
                <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ transform: "translateZ(-1px)" }} />
                <motion.div 
                  animate={{
                    opacity: hoveredCard === idx + 20 ? 0.5 : 0,
                    scale: hoveredCard === idx + 20 ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 rounded-xl bg-primary/15 blur-lg" 
                  style={{ transform: "translateZ(-2px)" }} 
                />
                
                <div className="relative flex gap-3 items-start">
                  <div className="flex-shrink-0">
                    <motion.div 
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </motion.div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles - Compact 3D Cards */}
      <section className="relative w-full px-4 py-12 md:py-16 bg-gradient-to-b from-background via-card/20 to-background">
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="mb-2 font-serif text-2xl md:text-3xl font-bold text-foreground">
              How We{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Work
              </span>
            </h2>
            <p className="text-sm text-muted-foreground">
              Three principles that guide every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Practical AI Implementation",
                description: "AI tools that solve real business problems with measurable ROI. Built around your existing tools for seamless integration.",
              },
              {
                icon: Users,
                title: "Transparent Partnership",
                description: "Clear project scopes, defined milestones, and regular updates. You understand exactly what's being built and why.",
              },
              {
                icon: Code,
                title: "Technical Excellence",
                description: "Modern tech stack with Next.js, React, TypeScript. Minimal maintenance required, scales as you grow.",
              },
            ].map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  whileHover={{ 
                    y: -10,
                    rotateY: idx === 1 ? 0 : (idx === 0 ? 3 : -3),
                    rotateX: -2,
                    scale: 1.03,
                  }}
                  onHoverStart={() => setHoveredCard(idx + 30)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="group relative h-full rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 hover:shadow-2xl transition-all cursor-pointer"
                  style={{ 
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                  }}
                >
                  {/* 3D depth layers */}
                  <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ transform: "translateZ(-1px)" }} />
                  <motion.div 
                    animate={{
                      opacity: hoveredCard === idx + 30 ? 0.6 : 0,
                      scale: hoveredCard === idx + 30 ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 rounded-xl bg-primary/20 blur-xl" 
                    style={{ transform: "translateZ(-3px)" }} 
                  />
                  
                  <div className="relative space-y-3">
                    <motion.div 
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                    >
                      <Icon className="h-5 w-5 text-primary" />
                    </motion.div>
                    <h3 className="font-serif text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why This Matters - Interactive 3D Card */}
      <section className="relative w-full px-4 py-12 md:py-16">
        <div className="relative z-10 mx-auto max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center">
              Why This{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Matters
              </span>
            </h2>
            <motion.div 
              whileHover={{ 
                y: -8,
                scale: 1.01,
              }}
              className="group relative rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 md:p-8 space-y-4 hover:shadow-2xl transition-all"
              style={{ 
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* 3D depth layers */}
              <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ transform: "translateZ(-1px)" }} />
              <div className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" style={{ transform: "translateZ(-2px)" }} />
              
              <div className="relative space-y-3">
                <p className="text-sm text-foreground leading-relaxed">
                  Most agencies sell you on vision and potential. They promise transformation, innovation, and disruption.
                  Then they deliver generic templates, overcomplicated systems, and solutions that require constant maintenance.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Worksthal takes a different approach. We focus on solving specific, measurable problems.
                  We start small, validate results, and scale what works. We use AI as a practical tool to eliminate
                  repetitive work, not as a marketing buzzword.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The result? Solutions that actually get used. Automations that save real time.
                  Websites that perform well and require minimal upkeep. Projects delivered on scope and on budget.
                </p>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-foreground font-semibold">
                    Based in India, serving clients worldwide. Every project measured against clear success metrics.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Interactive 3D */}
      <section className="relative w-full px-4 py-12 md:py-16">
        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -8,
              scale: 1.01,
            }}
            className="group relative rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm p-8 text-center overflow-hidden hover:shadow-2xl transition-all"
            style={{ 
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            {/* 3D depth layers */}
            <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ transform: "translateZ(-1px)" }} />
            <div className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" style={{ transform: "translateZ(-2px)" }} />
            
            <div className="relative">
              <h2 className="mb-3 font-serif text-2xl md:text-3xl font-bold text-foreground">
                Ready to Work{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Together?
                </span>
              </h2>
              <p className="mb-6 text-sm text-muted-foreground max-w-2xl mx-auto">
                Whether you need to automate workflows, build a modern website, or optimize for AI search engines, let&apos;s discuss your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
                  >
                    Get a Free Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/#services"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background/50 px-6 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-card"
                  >
                    View Our Services
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
