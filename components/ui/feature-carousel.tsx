"use client"

import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react"
import Image, { type StaticImageData } from "next/image"
import clsx from "clsx"
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  type MotionStyle,
  type MotionValue,
  type Variants,
} from "motion/react"
import Balancer from "react-wrap-balancer"

import { cn } from "@/lib/utils"

// Types
type WrapperStyle = MotionStyle & {
  "--x": MotionValue<string>
  "--y": MotionValue<string>
}

interface CardProps {
  title: string
  description: string
  bgClass?: string
}

interface ImageSet {
  step1dark1?: StaticImageData | string
  step1dark2?: StaticImageData | string
  step1light1: StaticImageData | string
  step1light2?: StaticImageData | string
  step2dark1?: StaticImageData | string
  step2dark2?: StaticImageData | string
  step2light1: StaticImageData | string
  step2light2?: StaticImageData | string
  step3dark?: StaticImageData | string
  step3light: StaticImageData | string
  step4light: StaticImageData | string
  alt: string
}

interface FeatureCarouselProps extends CardProps {
  step1img1Class?: string
  step1img2Class?: string
  step2img1Class?: string
  step2img2Class?: string
  step3imgClass?: string
  step4imgClass?: string
  image: ImageSet
}

interface StepImageProps {
  src: StaticImageData | string
  alt: string
  className?: string
  style?: React.CSSProperties
  width?: number
  height?: number
}

interface Step {
  id: string
  name: string
  title: string
  description: string
}

// Constants
const TOTAL_STEPS = 4

const steps = [
  {
    id: "1",
    name: "Step 1",
    title: "AI Automations",
    description: "Intelligent workflow automation that adapts, learns, and scales with your business operations.",
  },
  {
    id: "2",
    name: "Step 2",
    title: "Website Development",
    description: "Modern, high-performance web applications built with cutting-edge technologies and best practices.",
  },
  {
    id: "3",
    name: "Step 3",
    title: "SEO/AEO Audits and Visibility",
    description: "Comprehensive search engine and AI engine optimization to maximize your organic reach and visibility.",
  },
  {
    id: "4",
    name: "Step 4",
    title: "AI Marketing",
    description: "Data-driven marketing strategies powered by artificial intelligence for measurable growth and ROI.",
  },
] as const

/**
 * Animation presets for reusable motion configurations.
 * Each preset defines the initial, animate, and exit states,
 * along with spring physics parameters for smooth transitions.
 */
const ANIMATION_PRESETS = {
  fadeInScale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: {
      type: "spring",
      stiffness: 300, // Higher value = more rigid spring
      damping: 25, // Higher value = less oscillation
      mass: 0.5, // Lower value = faster movement
    },
  },
  slideInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      mass: 0.5,
    },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      mass: 0.5,
    },
  },
} as const

type AnimationPreset = keyof typeof ANIMATION_PRESETS

interface AnimatedStepImageProps extends StepImageProps {
  preset?: AnimationPreset
  delay?: number
  onAnimationComplete?: () => void
}

/**
 * Custom hook for managing cyclic transitions with auto-play functionality.
 * Handles both automatic cycling and manual transitions between steps.
 */
function useNumberCycler(
  totalSteps: number = TOTAL_STEPS,
  interval: number = 3000
) {
  const [currentNumber, setCurrentNumber] = useState(0)
  const [isManualInteraction, setIsManualInteraction] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Setup timer function
  const setupTimer = useCallback(() => {
    console.log("Setting up timer")
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = setTimeout(() => {
      console.log("Timer triggered, advancing to next step")
      setCurrentNumber((prev) => (prev + 1) % totalSteps)
      setIsManualInteraction(false)
      // Recursively setup next timer
      setupTimer()
    }, interval)
  }, [interval, totalSteps])

  // Handle manual increment
  const increment = useCallback(() => {
    console.log("Manual increment triggered")
    setIsManualInteraction(true)
    setCurrentNumber((prev) => (prev + 1) % totalSteps)

    // Reset timer on manual interaction
    setupTimer()
  }, [totalSteps, setupTimer])

  // Initial timer setup and cleanup
  useEffect(() => {
    console.log("Initial timer setup")
    setupTimer()

    return () => {
      console.log("Cleaning up timer")
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [setupTimer])

  // Debug logging
  useEffect(() => {
    console.log("Current state:", {
      currentNumber,
      isManualInteraction,
      hasTimer: !!timerRef.current,
    })
  }, [currentNumber, isManualInteraction])

  return {
    currentNumber,
    increment,
    isManualInteraction,
  }
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const userAgent = navigator.userAgent
    const isSmall = window.matchMedia("(max-width: 768px)").matches
    const isMobile = Boolean(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.exec(
        userAgent
      )
    )

    const isDev = process.env.NODE_ENV !== "production"
    if (isDev) setIsMobile(isSmall || isMobile)

    setIsMobile(isSmall && isMobile)
  }, [])

  return isMobile
}

// Components
function IconCheck({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  )
}

const stepVariants: Variants = {
  inactive: {
    scale: 0.8,
    opacity: 0.5,
  },
  active: {
    scale: 1,
    opacity: 1,
  },
}

const StepImage = forwardRef<
  HTMLImageElement,
  StepImageProps & { [key: string]: any }
>(
  (
    { src, alt, className, style, width = 1200, height = 630, ...props },
    ref
  ) => {
    return (
      <Image
        ref={ref}
        alt={alt}
        className={className}
        src={src}
        width={width}
        height={height}
        style={{
          position: "absolute",
          userSelect: "none",
          ...style,
        }}
        {...props}
      />
    )
  }
)
StepImage.displayName = "StepImage"

const MotionStepImage = motion(StepImage)

/**
 * Wrapper component for StepImage that applies animation presets.
 * Simplifies the application of complex animations through preset configurations.
 */
const AnimatedStepImage = ({
  preset = "fadeInScale",
  delay = 0,
  onAnimationComplete,
  ...props
}: AnimatedStepImageProps) => {
  const presetConfig = ANIMATION_PRESETS[preset]
  return (
    <MotionStepImage
      {...props}
      {...presetConfig}
      transition={{
        ...presetConfig.transition,
        delay,
      }}
      onAnimationComplete={onAnimationComplete}
    />
  )
}

/**
 * Main card component that handles mouse tracking for gradient effect.
 * Uses motion values to create an interactive gradient that follows the cursor.
 */
function FeatureCard({
  bgClass,
  children,
  step,
}: CardProps & {
  children: React.ReactNode
  step: number
}) {
  const [mounted, setMounted] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const isMobile = useIsMobile()

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    if (isMobile) return
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <motion.div
      className="animated-cards relative w-full rounded-[16px]"
      onMouseMove={handleMouseMove}
      style={
        {
          "--x": useMotionTemplate`${mouseX}px`,
          "--y": useMotionTemplate`${mouseY}px`,
        } as WrapperStyle
      }
    >
      <div
        className={clsx(
          "group relative w-full overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-b from-neutral-900/90 to-stone-800 transition duration-300 dark:from-neutral-950/90 dark:to-neutral-800/90",
          "md:hover:border-transparent",
          bgClass
        )}
      >
        <div className="relative px-5 py-5 md:px-8 md:py-8 lg:px-10 lg:py-10 w-full">
          {/* Heading and Step Indicators - Same Line */}
          <div className="relative z-20 mb-2.5 flex items-center justify-between gap-4">
            <AnimatePresence mode="wait">
              <motion.h2
                key={step}
                className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-600 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300 bg-clip-text text-transparent leading-tight flex-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{
                  delay: 0.1,
                  duration: 0.3,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                {steps[step].title}
              </motion.h2>
            </AnimatePresence>
            
            {/* Step Indicators - Top Right */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex-shrink-0"
            >
              <Steps current={step} onChange={() => {}} steps={steps} />
            </motion.div>
          </div>
          
          {/* Description - Below Heading */}
          <div className="relative z-20 mb-5 md:mb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{
                  delay: 0.2,
                  duration: 0.3,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                <p className="text-xs md:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {steps[step].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Images Container - Fixed height for absolute positioning */}
          <div className="relative z-10 w-full h-[350px] md:h-[400px]">
            {mounted ? children : null}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/**
 * Progress indicator component that shows current step and completion status.
 * Handles complex state transitions and animations for step indicators.
 */
function Steps({
  steps,
  current,
  onChange,
}: {
  steps: readonly Step[]
  current: number
  onChange: (index: number) => void
}) {
  return (
    <nav aria-label="Progress" className="flex justify-end">
      <ol
        className="flex items-center gap-2"
        role="list"
      >
        {steps.map((step, stepIdx) => {
          // Calculate step states for styling and animations
          const isCompleted = current > stepIdx
          const isCurrent = current === stepIdx
          const isFuture = !isCompleted && !isCurrent

          return (
            <motion.li
              key={`${step.name}-${stepIdx}`}
              initial="inactive"
              animate={isCurrent ? "active" : "inactive"}
              variants={stepVariants}
              transition={{ duration: 0.3 }}
              className={cn(
                "relative z-50 rounded-full px-3 py-2 transition-all duration-300 ease-in-out backdrop-blur-md shadow-lg",
                isCompleted 
                  ? "bg-zinc-700/90 dark:bg-zinc-600/90" 
                  : isCurrent 
                  ? "bg-zinc-800/95 dark:bg-zinc-700/95" 
                  : "bg-zinc-400/50 dark:bg-zinc-500/50"
              )}
            >
              <div
                className={cn(
                  "group flex w-full cursor-pointer items-center focus:outline-none focus-visible:ring-2",
                  (isFuture || isCurrent) && "pointer-events-none"
                )}
                onClick={() => onChange(stepIdx)}
              >
                <span className="flex items-center gap-3 text-sm font-medium">
                  <motion.span
                    initial={false}
                    animate={{
                      scale: isCurrent ? 1.15 : 1,
                    }}
                    className={cn(
                      "flex h-5 w-5 shrink-0 items-center justify-center rounded-full duration-300",
                      isCompleted &&
                        "bg-zinc-600 dark:bg-zinc-400 text-white dark:text-zinc-900",
                      isCurrent &&
                        "bg-zinc-700 dark:bg-zinc-300 text-white dark:text-zinc-900",
                      isFuture && "bg-zinc-300/50 dark:bg-zinc-600/50"
                    )}
                  >
                    {isCompleted ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        <IconCheck className="h-3 w-3 stroke-white dark:stroke-zinc-900 stroke-[3] text-white dark:text-zinc-900" />
                      </motion.div>
                    ) : (
                      <span
                        className={cn(
                          "text-xs font-semibold",
                          isCurrent && "text-white dark:text-zinc-900",
                          isFuture && "text-zinc-500 dark:text-zinc-400"
                        )}
                      >
                        {stepIdx + 1}
                      </span>
                    )}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={clsx(
                      "text-sm font-medium duration-300",
                      isCompleted && "text-zinc-100 dark:text-zinc-200",
                      isCurrent && "text-white dark:text-zinc-100 font-semibold",
                      isFuture && "text-zinc-200 dark:text-zinc-300"
                    )}
                  >
                    {step.name}
                  </motion.span>
                </span>
              </div>
            </motion.li>
          )
        })}
      </ol>
    </nav>
  )
}

const defaultClasses = {
  step1img1:
    "pointer-events-none w-[90%] border border-zinc-200/20 dark:border-zinc-700/30 transition-all duration-500 rounded-2xl shadow-xl left-[5%] top-[10%]",
  step1img2:
    "pointer-events-none w-[90%] border border-zinc-200/20 dark:border-zinc-700/30 transition-all duration-500 overflow-hidden rounded-2xl shadow-xl left-[5%] top-[10%]",
  step2img1:
    "pointer-events-none w-[90%] border border-zinc-200/20 dark:border-zinc-700/30 transition-all duration-500 rounded-2xl overflow-hidden shadow-xl left-[5%] top-[10%]",
  step2img2:
    "pointer-events-none w-[90%] border border-zinc-200/20 dark:border-zinc-700/30 transition-all duration-500 rounded-2xl overflow-hidden shadow-xl left-[5%] top-[10%]",
  step3img:
    "pointer-events-none w-[90%] border border-zinc-200/20 dark:border-zinc-700/30 rounded-2xl transition-all duration-500 overflow-hidden shadow-xl left-[5%] top-[10%]",
  step4img:
    "pointer-events-none w-[90%] border border-zinc-200/20 dark:border-zinc-700/30 rounded-2xl transition-all duration-500 overflow-hidden shadow-xl left-[5%] top-[10%]",
} as const

/**
 * Main component that orchestrates the multi-step animation sequence.
 * Manages state transitions, handles animation timing, and prevents
 * animation conflicts through the isAnimating flag.
 */
export function FeatureCarousel({
  image,
  step1img1Class = defaultClasses.step1img1,
  step1img2Class = defaultClasses.step1img2,
  step2img1Class = defaultClasses.step2img1,
  step2img2Class = defaultClasses.step2img2,
  step3imgClass = defaultClasses.step3img,
  step4imgClass = defaultClasses.step4img,
  ...props
}: FeatureCarouselProps) {
  const { currentNumber: step, increment } = useNumberCycler()
  const [isAnimating, setIsAnimating] = useState(false)

  const handleIncrement = () => {
    if (isAnimating) return
    setIsAnimating(true)
    increment()
  }

  const handleAnimationComplete = () => {
    setIsAnimating(false)
  }

  const renderStepContent = () => {
    const content = () => {
      switch (step) {
        case 0:
          /**
           * Layout: Single centered image (like step 3)
           * - Full width image: 88% width, centered
           * Animation:
           * - Fades in and scales up from 95%
           * - Uses spring animation for smooth scaling
           */
          return (
            <AnimatedStepImage
              alt={image.alt}
              className={clsx(step3imgClass, "rounded-2xl")}
              src={image.step1light1}
              preset="fadeInScale"
              onAnimationComplete={handleAnimationComplete}
            />
          )
        case 1:
          /**
           * Layout: Single centered image (like step 3)
           * - Full width image: 88% width, centered
           * Animation:
           * - Fades in and scales up from 95%
           * - Uses spring animation for smooth scaling
           */
          return (
            <AnimatedStepImage
              alt={image.alt}
              className={clsx(step3imgClass, "rounded-2xl")}
              src={image.step2light1}
              preset="fadeInScale"
              onAnimationComplete={handleAnimationComplete}
            />
          )
        case 2:
          /**
           * Layout: Single centered image
           * - Full width image (step3img): 90% width, centered
           * Animation:
           * - Fades in and scales up from 95%
           * - Uses spring animation for smooth scaling
           * - Triggers animation complete callback
           */
          return (
            <AnimatedStepImage
              alt={image.alt}
              className={clsx(step3imgClass, "rounded-2xl")}
              src={image.step3light}
              preset="fadeInScale"
              onAnimationComplete={handleAnimationComplete}
            />
          )
        case 3:
          /**
           * Layout: Final showcase layout
           * - Single centered image like step 3
           * Animation:
           * - Image fades in and scales up
           * - Uses spring physics for natural motion
           */
          return (
            <AnimatedStepImage
              alt={image.alt}
              className={clsx(step4imgClass, "rounded-2xl")}
              src={image.step4light}
              preset="fadeInScale"
              onAnimationComplete={handleAnimationComplete}
            />
          )
        default:
          return null
      }
    }

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          {...ANIMATION_PRESETS.fadeInScale}
          className="w-full h-full absolute"
        >
          {content()}
        </motion.div>
      </AnimatePresence>
    )
  }

  return (
    <FeatureCard {...props} step={step}>
      {renderStepContent()}
      <motion.div
        className="absolute right-0 top-0 z-5 h-full w-full cursor-pointer"
        onClick={handleIncrement}
        whileHover={{ scale: 1.002 }}
        whileTap={{ scale: 0.998 }}
      />
    </FeatureCard>
  )
}

export default FeatureCarousel
