"use client";

import { NumberTicker } from "@/components/ui/number-ticker";
import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Target, Users, Code, Zap, ArrowRight, Sparkles, TrendingUp, Clock, Award } from "lucide-react";
import { cn } from "@/lib/utils";

export function About() {
  return (
    <section id="about" className="relative w-full px-4 py-20 md:py-32">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <BlurFade delay={0} inView>
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
              About Worksthal
            </div>
            <h2 className="text-h1 font-serif font-bold">
              Digital Agency Built for Growing Businesses
            </h2>
          </div>
        </BlurFade>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-[320px_220px_160px]">

          {/* ── Hero Card: Why AI (Top-left, spans 4 cols, 2 rows) ── */}
          <BlurFade delay={0.1} inView className="md:col-span-4 md:row-span-2">
            <MagicCard
              className="h-full rounded-3xl overflow-hidden"
              gradientColor="#18181b"
              gradientOpacity={0.15}
              gradientFrom="#71717a"
              gradientTo="#a1a1aa"
            >
              {/* Background Pattern */}
              <DotPattern
                className={cn(
                  "absolute inset-0 opacity-20 dark:opacity-10 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
                )}
                width={16}
                height={16}
                cx={1}
                cy={1}
                cr={0.8}
              />
              
              {/* Animated corner sparkle */}
              <div className="absolute top-4 right-4 opacity-40">
                <Sparkles className="h-5 w-5 text-zinc-400 dark:text-zinc-600 animate-pulse" />
              </div>

              <div className="relative flex h-full flex-col justify-between p-8 md:p-10">
                <div>
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-600 dark:from-zinc-200 dark:to-zinc-400 shadow-lg">
                    <Zap className="h-7 w-7 text-white dark:text-zinc-900" />
                  </div>
                  <h3 className="mb-3 font-serif text-2xl font-bold text-foreground md:text-3xl">
                    Why AI — The Right Way
                  </h3>
                  <p className="mb-4 text-lg font-medium text-foreground/80">
                    AI as a practical tool, not a buzzword
                  </p>
                  <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    Worksthal uses AI to reduce effort, improve clarity, and accelerate execution — not to overcomplicate things or replace human judgment.
                    Our approach combines human expertise with AI capabilities from OpenAI, Claude, and Gemini to deliver solutions
                    that produce measurable business outcomes.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground cursor-pointer">
                  <span>Learn more about our approach</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </MagicCard>
          </BlurFade>

          {/* ── Metric: Projects Delivered (Top-right, row 1) ── */}
          <BlurFade delay={0.2} inView className="md:col-span-2">
            <MagicCard
              className="h-full rounded-3xl overflow-hidden"
              gradientColor="#18181b"
              gradientOpacity={0.12}
              gradientFrom="#71717a"
              gradientTo="#a1a1aa"
            >
              <BorderBeam
                size={80}
                duration={8}
                delay={0}
                colorFrom="#71717a"
                colorTo="#d4d4d8"
                borderWidth={1.5}
              />
              
              {/* Radial glow behind number */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-32 w-32 rounded-full bg-zinc-500/10 dark:bg-zinc-400/5 blur-2xl" />
              </div>

              {/* Floating decorative icon */}
              <div className="absolute top-4 right-4 opacity-20 animate-pulse">
                <TrendingUp className="h-8 w-8 text-zinc-400 dark:text-zinc-600" />
              </div>

              <div className="relative flex h-full flex-col items-center justify-center p-6 text-center">
                <div className="mb-2 flex items-baseline gap-1">
                  <span className="text-6xl font-bold tracking-tight text-foreground md:text-7xl">
                    <NumberTicker value={50} />
                  </span>
                  <span className="text-4xl font-bold text-foreground/60">+</span>
                </div>
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Projects Delivered
                </p>
              </div>
            </MagicCard>
          </BlurFade>

          {/* ── Metric: Hours Saved (Right, row 2, split into 2 mini metrics) ── */}
          <BlurFade delay={0.25} inView className="md:col-span-1">
            <MagicCard
              className="h-full rounded-3xl overflow-hidden"
              gradientColor="#18181b"
              gradientOpacity={0.12}
              gradientFrom="#71717a"
              gradientTo="#a1a1aa"
            >
              <BorderBeam
                size={60}
                duration={10}
                delay={1}
                colorFrom="#71717a"
                colorTo="#d4d4d8"
                borderWidth={1.5}
              />
              
              {/* Radial glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-24 w-24 rounded-full bg-zinc-500/10 dark:bg-zinc-400/5 blur-2xl" />
              </div>

              {/* Floating decorative icon */}
              <div className="absolute bottom-3 left-3 opacity-20 animate-pulse">
                <Clock className="h-6 w-6 text-zinc-400 dark:text-zinc-600" />
              </div>

              <div className="relative flex h-full flex-col items-center justify-center p-5 text-center">
                <div className="mb-1 flex items-baseline gap-1">
                  <span className="text-5xl font-bold tracking-tight text-foreground md:text-6xl">
                    <NumberTicker value={20} />
                  </span>
                  <span className="text-2xl font-bold text-foreground/60">hrs</span>
                </div>
                <p className="text-[10px] font-medium tracking-wide text-muted-foreground uppercase">
                  Saved Weekly
                </p>
              </div>
            </MagicCard>
          </BlurFade>

          <BlurFade delay={0.3} inView className="md:col-span-1">
            <MagicCard
              className="h-full rounded-3xl overflow-hidden"
              gradientColor="#18181b"
              gradientOpacity={0.12}
              gradientFrom="#71717a"
              gradientTo="#a1a1aa"
            >
              <BorderBeam
                size={60}
                duration={12}
                delay={2}
                colorFrom="#71717a"
                colorTo="#d4d4d8"
                borderWidth={1.5}
              />
              
              {/* Radial glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-24 w-24 rounded-full bg-zinc-500/10 dark:bg-zinc-400/5 blur-2xl" />
              </div>

              {/* Floating decorative icon */}
              <div className="absolute bottom-3 right-3 opacity-20 animate-pulse">
                <Award className="h-6 w-6 text-zinc-400 dark:text-zinc-600" />
              </div>

              <div className="relative flex h-full flex-col items-center justify-center p-5 text-center">
                <div className="mb-1 flex items-baseline gap-1">
                  <span className="text-5xl font-bold tracking-tight text-foreground md:text-6xl">
                    <NumberTicker value={2.5} decimalPlaces={1} />
                  </span>
                  <span className="text-2xl font-bold text-foreground/60">x</span>
                </div>
                <p className="text-[10px] font-medium tracking-wide text-muted-foreground uppercase">
                  Average ROI
                </p>
              </div>
            </MagicCard>
          </BlurFade>

          {/* ── Bottom Row: 3 Value Props + 1 Satisfaction Metric ── */}

          {/* Practical AI */}
          <BlurFade delay={0.35} inView className="md:col-span-2">
            <MagicCard
              className="h-full rounded-3xl overflow-hidden"
              gradientColor="#18181b"
              gradientOpacity={0.1}
              gradientFrom="#71717a"
              gradientTo="#a1a1aa"
            >
              <BorderBeam
                size={50}
                duration={14}
                delay={3}
                colorFrom="#71717a"
                colorTo="#d4d4d8"
                borderWidth={1}
              />
              <div className="relative flex h-full items-center gap-4 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 shadow-sm">
                  <Target className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-0.5">
                    Practical AI Implementation
                  </h4>
                  <p className="text-xs leading-snug text-muted-foreground">
                    AI tools that solve real business problems with measurable ROI.
                  </p>
                </div>
              </div>
            </MagicCard>
          </BlurFade>

          {/* Transparent Partnership */}
          <BlurFade delay={0.4} inView className="md:col-span-2">
            <MagicCard
              className="h-full rounded-3xl overflow-hidden"
              gradientColor="#18181b"
              gradientOpacity={0.1}
              gradientFrom="#71717a"
              gradientTo="#a1a1aa"
            >
              <BorderBeam
                size={50}
                duration={16}
                delay={4}
                colorFrom="#71717a"
                colorTo="#d4d4d8"
                borderWidth={1}
              />
              <div className="relative flex h-full items-center gap-4 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 shadow-sm">
                  <Users className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-0.5">
                    Transparent Partnership
                  </h4>
                  <p className="text-xs leading-snug text-muted-foreground">
                    Clear scopes, milestones, and updates so you know what to expect.
                  </p>
                </div>
              </div>
            </MagicCard>
          </BlurFade>

          {/* Technical Excellence + Satisfaction */}
          <BlurFade delay={0.45} inView className="md:col-span-2">
            <MagicCard
              className="h-full rounded-3xl overflow-hidden"
              gradientColor="#18181b"
              gradientOpacity={0.1}
              gradientFrom="#71717a"
              gradientTo="#a1a1aa"
            >
              <BorderBeam
                size={50}
                duration={18}
                delay={5}
                colorFrom="#71717a"
                colorTo="#d4d4d8"
                borderWidth={1}
              />
              <div className="relative flex h-full items-center justify-between gap-3 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 shadow-sm">
                    <Code className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-0.5">
                      Technical Excellence
                    </h4>
                    <p className="text-xs leading-snug text-muted-foreground">
                      Modern stack built to scale.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center border-l border-border pl-3">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-3xl font-bold tracking-tight text-foreground">
                      <NumberTicker value={98} />
                    </span>
                    <span className="text-lg font-bold text-foreground/60">%</span>
                  </div>
                  <p className="text-[9px] font-medium tracking-wide text-muted-foreground uppercase">
                    Satisfaction
                  </p>
                </div>
              </div>
            </MagicCard>
          </BlurFade>

        </div>
      </div>
    </section>
  );
}
