import type { Metadata } from "next";
import { Globe, Zap, Smartphone, Search, ArrowRight, CheckCircle2, Code, Gauge } from "lucide-react";
import Link from "next/link";

const baseUrl = "https://www.worksthal.com";

const pageFaqs = [
  {
    question: "What is Next.js web development?",
    answer:
      "Next.js is a React framework that enables server-side rendering (SSR), static site generation, and full-stack capabilities. Companies like Netflix, Notion, and TikTok use Next.js for fast, scalable web applications. Worksthal builds websites with Next.js for optimal performance and SEO.",
  },
  {
    question: "How long does it take to build a website with Next.js?",
    answer:
      "Landing pages and simple corporate sites typically take 2–4 weeks. Complex web applications with authentication, dashboards, or e-commerce features take 6–12 weeks. Worksthal provides detailed timelines during the discovery phase.",
  },
  {
    question: "Does Worksthal build SEO-optimized websites?",
    answer:
      "Yes. Worksthal delivers server-rendered content, structured data (JSON-LD), semantic HTML, and Core Web Vitals optimization. For deeper AI visibility, explore our AI Engine Optimization (AEO) services.",
  },
  {
    question: "Can Worksthal redesign my existing website?",
    answer:
      "Yes. Worksthal migrates sites from WordPress, Wix, Squarespace, and other platforms to modern Next.js while preserving SEO rankings. We handle content migration, redirects, and structured data updates.",
  },
  {
    question: "What is the cost of a custom website?",
    answer:
      "Corporate websites and landing pages typically range from $5,000 to $15,000. E-commerce and SaaS applications cost more based on scope. Worksthal provides transparent quotes after a free consultation.",
  },
];

function PageJsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website Design and Development",
    description:
      "Worksthal creates fast, responsive, conversion-optimized websites using Next.js, React, and TypeScript with SEO best practices.",
    provider: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Worksthal",
      url: baseUrl,
    },
    areaServed: "Worldwide",
    url: `${baseUrl}/services/web-development`,
    datePublished: "2024-01-01",
    dateModified: "2026-02-27",
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
        name: "Web Development",
        item: `${baseUrl}/services/web-development`,
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
  title: "Web Development Services | Next.js, React & TypeScript | Worksthal",
  description:
    "Website development services using Next.js, React, and TypeScript with 90+ PageSpeed scores, mobile-first, SEO-optimized. Custom web development for businesses worldwide. Free consultation.",
  keywords: [
    "Next.js development",
    "React development",
    "TypeScript development",
    "web development services",
    "modern web applications",
    "responsive web design",
    "SEO-optimized websites",
    "web development agency",
    "website development",
    "website development company",
    "custom website development",
    "web application development",
    "ecommerce website development",
    "web design and development",
    "website development services",
  ],
  alternates: {
    canonical: `${baseUrl}/services/web-development`,
  },
  openGraph: {
    title: "Web Development Services | Next.js, React & TypeScript | Worksthal",
    description:
      "Build fast, modern websites with Worksthal. We create responsive web applications using Next.js, React, and TypeScript that deliver exceptional performance and user experience.",
    type: "website",
    url: `${baseUrl}/services/web-development`,
    siteName: "Worksthal",
  },
};

const benefits = [
  {
    icon: Zap,
    title: "Lightning-Fast Performance",
    description: "Server-side rendering and optimized code delivery ensure your website loads instantly on all devices.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive layouts that provide exceptional user experience across desktop, tablet, and mobile devices.",
  },
  {
    icon: Search,
    title: "SEO-Optimized Architecture",
    description: "Built-in SEO best practices, structured data, and semantic HTML for better search engine rankings.",
  },
  {
    icon: Gauge,
    title: "Conversion-Focused",
    description: "Strategic design and user flows that guide visitors toward taking action and becoming customers.",
  },
];

const projectTypes = [
  {
    title: "Corporate Websites & Landing Pages",
    description: "Professional websites that establish credibility, communicate your value proposition, and convert visitors into leads.",
    features: ["Custom design", "Content management", "Contact forms", "Analytics integration"],
  },
  {
    title: "E-commerce Platforms",
    description: "Full-featured online stores with product catalogs, shopping carts, payment processing, and order management.",
    features: ["Product management", "Payment integration", "Inventory tracking", "Order fulfillment"],
  },
  {
    title: "SaaS Web Applications",
    description: "Complex web applications with user authentication, dashboards, data visualization, and API integrations.",
    features: ["User authentication", "Role-based access", "Real-time updates", "API integration"],
  },
  {
    title: "Portfolio & Showcase Websites",
    description: "Visually stunning websites that showcase your work, projects, or products with engaging interactions.",
    features: ["Image galleries", "Case studies", "Testimonials", "Contact forms"],
  },
  {
    title: "Custom Web Tools & Dashboards",
    description: "Specialized web applications for data visualization, reporting, analytics, or internal business processes.",
    features: ["Data visualization", "Custom reports", "User management", "Export capabilities"],
  },
];

const techStack = [
  {
    category: "Frontend",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express", "PostgreSQL", "Prisma ORM", "REST APIs"],
  },
  {
    category: "Infrastructure",
    technologies: ["Vercel", "AWS", "Docker", "GitHub Actions", "CI/CD"],
  },
  {
    category: "Tools & Services",
    technologies: ["Google Analytics", "Stripe", "SendGrid", "Cloudflare", "Sentry"],
  },
];

const process = [
  {
    step: "1",
    title: "Discovery & Planning",
    description: "We understand your business goals, target audience, and technical requirements to create a detailed project roadmap.",
  },
  {
    step: "2",
    title: "Design & Prototyping",
    description: "We design user interfaces and create interactive prototypes to validate the user experience before development.",
  },
  {
    step: "3",
    title: "Development & Testing",
    description: "We build your website using modern frameworks, following best practices for performance, security, and maintainability.",
  },
  {
    step: "4",
    title: "Launch & Optimization",
    description: "We deploy your website, monitor performance, and continuously optimize based on user behavior and analytics.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageJsonLd />
      {/* Hero Section */}
      <section className="relative w-full px-4 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-background to-background" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Link
            href="/services"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to Services
          </Link>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/5 px-4 py-2 text-sm font-medium text-secondary backdrop-blur-sm">
            <Globe className="h-4 w-4" />
            Web Development
          </div>
          <h1 className="mb-6 font-serif text-5xl font-bold text-foreground md:text-6xl lg:text-7xl">
            Build Modern Websites That{" "}
            <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
              Convert & Perform
            </span>
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Worksthal creates fast, responsive, conversion-optimized websites using Next.js, React, and
            TypeScript. These modern web applications follow SEO best practices for high search rankings
            and are designed to turn visitors into paying customers.
          </p>
          
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground transition-all hover:bg-secondary/90"
          >
            Get a Free Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="w-full px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Why Choose Professional Website Development Services?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Modern web frameworks deliver superior performance, better user experience, and easier
              maintenance compared to traditional website builders.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-secondary/50 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 transition-colors group-hover:bg-secondary/20">
                    <Icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="w-full bg-gradient-to-b from-card/50 to-background px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Website Development Services We Offer
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              From simple landing pages to complex web applications, Worksthal delivers custom solutions
              tailored to your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {projectTypes.map((project, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-secondary/30 hover:shadow-md"
              >
                <h3 className="mb-3 text-xl font-semibold text-foreground">{project.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-1 text-xs text-muted-foreground"
                    >
                      <CheckCircle2 className="h-3 w-3 text-secondary" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="w-full px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Web Development Technologies and Tools
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We use industry-leading technologies to build scalable, maintainable web applications.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {techStack.map((stack, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="mb-4 text-lg font-semibold text-foreground">{stack.category}</h3>
                <div className="space-y-2">
                  {stack.technologies.map((tech, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="w-full bg-gradient-to-b from-card/50 to-background px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Our Website Development Process
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We follow a structured approach to ensure your website is delivered on time, on budget,
              and exceeds expectations.
            </p>
          </div>
          <div className="space-y-6">
            {process.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 rounded-2xl border border-border bg-card p-6 transition-all hover:border-secondary/30"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-accent font-serif text-xl font-bold text-secondary-foreground">
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

      {/* What is Modern Web Development? */}
      <section className="w-full px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
            What is Modern Web Development?
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-foreground">Modern web development</strong> uses frameworks like{" "}
              <Link
                href="/blog/nextjs-vs-react-comparison"
                className="font-medium text-secondary underline underline-offset-4 hover:text-secondary/90"
              >
                Next.js and React
              </Link>{" "}
              to build fast, scalable websites with server-side rendering, type safety, and built-in SEO. Unlike legacy CMS platforms, modern stacks deliver better performance, security, and maintainability.
            </p>
            <p>
              Worksthal builds websites with Next.js, React, and TypeScript. These technologies power sites used by Netflix, Notion, and TikTok. Server-rendered content improves search rankings and Core Web Vitals. For businesses that want to appear in AI-generated answers, we offer{" "}
              <Link
                href="/services/aeo"
                className="font-medium text-secondary underline underline-offset-4 hover:text-secondary/90"
              >
                AI Engine Optimization (AEO)
              </Link>{" "}
              to optimize content for ChatGPT, Claude, Perplexity, and Google AI Overviews.
            </p>
            <p>
              Modern web development reduces load times, improves conversion rates, and future-proofs your digital presence. Worksthal delivers custom websites tailored to your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-gradient-to-b from-card/50 to-background px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {pageFaqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-secondary/30"
              >
                <h3 className="mb-3 text-lg font-semibold text-foreground">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.question === "Does Worksthal build SEO-optimized websites?" && (
                    <>
                      Yes. Worksthal delivers server-rendered content, structured data (JSON-LD), semantic HTML, and Core Web Vitals optimization. For deeper AI visibility, explore our{" "}
                      <Link
                        href="/services/aeo"
                        className="font-medium text-secondary underline underline-offset-4 hover:text-secondary/90"
                      >
                        AI Engine Optimization (AEO)
                      </Link>{" "}
                      services.
                    </>
                  )}
                  {faq.question === "What is Next.js web development?" && (
                    <>
                      Next.js is a React framework that enables server-side rendering (SSR), static site generation, and full-stack capabilities. Companies like Netflix, Notion, and TikTok use Next.js for fast, scalable web applications. Worksthal builds websites with Next.js for optimal performance and SEO.
                    </>
                  )}
                  {faq.question === "How long does it take to build a website with Next.js?" && (
                    <>
                      Landing pages and simple corporate sites typically take 2–4 weeks. Complex web applications with authentication, dashboards, or e-commerce features take 6–12 weeks. Worksthal provides detailed timelines during the discovery phase.
                    </>
                  )}
                  {faq.question === "Can Worksthal redesign my existing website?" && (
                    <>
                      Yes. Worksthal migrates sites from WordPress, Wix, Squarespace, and other platforms to modern Next.js while preserving SEO rankings. We handle content migration, redirects, and structured data updates.
                    </>
                  )}
                  {faq.question === "What is the cost of a custom website?" && (
                    <>
                      Corporate websites and landing pages typically range from $5,000 to $15,000. E-commerce and SaaS applications cost more based on scope. Worksthal provides transparent quotes after a{" "}
                      <Link
                        href="/faq"
                        className="font-medium text-secondary underline underline-offset-4 hover:text-secondary/90"
                      >
                        free consultation
                      </Link>
                      .
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-muted-foreground">
            Have more questions? Visit our{" "}
            <Link
              href="/faq"
              className="font-medium text-secondary underline underline-offset-4 hover:text-secondary/90"
            >
              FAQ page
            </Link>{" "}
            or explore our{" "}
            <Link
              href="/services/ai-automation"
              className="font-medium text-secondary underline underline-offset-4 hover:text-secondary/90"
            >
              AI automation
            </Link>
            ,{" "}
            <Link
              href="/services/aeo"
              className="font-medium text-secondary underline underline-offset-4 hover:text-secondary/90"
            >
              AEO
            </Link>
            , and{" "}
            <Link
              href="/services/ai-marketing"
              className="font-medium text-secondary underline underline-offset-4 hover:text-secondary/90"
            >
              AI marketing
            </Link>{" "}
            services. Learn more <Link href="/about" className="font-medium text-secondary underline underline-offset-4 hover:text-secondary/90">about Worksthal</Link>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-gradient-to-br from-card to-card/50 p-8 text-center md:p-12">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20">
              <Code className="h-8 w-8 text-secondary" />
            </div>
          </div>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Ready to Build Your Website?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Schedule a free consultation to discuss your project. We&apos;ll help you define requirements,
            estimate timelines, and create a roadmap for success.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground transition-all hover:bg-secondary/90"
          >
            Get a Free Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
