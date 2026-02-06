"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "What services does Worksthal offer?",
    answer:
      "Worksthal offers four core services: AI Workflow Automation (custom workflows using n8n, Make, and AI APIs that save 20+ hours per week), Website Design and Development (fast, responsive sites built with Next.js, React, and TypeScript), AI-Optimized Audit and Visibility (AEO — structured data implementation, semantic content optimization, and AI crawler configuration), and AI-Driven Marketing (data-driven campaigns powered by analytics and AI tools).",
  },
  {
    question: "How much time can AI automation save my business?",
    answer:
      "Worksthal's AI automation workflows typically save clients 20+ hours per week on repetitive manual tasks. Most clients see measurable time savings within the first 30 days of deployment. Worksthal builds custom workflows tailored to your existing tools and processes — connecting CRMs, email platforms, databases, and third-party APIs into seamless automated pipelines.",
  },
  {
    question: "What is AEO and why does it matter for my business?",
    answer:
      "AEO (AI Engine Optimization) is the practice of optimizing your content so AI assistants like ChatGPT, Perplexity, and Google AI Overviews can find, understand, and recommend your business. With 70% of consumers now using AI for searches and 58% of Google searches resulting in zero clicks, AEO ensures your business stays visible in the AI-driven search landscape. Worksthal implements structured data, semantic content patterns, and AI crawler configuration to maximize your AI citation potential.",
  },
  {
    question: "What technologies does Worksthal use for web development?",
    answer:
      "Worksthal builds websites using Next.js, React, TypeScript, and Tailwind CSS — the same modern stack used by companies like Vercel, Netflix, and Notion. These frameworks deliver sub-2-second load times, server-side rendering for SEO, and responsive designs that work on all devices. Worksthal also integrates Node.js backends, API connections, and AI-powered features into web applications.",
  },
  {
    question: "How quickly can I expect results from working with Worksthal?",
    answer:
      "Worksthal delivers measurable ROI within 90 days of engagement. AI automation workflows typically show time savings within the first 30 days. Web development projects follow agile delivery with functional milestones every 2 weeks. AEO and SEO improvements begin showing measurable results in search and AI citations within 60–90 days of implementation.",
  },
  {
    question: "Does Worksthal work with international clients?",
    answer:
      "Yes. Worksthal is based in Hyderabad, India, and serves clients worldwide. The agency operates remotely for international projects, with regular communication via email, video calls, and project management tools. Worksthal has delivered 50+ projects across multiple industries and geographies, maintaining a 98% client satisfaction rate.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="faq" className="relative w-full px-4 py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mx-auto max-w-4xl"
      >
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            Common Questions
          </div>
          <h2 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Answers to common questions about Worksthal&apos;s AI automation, web
            development, and AEO services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="pr-4 text-base font-semibold text-foreground md:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
