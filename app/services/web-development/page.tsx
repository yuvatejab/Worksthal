import type { Metadata } from "next";
import { Globe, Zap, Smartphone, Search, ArrowRight, CheckCircle2, Code, Layers, Gauge } from "lucide-react";
import Link from "next/link";

const baseUrl = "https://worksthal.vercel.app";

export const metadata: Metadata = {
  title: "Web Development Services — Next.js, React & TypeScript | Worksthal",
  description:
    "Worksthal creates fast, responsive, conversion-optimized websites using Next.js, React, and TypeScript. Build modern web applications with exceptional performance and SEO. Get a free consultation.",
  keywords: [
    "Next.js development",
    "React development",
    "TypeScript development",
    "web development services",
    "modern web applications",
    "responsive web design",
    "SEO-optimized websites",
    "web development agency",
  ],
  alternates: {
    canonical: `${baseUrl}/services/web-development`,
  },
  openGraph: {
    title: "Web Development Services — Next.js, React & TypeScript | Worksthal",
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
              Why Choose Modern Web Development?
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
              Types of Web Projects We Build
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
              Our Technology Stack
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
              Our Development Process
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
            Schedule a free consultation to discuss your project. We'll help you define requirements,
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
