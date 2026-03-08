"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

interface FaqQuestion {
  question: string;
  answer: string;
}

interface FaqCategory {
  category: string;
  questions: FaqQuestion[];
}

export function FaqAccordion({ faqs }: { faqs: FaqCategory[] }) {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-8 md:grid-cols-2">
        {faqs.map((category, categoryIndex) => (
          <div key={categoryIndex} className="flex flex-col">
            {/* Category Header */}
            <div className="mb-6">
              <h2 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">
                {category.category}
              </h2>
              <div className="h-px bg-gradient-to-r from-primary/30 via-primary/10 to-transparent" />
            </div>

            {/* FAQ Items */}
            <div className="space-y-4 flex-1">
              {category.questions.map((faq, questionIndex) => {
                const faqId = `${categoryIndex}-${questionIndex}`;
                const isOpen = openIndex === faqId;

                return (
                  <div
                    key={questionIndex}
                    className="group"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="relative rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden transition-all hover:border-border hover:shadow-lg hover:-translate-y-1">
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : faqId)}
                        className="relative flex w-full items-start justify-between p-5 text-left"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${faqId}`}
                      >
                        <span className="pr-4 text-sm font-semibold text-foreground leading-relaxed group-hover:text-primary transition-colors">
                          {faq.question}
                        </span>
                        <Plus
                          className={`h-4 w-4 shrink-0 mt-0.5 text-muted-foreground transition-all duration-200 ${
                            isOpen ? "rotate-45 text-primary" : ""
                          }`}
                        />
                      </button>
                      
                      {/* Answer is ALWAYS in the DOM for SEO */}
                      <div
                        id={`faq-answer-${faqId}`}
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                        aria-hidden={!isOpen}
                      >
                        <div className="px-5 pb-5 pt-0">
                          <div className="h-px bg-gradient-to-r from-primary/20 via-primary/10 to-transparent mb-4" />
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
