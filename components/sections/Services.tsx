"use client";

import { FeatureCarousel } from "@/components/ui/feature-carousel";
import { motion } from "motion/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Services() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="services" className="relative w-full px-4 py-16 md:py-24">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mx-auto max-w-6xl"
      >
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-300/40 bg-zinc-200/30 dark:border-zinc-400/20 dark:bg-zinc-400/10 px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 backdrop-blur-sm">
            What We Do
          </div>
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
              description="Worksthal delivers AI workflow automation, modern web development, AI engine optimization (AEO), and data-driven marketing — each designed to generate measurable results and accelerate your business growth."
              image={{
                step1light1: "/ai-card2.png",
                step2light1: "/web-card2.png",
                step3light: "/aeo-card.png",
                step4light: "/marketing-card.png",
                alt: "Worksthal Services Showcase",
              }}
              bgClass="!bg-gradient-to-br !from-[#e8e8eb] !via-[#dddde1] !to-[#d4d4d8] dark:!from-[#3a3a3f] dark:!via-[#2f2f34] dark:!to-[#27272a] !border-zinc-300/60 dark:!border-zinc-700/40"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
