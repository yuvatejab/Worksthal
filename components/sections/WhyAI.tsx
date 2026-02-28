"use client"

import React from "react"
import { motion } from "framer-motion"

export function WhyAI() {
  return (
    <section className="relative w-full pt-0 pb-20 lg:pb-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50" />
      
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300 bg-clip-text text-transparent">
                Why AI
              </span>
            </h2>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight tracking-tight mt-2">
              AI as a practical tool, not a buzzword
            </h3>
            
            <div className="space-y-3 mt-4">
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                Worksthal uses AI to <span className="text-foreground font-semibold">reduce effort</span>, <span className="text-foreground font-semibold">improve clarity</span>, and <span className="text-foreground font-semibold">accelerate execution</span>, not to overcomplicate things or replace human judgment.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed text-foreground font-semibold">
                Our approach combines human expertise with AI capabilities from OpenAI, Claude, and Gemini to deliver solutions that produce measurable business outcomes.
              </p>
            </div>
          </motion.div>

          {/* Right: AI Providers Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10 bg-card border border-border p-6 md:p-8">
              <div className="space-y-5">
                <h3 className="text-xl font-bold text-foreground">Powered by Leading AI</h3>
                
                <div className="grid grid-cols-1 gap-3">
                  {/* OpenAI */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border transition-all hover:bg-muted/50">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-base font-semibold text-foreground">OpenAI</div>
                      <div className="text-sm text-muted-foreground">GPT-4 & Advanced Models</div>
                    </div>
                  </div>

                  {/* Claude */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border transition-all hover:bg-muted/50">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600 shadow-lg shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-base font-semibold text-foreground">Claude</div>
                      <div className="text-sm text-muted-foreground">Anthropic's AI Assistant</div>
                    </div>
                  </div>

                  {/* Gemini */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border transition-all hover:bg-muted/50">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-base font-semibold text-foreground">Gemini</div>
                      <div className="text-sm text-muted-foreground">Google's Multimodal AI</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Our AI Philosophy - Premium Floating Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 relative"
        >
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-purple-500/5 rounded-3xl blur-3xl" />
          
          <div className="relative">
            <h4 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center tracking-tight">Our AI Philosophy</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
              {/* Reduce Effort - Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                className="group relative cursor-pointer"
              >
                {/* Animated Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500" />
                
                {/* Card */}
                <div className="relative h-full rounded-2xl bg-gradient-to-br from-card to-card/80 border border-border/50 p-7 shadow-lg backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:border-emerald-500/40 group-hover:shadow-2xl group-hover:shadow-emerald-500/10">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-2xl" />
                  </div>
                  
                  <div className="relative space-y-4">
                    {/* Icon with Shine Effect */}
                    <div className="relative w-fit">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg group-hover:shadow-emerald-500/50 transition-all duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-2">
                      <h5 className="text-xl font-bold text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        Reduce Effort
                      </h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Automate repetitive tasks and free your team to focus on strategic work
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Improve Clarity - Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                className="group relative cursor-pointer"
              >
                {/* Animated Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500" />
                
                {/* Card */}
                <div className="relative h-full rounded-2xl bg-gradient-to-br from-card to-card/80 border border-border/50 p-7 shadow-lg backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:border-blue-500/40 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-2xl" />
                  </div>
                  
                  <div className="relative space-y-4">
                    {/* Icon with Shine Effect */}
                    <div className="relative w-fit">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-2">
                      <h5 className="text-xl font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        Improve Clarity
                      </h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Transform complex data into actionable insights with AI-powered analysis
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Accelerate Execution - Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                className="group relative cursor-pointer"
              >
                {/* Animated Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500" />
                
                {/* Card */}
                <div className="relative h-full rounded-2xl bg-gradient-to-br from-card to-card/80 border border-border/50 p-7 shadow-lg backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:border-purple-500/40 group-hover:shadow-2xl group-hover:shadow-purple-500/10">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl" />
                  </div>
                  
                  <div className="relative space-y-4">
                    {/* Icon with Shine Effect */}
                    <div className="relative w-fit">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-2">
                      <h5 className="text-xl font-bold text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        Accelerate Execution
                      </h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Ship faster with AI-assisted development and automated workflows
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
