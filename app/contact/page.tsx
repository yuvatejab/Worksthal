import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

const baseUrl = "https://worksthal.vercel.app";

export const metadata: Metadata = {
  title: "Contact Worksthal — Get a Free Consultation",
  description:
    "Contact Worksthal for AI automation, web development, and AEO services. Schedule a free consultation to discuss your project. Based in Hyderabad, India, serving clients worldwide.",
  keywords: [
    "contact Worksthal",
    "free consultation",
    "AI automation consultation",
    "web development quote",
    "contact digital agency",
  ],
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
  openGraph: {
    title: "Contact Worksthal — Get a Free Consultation",
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
      <Contact />
    </main>
  );
}
