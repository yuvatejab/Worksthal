import type { Metadata } from "next";
import { Bot, Zap, ArrowRight, CheckCircle2, Clock, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import { ServiceHero } from "@/components/ServiceHero";

const baseUrl = "https://www.worksthal.com";

const pageFaqs = [
  {
    question: "What is AI workflow automation?",
    answer: "AI workflow automation is the practice of using artificial intelligence and automation platforms like n8n, Make, and Zapier to streamline business processes, eliminate repetitive manual tasks, and improve operational efficiency. Worksthal builds custom AI automation workflows that connect existing business tools and trigger event-driven actions.",
  },
  {
    question: "How much time can AI automation save my business?",
    answer: "Worksthal's AI automation workflows typically eliminate 10-20 hours of manual work every week by automating repetitive data entry, processing, and routing tasks. The exact time savings depend on your specific workflows and processes.",
  },
  {
    question: "What tools does Worksthal use for automation?",
    answer: "Worksthal builds automation workflows using n8n, Make, Zapier, and custom API integrations. For AI capabilities, Worksthal integrates with OpenAI (GPT-4), Anthropic (Claude), Google (Gemini), and other AI services.",
  },
  {
    question: "How long does it take to implement an automation workflow?",
    answer: "Simple automation workflows take 1-2 weeks to implement. Complex workflows involving multiple systems, custom logic, and AI processing typically take 3-6 weeks. Worksthal follows an agile approach with regular check-ins.",
  },
  {
    question: "Can Worksthal integrate with my existing tools?",
    answer: "Yes. Worksthal specializes in connecting existing business tools into automated workflows. Common integrations include CRMs (Salesforce, HubSpot), email platforms (Gmail, Outlook), databases (PostgreSQL, Airtable), and thousands of other apps.",
  },
];

function PageJsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Workflow Automation",
    description: "Worksthal builds custom AI automation workflows using n8n, Make, and AI APIs. These workflows connect existing business tools, automate repetitive data processing, and trigger event-driven actions in real time.",
    provider: { "@type": "Organization", "@id": `${baseUrl}/#organization`, name: "Worksthal", url: baseUrl },
    areaServed: { "@type": "Place", name: "Worldwide" },
    serviceType: "AI Workflow Automation",
    url: `${baseUrl}/services/ai-automation`,
    datePublished: "2024-01-01",
    dateModified: "2026-02-27",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pageFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${baseUrl}/services` },
      { "@type": "ListItem", position: 3, name: "AI Workflow Automation", item: `${baseUrl}/services/ai-automation` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

export const metadata: Metadata = {
  title: "AI Workflow Automation Services | Save Time & Reduce Errors | Worksthal",
  description:
    "AI automation services using n8n, Make, and AI APIs. Eliminate 10-20 hours of manual work weekly. Custom workflow automation and business process automation for businesses worldwide. Free consultation.",
  keywords: [
    "AI workflow automation",
    "business process automation",
    "n8n automation",
    "Make automation",
    "workflow automation services",
    "AI automation agency",
    "task automation",
    "business automation solutions",
    "automation services",
    "automation consultants",
    "intelligent automation",
    "AI automation services",
    "workflow automation tools",
    "custom automation workflows",
    "zapier alternative",
  ],
  alternates: {
    canonical: `${baseUrl}/services/ai-automation`,
  },
  openGraph: {
    title: "AI Workflow Automation Services | Worksthal",
    description:
      "Automate repetitive tasks and connect your business tools with custom AI workflows. Worksthal builds automation solutions using n8n, Make, and AI APIs.",
    type: "website",
    url: `${baseUrl}/services/ai-automation`,
    siteName: "Worksthal",
  },
};

const benefits = [
  {
    icon: Clock,
    title: "Reclaim Your Time",
    description: "Eliminate hours of manual work every week by automating repetitive tasks and data processing.",
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

const useCases = [
  {
    title: "Lead Management Automation",
    description: "Automatically qualify leads, route them to the right sales rep, and trigger follow-up sequences based on behavior and demographics.",
  },
  {
    title: "Invoice & Document Processing",
    description: "Extract data from invoices, receipts, and documents using AI, then automatically update your accounting system and trigger approvals.",
  },
  {
    title: "Customer Support Automation",
    description: "Triage support tickets, categorize requests, route to appropriate teams, and trigger automated responses for common questions.",
  },
  {
    title: "Content & Social Media Scheduling",
    description: "Schedule and publish content across multiple platforms, track engagement, and trigger notifications for high-performing posts.",
  },
  {
    title: "Report Generation & Distribution",
    description: "Automatically pull data from multiple sources, generate formatted reports, and distribute them to stakeholders on a schedule.",
  },
  {
    title: "E-commerce Order Processing",
    description: "Sync orders between platforms, update inventory, trigger fulfillment workflows, and send customer notifications automatically.",
  },
];

const process = [
  {
    step: "1",
    title: "Discovery & Analysis",
    description: "We analyze your current workflows, identify bottlenecks, and map out automation opportunities that deliver the highest ROI.",
  },
  {
    step: "2",
    title: "Workflow Design",
    description: "We design custom automation workflows tailored to your tools, processes, and business requirements.",
  },
  {
    step: "3",
    title: "Implementation & Testing",
    description: "We build and rigorously test the automation workflows to ensure reliability, accuracy, and seamless integration.",
  },
  {
    step: "4",
    title: "Deployment & Training",
    description: "We deploy the automation, train your team, and provide documentation for ongoing maintenance and optimization.",
  },
];

export default function AIAutomationPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageJsonLd />
      <ServiceHero
        iconName="workflow"
        badge="AI Workflow Automation"
        title="Automate Repetitive Tasks,"
        gradientText="Focus on Growth"
        description="Worksthal builds custom AI automation workflows using n8n, Make, and AI APIs. These workflows connect your existing business tools, automate repetitive data processing, and trigger event-driven actions in real time, eliminating manual work and reducing errors."
      />

      {/* Benefits Grid */}
      <section className="w-full px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Why Use AI Workflow Automation Services?
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

      {/* Use Cases */}
      <section className="w-full bg-gradient-to-b from-card/50 to-background px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              AI Automation Use Cases for Businesses
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Worksthal has built automation workflows for various business functions across industries.
              Here are some examples of what we can automate for you.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <h3 className="mb-3 text-lg font-semibold text-foreground">{useCase.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="w-full px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Our AI Workflow Automation Process
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We follow a structured approach to ensure your automation workflows deliver measurable
              results and integrate seamlessly with your existing systems.
            </p>
          </div>
          <div className="space-y-6">
            {process.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary font-serif text-xl font-bold text-primary-foreground">
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

      {/* Technologies */}
      <section className="w-full bg-gradient-to-b from-card/50 to-background px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            AI Automation Tools and Technologies
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Worksthal builds automation workflows using industry-leading platforms and APIs.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["n8n", "Make", "Zapier", "OpenAI API", "Claude API", "Gemini API", "Custom REST APIs", "Webhooks", "Airtable", "Google Sheets", "Slack", "Discord"].map(
              (tech, index) => (
                <span
                  key={index}
                  className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* What is AI Workflow Automation - AEO Content Block */}
      <section className="w-full px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
            What is AI Workflow Automation?
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-foreground">AI workflow automation is the practice of using artificial intelligence and automation platforms to streamline business processes, eliminate repetitive manual tasks, and improve operational efficiency.</strong> Worksthal builds custom AI automation workflows using n8n, Make, and direct AI API integrations that connect existing business tools into seamless automated pipelines.
            </p>
            <p>
              Unlike simple rule-based automation that follows fixed if-then logic, AI-powered workflows can make decisions, process unstructured data, and adapt to changing conditions. Worksthal integrates AI services from OpenAI (GPT-4), Claude, and Gemini to enable workflows that understand natural language, extract information from documents, classify data, and generate content automatically.
            </p>
            <p>
              Worksthal&apos;s AI automation workflows typically eliminate 10-20 hours of manual work every week. Common applications include lead qualification and CRM routing, invoice processing and data extraction, customer support ticket triage, content publishing pipelines, and automated report generation. These workflows process data at machine speed regardless of volume, enabling businesses to scale operations without proportionally increasing headcount.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/blog/what-is-ai-workflow-automation" className="text-sm font-medium text-primary hover:underline">
              Read: Complete Guide to AI Workflow Automation →
            </Link>
            <Link href="/blog/automate-business-processes-n8n" className="text-sm font-medium text-primary hover:underline">
              Read: n8n Step-by-Step Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-gradient-to-b from-card/50 to-background px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Frequently Asked Questions About AI Automation
          </h2>
          <div className="space-y-6">
            {pageFaqs.map((faq, index) => (
              <div key={index} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="mb-3 text-lg font-semibold text-foreground">{faq.question}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/faq" className="text-sm font-medium text-primary hover:underline">
              View all FAQs →
            </Link>
            <Link href="/services/web-development" className="text-sm font-medium text-primary hover:underline">
              Web Development Services →
            </Link>
            <Link href="/services/aeo" className="text-sm font-medium text-primary hover:underline">
              AEO Services →
            </Link>
            <Link href="/services/ai-marketing" className="text-sm font-medium text-primary hover:underline">
              AI Marketing Services →
            </Link>
            <Link href="/about" className="text-sm font-medium text-primary hover:underline">
              About Worksthal →
            </Link>
          </div>
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
            Schedule a free consultation to discuss your automation needs. We'll analyze your workflows
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
