"use client"

import { motion } from "framer-motion"
import {
  Zap,
  Globe,
  BarChart3,
  Search,
} from "lucide-react"

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.23, 1, 0.32, 1] as const },
  }),
}

function WorkflowDiagram() {
  const nodes = [
    { id: "trigger", label: "Trigger", x: 20, y: 30, color: "#22c55e" },
    { id: "ai", label: "AI", x: 50, y: 15, color: "#8b5cf6" },
    { id: "filter", label: "Filter", x: 80, y: 30, color: "#f59e0b" },
    { id: "crm", label: "CRM", x: 50, y: 55, color: "#3b82f6" },
    { id: "send", label: "Send", x: 80, y: 75, color: "#ec4899" },
  ]

  const connections = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 4 },
  ]

  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 pt-16">
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full max-h-[200px]"
        preserveAspectRatio="xMidYMid meet"
      >
        {connections.map((conn, i) => (
          <line
            key={`line-${i}`}
            x1={nodes[conn.from].x}
            y1={nodes[conn.from].y}
            x2={nodes[conn.to].x}
            y2={nodes[conn.to].y}
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="2 2"
            strokeLinecap="round"
            className="text-zinc-400/60 dark:text-zinc-500/50"
          />
        ))}
        {/* Animated flow dots - using SVG animateMotion */}
        {connections.map((conn, i) => (
          <circle
            key={`dot-${i}`}
            r="1.2"
            fill="#22c55e"
            opacity="0.9"
          >
            <animateMotion
              dur="2s"
              repeatCount="indefinite"
              begin={`${i * 0.4}s`}
              path={`M ${nodes[conn.from].x} ${nodes[conn.from].y} L ${nodes[conn.to].x} ${nodes[conn.to].y}`}
            />
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur="2s"
              repeatCount="indefinite"
              begin={`${i * 0.4}s`}
            />
          </circle>
        ))}
        {nodes.map((node, i) => (
          <g key={node.id}>
            <motion.rect
              x={node.x - 8}
              y={node.y - 5}
              width="16"
              height="10"
              rx="2"
              fill={node.color}
              initial={{ opacity: 0.8, scale: 1 }}
              animate={{
                opacity: [0.8, 1, 0.8],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
            <text
              x={node.x}
              y={node.y + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-white font-semibold"
              style={{ fontSize: "5px" }}
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}

function DeviceMockups() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 pt-16">
      <div className="relative h-[180px] w-full max-w-[220px]">
        {/* Monitor - center */}
        <motion.div
          className="absolute left-1/2 top-4 -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-lg border-2 border-zinc-400/50 dark:border-zinc-600/50 bg-zinc-800 p-1 shadow-lg">
            <div className="h-16 w-24 overflow-hidden rounded bg-zinc-900">
              <motion.div
                className="flex h-full flex-col gap-0.5 p-1"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="h-2 w-full rounded bg-blue-500/80" />
                <div className="flex gap-0.5">
                  <div className="h-3 flex-1 rounded bg-emerald-500/70" />
                  <div className="h-3 flex-[0.33] rounded bg-amber-500/70" />
                </div>
                <div className="h-4 flex-1 rounded bg-violet-500/60" />
              </motion.div>
            </div>
            <div className="mt-0.5 h-1 w-4 rounded-full bg-zinc-600 mx-auto" />
          </div>
        </motion.div>

        {/* Tablet - right tilted */}
        <motion.div
          className="absolute right-0 top-12"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ transform: "rotate(12deg)" }}
        >
          <div className="rounded-md border-2 border-zinc-400/50 dark:border-zinc-600/50 bg-zinc-800 p-0.5 shadow-lg">
            <div className="h-14 w-16 overflow-hidden rounded-sm bg-zinc-900">
              <motion.div
                className="flex h-full flex-col gap-0.5 p-1"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="h-2 w-full rounded bg-blue-500/70" />
                <div className="h-3 flex-1 rounded bg-emerald-500/60" />
                <div className="h-2 w-2/3 rounded bg-amber-500/60" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Mobile - left tilted */}
        <motion.div
          className="absolute left-0 top-14"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ transform: "rotate(-10deg)" }}
        >
          <div className="rounded-md border-2 border-zinc-400/50 dark:border-zinc-600/50 bg-zinc-800 p-0.5 shadow-lg">
            <div className="h-20 w-10 overflow-hidden rounded-sm bg-zinc-900">
              <motion.div
                className="flex h-full flex-col gap-0.5 p-0.5"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="h-1.5 w-full rounded bg-blue-500/70" />
                <div className="h-2 flex-1 rounded bg-violet-500/60" />
                <div className="h-1.5 w-full rounded bg-emerald-500/60" />
                <div className="h-2 flex-1 rounded bg-amber-500/60" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function BarChart3D() {
  const bars = [
    { height: 70, color: "from-violet-500 to-purple-600", delay: 0 },
    { height: 45, color: "from-blue-500 to-cyan-500", delay: 0.1 },
    { height: 85, color: "from-emerald-500 to-teal-500", delay: 0.2 },
    { height: 55, color: "from-amber-500 to-orange-500", delay: 0.3 },
    { height: 65, color: "from-rose-500 to-pink-500", delay: 0.4 },
  ]

  return (
    <div className="absolute inset-0 flex items-end justify-center p-6 pt-16">
      <motion.div
        className="flex h-[140px] items-end justify-center gap-3"
        style={{ perspective: "400px", transformStyle: "preserve-3d" }}
      >
        {bars.map((bar, i) => (
          <motion.div
            key={i}
            className={`relative w-8 rounded-t-md bg-gradient-to-t ${bar.color} shadow-[0_-2px_10px_rgba(0,0,0,0.2)]`}
            initial={{ height: 0 }}
            animate={{
              height: bar.height,
              y: [0, -4, 0],
            }}
            transition={{
              height: { duration: 0.8, delay: 0.3 + bar.delay, ease: [0.23, 1, 0.32, 1] },
              y: {
                duration: 3,
                repeat: Infinity,
                delay: 1 + i * 0.2,
                ease: "easeInOut",
              },
            }}
            style={{
              transform: "rotateX(15deg)",
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

function SEORankingVisualization() {
  const keywords = ["SEO", "AEO", "AI", "Rank"]

  return (
    <div className="absolute inset-0 p-4 pt-14">
      <div className="relative h-full">
        {/* Search results list */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-1">
          {[3, 2, 1].map((pos, i) => (
            <motion.div
              key={pos}
              className="flex items-center gap-2 rounded-md border border-zinc-300/40 dark:border-zinc-600/40 bg-white/60 dark:bg-zinc-800/60 px-2 py-1.5 backdrop-blur-sm"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400">
                #{pos}
              </span>
              <span className="text-xs text-zinc-700 dark:text-zinc-300">
                Result {pos}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Animated upward arrow */}
        <motion.div
          className="absolute bottom-20 right-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-emerald-500"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Floating keyword tags */}
        {keywords.map((kw, i) => (
          <motion.span
            key={kw}
            className="absolute rounded-full border border-zinc-300/50 dark:border-zinc-600/50 bg-zinc-100/80 dark:bg-zinc-700/80 px-2 py-0.5 text-[10px] font-medium text-zinc-600 dark:text-zinc-300"
            style={{
              left: `${15 + i * 22}%`,
              top: `${20 + (i % 2) * 15}%`,
            }}
            animate={{
              y: [0, -6, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          >
            {kw}
          </motion.span>
        ))}
      </div>
    </div>
  )
}

const services = [
  {
    id: "ai-automation",
    title: "AI Workflow Automation",
    description: "Custom workflows using n8n, Make, and AI APIs",
    icon: Zap,
    gradient: "from-emerald-500/20 to-teal-500/10",
    element: WorkflowDiagram,
  },
  {
    id: "website",
    title: "Website Development",
    description: "Fast, SEO-optimized sites with Next.js and React",
    icon: Globe,
    gradient: "from-blue-500/20 to-cyan-500/10",
    element: DeviceMockups,
  },
  {
    id: "marketing",
    title: "AI-Driven Marketing",
    description: "Data-driven campaigns with measurable ROI",
    icon: BarChart3,
    gradient: "from-violet-500/20 to-purple-500/10",
    element: BarChart3D,
  },
  {
    id: "seo",
    title: "SEO & AEO Optimization",
    description: "Get cited by ChatGPT, Claude, and Perplexity",
    icon: Search,
    gradient: "from-amber-500/20 to-orange-500/10",
    element: SEORankingVisualization,
  },
] as const

export function ServicesBento3D() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {services.map((service, i) => {
        const Element = service.element
        const Icon = service.icon

        return (
          <motion.article
            key={service.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="group relative min-h-[320px] overflow-hidden rounded-2xl border border-zinc-300/50 bg-gradient-to-br from-[#e8e8eb]/95 via-[#dddde1]/90 to-[#d4d4d8]/95 dark:border-zinc-700/40 dark:from-[#3a3a3f]/90 dark:via-[#2f2f34]/85 dark:to-[#27272a]/90 backdrop-blur-sm transition-shadow hover:shadow-xl dark:hover:shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {/* Content */}
            <div className="relative z-10 flex h-full flex-col p-6">
              <div className="flex items-start gap-3">
                <div
                  className={`rounded-lg p-2 ${service.gradient}`}
                >
                  <Icon className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* 3D Element area */}
              <div className="relative mt-4 flex-1">
                <Element />
              </div>
            </div>
          </motion.article>
        )
      })}
    </div>
  )
}
