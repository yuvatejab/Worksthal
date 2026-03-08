"use client";

import Link from "next/link";
import { ArrowRight, Globe, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { BlogExpandableCards } from "@/components/BlogExpandableCards";
import { CuratedReadsExpandableCards } from "@/components/CuratedReadsExpandableCards";

interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}

interface CuratedRead {
  title: string;
  url: string;
  excerpt: string;
  category: string;
  source: string;
  sourceUrl: string;
  traffic: string;
  authority: string;
  readTime: string;
}

interface BlogPageClientProps {
  blogPosts: BlogPost[];
  curatedReads: CuratedRead[];
  categoryColors: Record<string, string>;
}

export function BlogPageClient({
  blogPosts,
  curatedReads,
  categoryColors,
}: BlogPageClientProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="relative w-full px-4 pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
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
        
        <div className="relative z-10 mx-auto max-w-4xl text-center">
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
            Insights & Resources
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="mb-6 font-serif text-5xl font-bold text-foreground md:text-6xl lg:text-7xl tracking-tight"
          >
            <span className="inline-block">AI Automation &amp;</span>{" "}
            <span className="inline-block">Web Development</span>{" "}
            <span className="inline-block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Insights
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg font-normal"
          >
            Expert insights on AI workflow automation, web development, AI engine optimization, and
            digital marketing, plus curated reads from industry leaders.
          </motion.p>

          {/* Floating stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6"
          >
            {[
              { label: "Articles", value: blogPosts.length },
              { label: "Categories", value: "4" },
              { label: "Curated Reads", value: curatedReads.length },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="rounded-xl border border-white/10 bg-card/50 backdrop-blur-xl px-6 py-3 shadow-lg hover:shadow-xl transition-all"
              >
                <p className="text-2xl font-bold text-primary mb-0.5">{stat.value}</p>
                <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Articles */}
      <section className="w-full px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8 flex items-center justify-between"
          >
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl flex items-center gap-3">
              Our Articles
              <span className="text-xs text-muted-foreground bg-muted/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border/50">
                {blogPosts.length}
              </span>
            </h2>
          </motion.div>

          <BlogExpandableCards posts={blogPosts} categoryColors={categoryColors} />
        </div>
      </section>

      {/* Curated Industry Reads */}
      <section className="w-full px-4 py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-muted/10 to-transparent" />
        
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-10"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md px-4 py-2 text-xs font-medium text-primary shadow-lg shadow-primary/10">
              <Globe className="h-3.5 w-3.5" />
              Curated by Worksthal
            </div>
            <h2 className="mb-3 font-serif text-2xl font-bold text-foreground md:text-3xl">
              Industry Reads We Recommend
            </h2>
            <p className="max-w-3xl text-sm text-muted-foreground leading-relaxed md:text-base">
              Hand-picked articles from authoritative sources in AI automation, web development,
              AEO, and digital marketing.
            </p>
          </motion.div>

          {/* Category Filter Tags */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-8 flex flex-wrap gap-2"
          >
            {["AI Automation", "AEO & SEO", "Web Development", "AI Marketing"].map((cat) => {
              const count = curatedReads.filter((r) => r.category === cat).length;
              return (
                <span
                  key={cat}
                  className={`inline-flex items-center gap-1.5 rounded-full border backdrop-blur-sm px-3 py-1.5 text-[11px] font-medium shadow-sm ${categoryColors[cat]}`}
                >
                  {cat}
                  <span className="rounded-full bg-current/10 px-1.5 py-0.5 text-[9px] opacity-70">
                    {count}
                  </span>
                </span>
              );
            })}
          </motion.div>

          <CuratedReadsExpandableCards reads={curatedReads} categoryColors={categoryColors} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-gradient-to-br from-card/90 via-card/80 to-card/90 backdrop-blur-xl p-10 text-center shadow-2xl shadow-primary/10 relative overflow-hidden md:p-12"
        >
          {/* Glassmorphic overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5 pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mb-8 text-base text-muted-foreground md:text-lg max-w-2xl mx-auto">
              Get in touch to discuss AI automation, web development, or AEO strategies for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary/90 px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-foreground transition-all hover:bg-card hover:shadow-lg"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
