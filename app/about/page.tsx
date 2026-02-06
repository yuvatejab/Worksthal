import type { Metadata } from "next";
import { Target, Users, Code, Zap, MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { NumberTicker } from "@/components/ui/number-ticker";

const baseUrl = "https://worksthal.vercel.app";

export const metadata: Metadata = {
  title: "About Worksthal — AI Automation & Web Development Agency in Hyderabad",
  description:
    "Worksthal is a digital agency based in Hyderabad, India, specializing in AI workflow automation, Next.js web development, and AI engine optimization (AEO). Learn about our mission, values, and approach to practical AI implementation.",
  keywords: [
    "about Worksthal",
    "digital agency Hyderabad",
    "AI automation agency India",
    "web development company Hyderabad",
    "Worksthal team",
  ],
  alternates: {
    canonical: `${baseUrl}/about`,
  },
  openGraph: {
    title: "About Worksthal — AI Automation & Web Development Agency",
    description:
      "Learn about Worksthal, a Hyderabad-based digital agency specializing in AI automation, web development, and AEO. Discover our mission to help businesses grow through practical AI implementation.",
    type: "website",
    url: `${baseUrl}/about`,
    siteName: "Worksthal",
  },
};

const values = [
  {
    icon: Target,
    title: "Practical AI Implementation",
    description:
      "Worksthal implements AI tools that solve real business problems and deliver measurable ROI. Every automation is built around your existing tools and workflows, ensuring seamless integration and immediate value.",
  },
  {
    icon: Users,
    title: "Transparent Partnership",
    description:
      "Worksthal operates with full transparency — clear project scopes, defined milestones, and regular progress updates. Clients understand exactly what is being built, why it matters, and what results to expect.",
  },
  {
    icon: Code,
    title: "Technical Excellence",
    description:
      "Worksthal uses a modern technology stack — Next.js, React, TypeScript, and Tailwind CSS — following industry best practices. Solutions are built to scale with your business and require minimal ongoing maintenance.",
  },
  {
    icon: Zap,
    title: "Results-Driven Approach",
    description:
      "Worksthal focuses on outcomes that matter — time saved, revenue generated, costs reduced. Every project is measured against clear success metrics, not vanity numbers.",
  },
];

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    value: 2.5,
    suffix: "x",
    label: "Average ROI",
    decimals: 1,
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    value: 20,
    suffix: "hrs",
    label: "Saved Weekly per Client",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full px-4 py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            About Worksthal
          </div>
          <h1 className="mb-6 font-serif text-5xl font-bold text-foreground md:text-6xl lg:text-7xl">
            Digital Agency Built for{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Growing Businesses
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Worksthal is a digital agency based in Hyderabad, India, built around practical AI
            implementation and clean execution. Worksthal focuses on delivering useful work that
            generates measurable results — from custom AI automation workflows that eliminate repetitive
            tasks to modern websites built with Next.js that deliver exceptional performance and user
            experience.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-2 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-primary">
                      <NumberTicker value={stat.value} decimalPlaces={stat.decimals || 0} />
                    </span>
                    <span className="text-2xl font-bold text-primary">{stat.suffix}</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-card to-card/50 p-8 md:p-12">
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Our Mission
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-foreground">
              Worksthal exists to help growing businesses leverage AI and modern technology without the
              complexity, hype, or overhead of traditional agencies.
            </p>
            <p className="mb-4 text-base leading-relaxed text-muted-foreground">
              Most businesses know they should be using AI and automation, but they don't know where to
              start. They're overwhelmed by buzzwords, skeptical of overpromises, and worried about
              wasting time and money on tools that don't deliver.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Worksthal cuts through the noise. We implement practical AI solutions that solve real
              problems, automate repetitive work, and generate measurable ROI. No fluff, no jargon —
              just clear execution that delivers results.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="w-full bg-gradient-to-b from-card/50 to-background px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Our Values & Approach
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              These principles guide how we work with clients and build solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why AI Section */}
      <section className="w-full px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-card to-card/50 p-8 md:p-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
              <div className="flex-shrink-0">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary">
                  <Zap className="h-10 w-10 text-primary-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="mb-4 font-serif text-3xl font-bold text-foreground">
                  Why AI — The Right Way
                </h3>
                <p className="mb-4 text-lg text-foreground">AI as a practical tool, not a buzzword</p>
                <p className="text-muted-foreground">
                  Worksthal uses AI to reduce effort, improve clarity, and accelerate execution — not to
                  overcomplicate things or replace human judgment. Worksthal's approach combines human
                  expertise with AI capabilities from OpenAI, Claude, and Gemini to deliver solutions
                  that produce measurable business outcomes. Every AI implementation is validated against
                  real performance data before deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="w-full bg-gradient-to-b from-card/50 to-background px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Worksthal is based in Hyderabad, India, and serves clients worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Location</h3>
              <p className="text-sm text-muted-foreground">
                Hyderabad, Telangana
                <br />
                India
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Email</h3>
              <a
                href="mailto:contact@worksthal.com"
                className="text-sm text-primary hover:underline"
              >
                contact@worksthal.com
              </a>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Phone</h3>
              <a href="tel:+916309821905" className="text-sm text-primary hover:underline">
                +91 63098 21905
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-gradient-to-br from-card to-card/50 p-8 text-center md:p-12">
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Let's Work Together
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Ready to automate your workflows, build a modern website, or optimize for AI search? Get a
            free consultation to discuss your project.
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
