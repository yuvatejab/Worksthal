"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  useMotionValue,
} from "framer-motion"

import { cn } from "@/lib/utils"

function isTouchDevice(): boolean {
  if (typeof window === "undefined") return true
  return (
    window.matchMedia("(pointer: coarse)").matches ||
    window.matchMedia("(hover: none)").matches ||
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0
  )
}

/**
 * A custom pointer component that displays an animated cursor.
 * Completely disabled on touch/mobile devices.
 */
export function Pointer({
  className,
  style,
  children,
  ...props
}: HTMLMotionProps<"div">): React.ReactNode {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const [isActive, setIsActive] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const touchDetectedRef = useRef(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    if (isTouchDevice()) {
      setIsMobile(true)
      setIsActive(false)
      return
    }

    setIsMobile(false)
    document.documentElement.style.cursor = "none"

    const handleTouchStart = () => {
      touchDetectedRef.current = true
      setIsActive(false)
      setIsMobile(true)
      document.documentElement.style.cursor = ""
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (touchDetectedRef.current) return
      x.set(e.clientX)
      y.set(e.clientY)
      if (!isActive) setIsActive(true)
    }

    const handleMouseLeave = () => {
      setIsActive(false)
    }

    const handleMouseEnter = (e: MouseEvent) => {
      if (touchDetectedRef.current) return
      x.set(e.clientX)
      y.set(e.clientY)
      setIsActive(true)
    }

    document.addEventListener("touchstart", handleTouchStart, { once: true, passive: true })
    document.addEventListener("mousemove", handleMouseMove, true)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      document.documentElement.style.cursor = ""
      document.removeEventListener("touchstart", handleTouchStart)
      document.removeEventListener("mousemove", handleMouseMove, true)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [x, y, isActive])

  if (isMobile) return null

  return (
    <>
      <div ref={containerRef} className="hidden" />
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="pointer-events-none fixed z-[999999] transform-[translate(-50%,-50%)]"
            style={{
              top: y,
              left: x,
              ...style,
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0,
              opacity: 0,
            }}
            {...props}
          >
            {children || (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="1"
                viewBox="0 0 16 16"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                className={cn(
                  "rotate-[-70deg] stroke-white text-black",
                  className
                )}
              >
                <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
              </svg>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
