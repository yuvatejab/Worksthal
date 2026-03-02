import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, ExternalLink, TrendingUp, Users, Globe } from "lucide-react";

const baseUrl = "https://www.worksthal.com";

export const metadata: Metadata = {
  title: "AI Automation, Web Development & AEO Insights | Worksthal Blog",
  description:
    "Read Worksthal's blog for insights on AI workflow automation, web development, AI engine optimization (AEO), and digital marketing. Curated reads from industry leaders plus original articles.",
  keywords: [
    "AI automation blog",
    "web development blog",
    "AEO insights",
    "workflow automation tips",
    "Next.js tutorials",
    "AI marketing strategies",
    "business process automation guide",
    "website development blog",
    "SEO optimization tips",
    "n8n automation tutorials",
  ],
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
  openGraph: {
    title: "AI Automation & Web Development Insights | Worksthal Blog",
    description:
      "Expert insights on AI automation, web development, and AEO from Worksthal. Learn practical strategies to grow your business with AI.",
    type: "website",
    url: `${baseUrl}/blog`,
    siteName: "Worksthal",
  },
};

const blogPosts = [
  {
    title: "What is AI Workflow Automation? A Complete Guide for 2026",
    slug: "what-is-ai-workflow-automation",
    excerpt:
      "Discover how AI workflow automation can transform your business operations by eliminating repetitive tasks, reducing errors, and freeing up your team to focus on strategic work.",
    category: "AI Automation",
    date: "2026-02-06",
    readTime: "8 min read",
    author: "Worksthal Team",
  },
  {
    title: "How to Automate Business Processes with n8n: Step-by-Step Guide",
    slug: "automate-business-processes-n8n",
    excerpt:
      "Learn how to use n8n to build powerful automation workflows that connect your business tools, automate data processing, and trigger event-driven actions in real time.",
    category: "AI Automation",
    date: "2026-02-06",
    readTime: "12 min read",
    author: "Worksthal Team",
  },
  {
    title: "AEO vs SEO: What's the Difference and Why It Matters in 2026",
    slug: "aeo-vs-seo-difference",
    excerpt:
      "Understand the difference between AI Engine Optimization (AEO) and traditional SEO, and learn why optimizing for AI assistants is critical for business visibility in 2026.",
    category: "AEO",
    date: "2026-02-06",
    readTime: "10 min read",
    author: "Worksthal Team",
  },
  {
    title: "Next.js 15 vs React: Which Should You Choose for Your Web Project?",
    slug: "nextjs-vs-react-comparison",
    excerpt:
      "Compare Next.js 15 and React to understand which framework is best for your web development project. Learn about server-side rendering, performance, and SEO benefits.",
    category: "Web Development",
    date: "2026-02-06",
    readTime: "9 min read",
    author: "Worksthal Team",
  },
  {
    title: "How to Choose an AI Agency: What to Look For in 2026",
    slug: "how-to-choose-ai-agency",
    excerpt:
      "A practical guide to evaluating AI agencies for workflow automation, web development, and marketing. Learn what to look for, questions to ask, and red flags to avoid.",
    category: "AI Automation",
    date: "2026-02-25",
    readTime: "9 min read",
    author: "Worksthal Team",
  },
  {
    title: "Complete SEO Audit Checklist for 2026: Step-by-Step Guide",
    slug: "seo-audit-checklist",
    excerpt:
      "A comprehensive SEO audit checklist covering technical SEO, on-page optimization, content analysis, and performance metrics for improving search rankings.",
    category: "AEO",
    date: "2026-02-25",
    readTime: "12 min read",
    author: "Worksthal Team",
  },
  {
    title: "Website Development Cost Guide: What to Budget in 2026",
    slug: "website-development-cost-guide",
    excerpt:
      "A transparent guide to website development costs. Learn what factors affect pricing, typical cost ranges, and how to get the best value for your web project.",
    category: "Web Development",
    date: "2026-02-25",
    readTime: "10 min read",
    author: "Worksthal Team",
  },
  {
    title: "AEO Audit Guide: How to Check If AI Assistants Can Find Your Business",
    slug: "aeo-audit-guide",
    excerpt:
      "Learn how to audit your website for AI Engine Optimization. Check if ChatGPT, Claude, and Perplexity can find, understand, and cite your business.",
    category: "AEO",
    date: "2026-02-25",
    readTime: "9 min read",
    author: "Worksthal Team",
  },
];

const curatedReads = [
  {
    title: "The 8 Best AI Automation Tools in 2026",
    url: "https://zapier.com/blog/ai-automation-tools/",
    excerpt:
      "Zapier's definitive comparison of the top AI automation platforms, from cross-team orchestration to self-hosted solutions like n8n, with evaluation criteria for choosing the right tool for your business.",
    category: "AI Automation",
    source: "Zapier Blog",
    sourceUrl: "https://zapier.com/blog",
    traffic: "7M+ monthly visitors",
    authority: "Authority Score: 75 (Semrush)",
    readTime: "14 min read",
  },
  {
    title: "AI Workflows: How to Actually Use AI in Your Business",
    url: "https://zapier.com/blog/ai-workflows/",
    excerpt:
      "Move beyond simple task automation to intelligent workflows that handle exceptions and complex decisions. Learn how AI automation platforms now coordinate work across entire systems and teams.",
    category: "AI Automation",
    source: "Zapier Blog",
    sourceUrl: "https://zapier.com/blog",
    traffic: "7M+ monthly visitors",
    authority: "Authority Score: 75 (Semrush)",
    readTime: "11 min read",
  },
  {
    title: "The State of AEO & GEO in 2026",
    url: "https://www.searchenginejournal.com/aeo-and-geo-in-2026/563856/",
    excerpt:
      "Enterprise-grade research on Answer Engine Optimization and Generative Engine Optimization, covering schema markup, structured data, topical authority, and AI-optimized workflows with data-backed strategies.",
    category: "AEO & SEO",
    source: "Search Engine Journal",
    sourceUrl: "https://www.searchenginejournal.com",
    traffic: "1.64M monthly visitors",
    authority: "Authority Score: 59 (Semrush)",
    readTime: "18 min read",
  },
  {
    title: "Microsoft's Guide to Winning in AEO & GEO",
    url: "https://www.searchenginejournal.com/a-breakdown-of-microsofts-guide-to-aeo-geo/565651/",
    excerpt:
      "A breakdown of Microsoft's official guidance on AEO, covering how marketing, growth, ecommerce, data, and engineering teams must adapt to AI-driven discovery systems for maximum visibility.",
    category: "AEO & SEO",
    source: "Search Engine Journal",
    sourceUrl: "https://www.searchenginejournal.com",
    traffic: "1.64M monthly visitors",
    authority: "Authority Score: 59 (Semrush)",
    readTime: "15 min read",
  },
  {
    title: "Answer Engine Optimization: What It Is and How to Do It",
    url: "https://semrush.com/blog/answer-engine-optimization",
    excerpt:
      "Semrush's authoritative guide to getting your content cited by AI assistants, covering the technical foundations of AEO, structured data implementation, and measuring AI citation success.",
    category: "AEO & SEO",
    source: "Semrush Blog",
    sourceUrl: "https://www.semrush.com/blog",
    traffic: "40.87M monthly visitors (hubsite)",
    authority: "Industry-leading SEO platform",
    readTime: "12 min read",
  },
  {
    title: "Effectively Monitoring Web Performance",
    url: "https://www.smashingmagazine.com/2025/11/effectively-monitoring-web-performance/",
    excerpt:
      "A practical strategy for Core Web Vitals optimization, covering LCP, CLS, and INP metrics, the difference between synthetic tests and real user data, and how to target the right pages for improvement.",
    category: "Web Development",
    source: "Smashing Magazine",
    sourceUrl: "https://www.smashingmagazine.com",
    traffic: "12.4M monthly visitors",
    authority: "Google PageRank: 7/10",
    readTime: "7 min read",
  },
  {
    title: "How to Fix Largest Contentful Paint Issues with Subpart Analysis",
    url: "https://www.smashingmagazine.com/2025/03/how-fix-largest-contentful-issues-subpart-analysis/",
    excerpt:
      "Master Google's LCP subpart breakdown, understanding TTFB, Resource Load Delay, Resource Load Time, and Element Render Delay to diagnose and fix slow page loads with surgical precision.",
    category: "Web Development",
    source: "Smashing Magazine",
    sourceUrl: "https://www.smashingmagazine.com",
    traffic: "12.4M monthly visitors",
    authority: "Google PageRank: 7/10",
    readTime: "10 min read",
  },
  {
    title: "Next.js Performance Checklist: 20 Optimizations for 2026",
    url: "https://theordinarycompany.io/blog/nextjs-performance-checklist/",
    excerpt:
      "A comprehensive 20-point checklist for Next.js performance, from Server Components and image optimization to font loading strategies, caching patterns, and bundle analysis techniques.",
    category: "Web Development",
    source: "The Ordinary Company",
    sourceUrl: "https://theordinarycompany.io/blog",
    traffic: "Next.js specialized resource",
    authority: "Technical depth & community adoption",
    readTime: "16 min read",
  },
  {
    title: "Introducing: React Best Practices",
    url: "https://vercel.com/blog/introducing-react-best-practices",
    excerpt:
      "Vercel's official framework for React performance optimization, identifying CRITICAL fixes like eliminating async waterfalls and reducing bundle size that move real-world metrics more than micro-optimizations.",
    category: "Web Development",
    source: "Vercel Blog",
    sourceUrl: "https://vercel.com/blog",
    traffic: "Vercel (hosts 700K+ websites)",
    authority: "Next.js creators & maintainers",
    readTime: "8 min read",
  },
  {
    title: "2026 State of Marketing: Data from 1,500+ Global Marketers",
    url: "https://blog.hubspot.com/insiders/inbound-marketing-stats",
    excerpt:
      "HubSpot's flagship research report revealing that 61% of marketers believe AI is the biggest disruption in 20 years, with data on AI adoption rates, content strategies, and the shift to AI-powered search.",
    category: "AI Marketing",
    source: "HubSpot Blog",
    sourceUrl: "https://blog.hubspot.com",
    traffic: "40.87M monthly visitors (hubsite)",
    authority: "Authority Score: 76 (Semrush)",
    readTime: "22 min read",
  },
  {
    title: "AI Search Strategy: A Guide for Modern Marketing Teams",
    url: "https://blog.hubspot.com/marketing/ai-search-strategy",
    excerpt:
      "How to optimize content for AI-powered search engines, shifting from page-level keywords to paragraph-level relationships, entities, and structured data that AI systems prioritize when generating answers.",
    category: "AI Marketing",
    source: "HubSpot Blog",
    sourceUrl: "https://blog.hubspot.com",
    traffic: "40.87M monthly visitors (hubsite)",
    authority: "Authority Score: 76 (Semrush)",
    readTime: "13 min read",
  },
  {
    title: "How AI is Changing SEO: Lessons from a Billion Crawler Requests",
    url: "https://vercel.com/blog/how-were-adapting-seo-for-llms-and-ai-search",
    excerpt:
      "Vercel's data-driven analysis of how AI crawlers are reshaping SEO, with insights from billions of real crawler requests showing how ChatGPT, Perplexity, and Google's AI bots discover and index content.",
    category: "AI Marketing",
    source: "Vercel Blog",
    sourceUrl: "https://vercel.com/blog",
    traffic: "Vercel (hosts 700K+ websites)",
    authority: "Next.js creators & maintainers",
    readTime: "10 min read",
  },
];

const categoryColors: Record<string, string> = {
  "AI Automation": "bg-blue-500/10 text-blue-600 border-blue-500/20 dark:text-blue-400",
  "AEO & SEO": "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400",
  "Web Development": "bg-purple-500/10 text-purple-600 border-purple-500/20 dark:text-purple-400",
  "AI Marketing": "bg-amber-500/10 text-amber-600 border-amber-500/20 dark:text-amber-400",
  "AEO": "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full px-4 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            Insights & Resources
          </div>
          <h1 className="mb-6 font-serif text-5xl font-bold text-foreground md:text-6xl lg:text-7xl">
            AI Automation &amp; Web Development{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Expert insights on AI workflow automation, web development, AI engine optimization, and
            digital marketing, plus curated reads from the industry&apos;s most authoritative sources.
          </p>
        </div>
      </section>

      {/* Our Articles */}
      <section className="w-full px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-serif text-2xl font-bold text-foreground">Our Articles</h2>
            <p className="text-sm text-muted-foreground">{blogPosts.length} articles</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group rounded-2xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="p-6">
                  <div className="mb-4">
                    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${categoryColors[post.category] || "bg-primary/5 text-primary border-primary/20"}`}>
                      {post.category}
                    </span>
                  </div>

                  <h3 className="mb-3 font-serif text-lg font-semibold text-foreground transition-colors group-hover:text-primary leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Industry Reads */}
      <section className="w-full px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
              <Globe className="h-3.5 w-3.5" />
              Curated by Worksthal
            </div>
            <h2 className="mb-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Industry Reads We Recommend
            </h2>
            <p className="max-w-3xl text-base text-muted-foreground leading-relaxed">
              Hand-picked articles from the most authoritative sources in AI automation, web development,
              AEO, and digital marketing. Every resource is selected based on verified traffic data,
              domain authority, and content quality.
            </p>
          </div>

          {/* Category Filter Tags */}
          <div className="mb-8 flex flex-wrap gap-2">
            {["AI Automation", "AEO & SEO", "Web Development", "AI Marketing"].map((cat) => {
              const count = curatedReads.filter((r) => r.category === cat).length;
              return (
                <span
                  key={cat}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium ${categoryColors[cat]}`}
                >
                  {cat}
                  <span className="rounded-full bg-current/10 px-1.5 py-0.5 text-[10px] opacity-70">
                    {count}
                  </span>
                </span>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {curatedReads.map((read, index) => (
              <article
                key={index}
                className="group relative rounded-2xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-xl"
              >
                <div className="p-6">
                  {/* Source & Category */}
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium ${categoryColors[read.category] || "bg-primary/5 text-primary border-primary/20"}`}>
                      {read.category}
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 font-serif text-lg font-semibold text-foreground leading-snug transition-colors group-hover:text-primary">
                    <a href={read.url} target="_blank" rel="noopener noreferrer">
                      {read.title}
                    </a>
                  </h3>

                  {/* Source Badge */}
                  <a
                    href={read.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-3 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Globe className="h-3 w-3" />
                    {read.source}
                  </a>

                  {/* Excerpt */}
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {read.excerpt}
                  </p>

                  {/* Traffic & Authority Proof */}
                  <div className="mb-4 space-y-1.5 rounded-lg border border-border/50 bg-background/50 p-3">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Users className="h-3 w-3 shrink-0 text-primary" />
                      <span>{read.traffic}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <TrendingUp className="h-3 w-3 shrink-0 text-primary" />
                      <span>{read.authority}</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{read.readTime}</span>
                    </div>
                    <a
                      href={read.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                    >
                      Read
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-gradient-to-br from-card to-card/50 p-8 text-center md:p-12">
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Stay Ahead of the Curve
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            We&apos;re creating in-depth guides, tutorials, and case studies on AI automation,
            web development, and AEO strategies. Get in touch to stay updated.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Get in Touch
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-card"
            >
              Explore Our Services
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-card"
            >
              About Worksthal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
