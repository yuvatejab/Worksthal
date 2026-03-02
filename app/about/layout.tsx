import type { Metadata } from "next";

const baseUrl = "https://www.worksthal.com";

export const metadata: Metadata = {
  title: "About Worksthal | AI Automation, Web Development & AEO Studio",
  description:
    "Worksthal is a digital partner based in India specializing in AI workflow automation using n8n and Make, Next.js web development, and AI Engine Optimization (AEO). We build practical solutions that deliver measurable results for businesses worldwide.",
  keywords: [
    "about Worksthal",
    "AI automation agency India",
    "web development company India",
    "AEO agency",
    "digital agency India",
    "n8n automation",
    "Next.js development",
  ],
  alternates: {
    canonical: `${baseUrl}/about`,
  },
  openGraph: {
    title: "About Worksthal | AI Automation & Web Development Studio",
    description:
      "Worksthal builds custom AI automation workflows, modern websites, and AEO strategies for businesses worldwide. Based in India, focused on measurable results.",
    type: "website",
    url: `${baseUrl}/about`,
    siteName: "Worksthal",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Worksthal | AI Automation & Web Development Studio",
    description:
      "Worksthal builds custom AI automation workflows, modern websites, and AEO strategies for businesses worldwide.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
