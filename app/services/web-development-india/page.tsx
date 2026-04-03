import type { Metadata } from "next";
import { Globe, Zap, Smartphone, Search, ArrowRight, CheckCircle2, Code } from "lucide-react";
import Link from "next/link";

const baseUrl = "https://www.worksthal.com";

const pageFaqs = [
  {
    question: "What website development services does Worksthal offer?",
    answer:
      "Worksthal builds corporate websites, SaaS applications, e-commerce platforms, and landing pages using Next.js, React, and TypeScript. All projects are fast, responsive, and SEO-optimized for businesses worldwide.",
  },
  {
    question: "Does Worksthal serve clients outside India?",
    answer:
      "Yes. Worksthal serves businesses worldwide. Based in India, we deliver professional website development services to clients across the globe with transparent communication and agile delivery.",
  },
  {
    question: "How do I get started with website development?",
    answer:
      "Schedule a free consultation via our contact page. We'll discuss your requirements, timeline, and budget, then provide a detailed proposal. No obligation.",
  },
];

function PageJsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website Development Services",
    description:
      "Professional website development services using Next.js, React, and TypeScript. Worksthal builds fast, responsive, SEO-optimized websites for businesses worldwide. Based in India, serving global clients.",
    provider: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Worksthal",
      url: baseUrl,
    },
    areaServed: "Worldwide",
    url: `${baseUrl}/services/web-development-india`,
    datePublished: "2026-03-03",
    dateModified: "2026-03-03",
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
        name: "Web Development India",
        item: `${baseUrl}/services/web-development-india`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

export const metadata: Metadata = {
  title: "Website Development Company | Global Web Development Services | Worksthal",
  description:
    "Professional website development services using Next.js, React, and TypeScript. Worksthal builds fast, responsive, SEO-optimized websites for businesses worldwide. Based in India, serving global clients. Free consultation.",
  keywords: [
    "website development company",
    "web development services",
    "website development",
    "Next.js development",
    "React development",
    "web development studio",
    "custom website development",
    "website development services",
    "web application development",
  ],
  alternates: {
    canonical: `${baseUrl}/services/web-development-india`,
  },
  openGraph: {
    title: "Website Development Company | Global Web Development Services | Worksthal",
    description:
      "Professional website development services using Next.js, React, and TypeScript. Worksthal builds fast, responsive, SEO-optimized websites for businesses worldwide. Based in India, serving global clients.",
    type: "website",
    url: `${baseUrl}/services/web-development-india`,
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
    icon: Globe,
    title: "Global Delivery",
    description: "Serving businesses worldwide with agile workflows, transparent communication, and on-time delivery.",
  },
];

const serviceTypes = [
  {
    title: "Corporate Websites",
    description: "Professional websites that establish credibility, communicate your value proposition, and convert visitors into leads.",
    features: ["Custom design", "Content management", "Contact forms", "Analytics integration"],
  },
  {
    title: "SaaS Web Applications",
    description: "Complex web applications with user authentication, dashboards, data visualization, and API integrations.",
    features: ["User authentication", "Role-based access", "Real-time updates", "API integration"],
  },
  {
    title: "E-commerce Platforms",
    description: "Full-featured online stores with product catalogs, shopping carts, payment processing, and order management.",
    features: ["Product management", "Payment integration", "Inventory tracking", "Order fulfillment"],
  },
  {
    title: "Landing Pages",
    description: "Conversion-focused landing pages for campaigns, product launches, and lead generation.",
    features: ["A/B testing ready", "Conversion optimization", "Analytics", "Fast load times"],
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

export default function WebDevelopmentIndiaPage() {
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
            Website Development
          </div>
          <h1 className="mb-6 font-serif text-5xl font-bold text-foreground md:text-6xl lg:text-7xl">
            Professional Website Development Services for Global Businesses
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Worksthal builds modern websites for businesses worldwide using Next.js, React, and TypeScript.
            Our fast, responsive, SEO-optimized websites help you reach customers globally. Based in India,
            we deliver professional web development services with transparent communication and agile workflows.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            Explore our full{" "}
            <Link
              href="/services/web-development"
              className="font-medium text-secondary underline underline-offset-4 hover:text-secondary/90"
            >
              web development services
            </Link>{" "}
            or get in touch for a free consultation.
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
              Why Choose Worksthal for Website Development
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

      {/* Website Development Services */}
      <section className="w-full bg-gradient-to-b from-card/50 to-background px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Website Development Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              From corporate sites to landing pages, Worksthal delivers custom solutions tailored to
              your business needs worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {serviceTypes.map((project, index) => (
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
          <p className="mt-8 text-center text-muted-foreground">
            For more details, see our{" "}
            <Link
              href="/services/web-development"
              className="font-medium text-secondary underline underline-offset-4 hover:text-secondary/90"
            >
              full web development services
            </Link>{" "}
            page.
          </p>
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
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
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
            </Link>
            , explore{" "}
            <Link
              href="/services"
              className="font-medium text-secondary underline underline-offset-4 hover:text-secondary/90"
            >
              all services
            </Link>
            , or learn more{" "}
            <Link
              href="/about"
              className="font-medium text-secondary underline underline-offset-4 hover:text-secondary/90"
            >
              about Worksthal
            </Link>
            .
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
