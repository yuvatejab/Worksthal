"use client";

import { motion } from "motion/react";
import { Sparkles, ArrowRight, Workflow, Globe, Search, TrendingUp } from "lucide-react";
import Link from "next/link";

interface ServiceHeroProps {
  iconName: "workflow" | "globe" | "search" | "trending-up";
  badge: string;
  title: string;
  gradientText: string;
  description: string;
}

const iconMap = {
  "workflow": Workflow,
  "globe": Globe,
  "search": Search,
  "trending-up": TrendingUp,
};

export function ServiceHero({ iconName, badge, title, gradientText, description }: ServiceHeroProps) {
  const Icon = iconMap[iconName];
  return (
    <section className="relative w-full px-4 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Animated background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [-20, 20, -20],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
      />
      
      <div className="relative z-10 mx-auto max-w-4xl">
        <Link
          href="/services"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to Services
        </Link>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-xl px-5 py-2.5 text-xs font-bold text-primary shadow-xl shadow-primary/20 tracking-wide uppercase"
        >
          <Icon className="h-4 w-4" />
          {badge}
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          className="mb-6 font-serif text-5xl font-bold text-foreground md:text-6xl lg:text-7xl tracking-tight"
        >
          {title}{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {gradientText}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          {description}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            Get a Free Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
