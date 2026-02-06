import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const baseUrl = "https://worksthal.vercel.app";

export const metadata: Metadata = {
  title: "Blog — AI Automation, Web Development & AEO Insights | Worksthal",
  description:
    "Read Worksthal's blog for insights on AI workflow automation, web development, AI engine optimization (AEO), and digital marketing. Learn how to automate tasks, build modern websites, and improve search visibility.",
  keywords: [
    "AI automation blog",
    "web development blog",
    "AEO insights",
    "workflow automation tips",
    "Next.js tutorials",
    "AI marketing strategies",
  ],
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
  openGraph: {
    title: "Blog — AI Automation & Web Development Insights | Worksthal",
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
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full px-4 py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            Insights & Resources
          </div>
          <h1 className="mb-6 font-serif text-5xl font-bold text-foreground md:text-6xl lg:text-7xl">
            Worksthal{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Expert insights on AI workflow automation, web development, AI engine optimization, and
            digital marketing. Learn practical strategies to grow your business with AI.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="w-full px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-serif text-2xl font-bold text-foreground">Latest Articles</h2>
            <p className="text-sm text-muted-foreground">{blogPosts.length} articles</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group rounded-2xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 font-serif text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
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

                  {/* Read More Link */}
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

      {/* Coming Soon Notice */}
      <section className="w-full px-4 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-gradient-to-br from-card to-card/50 p-8 text-center md:p-12">
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            More Content Coming Soon
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            We're actively working on creating in-depth guides, tutorials, and case studies. Check
            back soon for new articles on AI automation, web development, and AEO strategies.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            Get Notified
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
