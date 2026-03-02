import type { Metadata } from "next";
import Link from "next/link";
import { Bot, CheckCircle2, ArrowRight, Search, Eye, Database } from "lucide-react";

const baseUrl = "https://www.worksthal.com";

const pageFaqs = [
  {
    question: "What is an AEO audit?",
    answer:
      "An AEO audit is a comprehensive assessment of how AI assistants like ChatGPT, Claude, and Perplexity discover, understand, and cite your business. It checks your technical infrastructure (structured data, robots.txt, llms.txt), content structure (semantic triples, answer-first formatting), and AI crawler access to identify optimization opportunities.",
  },
  {
    question: "How do I know if AI assistants can find my business?",
    answer:
      "You can test by asking ChatGPT, Claude, or Perplexity questions about your industry, product, or brand. If they don't cite your website in their answers, you likely have visibility gaps. An AEO audit systematically checks citation rates, crawler access, and content extractability to pinpoint exactly what needs improvement.",
  },
  {
    question: "What is the difference between an SEO audit and an AEO audit?",
    answer:
      "An SEO audit focuses on search engine rankings, organic traffic, and traditional search visibility. An AEO audit focuses on AI citation visibility: whether ChatGPT, Claude, Perplexity, and Google AI Overviews can find and recommend your business. Both are complementary: strong SEO foundations support AEO, and AEO optimizations often improve search performance.",
  },
  {
    question: "How quickly can AEO audit improvements show results?",
    answer:
      "Technical fixes like structured data implementation and AI crawler configuration typically show impact within 4–8 weeks. Content-based improvements and building topical authority usually take 3–6 months to influence AI citation patterns. We provide a prioritized action plan so you can tackle quick wins first.",
  },
];

function PageJsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AEO Audit Services",
    description:
      "Comprehensive AI engine optimization audit to check if ChatGPT, Claude, and Perplexity can find and cite your business. Covers structured data, AI crawler access, content extractability, and semantic optimization.",
    provider: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Worksthal",
      url: baseUrl,
    },
    areaServed: "Worldwide",
    url: `${baseUrl}/services/aeo-audit`,
    datePublished: "2024-01-01",
    dateModified: "2026-03-03",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pageFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${baseUrl}/services` },
      { "@type": "ListItem", position: 3, name: "AEO Audit Services", item: `${baseUrl}/services/aeo-audit` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

export const metadata: Metadata = {
  title: "AEO Audit Services | AI Engine Optimization Audit | Worksthal",
  description:
    "AEO audit services to check if ChatGPT, Claude, and Perplexity can find and cite your business. Comprehensive AI engine optimization audit covering structured data, AI crawler access, and content extractability. Free consultation.",
  keywords: [
    "AEO audit",
    "AEO audit services",
    "AI engine optimization audit",
    "AI search visibility audit",
    "ChatGPT visibility",
    "AEO optimization",
    "answer engine optimization audit",
    "AI citation audit",
  ],
  alternates: {
    canonical: `${baseUrl}/services/aeo-audit`,
  },
  openGraph: {
    title: "AEO Audit Services | AI Engine Optimization Audit | Worksthal",
    description:
      "Check if AI assistants can find your business. Worksthal's AEO audit covers structured data, AI crawler configuration, and content extractability. Free consultation.",
    type: "website",
    url: `${baseUrl}/services/aeo-audit`,
    siteName: "Worksthal",
  },
};

const whyAuditBenefits = [
  {
    icon: Eye,
    title: "AI Citation Visibility Check",
    description:
      "Discover whether ChatGPT, Claude, and Perplexity cite your business when users ask relevant questions, and identify exactly what's blocking visibility.",
  },
  {
    icon: Database,
    title: "Structured Data Analysis",
    description:
      "Audit your JSON-LD schema markup to ensure AI engines can parse and understand your organization, products, and content correctly.",
  },
  {
    icon: Search,
    title: "AI Crawler Configuration Review",
    description:
      "Verify that robots.txt and llms.txt allow AI crawlers (GPTBot, ClaudeBot, PerplexityBot) to access and index your pages.",
  },
  {
    icon: Bot,
    title: "Content Extractability Assessment",
    description:
      "Evaluate whether your content uses semantic triples and answer-first structure that AI engines can easily extract and quote.",
  },
];

const auditChecklist = [
  "robots.txt and crawler directives for AI bots (GPTBot, ClaudeBot, PerplexityBot)",
  "llms.txt presence and configuration",
  "JSON-LD schema audit (Organization, LocalBusiness, FAQ, Article)",
  "Semantic triple analysis for key content",
  "Answer-first content structure and formatting",
  "AI citation rate check across ChatGPT, Claude, Perplexity",
  "Internal linking and content cluster architecture",
  "Technical indexing and crawlability for AI crawlers",
];

const processSteps = [
  {
    step: "1",
    title: "AI Visibility Scan",
    description:
      "We test your brand and key topics in ChatGPT, Claude, and Perplexity to measure current citation rates and identify visibility gaps.",
  },
  {
    step: "2",
    title: "Technical Infrastructure Audit",
    description:
      "We review robots.txt, llms.txt, structured data, and crawler access to ensure AI engines can discover and parse your content.",
  },
  {
    step: "3",
    title: "Content Structure Analysis",
    description:
      "We analyze your content for semantic triples, answer-first formatting, and extractability, identifying what AI engines can and cannot quote.",
  },
  {
    step: "4",
    title: "AEO Action Plan",
    description:
      "We deliver a prioritized report with actionable recommendations, quick wins, and a roadmap for improving AI citation visibility.",
  },
];

export default function AEOAuditPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageJsonLd />
      {/* Hero Section */}
      <section className="relative w-full px-4 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-background" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Link
            href="/services"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to Services
          </Link>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm font-medium text-accent backdrop-blur-sm">
            <Search className="h-4 w-4" />
            AEO Audit Services
          </div>
          <h1 className="mb-6 font-serif text-5xl font-bold text-foreground md:text-6xl lg:text-7xl">
            AEO Audit Services:{" "}
            <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              Check If AI Assistants Can Find Your Business
            </span>
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
            ChatGPT, Claude, and Perplexity may not be able to find or cite your business, even if you
            rank well in Google. Our AEO audit checks your technical infrastructure, content
            structure, and AI crawler access to identify exactly what needs optimization.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-all hover:bg-accent/90"
          >
            Get a Free AEO Audit
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Why You Need an AEO Audit */}
      <section className="w-full bg-gradient-to-b from-card/50 to-background px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Why You Need an AEO Audit
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              AI assistants are now the primary research tool for many consumers. If ChatGPT,
              Claude, or Perplexity can&apos;t find your business, you&apos;re invisible to a
              growing share of your audience.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyAuditBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/20">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Our AEO Audit Covers */}
      <section className="w-full px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              What Our AEO Audit Covers
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              A comprehensive checklist to identify every factor affecting your AI visibility.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <ul className="space-y-4">
              {auditChecklist.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-8 text-center text-muted-foreground">
            Learn more about our full{" "}
            <Link href="/services/aeo" className="font-medium text-accent underline-offset-4 hover:underline">
              AEO services
            </Link>
            ,{" "}
            <Link href="/services/ai-marketing" className="font-medium text-accent underline-offset-4 hover:underline">
              AI marketing
            </Link>
            , and{" "}
            <Link href="/services/seo-audit" className="font-medium text-accent underline-offset-4 hover:underline">
              SEO audit
            </Link>{" "}
            offerings.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="w-full bg-gradient-to-b from-card/50 to-background px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Our AEO Audit Process
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              A structured approach to uncover visibility gaps and deliver actionable recommendations.
            </p>
          </div>
          <div className="space-y-6">
            {processSteps.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/30"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-primary font-serif text-xl font-bold text-accent-foreground">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {pageFaqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/30"
              >
                <h3 className="mb-3 text-lg font-semibold text-foreground">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-muted-foreground">
            Have more questions? Visit our{" "}
            <Link href="/faq" className="font-medium text-accent underline-offset-4 hover:underline">
              FAQ page
            </Link>
            , read our{" "}
            <Link href="/blog/aeo-vs-seo-difference" className="font-medium text-accent underline-offset-4 hover:underline">
              AEO vs SEO guide
            </Link>
            , or learn more{" "}
            <Link href="/about" className="font-medium text-accent underline-offset-4 hover:underline">
              about Worksthal
            </Link>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-gradient-to-br from-card to-card/50 p-8 text-center md:p-12">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20">
              <Bot className="h-8 w-8 text-accent" />
            </div>
          </div>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Ready to Check Your AI Visibility?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Get a free AEO audit to discover whether ChatGPT, Claude, and Perplexity can find and
            cite your business, and learn exactly what to fix first.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-all hover:bg-accent/90"
          >
            Get a Free AEO Audit
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
