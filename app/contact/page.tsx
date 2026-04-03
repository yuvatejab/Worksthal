import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

const baseUrl = "https://www.worksthal.com";

export const metadata: Metadata = {
  title: "Contact Worksthal | Get a Free Consultation",
  description:
    "Contact Worksthal for AI automation, web development, and AEO services. Schedule a free consultation to discuss your project. Based in India, serving clients worldwide.",
  keywords: [
    "contact Worksthal",
    "free consultation",
    "AI automation consultation",
    "web development quote",
    "contact AI Studio",
    "hire AI automation expert",
    "website development consultation",
    "AEO consultation",
    "automation services quote",
  ],
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
  openGraph: {
    title: "Contact Worksthal | Get a Free Consultation",
    description:
      "Get in touch with Worksthal to discuss your AI automation, web development, or AEO project. Free consultation available.",
    type: "website",
    url: `${baseUrl}/contact`,
    siteName: "Worksthal",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Visually hidden H1 for SEO — visible heading is inside Contact component */}
      <h1 className="sr-only">Contact Worksthal | Get a Free Consultation for AI Automation, Web Development &amp; AEO Services</h1>
      <Contact />
    </main>
  );
}
