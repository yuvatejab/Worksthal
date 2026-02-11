import type { Metadata } from "next";
import { Search, Bot, TrendingUp, ArrowRight, CheckCircle2, Sparkles, Target, BarChart } from "lucide-react";
import Link from "next/link";

const baseUrl = "https://worksthal.vercel.app";

export const metadata: Metadata = {
  title: "AI Engine Optimization (AEO) Services — Get Cited by AI | Worksthal",
  description:
    "Worksthal optimizes your content for AI assistants like ChatGPT, Perplexity, and Google AI Overviews. Increase visibility in AI-powered search with structured data, semantic optimization, and AI crawler configuration.",
  keywords: [
    "AEO services",
    "AI engine optimization",
    "AI search optimization",
    "ChatGPT optimization",
    "Perplexity optimization",
    "Google AI Overviews",
    "structured data implementation",
    "semantic SEO",
  ],
  alternates: {
    canonical: `${baseUrl}/services/aeo`,
  },
  openGraph: {
    title: "AI Engine Optimization (AEO) Services | Worksthal",
    description:
      "Get your business cited by AI assistants. Worksthal implements AEO strategies to increase visibility in ChatGPT, Perplexity, and Google AI Overviews.",
    type: "website",
    url: `${baseUrl}/services/aeo`,
    siteName: "Worksthal",
  },
};

const benefits = [
  {
    icon: Bot,
    title: "AI Citation Visibility",
    description: "Get your business recommended by ChatGPT, Perplexity, Claude, and other AI assistants when users ask relevant questions.",
  },
  {
    icon: Search,
    title: "Enhanced Search Rankings",
    description: "Structured data and semantic optimization improve your visibility in traditional search engines like Google and Bing.",
  },
  {
    icon: TrendingUp,
    title: "Future-Proof Strategy",
    description: "Position your business for the AI-driven search landscape where 70% of consumers now use AI for research.",
  },
  {
    icon: Target,
    title: "Qualified Traffic",
    description: "Attract visitors who are actively searching for solutions you provide, leading to higher conversion rates.",
  },
];

const services = [
  {
    title: "Structured Data Implementation",
    description: "We implement JSON-LD schema markup for Organization, LocalBusiness, FAQPage, Article, Product, and other relevant schemas that help search engines and AI understand your content.",
    deliverables: ["Schema markup audit", "JSON-LD implementation", "Rich results optimization", "Validation & testing"],
  },
  {
    title: "Semantic Content Optimization",
    description: "We optimize your content using entity-first writing, semantic triples, and Feature→How→Outcome patterns that AI engines can easily extract and quote.",
    deliverables: ["Content audit", "Semantic optimization", "Entity mapping", "AI-friendly formatting"],
  },
  {
    title: "AI Crawler Configuration",
    description: "We configure robots.txt, llms.txt, and crawler access to ensure AI assistants can discover, access, and index your content properly.",
    deliverables: ["Crawler access setup", "llms.txt creation", "robots.txt optimization", "Sitemap configuration"],
  },
  {
    title: "Content Cluster Architecture",
    description: "We build content clusters with Category Explainer pages linking to Feature pages and Supporting content, creating topical authority that AI engines recognize.",
    deliverables: ["Content strategy", "Cluster mapping", "Internal linking", "Topical authority building"],
  },
  {
    title: "Technical SEO Audit",
    description: "We identify and fix technical issues that prevent search engines and AI from properly crawling, indexing, and understanding your website.",
    deliverables: ["Technical audit report", "Core Web Vitals optimization", "Mobile optimization", "Indexing fixes"],
  },
];

const whyAEO = [
  {
    stat: "70%",
    label: "of consumers use AI for product research",
  },
  {
    stat: "47%",
    label: "of Google queries show AI Overviews",
  },
  {
    stat: "58%",
    label: "of searches result in zero clicks",
  },
  {
    stat: "41%",
    label: "citation rate with FAQ schema vs 15% without",
  },
];

const process = [
  {
    step: "1",
    title: "AEO Audit & Analysis",
    description: "We audit your current content, technical infrastructure, and AI visibility to identify optimization opportunities.",
  },
  {
    step: "2",
    title: "Strategy Development",
    description: "We create a customized AEO strategy based on your industry, target audience, and business goals.",
  },
  {
    step: "3",
    title: "Implementation",
    description: "We implement structured data, optimize content, configure crawlers, and build content clusters.",
  },
  {
    step: "4",
    title: "Monitoring & Optimization",
    description: "We track AI citations, search rankings, and traffic to continuously optimize your AEO performance.",
  },
];

export default function AEOPage() {
  return (
    <main className="min-h-screen bg-background">
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
            AI Engine Optimization (AEO)
          </div>
          <h1 className="mb-6 font-serif text-5xl font-bold text-foreground md:text-6xl lg:text-7xl">
            Get Your Business{" "}
            <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              Cited by AI
            </span>
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Worksthal optimizes your content and technical infrastructure so search engines and AI
            assistants (ChatGPT, Perplexity, Google AI Overviews) can understand and recommend your
            business. With 70% of consumers now using AI for research, AEO ensures your business stays
            visible in the AI-driven search landscape.
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

      {/* Why AEO Stats */}
      <section className="w-full bg-gradient-to-b from-card/50 to-background px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Why AEO Matters in 2026
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              The search landscape has fundamentally changed. AI assistants are now the primary research
              tool for most consumers.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {whyAEO.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:border-accent/50 hover:shadow-lg"
              >
                <div className="mb-2 font-serif text-4xl font-bold text-accent">{item.stat}</div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="w-full px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Benefits of AEO
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              AEO optimization increases your visibility across both traditional search engines and
              AI-powered assistants.
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

      {/* Services */}
      <section className="w-full bg-gradient-to-b from-card/50 to-background px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Our AEO Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive AEO optimization covering technical infrastructure, content strategy, and
              ongoing monitoring.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-md"
              >
                <h3 className="mb-3 text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Deliverables:
                  </p>
                  {service.deliverables.map((deliverable, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-3 w-3 text-accent" />
                      {deliverable}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="w-full px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Our AEO Process
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We follow a data-driven approach to maximize your visibility in AI-powered search results.
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
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-gradient-to-br from-card to-card/50 p-8 text-center md:p-12">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20">
              <Sparkles className="h-8 w-8 text-accent" />
            </div>
          </div>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Ready to Optimize for AI?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Get a free AEO audit to discover how AI assistants see your business and learn exactly what
            optimizations will drive the most impact.
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
