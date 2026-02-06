import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const baseUrl = "https://worksthal.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "AI Workflow Automation & Web Development Agency | Worksthal",
  description:
    "Worksthal is a digital agency in Hyderabad specializing in AI workflow automation, Next.js web development, and AEO (AI Engine Optimization). Save 20+ hours per week with custom automation. Get a free consultation.",
  keywords: [
    "AI automation agency",
    "AI workflow automation",
    "web development agency India",
    "Next.js development company",
    "AEO optimization",
    "AI engine optimization",
    "digital agency Hyderabad",
    "n8n automation",
    "Make automation",
    "workflow automation services",
    "AI marketing agency",
    "search engine optimization India",
    "React development",
    "TypeScript development",
    "business automation",
  ],
  authors: [{ name: "Worksthal", url: baseUrl }],
  creator: "Worksthal",
  publisher: "Worksthal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "AI Workflow Automation & Web Development Agency | Worksthal",
    description:
      "Worksthal builds custom AI automation workflows, modern websites, and AEO strategies that deliver measurable ROI within 90 days. Based in Hyderabad, serving clients worldwide.",
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Worksthal",
    images: [
      {
        url: "/website preview.png",
        width: 1200,
        height: 630,
        alt: "Worksthal — AI-Powered Digital Solutions Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Workflow Automation & Web Development Agency | Worksthal",
    description:
      "Worksthal builds custom AI automation workflows, modern websites, and AEO strategies. Save 20+ hours per week. Based in Hyderabad, India.",
    images: ["/website preview.png"],
  },
  category: "Technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
        style={{
          "--font-sans": inter.style.fontFamily,
          "--font-serif": playfair.style.fontFamily,
        } as React.CSSProperties}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="worksthal-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
