"use client";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Workflow, Globe, Search, TrendingUp, Zap, Bot, Code } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "motion/react";

// Icon components for tech stack
const TechIcon = ({ children, color = "primary" }: { children: React.ReactNode; color?: string }) => (
  <div className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-${color}/20 bg-card shadow-md backdrop-blur-sm transition-transform hover:scale-110`}>
    {children}
  </div>
);

export function Services() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  const services = [
    {
      name: "AI Workflow Automation",
      description: "Worksthal builds custom AI automation workflows using n8n, Make, and AI APIs. These workflows connect your existing business tools, automate repetitive data processing, and trigger event-driven actions in real time. Our automation solutions eliminate manual tasks, reduce errors, and free up your team to focus on strategic work.",
      icon: Workflow,
      className: "col-span-3 lg:col-span-2",
      background: (
        <div className="absolute inset-0 opacity-30">
          <div className="absolute right-8 top-8 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Bot className="h-8 w-8 text-primary" />
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <div className="flex items-center gap-3">
              <Code className="h-6 w-6 text-secondary" />
              <Workflow className="h-8 w-8 text-secondary" />
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Website Design and Development",
      description: "Worksthal creates fast, responsive, conversion-optimized websites using Next.js, React, and TypeScript. These modern web applications load in under 2 seconds, follow SEO best practices for high search rankings, and are designed to turn visitors into paying customers.",
      icon: Globe,
      className: "col-span-3 lg:col-span-1",
      background: (
        <div className="absolute inset-0 opacity-30">
          <div className="absolute right-4 top-8">
            <Globe className="h-16 w-16 text-primary" />
          </div>
        </div>
      ),
    },
    {
      name: "AI-Optimized Audit and Visibility (AEO)",
      description: "Worksthal optimizes your content and technical infrastructure so search engines and AI assistants (ChatGPT, Perplexity, Google AI Overviews) can understand and recommend your business. Services include structured data implementation, semantic content optimization, and AI crawler configuration — driving qualified traffic that converts.",
      icon: Search,
      className: "col-span-3 lg:col-span-1",
      background: (
        <div className="absolute inset-0 opacity-30">
          <div className="absolute right-4 top-8">
            <Search className="h-16 w-16 text-accent" />
          </div>
        </div>
      ),
    },
    {
      name: "AI-Driven Marketing",
      description: "Worksthal delivers data-driven marketing campaigns powered by AI analytics. Using tools like Google Analytics, Search Console, Ahrefs, and Semrush, Worksthal creates targeted content strategies, optimizes ad spend for maximum ROI, and identifies the growth levers that actually increase your revenue — not just vanity metrics.",
      icon: TrendingUp,
      className: "col-span-3 lg:col-span-2",
      background: (
        <div className="absolute inset-0 opacity-30">
          <div className="absolute right-8 top-8">
            <TrendingUp className="h-16 w-16 text-success" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="services" className="relative w-full px-4 py-20 md:py-32">
      {/* Background Pattern - Subtle but Visible */}
      <div className="absolute inset-0 z-0">
        <FlickeringGrid
          className="absolute inset-0"
          squareSize={4}
          gridGap={6}
          color="rgb(161, 161, 170)"
          maxOpacity={0.08}
          flickerChance={0.04}
        />
      </div>

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
            What We Do
          </div>
          <h2 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            AI Automation &amp; Web Development Services
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Worksthal delivers four core services — AI workflow automation, modern web development, AI engine optimization (AEO), and data-driven marketing — each designed to generate measurable results and accelerate your business growth.
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGrid className="mx-auto max-w-7xl">
          {services.map((service, idx) => (
            <BentoCard
              key={idx}
              name={service.name}
              className={service.className}
              background={service.background}
              Icon={service.icon}
              description={service.description}
              href="#contact"
              cta="Learn More"
            />
          ))}
        </BentoGrid>
      </motion.div>
    </section>
  );
}
