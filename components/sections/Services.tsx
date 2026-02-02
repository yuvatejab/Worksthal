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
      description: "Eliminate repetitive tasks and scale your operations with intelligent automation. We build custom workflows using n8n, Make, and AI APIs that connect your tools, automate data processing, and trigger smart actions—saving your team 20+ hours per week.",
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
      description: "Fast, beautiful, conversion-optimized websites built with modern frameworks. We create responsive sites using Next.js and React that load in under 2 seconds, rank well in search, and turn visitors into customers.",
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
      name: "AI-Optimized Audit and Visibility",
      description: "Get found by both humans and AI. We optimize your content and technical setup so search engines and AI assistants (ChatGPT, Perplexity, Gemini) can understand and recommend your business—driving qualified traffic that converts.",
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
      description: "Data-driven campaigns powered by AI insights. We use advanced analytics and AI tools to create targeted content, optimize ad spend, and identify the strategies that actually grow your revenue—not just vanity metrics.",
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
            Our Services
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Explore our range of services designed to elevate your business with cutting-edge technology and innovative solutions.
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
