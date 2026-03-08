"use client";

import { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";

const faqCategories = [
  {
    category: "Services",
    faqs: [
      {
        question: "What services does Worksthal offer?",
        answer:
          "Four core services: AI Workflow Automation (n8n, Make, AI APIs), Website Development (Next.js, React, TypeScript), AI Engine Optimization (structured data, semantic content), and AI-Driven Marketing (analytics-powered campaigns).",
      },
      {
        question: "What technologies does Worksthal use?",
        answer:
          "Next.js, React, TypeScript, Tailwind CSS for web development. n8n, Make, Zapier for automation. OpenAI, Claude, Gemini for AI integration. Google Analytics, Ahrefs, Semrush for marketing.",
      },
    ],
  },
  {
    category: "Results & Timeline",
    faqs: [
      {
        question: "How much time can AI automation save?",
        answer:
          "Typically 20+ hours per week on repetitive tasks. Most clients see measurable savings within 30 days. Custom workflows connect CRMs, email platforms, databases, and APIs into automated pipelines.",
      },
      {
        question: "How quickly can I expect results?",
        answer:
          "Measurable ROI within 90 days. AI automation shows time savings in 30 days. Web projects deliver milestones every 2 weeks. AEO/SEO improvements appear in 60-90 days.",
      },
    ],
  },
  {
    category: "AEO & Optimization",
    faqs: [
      {
        question: "What is AEO and why does it matter?",
        answer:
          "AI Engine Optimization ensures AI assistants (ChatGPT, Perplexity, Google AI) can find and recommend your business. With 70% of consumers using AI for searches and 58% of Google searches resulting in zero clicks, AEO maintains visibility in AI-driven search.",
      },
      {
        question: "Does Worksthal work with international clients?",
        answer:
          "Yes. Based in India, serving clients worldwide. Remote operations with regular communication via email, video calls, and project management tools. 50+ projects delivered across multiple industries with 98% satisfaction rate.",
      },
    ],
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="faq" className="relative w-full px-4 py-16 md:py-24 overflow-hidden">
      {/* Subtle background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* Subtle floating orbs */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 10, 0],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-20 right-10 w-[32rem] h-[32rem] bg-secondary/10 rounded-full blur-3xl"
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 10 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 mx-auto max-w-5xl"
      >
        {/* Compact Header */}
        <div className="mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
            transition={{ duration: 0.3 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm px-4 py-1.5 text-[10px] font-semibold text-primary tracking-wider uppercase"
          >
            FAQ
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 5 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="mb-3 font-serif text-3xl font-bold text-foreground md:text-4xl tracking-tight"
          >
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 5 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mx-auto max-w-2xl text-sm text-muted-foreground"
          >
            Quick answers about our AI automation, web development, and AEO services.
          </motion.p>
        </div>

        {/* FAQ Grid - Categorized */}
        <div className="grid gap-6 md:grid-cols-3">
          {faqCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.05, duration: 0.4 }}
              className="space-y-3"
            >
              {/* Category Header */}
              <div className="mb-4">
                <h3 className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">
                  {category.category}
                </h3>
                <div className="mt-2 h-px bg-gradient-to-r from-primary/20 via-primary/10 to-transparent" />
              </div>

              {/* FAQ Items */}
              {category.faqs.map((faq, faqIndex) => {
                const itemId = `${catIndex}-${faqIndex}`;
                const isOpen = openIndex === itemId;

                return (
                  <motion.div
                    key={itemId}
                    whileHover={{ 
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    className="group"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="relative rounded-lg border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden transition-all hover:border-border hover:shadow-md">
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : itemId)}
                        className="relative flex w-full items-start justify-between p-4 text-left"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${itemId}`}
                      >
                        <span className="pr-3 text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                          {faq.question}
                        </span>
                        <Plus
                          className={`h-4 w-4 shrink-0 text-muted-foreground transition-all duration-200 ${
                            isOpen ? "rotate-45 text-primary" : ""
                          }`}
                        />
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`faq-answer-${itemId}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 pb-4 pt-0">
                              <div className="h-px bg-gradient-to-r from-primary/20 via-primary/10 to-transparent mb-3" />
                              <p className="text-xs leading-relaxed text-muted-foreground">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
