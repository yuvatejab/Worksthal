"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  BookOpen,
  Tag,
  User,
  ChevronRight,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { Button } from "@/components/ui/button";

interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}

interface BlogExpandableCardsProps {
  posts: BlogPost[];
  categoryColors: Record<string, string>;
}

export function BlogExpandableCards({
  posts,
  categoryColors,
}: BlogExpandableCardsProps) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <div className="space-y-4 max-w-6xl mx-auto">
      {posts.map((post, index) => {
        const isExpanded = expandedCard === post.slug;
        
        return (
          <motion.article
            key={post.slug}
            layout
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              delay: index * 0.08, 
              duration: 0.5,
              layout: { duration: 0.6, ease: [0.32, 0.72, 0, 1] }
            }}
            className={`group relative rounded-2xl border border-white/10 backdrop-blur-xl transition-all duration-500 overflow-hidden ${
              isExpanded 
                ? "bg-gradient-to-br from-card/95 via-card/90 to-card/95 shadow-2xl shadow-primary/20" 
                : "bg-gradient-to-br from-card/80 via-card/70 to-card/80 hover:shadow-xl hover:shadow-primary/10"
            }`}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Glassmorphic overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5 pointer-events-none" />
            
            {/* Floating glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
              isExpanded ? "opacity-100" : ""
            }`} />

            <div className={`relative p-6 flex ${isExpanded ? "flex-col md:flex-row gap-8" : "flex-row items-center"}`}>
              {/* Left Section - Always Visible */}
              <div className={`flex flex-col ${isExpanded ? "md:w-1/3" : "flex-1"}`}>
                {/* Header Row */}
                <div className="flex items-start justify-between mb-4">
                  <span
                    className={`inline-flex items-center rounded-full border backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase shadow-sm ${
                      categoryColors[post.category] ||
                      "bg-primary/10 text-primary border-primary/30"
                    }`}
                  >
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-semibold">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className={`font-sans font-bold text-foreground leading-tight mb-3 transition-all duration-300 tracking-tight ${
                  isExpanded ? "text-xl" : "text-sm line-clamp-2"
                }`}>
                  {post.title}
                </h3>

                {/* Decorative Divider */}
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary via-primary/50 to-transparent mb-4 shadow-sm shadow-primary/20" />

                {/* Meta Info */}
                <div className="flex items-center gap-2.5 text-[10px] text-muted-foreground mb-5 font-semibold">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: isExpanded ? "numeric" : undefined,
                      })}
                    </time>
                  </div>
                  <span className="text-muted-foreground/40">•</span>
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {post.author}
                  </span>
                </div>

                {/* Toggle Button - Always Visible */}
                <Button
                  variant="ghost"
                  size="sm"
                  className={`w-full justify-between h-9 text-[11px] font-bold tracking-wider uppercase transition-all ${
                    isExpanded
                      ? "bg-muted/50 text-foreground hover:bg-muted"
                      : "text-primary hover:bg-primary/10"
                  }`}
                  onClick={() => setExpandedCard(isExpanded ? null : post.slug)}
                >
                  {isExpanded ? "Collapse" : "Expand"}
                  <ChevronRight className={`h-3.5 w-3.5 transition-transform duration-300 ${
                    isExpanded ? "rotate-90" : ""
                  }`} />
                </Button>
              </div>

              {/* Right Section - Expanded Content */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: {
                        duration: 0.5,
                        ease: [0.32, 0.72, 0, 1],
                        delay: 0.2
                      }
                    }}
                    exit={{ 
                      opacity: 0, 
                      x: -30,
                      transition: {
                        duration: 0.3
                      }
                    }}
                    className="flex-1 space-y-5"
                  >
                    {/* Excerpt */}
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="h-3 w-3 text-primary" />
                        Overview
                      </h4>
                      <p className="text-xs leading-relaxed text-muted-foreground font-normal">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm p-3.5 shadow-sm">
                      <div className="rounded-full bg-primary/10 p-2">
                        <User className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-foreground">
                          {post.author}
                        </span>
                        <span className="text-[10px] text-muted-foreground font-medium">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    </div>

                    {/* Key Topics */}
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-foreground uppercase tracking-wider">
                        <Tag className="h-3 w-3 text-primary" />
                        <span>Topics Covered</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {getKeyTopics(post.category).map((topic, idx) => (
                          <span
                            key={idx}
                            className="rounded-lg bg-gradient-to-br from-primary/15 to-primary/5 px-2.5 py-1 text-[10px] font-semibold text-primary border border-primary/20 backdrop-blur-sm shadow-sm"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm p-3 text-center">
                        <TrendingUp className="h-4 w-4 text-primary mx-auto mb-1" />
                        <p className="text-[10px] font-bold text-foreground">In-Depth</p>
                        <p className="text-[9px] text-muted-foreground font-medium">Analysis</p>
                      </div>
                      <div className="rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm p-3 text-center">
                        <Sparkles className="h-4 w-4 text-primary mx-auto mb-1" />
                        <p className="text-[10px] font-bold text-foreground">Expert</p>
                        <p className="text-[9px] text-muted-foreground font-medium">Insights</p>
                      </div>
                      <div className="rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm p-3 text-center">
                        <BookOpen className="h-4 w-4 text-primary mx-auto mb-1" />
                        <p className="text-[10px] font-bold text-foreground">Practical</p>
                        <p className="text-[9px] text-muted-foreground font-medium">Guide</p>
                      </div>
                    </div>

                    {/* Full Article Button */}
                    <Link href={`/blog/${post.slug}`} className="block">
                      <Button className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-primary-foreground text-xs font-bold h-10 shadow-lg shadow-primary/25 tracking-wider uppercase">
                        <BookOpen className="h-3.5 w-3.5 mr-2" />
                        Read Full Article
                        <ChevronRight className="h-3.5 w-3.5 ml-2" />
                      </Button>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}

function getKeyTopics(category: string): string[] {
  const topicMap: Record<string, string[]> = {
    "AI Automation": [
      "Workflow Automation",
      "n8n & Make",
      "AI Integration",
      "Process Optimization",
    ],
    AEO: [
      "AI Engine Optimization",
      "Structured Data",
      "AI Citations",
      "Search Visibility",
    ],
    "Web Development": [
      "Next.js",
      "React",
      "Performance",
      "Modern Web",
    ],
    "AI Marketing": [
      "Digital Marketing",
      "AI Strategy",
      "Content Optimization",
      "Growth",
    ],
  };

  return topicMap[category] || ["Strategy", "Best Practices", "Implementation"];
}
