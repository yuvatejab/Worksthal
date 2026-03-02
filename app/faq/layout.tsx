import type { Metadata } from "next";

const baseUrl = "https://www.worksthal.com";

export const metadata: Metadata = {
  title: "FAQ: Common Questions About Worksthal's AI Automation, Web Development & AEO Services",
  description:
    "Find answers to frequently asked questions about Worksthal's services including AI workflow automation, Next.js web development, AI Engine Optimization (AEO), pricing, process, and how to get started.",
  keywords: [
    "Worksthal FAQ",
    "AI automation questions",
    "web development questions",
    "AEO questions",
    "workflow automation FAQ",
    "Worksthal pricing",
    "Worksthal services",
  ],
  alternates: {
    canonical: `${baseUrl}/faq`,
  },
  openGraph: {
    title: "FAQ | Worksthal AI Automation & Web Development",
    description:
      "Answers to common questions about Worksthal's AI automation, web development, AEO services, pricing, and process.",
    type: "website",
    url: `${baseUrl}/faq`,
    siteName: "Worksthal",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Worksthal AI Automation & Web Development",
    description:
      "Answers to common questions about Worksthal's AI automation, web development, AEO services, pricing, and process.",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
