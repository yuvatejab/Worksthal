"use client";

import React, { useState } from "react";
import {
  Clock,
  ExternalLink,
  Users,
  Globe,
  BookOpen,
  Award,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Shield,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { Button } from "@/components/ui/button";

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

interface CuratedReadsExpandableCardsProps {
  reads: CuratedRead[];
  categoryColors: Record<string, string>;
}

export function CuratedReadsExpandableCards({
  reads,
  categoryColors,
}: CuratedReadsExpandableCardsProps) {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <div className="space-y-4 max-w-6xl mx-auto">
      {reads.map((read, index) => {
        const isExpanded = expandedCard === index;
        
        return (
          <motion.article
            key={index}
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
                      categoryColors[read.category] ||
                      "bg-primary/10 text-primary border-primary/30"
                    }`}
                  >
                    {read.category}
                  </span>
                  <a
                    href={read.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="opacity-60 hover:opacity-100 transition-opacity"
                  >
                    <ExternalLink className="h-3.5 w-3.5 text-primary" />
                  </a>
                </div>

                {/* Title */}
                <h3 className={`font-sans font-bold text-foreground leading-tight mb-3 transition-all duration-300 tracking-tight ${
                  isExpanded ? "text-xl" : "text-sm line-clamp-2"
                }`}>
                  {read.title}
                </h3>

                {/* Decorative Divider */}
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary via-primary/50 to-transparent mb-4 shadow-sm shadow-primary/20" />

                {/* Source Info */}
                <a
                  href={read.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-muted-foreground hover:text-primary transition-colors w-fit mb-5"
                >
                  <Globe className="h-3 w-3" />
                  <span>{read.source}</span>
                </a>

                {/* Toggle Button - Always Visible */}
                <Button
                  variant="ghost"
                  size="sm"
                  className={`w-full justify-between h-9 text-[11px] font-bold tracking-wider uppercase transition-all ${
                    isExpanded
                      ? "bg-muted/50 text-foreground hover:bg-muted"
                      : "text-primary hover:bg-primary/10"
                  }`}
                  onClick={() => setExpandedCard(isExpanded ? null : index)}
                >
                  {isExpanded ? "Collapse" : "View Details"}
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
                        About This Article
                      </h4>
                      <p className="text-xs leading-relaxed text-muted-foreground font-normal">
                        {read.excerpt}
                      </p>
                    </div>

                    {/* Authority Metrics */}
                    <div className="rounded-xl border border-border/50 bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm p-4 shadow-sm space-y-3">
                      <h4 className="text-[10px] font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                        <Shield className="h-3 w-3 text-primary" />
                        Source Authority
                      </h4>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="text-center">
                          <div className="rounded-full bg-primary/10 p-2 mx-auto mb-1.5 w-fit">
                            <Users className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-[9px] font-bold text-foreground uppercase tracking-wide">Traffic</p>
                          <p className="text-[10px] text-muted-foreground font-medium mt-0.5 leading-tight">{read.traffic.split(" ")[0]}</p>
                        </div>
                        <div className="text-center">
                          <div className="rounded-full bg-primary/10 p-2 mx-auto mb-1.5 w-fit">
                            <Award className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-[9px] font-bold text-foreground uppercase tracking-wide">Authority</p>
                          <p className="text-[10px] text-muted-foreground font-medium mt-0.5 leading-tight">High</p>
                        </div>
                        <div className="text-center">
                          <div className="rounded-full bg-primary/10 p-2 mx-auto mb-1.5 w-fit">
                            <Clock className="h-3 w-3 text-primary" />
                          </div>
                          <p className="text-[9px] font-bold text-foreground uppercase tracking-wide">Length</p>
                          <p className="text-[10px] text-muted-foreground font-medium mt-0.5 leading-tight">{read.readTime.split(" ")[0]} min</p>
                        </div>
                      </div>
                    </div>

                    {/* External Link Button */}
                    <a
                      href={read.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Button className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-primary-foreground text-xs font-bold h-10 shadow-lg shadow-primary/25 tracking-wider uppercase">
                        <BookOpen className="h-3.5 w-3.5 mr-2" />
                        Read on {read.source.split(" ")[0]}
                        <ExternalLink className="h-3.5 w-3.5 ml-2" />
                      </Button>
                    </a>
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
