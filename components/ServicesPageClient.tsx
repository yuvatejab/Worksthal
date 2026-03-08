"use client";

import { motion } from "motion/react";
import { Workflow, Globe, Search, TrendingUp, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const services = [
  {
    name: "AI Workflow Automation",
    slug: "ai-automation",
    icon: Workflow,
    description:
      "Custom AI automation workflows using n8n, Make, and AI APIs that connect your business tools and eliminate manual work.",
    benefits: [
      "Eliminate manual data entry",
      "Connect CRMs, databases, and APIs",
      "Reduce processing errors",
      "Focus on strategic work",
    ],
    technologies: ["n8n", "Make", "Zapier", "OpenAI", "Claude"],
    useCases: [
      "Lead qualification",
      "Invoice processing",
      "Content scheduling",
      "Support automation",
    ],
  },
  {
    name: "Website Development",
    slug: "web-development",
    icon: Globe,
    description:
      "Fast, responsive websites using Next.js, React, and TypeScript. Built for conversions and optimized for search rankings.",
    benefits: [
      "Lightning-fast page loads",
      "Mobile-responsive design",
      "SEO-optimized architecture",
      "Conversion-focused UI",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind", "Node.js"],
    useCases: [
      "Corporate websites",
      "E-commerce platforms",
      "SaaS applications",
      "Custom dashboards",
    ],
  },
  {
    name: "AI Engine Optimization",
    slug: "aeo",
    icon: Search,
    description:
      "Optimize your content so AI assistants like ChatGPT and Perplexity can find and recommend your business.",
    benefits: [
      "AI-powered search visibility",
      "Get cited by ChatGPT",
      "Structured data implementation",
      "Build topical authority",
    ],
    technologies: [
      "Schema.org",
      "Semantic HTML",
      "AI crawlers",
      "Content clusters",
    ],
    useCases: [
      "FAQ schema setup",
      "Organization schema",
      "Content optimization",
      "Technical SEO",
    ],
  },
  {
    name: "AI-Driven Marketing",
    slug: "ai-marketing",
    icon: TrendingUp,
    description:
      "Data-driven marketing campaigns powered by AI analytics. Optimize ad spend and identify growth levers that increase revenue.",
    benefits: [
      "Data-driven decisions",
      "Targeted content strategies",
      "Ad spend optimization",
      "Performance tracking",
    ],
    technologies: [
      "Analytics 4",
      "Search Console",
      "Ahrefs",
      "Semrush",
    ],
    useCases: [
      "SEO strategy",
      "Paid advertising",
      "CRO optimization",
      "Competitor analysis",
    ],
  },
];

export function ServicesPageClient() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full px-4 pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        {/* Subtle background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>

        {/* Subtle floating orbs */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 right-10 w-[32rem] h-[32rem] bg-secondary/10 rounded-full blur-3xl"
        />
        
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          {/* Compact Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm px-4 py-1.5 text-[10px] font-semibold text-primary tracking-wider uppercase"
          >
            <Sparkles className="h-3 w-3" />
            Our Services
          </motion.div>

          {/* Compact Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl tracking-tight"
          >
            AI Automation, Web Development,{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              AEO &amp; Marketing
            </span>
          </motion.h1>

          {/* Compact Description */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground"
          >
            Four core services designed to automate operations, enhance digital presence, and accelerate growth through practical AI implementation.
          </motion.p>
        </div>
      </section>

      {/* Services Grid - Compact & Sophisticated */}
      <section className="w-full px-4 py-12">
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Subtle 3D shadow layers */}
                <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                     style={{ transform: "translateZ(-1px)" }} />
                <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                     style={{ transform: "translateZ(-2px)" }} />

                {/* Main Card */}
                <Link
                  href={`/services/${service.slug}`}
                  className="relative block rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:border-border group-hover:shadow-xl"
                  style={{ transform: "translateZ(0)" }}
                >
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                            {service.name}
                          </h3>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Compact Info Grid */}
                    <div className="space-y-4">
                      {/* Benefits - Compact */}
                      <div>
                        <h4 className="text-[10px] font-semibold text-foreground/60 uppercase tracking-wider mb-2">
                          Key Benefits
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {service.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-1.5">
                              <div className="mt-1 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                              <span className="text-[11px] text-muted-foreground leading-tight">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies - Compact Pills */}
                      <div>
                        <h4 className="text-[10px] font-semibold text-foreground/60 uppercase tracking-wider mb-2">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {service.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="rounded-md bg-primary/5 px-2 py-0.5 text-[10px] font-medium text-primary border border-primary/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Use Cases - Compact */}
                      <div>
                        <h4 className="text-[10px] font-semibold text-foreground/60 uppercase tracking-wider mb-2">
                          Common Use Cases
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {service.useCases.map((useCase, idx) => (
                            <div key={idx} className="flex items-center gap-1.5">
                              <div className="h-1 w-1 rounded-full bg-muted-foreground/40 flex-shrink-0" />
                              <span className="text-[11px] text-muted-foreground">{useCase}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Audit Services - Compact */}
      <section className="w-full px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center font-serif text-2xl font-bold text-foreground"
          >
            Audit &amp; Analysis{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Services
            </span>
          </motion.h2>
          
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "SEO Audit",
                description: "Technical SEO analysis, on-page optimization review, and actionable recommendations.",
                href: "/services/seo-audit",
              },
              {
                title: "AEO Audit",
                description: "Check if AI assistants can find and cite your business. Structured data and content extractability audit.",
                href: "/services/aeo-audit",
              },
            ].map((audit, idx) => (
              <motion.div
                key={audit.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.3 }
                }}
                className="group"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Link
                  href={audit.href}
                  className="relative block rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 transition-all hover:border-border hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  
                  <div className="relative flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="mb-2 font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {audit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {audit.description}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 flex-shrink-0 ml-4" />
                  </div>
                  <div className="mt-4 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Compact */}
      <section className="w-full px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <div className="relative rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm p-8 text-center overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
            
            <div className="relative">
              <h2 className="mb-3 font-serif text-2xl font-bold text-foreground md:text-3xl">
                Ready to Transform{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Your Business?
                </span>
              </h2>
              <p className="mb-6 text-sm text-muted-foreground max-w-2xl mx-auto">
                Get a free consultation to discuss your project and discover how Worksthal can help automate operations and accelerate growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
                >
                  Get a Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background/50 px-6 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-card"
                >
                  About Worksthal
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
