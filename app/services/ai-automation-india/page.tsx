import type { Metadata } from "next";
import { Workflow, Bot, ArrowRight, CheckCircle2, Clock, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

const baseUrl = "https://www.worksthal.com";

const pageFaqs = [
  {
    question: "What AI automation services does Worksthal offer?",
    answer:
      "Worksthal builds custom workflow automation for lead management, data processing, report generation, and CRM automation. We use n8n, Make, and AI APIs to eliminate 10-20 hours of manual work weekly for businesses worldwide.",
  },
  {
    question: "Does Worksthal serve clients outside India?",
    answer:
      "Yes. Worksthal serves businesses worldwide. Based in India, we deliver AI automation services to clients across the globe with transparent communication and agile delivery.",
  },
  {
    question: "How do I get started with AI automation?",
    answer:
      "Schedule a free consultation via our contact page. We'll analyze your workflows, identify automation opportunities, and provide a detailed proposal. No obligation.",
  },
];

function PageJsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Automation Services",
    description:
      "Custom AI automation services using n8n, Make, and AI APIs. Worksthal builds workflow automation that eliminates 10-20 hours of manual work weekly. Serving businesses worldwide. Based in India.",
    provider: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Worksthal",
      url: baseUrl,
    },
    areaServed: "Worldwide",
    url: `${baseUrl}/services/ai-automation-india`,
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
        name: "AI Automation India",
        item: `${baseUrl}/services/ai-automation-india`,
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
  title: "AI Automation Services | Custom Workflow Automation | Worksthal",
  description:
    "Custom AI automation services using n8n, Make, and AI APIs. Worksthal builds workflow automation that eliminates 10-20 hours of manual work weekly. Serving businesses worldwide. Free consultation.",
  keywords: [
    "AI automation services",
    "workflow automation services",
    "business process automation",
    "n8n automation",
    "automation services",
    "AI automation agency",
    "custom automation workflows",
    "automation consultants",
    "task automation",
  ],
  alternates: {
    canonical: `${baseUrl}/services/ai-automation-india`,
  },
  openGraph: {
    title: "AI Automation Services | Custom Workflow Automation | Worksthal",
    description:
      "Custom AI automation services using n8n, Make, and AI APIs. Worksthal builds workflow automation that eliminates 10-20 hours of manual work weekly. Serving businesses worldwide.",
    type: "website",
    url: `${baseUrl}/services/ai-automation-india`,
    siteName: "Worksthal",
  },
};

const benefits = [
  {
    icon: Clock,
    title: "Reclaim Your Time",
    description: "Eliminate 10-20 hours of manual work every week by automating repetitive tasks and data processing.",
  },
  {
    icon: TrendingUp,
    title: "Scale Without Hiring",
    description: "Handle increased workload without expanding your team through intelligent automation.",
  },
  {
    icon: CheckCircle2,
    title: "Reduce Errors",
    description: "Minimize human errors in data entry, processing, and routing with automated workflows.",
  },
  {
    icon: Users,
    title: "Focus on Strategy",
    description: "Free your team from mundane tasks so they can focus on high-value strategic work.",
  },
];

const automationServices = [
  {
    title: "Lead Management Automation",
    description: "Automatically qualify leads, route them to the right sales rep, and trigger follow-up sequences based on behavior and demographics.",
  },
  {
    title: "Data Processing Automation",
    description: "Extract, transform, and load data between systems. Process invoices, documents, and forms using AI-powered workflows.",
  },
  {
    title: "Report Generation & Distribution",
    description: "Automatically pull data from multiple sources, generate formatted reports, and distribute them to stakeholders on a schedule.",
  },
  {
    title: "CRM Automation",
    description: "Sync contacts, update records, trigger workflows, and automate follow-ups across Salesforce, HubSpot, and other CRMs.",
  },
];

const tools = [
  "n8n",
  "Make",
  "Zapier",
  "OpenAI API",
  "Claude API",
  "Gemini API",
  "Custom REST APIs",
  "Webhooks",
  "Airtable",
  "Google Sheets",
  "Slack",
  "Discord",
];

export default function AIAutomationIndiaPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageJsonLd />
      {/* Hero Section */}
      <section className="relative w-full px-4 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Link
            href="/services"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to Services
          </Link>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <Workflow className="h-4 w-4" />
            AI Automation Services
          </div>
          <h1 className="mb-6 font-serif text-5xl font-bold text-foreground md:text-6xl lg:text-7xl">
            AI Automation Services: Custom Workflow Automation for Businesses
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Worksthal builds custom AI automation workflows for businesses worldwide using n8n, Make,
            and AI APIs. Our workflows eliminate 10-20 hours of manual work weekly by automating
            repetitive data processing, lead management, and report generation. Based in India,
            we deliver professional automation services with transparent communication and agile workflows.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            Explore our full{" "}
            <Link
              href="/services/ai-automation"
              className="font-medium text-primary underline underline-offset-4 hover:text-primary/90"
            >
              AI automation services
            </Link>{" "}
            or get in touch for a free consultation.
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

      {/* Benefits Grid */}
      <section className="w-full px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Why Choose Worksthal for AI Automation
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              AI workflow automation transforms how your business operates by eliminating manual tasks
              and connecting your tools into seamless processes.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Automation Services */}
      <section className="w-full bg-gradient-to-b from-card/50 to-background px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Automation Services We Offer
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Worksthal has built automation workflows for various business functions across industries.
              Here are some examples of what we can automate for you.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            {automationServices.map((service, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <h3 className="mb-3 text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-muted-foreground">
            For more details, see our{" "}
            <Link
              href="/services/ai-automation"
              className="font-medium text-primary underline underline-offset-4 hover:text-primary/90"
            >
              full AI automation services
            </Link>{" "}
            page.
          </p>
        </div>
      </section>

      {/* Tools Section */}
      <section className="w-full px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            AI Automation Tools and Technologies
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Worksthal builds automation workflows using industry-leading platforms and APIs.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tech, index) => (
              <span
                key={index}
                className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
              >
                {tech}
              </span>
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
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30"
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
              className="font-medium text-primary underline underline-offset-4 hover:text-primary/90"
            >
              FAQ page
            </Link>
            , explore{" "}
            <Link
              href="/services"
              className="font-medium text-primary underline underline-offset-4 hover:text-primary/90"
            >
              all services
            </Link>
            , or learn more{" "}
            <Link
              href="/about"
              className="font-medium text-primary underline underline-offset-4 hover:text-primary/90"
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
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
              <Bot className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Ready to Automate Your Workflows?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Schedule a free consultation to discuss your automation needs. We&apos;ll analyze your workflows
            and show you exactly how automation can transform your operations.
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
