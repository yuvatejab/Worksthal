import type { Metadata } from "next";
import { HomeClient } from "@/components/HomeClient";

const baseUrl = "https://www.worksthal.com";

export const metadata: Metadata = {
  title: "Worksthal | AI Automation, Website Development & AEO Services",
  description:
    "Worksthal builds AI automation workflows using n8n and Make, modern websites with Next.js and React, and AEO strategies that get your business cited by AI assistants. Custom automation services, website development, and SEO optimization for businesses worldwide. Free consultation.",
  keywords: [
    "AI automation services",
    "website development company",
    "web development studio",
    "AEO services",
    "workflow automation",
    "business process automation",
    "Next.js development",
    "AI Studio",
    "SEO optimization",
    "automation consultants",
    "website development",
    "AI marketing services",
    "n8n automation",
    "custom website development",
    "SEO services",
    "AEO audit",
    "automation services",
    "web development services",
  ],
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "Worksthal | AI Automation, Website Development & AEO Services",
    description:
      "Custom AI automation workflows, modern website development, and AEO optimization for businesses worldwide. Worksthal builds solutions using n8n, Make, Next.js, and React.",
    type: "website",
    url: baseUrl,
    siteName: "Worksthal",
  },
};

export default function Home() {
  return <HomeClient />;
}
