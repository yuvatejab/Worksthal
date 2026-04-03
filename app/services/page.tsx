import type { Metadata } from "next";
import { ServicesPageClient } from "@/components/ServicesPageClient";

const baseUrl = "https://www.worksthal.com";

export const metadata: Metadata = {
  title: "AI Automation, Web Development & AEO Services | Worksthal",
  description:
    "AI automation services, website development, AEO optimization, and SEO services for businesses worldwide. Custom workflow automation using n8n, Next.js web development, and AI-driven marketing. Free consultation.",
  keywords: [
    "AI automation services",
    "workflow automation",
    "web development services",
    "Next.js development",
    "AEO services",
    "AI engine optimization",
    "digital marketing services",
    "business automation",
    "website development",
    "website development company",
    "automation services",
    "SEO optimization",
    "AI Studio",
    "business process automation",
    "SEO services",
    "AEO audit",
  ],
  alternates: {
    canonical: `${baseUrl}/services`,
  },
  openGraph: {
    title: "AI Automation, Web Development & AEO Services | Worksthal",
    description:
      "Discover Worksthal's services: AI workflow automation, modern web development, AEO optimization, and data-driven marketing. Transform your business with practical AI solutions.",
    type: "website",
    url: `${baseUrl}/services`,
    siteName: "Worksthal",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
