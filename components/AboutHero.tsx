"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 overflow-hidden">
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
      
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-xl px-5 py-2.5 text-xs font-bold text-primary shadow-xl shadow-primary/20 tracking-wide uppercase"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4" />
            </motion.div>
            About Worksthal
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="mb-6 font-serif text-5xl font-bold text-foreground md:text-6xl lg:text-7xl max-w-5xl mx-auto leading-tight tracking-tight"
          >
            <span className="inline-block">About Worksthal: AI Automation &amp;</span>{" "}
            <span className="inline-block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Web Development Studio
            </span>
          </motion.h1>

          {/* Floating stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6"
          >
            {[
              { label: "Projects Delivered", value: "50+" },
              { label: "Client Satisfaction", value: "98%" },
              { label: "Years Experience", value: "2+" },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="rounded-xl border border-white/10 bg-card/50 backdrop-blur-xl px-6 py-3 shadow-lg hover:shadow-xl transition-all"
              >
                <p className="text-2xl font-bold text-primary mb-0.5">{stat.value}</p>
                <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
