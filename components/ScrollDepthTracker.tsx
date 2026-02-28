"use client"

import { useEffect, useRef } from "react"
import { trackScrollDepth } from "@/lib/analytics"

/**
 * ScrollDepthTracker Component
 * Tracks user scroll depth and sends analytics events at 25%, 50%, 75%, and 100%
 */
export function ScrollDepthTracker() {
  const trackedDepths = useRef<Set<number>>(new Set())

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const scrollPercentage = Math.round(
        (scrollTop / (documentHeight - windowHeight)) * 100
      )

      // Track at 25%, 50%, 75%, and 100%
      const milestones = [25, 50, 75, 100]
      
      milestones.forEach((milestone) => {
        if (
          scrollPercentage >= milestone &&
          !trackedDepths.current.has(milestone)
        ) {
          trackedDepths.current.add(milestone)
          trackScrollDepth(milestone)
        }
      })
    }

    // Throttle scroll events
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    
    return () => {
      window.removeEventListener("scroll", throttledScroll)
    }
  }, [])

  return null // This component doesn't render anything
}
