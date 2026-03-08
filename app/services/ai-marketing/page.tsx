import type { Metadata } from "next";
import { Target, BarChart, ArrowRight, CheckCircle2, LineChart, PieChart, Activity, TrendingUp } from "lucide-react";
import Link from "next/link";
import { ServiceHero } from "@/components/ServiceHero";

const baseUrl = "https://www.worksthal.com";

const pageFaqs = [
  {
    question: "What is AI-driven marketing?",
    answer:
      "AI-driven marketing is data-driven marketing that uses AI analytics from tools like Google Analytics, Ahrefs, and Semrush to create targeted campaigns, optimize ad spend, and deliver measurable ROI.",
  },
  {
    question: "How does Worksthal measure marketing success?",
    answer:
      "Worksthal tracks conversion rates, ROAS (return on ad spend), cost per acquisition, and organic traffic growth. We provide transparent reporting with actionable insights so you always know how your campaigns perform.",
  },
  {
    question: "Does Worksthal manage Google Ads and Meta Ads?",
    answer:
      "Yes. Worksthal handles full campaign setup, audience targeting, bid optimization, and performance reporting for Google Ads, Meta Ads, and LinkedIn campaigns.",
  },
  {
    question: "How quickly can I expect marketing results?",
    answer:
      "SEO and content marketing typically show meaningful results in 3–6 months. Paid advertising can deliver measurable results within 2–4 weeks of campaign launch.",
  },
  {
    question: "What is the minimum budget for marketing services?",
    answer:
      "SEO and content marketing services start at $2,000/month. Paid ads management varies based on ad spend and campaign scope. Contact us for a custom quote.",
  },
];

function PageJsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI-Driven Marketing",
    description:
      "Data-driven marketing campaigns powered by AI analytics. Targeted content strategies, optimized ad spend, and measurable ROI using Google Analytics, Ahrefs, and Semrush.",
    provider: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Worksthal",
      url: baseUrl,
    },
    areaServed: "Worldwide",
    url: `${baseUrl}/services/ai-marketing`,
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
      { "@type": "ListItem", position: 3, name: "AI-Driven Marketing", item: `${baseUrl}/services/ai-marketing` },
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
  title: "AI-Driven Marketing Services | Data-Driven Growth | Worksthal",
  description:
    "AI marketing services and SEO optimization including data-driven campaigns, SEO audit, content strategy, and PPC management using Google Analytics, Ahrefs, and Semrush. Measurable ROI for businesses worldwide. Free consultation.",
  keywords: [
    "AI marketing services",
    "data-driven marketing",
    "digital marketing agency",
    "SEO services",
    "content marketing",
    "PPC management",
    "marketing analytics",
    "conversion optimization",
    "SEO optimization",
    "SEO audit",
    "SEO agency",
    "marketing automation",
    "AI marketing agency",
    "digital marketing services",
    "SEO consultant",
  ],
  alternates: {
    canonical: `${baseUrl}/services/ai-marketing`,
  },
  openGraph: {
    title: "AI-Driven Marketing Services | Worksthal",
    description:
      "Grow your business with data-driven marketing. Worksthal creates targeted campaigns, optimizes ad spend, and delivers measurable results using AI-powered analytics.",
    type: "website",
    url: `${baseUrl}/services/ai-marketing`,
    siteName: "Worksthal",
  },
};

const benefits = [
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Reach your ideal customers with data-driven audience segmentation and targeting strategies.",
  },
  {
    icon: BarChart,
    title: "Measurable Results",
    description: "Track every metric that matters and make decisions based on real performance data, not guesswork.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Optimization",
    description: "Constantly test, learn, and improve campaigns to maximize ROI and reduce wasted ad spend.",
  },
  {
    icon: Activity,
    title: "Full-Funnel Strategy",
    description: "Optimize every stage from awareness to conversion with coordinated multi-channel campaigns.",
  },
];

const services = [
  {
    title: "SEO & Content Strategy",
    description: "We research keywords, create content strategies, and optimize your website to rank higher in search results and attract qualified organic traffic.",
    deliverables: ["Keyword research", "Content calendar", "On-page SEO", "Link building strategy", "Performance tracking"],
  },
  {
    title: "Paid Advertising Management",
    description: "We create and manage Google Ads, Meta Ads, and LinkedIn campaigns that deliver qualified leads at optimal cost per acquisition.",
    deliverables: ["Campaign setup", "Ad creative", "Audience targeting", "Bid optimization", "Performance reporting"],
  },
  {
    title: "Conversion Rate Optimization",
    description: "We analyze user behavior, identify friction points, and implement A/B tests to increase conversion rates across your website and landing pages.",
    deliverables: ["Conversion audit", "A/B test strategy", "Landing page optimization", "User flow analysis", "Implementation"],
  },
  {
    title: "Marketing Analytics & Reporting",
    description: "We set up comprehensive tracking, create custom dashboards, and deliver actionable insights that inform strategic decisions.",
    deliverables: ["Analytics setup", "Custom dashboards", "Monthly reports", "Insights & recommendations", "Goal tracking"],
  },
  {
    title: "Competitive Analysis",
    description: "We analyze your competitors' strategies, identify market gaps, and find opportunities to differentiate and outperform them.",
    deliverables: ["Competitor research", "Market positioning", "Gap analysis", "Strategy recommendations", "Benchmarking"],
  },
];

const tools = [
  {
    category: "Analytics & Tracking",
    items: ["Google Analytics 4", "Google Search Console", "Hotjar", "Microsoft Clarity", "Google Tag Manager"],
  },
  {
    category: "SEO & Research",
    items: ["Ahrefs", "Semrush", "Moz", "Screaming Frog", "Answer The Public"],
  },
  {
    category: "Advertising",
    items: ["Google Ads", "Meta Ads Manager", "LinkedIn Campaign Manager", "Microsoft Ads"],
  },
  {
    category: "Reporting & Visualization",
    items: ["Looker Studio", "Tableau", "Power BI", "Custom Dashboards"],
  },
];

const process = [
  {
    step: "1",
    title: "Audit & Analysis",
    description: "We audit your current marketing performance, analyze competitors, and identify the highest-impact opportunities.",
  },
  {
    step: "2",
    title: "Strategy Development",
    description: "We create a customized marketing strategy with clear goals, KPIs, and tactical execution plans.",
  },
  {
    step: "3",
    title: "Campaign Execution",
    description: "We implement campaigns across chosen channels, continuously monitoring performance and making data-driven adjustments.",
  },
  {
    step: "4",
    title: "Optimization & Reporting",
    description: "We analyze results, optimize underperforming elements, and provide transparent reporting with actionable insights.",
  },
];

export default function AIMarketingPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageJsonLd />
      <ServiceHero
        iconName="trending-up"
        badge="AI-Driven Marketing"
        title="Marketing That Delivers"
        gradientText="Measurable Growth"
        description="Worksthal delivers data-driven marketing campaigns powered by AI analytics. Using tools like Google Analytics, Search Console, Ahrefs, and Semrush, Worksthal creates targeted content strategies, optimizes ad spend for maximum ROI, and identifies the growth levers that actually increase your revenue, not just vanity metrics."
      />

      {/* Benefits Grid */}
      <section className="w-full px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Why AI-Powered Marketing and SEO Services?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Stop guessing and start growing. Data-driven marketing eliminates waste and focuses
              resources on strategies that actually deliver results.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-success/50 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-success/10 transition-colors group-hover:bg-success/20">
                    <Icon className="h-6 w-6 text-success" />
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
              Digital Marketing and SEO Optimization Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive marketing services covering SEO, paid advertising, conversion optimization,
              and analytics.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-success/30 hover:shadow-md"
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
                      <CheckCircle2 className="h-3 w-3 text-success" />
                      {deliverable}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="w-full px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Marketing and SEO Optimization Tools
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We leverage industry-leading tools to deliver data-driven insights and measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool, index) => (
              <div key={index} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="mb-4 text-lg font-semibold text-foreground">{tool.category}</h3>
                <div className="space-y-2">
                  {tool.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-success" />
                      {item}
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
              Our AI Marketing and SEO Process
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We follow a data-driven approach to maximize ROI and deliver sustainable growth.
            </p>
          </div>
          <div className="space-y-6">
            {process.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 rounded-2xl border border-border bg-card p-6 transition-all hover:border-success/30"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-success to-accent font-serif text-xl font-bold text-success-foreground">
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

      {/* What is AI-Driven Marketing? */}
      <section className="w-full px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
            What is AI-Driven Marketing?
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              AI-driven marketing is data-driven marketing that uses AI analytics from tools like
              Google Analytics, Ahrefs, and Semrush to create targeted campaigns, optimize ad spend,
              and deliver measurable ROI. Instead of guessing, you make decisions based on real
              performance data.
            </p>
            <p>
              Worksthal combines AI-powered insights with human strategy to deliver campaigns that
              convert. We track conversion rates, ROAS, cost per acquisition, and organic traffic
              growth, then optimize continuously. Every campaign is built on clear metrics, so you
              know exactly what&apos;s working and what to adjust. This data-first approach reduces
              wasted spend and focuses resources on strategies that drive real revenue.
            </p>
            <p>
              Our approach aligns with{" "}
              <Link href="/services/aeo" className="font-medium text-foreground underline underline-offset-4 hover:text-success">
                AI Engine Optimization (AEO)
              </Link>
              , ensuring your brand stays visible as search evolves. Learn more about{" "}
              <Link href="/blog/aeo-vs-seo-difference" className="font-medium text-foreground underline underline-offset-4 hover:text-success">
                AEO vs SEO
              </Link>
              {" "}to understand how AI engines are changing how buyers discover brands and why
              optimizing for citations matters as much as rankings.
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
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-success/30"
              >
                <h3 className="mb-3 text-lg font-semibold text-foreground">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Have more questions?{" "}
            <Link href="/faq" className="font-medium text-foreground underline underline-offset-4 hover:text-success">
              View our full FAQ
            </Link>
            <span className="mx-2">·</span>
            <Link href="/services/ai-automation" className="font-medium text-foreground underline underline-offset-4 hover:text-success">
              AI Automation
            </Link>
            <span className="mx-2">·</span>
            <Link href="/services/web-development" className="font-medium text-foreground underline underline-offset-4 hover:text-success">
              Web Development
            </Link>
            <span className="mx-2">·</span>
            <Link href="/services/aeo" className="font-medium text-foreground underline underline-offset-4 hover:text-success">
              AEO Services
            </Link>
            <span className="mx-2">·</span>
            <Link href="/about" className="font-medium text-foreground underline underline-offset-4 hover:text-success">
              About Worksthal
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-gradient-to-br from-card to-card/50 p-8 text-center md:p-12">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-success/20 to-accent/20">
              <LineChart className="h-8 w-8 text-success" />
            </div>
          </div>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Ready to Grow Your Business?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Get a free marketing audit to discover untapped opportunities and learn how data-driven
            strategies can accelerate your growth.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-success px-8 py-4 text-base font-semibold text-success-foreground transition-all hover:bg-success/90"
          >
            Get a Free Marketing Audit
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
