"use client";

import { DotPattern } from "@/components/ui/dot-pattern";
import { AnimatedTechShowcase } from "@/components/ui/animated-tech-showcase";
import ServicesBento3D from "@/components/ui/services-bento-3d";
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

        {/* Services Bento Grid with 3D Elements */}
        <div className="mt-16">
          <ServicesBento3D />
        </div>
      </div>
    </section>
  );
}
