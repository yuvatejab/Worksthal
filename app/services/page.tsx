import type { Metadata } from "next";
import { Workflow, Globe, Search, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const baseUrl = "https://worksthal.vercel.app";

export const metadata: Metadata = {
  title: "Services — AI Automation, Web Development & AEO | Worksthal",
  description:
    "Worksthal offers AI workflow automation, Next.js web development, AI engine optimization (AEO), and data-driven marketing services. Discover how we help businesses automate tasks, build modern websites, and improve search visibility.",
  keywords: [
    "AI automation services",
    "workflow automation",
    "web development services",
    "Next.js development",
    "AEO services",
    "AI engine optimization",
    "digital marketing services",
    "business automation",
  ],
  alternates: {
    canonical: `${baseUrl}/services`,
  },
  openGraph: {
    title: "Services — AI Automation, Web Development & AEO | Worksthal",
    description:
      "Discover Worksthal's services: AI workflow automation, modern web development, AEO optimization, and data-driven marketing. Transform your business with practical AI solutions.",
    type: "website",
    url: `${baseUrl}/services`,
    siteName: "Worksthal",
  },
};

const services = [
  {
    name: "AI Workflow Automation",
    slug: "ai-automation",
    icon: Workflow,
    description:
      "Worksthal builds custom AI automation workflows using n8n, Make, and AI APIs. These workflows connect your existing business tools, automate repetitive data processing, and trigger event-driven actions in real time.",
    benefits: [
      "Eliminate manual data entry and repetitive tasks",
      "Connect CRMs, email platforms, databases, and third-party APIs",
      "Reduce human errors in data processing",
      "Free up your team to focus on strategic work",
      "Scale operations without increasing headcount",
    ],
    technologies: ["n8n", "Make", "Zapier", "OpenAI API", "Claude API", "Custom APIs"],
    useCases: [
      "Automated lead qualification and routing",
      "Invoice processing and data extraction",
      "Social media content scheduling",
      "Customer support ticket automation",
      "Report generation and distribution",
    ],
  },
  {
    name: "Website Design and Development",
    slug: "web-development",
    icon: Globe,
    description:
      "Worksthal creates fast, responsive, conversion-optimized websites using Next.js, React, and TypeScript. These modern web applications follow SEO best practices for high search rankings and are designed to turn visitors into paying customers.",
    benefits: [
      "Lightning-fast page loads with server-side rendering",
      "Mobile-responsive design that works on all devices",
      "SEO-optimized architecture for better search rankings",
      "Conversion-focused design to maximize ROI",
      "Scalable codebase built with modern frameworks",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    useCases: [
      "Corporate websites and landing pages",
      "E-commerce platforms",
      "SaaS web applications",
      "Portfolio and showcase websites",
      "Custom web tools and dashboards",
    ],
  },
  {
    name: "AI Engine Optimization (AEO)",
    slug: "aeo",
    icon: Search,
    description:
      "Worksthal optimizes your content and technical infrastructure so search engines and AI assistants (ChatGPT, Perplexity, Google AI Overviews) can understand and recommend your business. Services include structured data implementation, semantic content optimization, and AI crawler configuration.",
    benefits: [
      "Increase visibility in AI-powered search results",
      "Get cited by ChatGPT, Perplexity, and Google AI Overviews",
      "Improve search engine rankings with structured data",
      "Build topical authority in your industry",
      "Drive qualified traffic that converts",
    ],
    technologies: [
      "Schema.org JSON-LD",
      "Semantic HTML5",
      "AI crawler configuration",
      "Content clusters",
      "Technical SEO",
    ],
    useCases: [
      "FAQ schema implementation for rich results",
      "Organization and LocalBusiness schema setup",
      "Content optimization for AI citation",
      "Technical SEO audits and fixes",
      "AI crawler access configuration",
    ],
  },
  {
    name: "AI-Driven Marketing",
    slug: "ai-marketing",
    icon: TrendingUp,
    description:
      "Worksthal delivers data-driven marketing campaigns powered by AI analytics. Using tools like Google Analytics, Search Console, Ahrefs, and Semrush, Worksthal creates targeted content strategies, optimizes ad spend for maximum ROI, and identifies the growth levers that actually increase your revenue.",
    benefits: [
      "Data-driven decisions backed by analytics",
      "Targeted content strategies that attract your ideal customers",
      "Ad spend optimization for maximum ROI",
      "Competitive analysis and market positioning",
      "Performance tracking and continuous improvement",
    ],
    technologies: [
      "Google Analytics 4",
      "Google Search Console",
      "Ahrefs",
      "Semrush",
      "Google Ads",
      "Meta Ads",
    ],
    useCases: [
      "SEO content strategy and execution",
      "Paid advertising campaign management",
      "Conversion rate optimization",
      "Competitor analysis and benchmarking",
      "Marketing analytics and reporting",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full px-4 py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            Our Services
          </div>
          <h1 className="mb-6 font-serif text-5xl font-bold text-foreground md:text-6xl lg:text-7xl">
            Comprehensive Digital Solutions for Growing Businesses
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Worksthal offers four core services designed to automate your operations, enhance your
            digital presence, and accelerate business growth through practical AI implementation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full px-4 py-12">
        <div className="mx-auto max-w-7xl space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.slug}
                className={`flex flex-col gap-8 lg:flex-row lg:gap-12 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Icon & Title Column */}
                <div className="flex-shrink-0 lg:w-1/3">
                  <div className="sticky top-24">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
                      {service.name}
                    </h2>
                    <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Details Column */}
                <div className="flex-1 space-y-8">
                  {/* Benefits */}
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="mb-4 text-xl font-semibold text-foreground">Key Benefits</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="mb-4 text-xl font-semibold text-foreground">
                      Technologies & Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="mb-4 text-xl font-semibold text-foreground">
                      Common Use Cases
                    </h3>
                    <ul className="space-y-2">
                      {service.useCases.map((useCase, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-gradient-to-br from-card to-card/50 p-8 text-center md:p-12">
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Get a free consultation to discuss your project and discover how Worksthal can help you
            automate operations, build better digital products, and grow faster.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            Get a Free Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
