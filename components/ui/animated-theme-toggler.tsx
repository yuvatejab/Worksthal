"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "motion/react"

import { cn } from "@/lib/utils"

interface AnimatedThemeTogglerProps extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number
}

export const AnimatedThemeToggler = ({
  className,
  duration = 0.3,
  ...props
}: AnimatedThemeTogglerProps) => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark"
    
    // Check if View Transitions API is supported
    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      // Use View Transitions API for smooth theme transition
      (document as any).startViewTransition(() => {
        setTheme(newTheme)
      })
    } else {
      // Fallback: immediate theme change for unsupported browsers
      setTheme(newTheme)
    }
  }

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <button
        className={cn(
          "relative flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
          className
        )}
        {...props}
        disabled
      >
        <Moon className="h-4 w-4" />
        <span className="sr-only">Toggle theme</span>
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={resolvedTheme}
          initial={{ scale: 0, rotate: -90, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          exit={{ scale: 0, rotate: 90, opacity: 0 }}
          transition={{ 
            duration: duration,
            ease: "easeInOut"
          }}
          className="flex items-center justify-center"
        >
          {resolvedTheme === "dark" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </motion.div>
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
