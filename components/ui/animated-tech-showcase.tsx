"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "motion/react"
import { 
  SiNextdotjs, 
  SiReact, 
  SiTailwindcss, 
  SiOpenai,
  SiTypescript,
  SiNodedotjs
} from "react-icons/si"

interface TechIcon {
  icon: React.ComponentType<{ className?: string }>
  label: string
  bgColor: string
  iconColor: string
  offsetX: number
  offsetY: number
}

const techIcons: TechIcon[] = [
  { icon: SiNextdotjs, label: "Next.js", bgColor: "#1a1a1a", iconColor: "#FFFFFF", offsetX: -220, offsetY: -180 },
  { icon: SiReact, label: "React", bgColor: "#1a1a1a", iconColor: "#61DAFB", offsetX: 220, offsetY: -180 },
  { icon: SiTailwindcss, label: "Tailwind CSS", bgColor: "#1a1a1a", iconColor: "#06B6D4", offsetX: -280, offsetY: 0 },
  { icon: SiOpenai, label: "OpenAI", bgColor: "#1a1a1a", iconColor: "#10A37F", offsetX: 280, offsetY: 0 },
  { icon: SiTypescript, label: "TypeScript", bgColor: "#1a1a1a", iconColor: "#3178C6", offsetX: -220, offsetY: 180 },
  { icon: SiNodedotjs, label: "Node.js", bgColor: "#1a1a1a", iconColor: "#339933", offsetX: 220, offsetY: 180 },
]

type AnimationPhase = "initial" | "compact" | "expanded" | "final"

export function AnimatedTechShowcase() {
  const [phase, setPhase] = useState<AnimationPhase>("initial")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    // Start animation when in view
    setPhase("compact")
    
    // Phase 1: Start compact (0-2s)
    const timer1 = setTimeout(() => {
      setPhase("expanded")
    }, 1500)

    // Phase 2: Expand (2-4s)
    const timer2 = setTimeout(() => {
      setPhase("final")
    }, 3000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [isInView])

  // Calculate positions for each phase
  const getIconPosition = (index: number, total: number, icon: TechIcon) => {
    const angle = (index / total) * Math.PI * 2 - Math.PI / 2

    switch (phase) {
      case "initial":
        return {
          x: 0,
          y: 0,
          scale: 0,
          opacity: 0,
        }
      case "compact":
        // Tight circle
        return {
          x: Math.cos(angle) * 100,
          y: Math.sin(angle) * 100,
          scale: 1,
          opacity: 1,
        }
      case "expanded":
        // Wider circle
        return {
          x: Math.cos(angle) * 180,
          y: Math.sin(angle) * 180,
          scale: 1,
          opacity: 1,
        }
      case "final":
        // Spread to custom positions (avoiding center text)
        return {
          x: icon.offsetX,
          y: icon.offsetY,
          scale: 0.95,
          opacity: 1,
        }
    }
  }

  return (
    <div ref={ref} className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-700">
      {/* Center Content */}
      <AnimatePresence mode="wait">
        {phase === "final" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.6,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="absolute z-20 text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-600 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300 bg-clip-text text-transparent">
                Technology Stack
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
                Powering Worksthal Solutions
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-semibold text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              Explore Technologies
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Orbiting Tech Icons */}
      <div className="absolute inset-0 flex items-center justify-center">
        {techIcons.map((tech, index) => {
          const position = getIconPosition(index, techIcons.length, tech)
          const Icon = tech.icon

          return (
            <motion.div
              key={tech.label}
              className="absolute"
              initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
              animate={{
                x: position.x,
                y: position.y,
                scale: position.scale,
                opacity: position.opacity,
              }}
              transition={{
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1],
                delay: index * 0.1,
              }}
            >
              <motion.div
                className="relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-2xl overflow-hidden p-5"
                style={{
                  backgroundColor: tech.bgColor,
                  color: tech.iconColor,
                }}
                whileHover={{ scale: 1.15, rotate: 360 }}
                animate={
                  phase === "final"
                    ? {
                        y: [0, -10, 0],
                      }
                    : {
                        rotate: phase === "compact" ? 0 : phase === "expanded" ? 5 : 0,
                      }
                }
                transition={
                  phase === "final"
                    ? {
                        y: {
                          duration: 3 + index * 0.3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }
                    : {
                        rotate: {
                          duration: 1.5,
                          ease: "easeInOut",
                        },
                      }
                }
              >
                <Icon className="w-full h-full" />
              </motion.div>

              {/* Icon Label - Only show in final phase */}
              <AnimatePresence>
                {phase === "final" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-zinc-600 dark:text-zinc-400"
                  >
                    {tech.label}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      {/* Background Glow Effect */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "final" ? 0.5 : 0.3 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
      </motion.div>
    </div>
  )
}
