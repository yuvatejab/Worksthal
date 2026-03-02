import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  CheckCircle2,
  ArrowRight,
  FileSearch,
  BarChart3,
  Shield,
} from "lucide-react";

const baseUrl = "https://www.worksthal.com";

const pageFaqs = [
  {
    question: "What is included in an SEO audit?",
    answer:
      "A comprehensive SEO audit includes technical analysis (crawlability, indexing, site structure), on-page SEO review (titles, meta descriptions, headings, content structure), content analysis (keyword usage, topical relevance), backlink profile assessment, Core Web Vitals and performance metrics, and competitive benchmarking. We deliver a prioritized action plan with specific recommendations.",
  },
  {
    question: "How long does an SEO audit take?",
    answer:
      "A comprehensive SEO audit typically takes 1–2 weeks depending on site size and complexity. Smaller sites (under 50 pages) may be completed in 5–7 business days; larger sites or e-commerce platforms with thousands of URLs may require up to 2 weeks for thorough analysis.",
  },
  {
    question: "How much does an SEO audit cost?",
    answer:
      "SEO audit pricing starts at $1,500–$3,000 depending on site size, complexity, and scope. Small business sites typically fall in the $1,500–$2,000 range; mid-market sites with 100–500 pages range from $2,000–$2,500; enterprise sites may require $2,500–$3,000 or custom pricing. Contact us for a tailored quote.",
  },
  {
    question: "Will an SEO audit improve my rankings?",
    answer:
      "An SEO audit identifies issues and provides actionable recommendations, but rankings improve only when those recommendations are implemented. We prioritize fixes by impact so you can address the highest-value items first. Many clients see measurable ranking improvements within 4–12 weeks after implementing our audit findings.",
  },
];

function PageJsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Audit Services",
    description:
      "Professional SEO audit services including technical analysis, on-page optimization review, performance optimization, and competitive analysis. Comprehensive website SEO audit for businesses worldwide.",
    provider: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Worksthal",
      url: baseUrl,
    },
    areaServed: "Worldwide",
    url: `${baseUrl}/services/seo-audit`,
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
      {
        "@type": "ListItem",
        position: 3,
        name: "SEO Audit Services",
        item: `${baseUrl}/services/seo-audit`,
      },
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
  title: "SEO Audit Services | Technical & On-Page Analysis | Worksthal",
  description:
    "Professional SEO audit services covering technical analysis, on-page optimization, and actionable recommendations to improve your search rankings. Comprehensive website SEO audit for businesses worldwide. Free consultation.",
  keywords: [
    "SEO audit services",
    "SEO optimization",
    "technical SEO audit",
    "SEO agency",
    "on-page SEO",
    "SEO consultant",
    "website SEO audit",
    "SEO analysis",
  ],
  alternates: {
    canonical: `${baseUrl}/services/seo-audit`,
  },
  openGraph: {
    title: "SEO Audit Services | Worksthal",
    description:
      "Comprehensive SEO audit services covering technical analysis, on-page optimization, and actionable recommendations to improve your search rankings. Free consultation.",
    type: "website",
    url: `${baseUrl}/services/seo-audit`,
    siteName: "Worksthal",
  },
};

const benefits = [
  {
    icon: FileSearch,
    title: "Technical SEO Analysis",
    description:
      "Identify crawlability issues, indexing problems, site structure flaws, and technical barriers that prevent search engines from properly understanding your site.",
  },
  {
    icon: Search,
    title: "On-Page SEO Review",
    description:
      "Audit titles, meta descriptions, headings, content structure, and keyword usage to ensure every page is optimized for its target intent.",
  },
  {
    icon: BarChart3,
    title: "Performance Optimization",
    description:
      "Analyze Core Web Vitals, page speed, mobile usability, and user experience signals that influence search rankings and conversion rates.",
  },
  {
    icon: Shield,
    title: "Competitive Analysis",
    description:
      "Benchmark your site against competitors to identify gaps, opportunities, and strategies to outperform them in search results.",
  },
];

const auditIncludes = [
  "Technical crawlability and indexing audit",
  "On-page SEO review (titles, meta, headings)",
  "Content and keyword analysis",
  "Core Web Vitals and page speed assessment",
  "Mobile usability evaluation",
  "Backlink profile review",
  "Competitive benchmarking",
  "Prioritized action plan with implementation roadmap",
];

const process = [
  {
    step: "1",
    title: "Discovery",
    description:
      "We review your site structure, business goals, target keywords, and current performance to scope the audit and align recommendations with your objectives.",
  },
  {
    step: "2",
    title: "Technical Audit",
    description:
      "We crawl your site, analyze indexing status, identify technical issues (redirects, canonicalization, structured data), and assess Core Web Vitals and performance.",
  },
  {
    step: "3",
    title: "Content & On-Page Audit",
    description:
      "We review on-page elements, content quality, keyword alignment, internal linking, and compare your pages against top-ranking competitors.",
  },
  {
    step: "4",
    title: "Action Plan & Implementation",
    description:
      "We deliver a prioritized report with specific recommendations, impact estimates, and an implementation roadmap. Optional: we can implement fixes or guide your team.",
  },
];

export default function SEOAuditPage() {
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
            <FileSearch className="h-4 w-4" />
            SEO Audit Services
          </div>
          <h1 className="mb-6 font-serif text-5xl font-bold text-foreground md:text-6xl lg:text-7xl">
            Comprehensive SEO Audit Services:{" "}
            <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              Identify and Fix What&apos;s Holding Your Rankings Back
            </span>
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Professional SEO audit services for businesses worldwide. We analyze your technical
            infrastructure, on-page optimization, performance metrics, and competitive positioning to
            deliver actionable recommendations that improve your search rankings and organic traffic.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-all hover:bg-accent/90"
          >
            Get a Free SEO Audit Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              What Our SEO Audit Covers
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              A comprehensive SEO audit identifies technical issues, on-page gaps, performance
              bottlenecks, and competitive opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
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

      {/* What Our SEO Audit Includes */}
      <section className="w-full bg-gradient-to-b from-card/50 to-background px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              What Our SEO Audit Includes
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Every audit delivers a detailed report with prioritized, actionable recommendations.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {auditIncludes.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 transition-all hover:border-accent/30"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Our SEO Audit Process
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              A structured approach to deliver comprehensive, actionable SEO insights.
            </p>
          </div>
          <div className="space-y-6">
            {process.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/30"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-primary font-serif text-xl font-bold text-accent-foreground">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-gradient-to-b from-card/50 to-background px-4 py-20">
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
            <Link
              href="/faq"
              className="font-medium text-accent underline-offset-4 hover:underline"
            >
              FAQ page
            </Link>
            , or explore our{" "}
            <Link
              href="/services/aeo"
              className="font-medium text-accent underline-offset-4 hover:underline"
            >
              AEO services
            </Link>
            ,{" "}
            <Link
              href="/services/ai-marketing"
              className="font-medium text-accent underline-offset-4 hover:underline"
            >
              AI marketing
            </Link>
            , and{" "}
            <Link
              href="/blog"
              className="font-medium text-accent underline-offset-4 hover:underline"
            >
              blog
            </Link>
            . Learn more{" "}
            <Link
              href="/about"
              className="font-medium text-accent underline-offset-4 hover:underline"
            >
              about Worksthal
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-gradient-to-br from-card to-card/50 p-8 text-center md:p-12">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20">
              <FileSearch className="h-8 w-8 text-accent" />
            </div>
          </div>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Ready to Uncover Your SEO Opportunities?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Get a free consultation to discuss your site, goals, and how our SEO audit can identify
            the highest-impact improvements for your rankings.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-all hover:bg-accent/90"
          >
            Get a Free SEO Audit Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
