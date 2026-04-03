import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FaqAccordion } from "@/components/ui/faq-accordion";

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What services does Worksthal offer?",
        answer:
          "Worksthal offers four core services: AI Workflow Automation (custom workflows using n8n, Make, and AI APIs that eliminate repetitive tasks), Website Design and Development (fast, responsive sites built with Next.js, React, and TypeScript), AI-Optimized Audit and Visibility (AEO: structured data implementation, semantic content optimization, and AI crawler configuration), and AI-Driven Marketing (data-driven campaigns powered by analytics and AI tools).",
      },
      {
        question: "Where is Worksthal located?",
        answer:
          "Worksthal is based in Jubilee Hills, Hyderabad, Telangana, India. The AI Studio serves clients worldwide and operates remotely for international projects. You can reach Worksthal at shubham@worksthal.com or +91 63098 21905.",
      },
      {
        question: "Does Worksthal work with international clients?",
        answer:
          "Yes. Worksthal is based in India and serves clients worldwide. The AI Studio operates remotely for international projects, with regular communication via email, video calls, and project management tools. Worksthal has delivered projects across multiple industries and geographies.",
      },
      {
        question: "What industries does Worksthal serve?",
        answer:
          "Worksthal works with growing businesses across various industries including SaaS, e-commerce, professional services, healthcare, education, and technology. The AI Studio's services are industry-agnostic. If you have repetitive tasks to automate, need a modern website, or want to improve your search visibility, Worksthal can help.",
      },
    ],
  },
  {
    category: "AI Automation",
    questions: [
      {
        question: "How much time can AI automation save my business?",
        answer:
          "The time savings depend on your specific workflows and processes. Worksthal's AI automation workflows typically eliminate hours of manual work every week. Most clients see measurable time savings immediately after deployment. Worksthal builds custom workflows tailored to your existing tools and processes, connecting CRMs, email platforms, databases, and third-party APIs into seamless automated pipelines.",
      },
      {
        question: "What tools does Worksthal use for automation?",
        answer:
          "Worksthal builds automation workflows using n8n, Make (formerly Integromat), Zapier, and custom API integrations. For AI capabilities, Worksthal integrates with OpenAI (GPT-4, ChatGPT), Anthropic (Claude), Google (Gemini), and other AI services. The choice of tools depends on your specific requirements, existing tech stack, and budget.",
      },
      {
        question: "Can Worksthal integrate with my existing tools?",
        answer:
          "Yes. Worksthal specializes in connecting your existing business tools into automated workflows. Common integrations include CRMs (Salesforce, HubSpot, Pipedrive), email platforms (Gmail, Outlook, SendGrid), databases (PostgreSQL, MySQL, Airtable), spreadsheets (Google Sheets, Excel), and thousands of other apps via APIs and webhooks.",
      },
      {
        question: "How long does it take to implement an automation workflow?",
        answer:
          "Simple automation workflows can be implemented in 1-2 weeks. Complex workflows involving multiple systems, custom logic, and AI processing typically take 3-6 weeks. Worksthal follows an agile approach with regular check-ins and iterative delivery, so you see progress throughout the project.",
      },
    ],
  },
  {
    category: "Web Development",
    questions: [
      {
        question: "What technologies does Worksthal use for web development?",
        answer:
          "Worksthal builds websites using Next.js, React, TypeScript, and Tailwind CSS. This is the same modern stack used by companies like Vercel, Netflix, and Notion. These frameworks deliver fast load times, server-side rendering for SEO, and responsive designs that work on all devices. Worksthal also integrates Node.js backends, API connections, and AI-powered features into web applications.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "Simple landing pages and corporate websites typically take 2-4 weeks. E-commerce platforms and SaaS applications with complex features take 6-12 weeks. Timelines depend on project scope, design complexity, and feature requirements. Worksthal provides detailed project estimates during the consultation phase.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer:
          "Yes. All websites built by Worksthal are fully responsive and optimized for mobile devices. With mobile-first indexing by Google, mobile optimization is a standard part of every project. Worksthal tests websites across multiple devices and screen sizes to ensure consistent user experience.",
      },
      {
        question: "Can Worksthal redesign my existing website?",
        answer:
          "Yes. Worksthal can redesign and rebuild existing websites using modern frameworks. Whether you're migrating from WordPress, Wix, or a legacy platform, Worksthal can create a faster, more maintainable website while preserving your SEO rankings and content.",
      },
    ],
  },
  {
    category: "AEO & SEO",
    questions: [
      {
        question: "What is AEO and why does it matter for my business?",
        answer:
          "AEO (AI Engine Optimization) is the practice of optimizing your content so AI assistants like ChatGPT, Perplexity, and Google AI Overviews can find, understand, and recommend your business. With 70% of consumers now using AI for searches and 58% of Google searches resulting in zero clicks, AEO ensures your business stays visible in the AI-driven search landscape. Worksthal implements structured data, semantic content patterns, and AI crawler configuration to maximize your AI citation potential.",
      },
      {
        question: "How quickly can I expect results from AEO/SEO?",
        answer:
          "AEO and SEO are long-term strategies. Technical improvements (structured data, site speed, mobile optimization) can show results within 4-8 weeks. Content optimization and topical authority building typically show measurable results in 8-12 weeks. Competitive keywords and authority building can take 3-6 months. Worksthal provides transparent reporting so you can track progress throughout the engagement.",
      },
      {
        question: "Does Worksthal guarantee first-page rankings?",
        answer:
          "No. Any provider that guarantees specific rankings is misleading you. Search rankings depend on hundreds of factors including competition, content quality, backlinks, and algorithm updates. Worksthal focuses on implementing best practices that improve your visibility over time. Worksthal provides transparent reporting on rankings, traffic, and conversions so you can measure real business impact.",
      },
    ],
  },
  {
    category: "Pricing & Process",
    questions: [
      {
        question: "How much do Worksthal's services cost?",
        answer:
          "Project costs vary based on scope, complexity, and timeline. Simple automation workflows start around $2,000-$5,000. Corporate websites range from $5,000-$15,000. Complex web applications and ongoing marketing services are quoted based on requirements. Worksthal provides detailed estimates after understanding your specific needs during the free consultation.",
      },
      {
        question: "Does Worksthal offer ongoing support and maintenance?",
        answer:
          "Yes. Worksthal offers ongoing support and maintenance packages for automation workflows, websites, and marketing campaigns. Support includes bug fixes, updates, performance monitoring, and optimization. Maintenance plans are customized based on your needs and can be added to any project.",
      },
      {
        question: "What is Worksthal's payment structure?",
        answer:
          "Worksthal typically uses a milestone-based payment structure: 30% upfront to begin work, 40% at mid-project milestone, and 30% upon completion. For ongoing services like marketing or maintenance, Worksthal uses monthly retainers. Payment terms are flexible and discussed during the proposal phase.",
      },
      {
        question: "How do I get started with Worksthal?",
        answer:
          "Start by scheduling a free consultation via the contact form or email (shubham@worksthal.com). During the consultation, Worksthal will understand your goals, challenges, and requirements. Then Worksthal provides a detailed proposal with scope, timeline, and pricing. Once approved, work begins with regular check-ins and progress updates throughout the project.",
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((cat) =>
    cat.questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* FAQ JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section - Compact */}
      <section className="relative w-full px-4 pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm px-4 py-1.5 text-[10px] font-semibold text-primary tracking-wider uppercase">
            FAQ
          </div>
          <h1 className="mb-3 font-serif text-4xl font-bold text-foreground md:text-5xl tracking-tight">
            AI Automation, Web Development &amp; AEO:{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              FAQ
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
            Quick answers about our services, pricing, and process. Can&apos;t find what you need? Contact us directly.
          </p>
        </div>
      </section>

      {/* FAQ Categories — client accordion, all content always in DOM */}
      <section className="w-full px-4 py-12">
        <FaqAccordion faqs={faqs} />
      </section>

      {/* CTA Section - Compact */}
      <section className="w-full px-4 py-16">
        <div className="mx-auto max-w-4xl relative">
          <div className="relative rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm p-8 text-center overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
            
            <div className="relative">
              <h2 className="mb-3 font-serif text-2xl font-bold text-foreground md:text-3xl">
                Still Have{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Questions?
                </span>
              </h2>
              <p className="mb-6 text-sm text-muted-foreground max-w-2xl mx-auto">
                Schedule a free consultation to discuss your specific needs and get personalized answers.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
                >
                  Get a Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background/50 px-6 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-card"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
