"use client";

import { LightRays } from "@/components/ui/light-rays";
import { ShinyButton } from "@/components/ui/shiny-button";
import { RippleButton } from "@/components/ui/ripple-button";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-20">
      {/* Background with Light Rays */}
      <div className="absolute inset-0 z-0">
        <LightRays 
          count={10}
          color="rgba(212, 212, 216, 0.15)"
          blur={80}
          speed={18}
          length="100vh"
        />
      </div>

      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          AI-Powered Digital Agency — Hyderabad, India
        </div>

        {/* Main Heading — keywords front-loaded for SEO */}
        <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
          AI Workflow Automation &amp;{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Web Development Agency
          </span>
        </h1>

        {/* Subheading — AEO-optimized with semantic triples */}
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Worksthal builds custom AI automation workflows, modern websites, and AEO strategies
          that deliver measurable ROI within 90 days. Our automation solutions save clients
          20+ hours per week on repetitive tasks.
        </p>

        {/* CTA Buttons */}
        <div className="mt-4 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-6">
          <ShinyButton
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full px-6 py-3 text-base font-semibold sm:w-auto sm:px-8"
          >
            Get a Free Consultation
          </ShinyButton>
          
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full rounded-lg border border-primary/30 bg-transparent px-6 py-3 text-base font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-primary/5 sm:w-auto sm:px-8"
            aria-label="View Worksthal services including AI automation and web development"
          >
            View Our Services
          </button>
        </div>

        {/* Social Proof */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground md:gap-8">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-primary to-secondary" />
              <div className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-secondary to-accent" />
              <div className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-accent to-primary" />
            </div>
            <span className="font-medium">50+ Projects Delivered</span>
          </div>
          <div className="hidden h-4 w-px bg-border sm:block" />
          <div className="font-medium">
            <span className="text-primary">98%</span> Client Satisfaction
          </div>
          <div className="hidden h-4 w-px bg-border sm:block" />
          <div className="font-medium">
            <span className="text-primary">20hrs+</span> Saved Weekly per Client
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
