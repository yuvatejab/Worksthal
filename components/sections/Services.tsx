"use client";

import { FeatureCarousel } from "@/components/ui/feature-carousel";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Services() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="services" className="relative w-full px-4 py-16 md:py-24 overflow-hidden">
      {/* Animated background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-10 w-64 h-64 bg-primary/15 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/15 rounded-full blur-3xl"
      />

      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mx-auto max-w-6xl"
      >
        {/* Section Header */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-xl px-5 py-2.5 text-xs font-bold text-primary shadow-xl shadow-primary/20 tracking-wide uppercase"
          >
            What We Do
          </motion.div>
        </div>

        {/* Single Service Carousel - Showcasing All Services */}
        <div className="relative">
          {/* Subtle 3D Depth Effect - Premium Grey Layers */}
          <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-zinc-300/20 via-slate-300/20 to-stone-300/20 dark:from-zinc-700/15 dark:via-slate-700/15 dark:to-stone-700/15 blur-2xl" />
          <div className="absolute -inset-1.5 rounded-[2.3rem] bg-gradient-to-br from-zinc-200/30 via-slate-200/30 to-stone-200/30 dark:from-zinc-800/25 dark:via-slate-800/25 dark:to-stone-800/25 blur-xl" />
          
          {/* Main Component */}
          <div className="relative shadow-[0_8px_32px_rgba(0,0,0,0.08),0_0_0_1px_rgba(255,255,255,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.05)] rounded-[2rem]">
            <FeatureCarousel
              title="Comprehensive Digital Solutions"
              description="Worksthal delivers AI workflow automation, modern web development, AI engine optimization (AEO), and data-driven marketing. Each service is designed to generate measurable results and accelerate your business growth."
              image={{
                step1light1: "/ai-card2.png",
                step2light1: "/website preview.png",
                step3light: "/aeo-card.png",
                step4light: "/marketing-card.png",
                alt: "Worksthal AI automation, website development, AEO optimization, and AI marketing services",
              }}
              bgClass="!bg-gradient-to-br !from-[#e8e8eb] !via-[#dddde1] !to-[#d4d4d8] dark:!from-[#3a3a3f] dark:!via-[#2f2f34] dark:!to-[#27272a] !border-zinc-300/60 dark:!border-zinc-700/40"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
