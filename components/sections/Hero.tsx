"use client";

import { motion } from "motion/react";
import { Sparkles, Zap, Code2, Bot } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen w-full items-center overflow-hidden px-4 py-20 lg:py-32">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300 bg-clip-text text-transparent">
              Redefine Your{" "}
              <span className="block">Digital Footprint</span>
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl max-w-xl">
              From SEO audits and AI-ready content to custom web development and brand strategy, Worksthal delivers end-to-end digital solutions designed specifically for your business. We build personalized strategies that help you rank higher in search engines, get cited by AI platforms, and everywhere your customers search.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden rounded-xl bg-foreground px-8 py-4 text-base font-semibold text-background transition-all hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get started
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-xl border border-border bg-background/50 backdrop-blur-sm px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-card hover:shadow-lg"
            >
              Request a demo
            </motion.button>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Main Visual Container */}
          <div className="relative aspect-square w-full max-w-2xl">
            {/* Background Gradient Blob */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-3xl" />
            
            {/* Central Robot/AI Character */}
            <div className="relative flex h-full items-center justify-center">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl"
              >
                {/* Hero Image */}
                <img
                  src="/hero-img.webp"
                  alt="AI Automation Robot"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Floating Workflow Card - Top Left */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-12 w-48 h-32 rounded-2xl bg-card/80 backdrop-blur-md border border-border shadow-xl overflow-hidden"
            >
              <div className="p-3 space-y-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <div className="space-y-1.5">
                  <div className="h-2 bg-blue-500/30 rounded w-3/4" />
                  <div className="h-2 bg-purple-500/30 rounded w-full" />
                  <div className="h-2 bg-green-500/30 rounded w-2/3" />
                  <div className="h-2 bg-yellow-500/30 rounded w-5/6" />
                </div>
              </div>
            </motion.div>

            {/* Automation Hub Card - Top Right */}
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute right-0 top-8 w-56 rounded-2xl bg-card/90 backdrop-blur-md border border-border shadow-xl p-4"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-foreground flex items-center justify-center text-background font-bold">
                  A
                </div>
                <div>
                  <div className="text-sm font-semibold">AUTOMATION HUB</div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>

            {/* AutoFlow Card - Bottom Right */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute right-4 bottom-16 w-52 rounded-2xl bg-card/90 backdrop-blur-md border border-border shadow-xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-sm font-bold">AutoFlow</div>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">AI</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Zap className="w-3 h-3" />
                    <span>SMART WORKFLOW</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Process Intelligence Badge - Bottom */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-card/90 backdrop-blur-md border border-border shadow-lg px-4 py-2"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Process Intelligence</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
