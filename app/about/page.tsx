import type { Metadata } from "next"
import { AboutHero } from "@/components/AboutHero"
import { AboutPageClient } from "@/components/AboutPageClient"

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
    email: "admin@worksthal.com",
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
      <AboutHero />
      <AboutPageClient />
    </main>
  )
}
