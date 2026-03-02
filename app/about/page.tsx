import type { Metadata } from "next"
import { Target, Users, Code, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { AboutVideoPlayer, StatTicker } from "@/components/about-interactive"

const baseUrl = "https://www.worksthal.com"

export const metadata: Metadata = {
  title: "About Worksthal | AI Automation & Web Development Studio",
  description:
    "Worksthal is a digital solutions studio based in India, founded in 2024, specializing in AI workflow automation, Next.js web development, AEO optimization, and data-driven marketing. Serving clients worldwide.",
  keywords: [
    "about Worksthal",
    "Worksthal agency",
    "AI automation studio",
    "web development studio",
    "digital solutions agency",
    "Worksthal team",
    "n8n automation agency",
    "AEO optimization company",
    "AI agency",
    "automation consultants",
    "website development company",
    "workflow automation agency",
  ],
  alternates: {
    canonical: `${baseUrl}/about`,
  },
  openGraph: {
    title: "About Worksthal | AI Automation & Web Development Studio",
    description:
      "Worksthal builds custom AI automation workflows, modern Next.js websites, and AEO strategies for businesses worldwide. Based in India, founded 2024.",
    type: "website",
    url: `${baseUrl}/about`,
    siteName: "Worksthal",
  },
}

function AboutJsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "Worksthal",
    url: baseUrl,
    description:
      "Worksthal is a digital solutions studio based in India specializing in AI workflow automation, Next.js web development, AI Engine Optimization (AEO), and data-driven marketing. Founded in 2024, Worksthal serves clients worldwide.",
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      name: "Shubham",
      jobTitle: "Founder",
      worksFor: { "@type": "Organization", name: "Worksthal" },
    },
    email: "shubham@worksthal.com",
    telephone: "+916309821905",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    areaServed: { "@type": "Place", name: "Worldwide" },
    knowsAbout: [
      "AI Workflow Automation",
      "n8n Automation",
      "Next.js Web Development",
      "React Development",
      "AI Engine Optimization",
      "Structured Data Implementation",
      "Digital Marketing",
    ],
  }

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${baseUrl}/about`,
    url: `${baseUrl}/about`,
    name: "About Worksthal",
    description:
      "Learn about Worksthal, a digital solutions studio based in India specializing in AI automation, Next.js web development, AEO, and data-driven marketing.",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
    },
    about: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
    },
    dateModified: "2026-02-27",
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "About", item: `${baseUrl}/about` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  )
}


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <AboutJsonLd />
      {/* Hero Section */}
      <section className="relative w-full px-4 pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm font-medium text-primary backdrop-blur-sm">
              About Worksthal
            </div>
            <h1 className="mb-6 font-serif text-5xl font-bold text-foreground md:text-6xl lg:text-7xl max-w-4xl mx-auto leading-tight">
              About Worksthal: AI Automation &amp; Web Development Studio
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Section with Video */}
      <section className="relative w-full px-4 py-12 md:py-20">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Video Player - Left Side */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 flex flex-col items-center">
                <div className="group relative flex flex-col overflow-hidden rounded-2xl w-full bg-card shadow-lg ring-2 ring-border/50">
                  <AboutVideoPlayer />
                </div>
                <p className="mt-4 text-center text-sm text-muted-foreground italic">
                  Hover to expand • Plays automatically
                </p>
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="lg:col-span-7 space-y-12">

              {/* Opening Statement */}
              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Most businesses struggle with the same problem
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    They know they need modern technology. They know AI and automation could save time and reduce costs.
                    But they don&apos;t know where to start, who to trust, or how to avoid wasting money on solutions that don&apos;t deliver.
                  </p>
                  <p className="text-foreground font-medium">
                    Worksthal exists to solve this problem.
                  </p>
                </div>
              </div>

              {/* Core Philosophy */}
              <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 space-y-4">
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  Our Approach
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We implement practical AI solutions and build modern websites that generate measurable results.
                  No buzzwords. No overpromises. Just clear execution focused on outcomes that matter to your business:
                  time saved, revenue generated, costs reduced.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Every project starts with understanding your existing workflows and identifying specific problems worth solving.
                  We then build solutions using proven technology like Next.js, React, TypeScript, and AI tools from OpenAI, Claude, and Gemini,
                  following industry best practices to ensure your solution scales as your business grows.
                </p>
              </div>

              {/* Inline Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm">
                  <div className="mb-2 flex items-baseline justify-center gap-1">
                    <span className="text-4xl md:text-5xl font-bold text-primary">
                      <StatTicker value={50} />
                    </span>
                    <span className="text-2xl font-bold text-primary/60">+</span>
                  </div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Projects
                  </p>
                </div>

                <div className="text-center p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm">
                  <div className="mb-2 flex items-baseline justify-center gap-1">
                    <span className="text-4xl md:text-5xl font-bold text-primary">
                      <StatTicker value={20} />
                    </span>
                    <span className="text-2xl font-bold text-primary/60">hrs</span>
                  </div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Saved Weekly
                  </p>
                </div>

                <div className="text-center p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm">
                  <div className="mb-2 flex items-baseline justify-center gap-1">
                    <span className="text-4xl md:text-5xl font-bold text-primary">
                      <StatTicker value={98} />
                    </span>
                    <span className="text-2xl font-bold text-primary/60">%</span>
                  </div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Satisfaction
                  </p>
                </div>
              </div>

              {/* What Makes Us Different */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  What Makes Us Different
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        We start with your existing workflow
                      </h4>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Before recommending any solution, we map your current processes to identify bottlenecks,
                        repetitive tasks, and opportunities for automation. This ensures every implementation
                        integrates seamlessly with how your team already works.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        We validate ROI before scaling
                      </h4>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Every automation starts as a pilot. We build a minimal version, measure actual time saved
                        and costs reduced, then expand only when the numbers prove it&apos;s worth it. No guesswork.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        We build for the long term
                      </h4>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Solutions are built with modern, maintainable technology stacks. Clear documentation,
                        modular architecture, and adherence to industry best practices ensure your solution
                        remains valuable as your business evolves.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Core Principles - Three Columns */}
      <section className="relative w-full px-4 py-20 md:py-32 bg-gradient-to-b from-background via-card/30 to-background">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-3xl md:text-4xl font-bold text-foreground">
              How We Work
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Three principles that guide every project we take on
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative h-full rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 rounded-2xl" />
              <div className="relative space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Practical AI Implementation
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We implement AI tools that solve real business problems with measurable ROI.
                  Every automation is built around your existing tools and workflows, ensuring seamless
                  integration and immediate value without disrupting how your team operates.
                </p>
              </div>
            </div>

            <div className="group relative h-full rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 rounded-2xl" />
              <div className="relative space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Transparent Partnership
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Full transparency with clear project scopes, defined milestones, and regular progress updates.
                  You understand exactly what is being built, why it matters, and what results to expect.
                  No surprises, no scope creep.
                </p>
              </div>
            </div>

            <div className="group relative h-full rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 rounded-2xl" />
              <div className="relative space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Code className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Technical Excellence
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Modern technology stack built to scale with Next.js, React, TypeScript, and Tailwind CSS.
                  Solutions require minimal ongoing maintenance and
                  adapt as your business grows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="relative w-full px-4 py-20 md:py-32">
        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center">
              Why This Matters
            </h2>
            <div className="rounded-3xl border border-border bg-gradient-to-br from-card to-card/50 p-8 md:p-12 space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Most agencies sell you on vision and potential. They promise transformation, innovation, and disruption.
                Then they deliver generic templates, overcomplicated systems, and solutions that require constant maintenance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Worksthal takes a different approach. We focus on solving specific, measurable problems.
                We start small, validate results, and scale what works. We use AI as a practical tool to eliminate
                repetitive work, not as a marketing buzzword to justify inflated budgets.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The result? Solutions that actually get used. Automations that save real time.
                Websites that perform well and require minimal upkeep. Projects delivered on scope and on budget.
              </p>
              <div className="pt-6 border-t border-border">
                <p className="text-base text-foreground font-medium">
                  We&apos;re based in India and work with clients worldwide.
                  Every project is measured against clear success metrics, not vanity numbers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full px-4 py-20 md:py-32 bg-gradient-to-b from-background to-card/30">
        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-card/50 to-background p-8 md:p-12 text-center space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether you need to automate repetitive workflows, build a modern website,
              or optimize your content for AI search engines, let&apos;s discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:scale-105"
              >
                Get a Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-border bg-background px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-card hover:border-primary/50"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
