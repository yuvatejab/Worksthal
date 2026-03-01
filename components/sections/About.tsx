"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { trackVideoPlay, trackVideoComplete, trackCTAClick } from "@/lib/analytics";

export function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isHoveringRef = useRef(false);

  const playVideo = useCallback(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            trackVideoPlay("Worksthal Demo Video");
          })
          .catch((error) => {
            console.log("Video play failed:", error);
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const pauseVideo = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    isHoveringRef.current = true;
    setIsExpanded(true);
    setTimeout(() => {
      playVideo();
    }, 100);
  }, [playVideo]);

  const handleMouseLeave = useCallback(() => {
    isHoveringRef.current = false;
    setTimeout(() => {
      if (!isHoveringRef.current) {
        setIsExpanded(false);
        pauseVideo();
      }
    }, 300);
  }, [pauseVideo]);

  const handleBackdropClick = useCallback(() => {
    isHoveringRef.current = false;
    setIsExpanded(false);
    pauseVideo();
  }, [pauseVideo]);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  }, [isMuted]);

  useEffect(() => {
    if (isExpanded) {
      const timer = setTimeout(() => {
        playVideo();
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isExpanded, playVideo]);

  return (
    <>
      {/* Backdrop and Expanded Video - Rendered at root level */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/90 z-[9997]"
              style={{ 
                backdropFilter: "blur(8px)",
              }}
              onClick={handleBackdropClick}
              onMouseEnter={() => {
                isHoveringRef.current = true;
              }}
            />
            
            {/* Expanded Video Container */}
            <motion.div
              ref={containerRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              initial={{ 
                opacity: 0,
                scale: 0.8,
              }}
              animate={{ 
                opacity: 1,
                scale: 1,
              }}
              exit={{ 
                opacity: 0,
                scale: 0.8,
              }}
              transition={{
                duration: 0.4,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9998]"
              style={{
                width: "90vw",
                height: "90vh",
                maxWidth: "1600px",
                maxHeight: "900px",
              }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 bg-black h-full w-full">
                <video
                  ref={videoRef}
                  className="w-full h-full object-contain"
                  loop
                  muted={isMuted}
                  playsInline
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onPlaying={() => setIsPlaying(true)}
                >
                  <source src="/home page video.mp4" type="video/mp4" />
                </video>

                {/* Play Overlay (when not playing) */}
                <AnimatePresence>
                  {!isPlaying && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none"
                    >
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/90 shadow-xl">
                        <svg
                          className="h-12 w-12 text-black ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Video Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="flex items-center justify-between">
                    {/* Volume Control */}
                    <motion.button
                      onClick={toggleMute}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                      aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-6 h-6 text-white" />
                      ) : (
                        <Volume2 className="w-6 h-6 text-white" />
                      )}
                    </motion.button>

                    {/* Close hint */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-white/80 text-sm"
                    >
                      <p>Click outside to close</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <section id="about" className="relative w-full px-4 py-20 md:py-32">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Section Header */}
          <BlurFade delay={0} inView>
            <div className="mb-16 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
                About Worksthal
              </div>
              <h2 className="text-h1 font-serif font-bold">
                Digital Agency Built for Growing Businesses
              </h2>
            </div>
          </BlurFade>

          {/* Video Showcase Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Video Player */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full"
            >
              {/* Compact Video Container */}
              {!isExpanded && (
                <motion.div
                  onMouseEnter={handleMouseEnter}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative w-full cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10 bg-black aspect-video">
                    <video
                      className="w-full h-full object-cover"
                      loop
                      muted
                      playsInline
                      preload="none"
                      poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E"
                    >
                      <source src="/home page video.mp4" type="video/mp4" />
                    </video>

                    {/* Play Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-xl">
                        <svg
                          className="h-10 w-10 text-black ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Hover Hint */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="text-sm font-medium">Hover to expand and play</p>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-center lg:text-left"
                  >
                    <p className="text-sm text-muted-foreground italic">
                      Hover to expand • Plays automatically
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300 bg-clip-text text-transparent">
                  Most businesses struggle with the same problem
                </span>
              </h2>
              
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  They know they need modern technology. They know AI and automation could save 
                  time and reduce costs. But they don't know where to start, who to trust, or how to 
                  avoid wasting money on solutions that don't deliver.
                </p>
                
                <p className="text-lg leading-relaxed text-foreground font-semibold">
                  Worksthal exists to solve this problem.
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    trackCTAClick("See how we help", "Video Showcase Section");
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group relative overflow-hidden rounded-xl bg-foreground px-6 py-3 text-base font-semibold text-background transition-all hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    See how we help
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
