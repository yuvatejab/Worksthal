import type { Metadata } from "next";
import { BlogPageClient } from "@/components/BlogPageClient";

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
    title: "How to Choose an AI Studio: What to Look For in 2026",
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
  return <BlogPageClient blogPosts={blogPosts} curatedReads={curatedReads} categoryColors={categoryColors} />;
}
