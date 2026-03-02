"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
    <div className="mx-auto max-w-4xl space-y-12">
      {faqs.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h2 className="mb-6 font-serif text-2xl font-bold text-foreground md:text-3xl">
            {category.category}
          </h2>
          <div className="space-y-3">
            {category.questions.map((faq, questionIndex) => {
              const faqId = `${categoryIndex}-${questionIndex}`;
              const isOpen = openIndex === faqId;

              return (
                <div
                  key={questionIndex}
                  className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : faqId)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faqId}`}
                  >
                    <span className="pr-4 text-base font-semibold text-foreground md:text-lg">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {/* Answer is ALWAYS in the DOM for SEO — visibility toggled by CSS only */}
                  <div
                    id={`faq-answer-${faqId}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                    aria-hidden={!isOpen}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
