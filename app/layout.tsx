import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { JsonLd } from "@/components/JsonLd";
import { GlobalCursor } from "@/components/GlobalCursor";
import { PageNavWrapper } from "@/components/ui/page-nav-wrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const baseUrl = "https://worksthal.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Worksthal — AI Automation, Web Development & AEO Agency in Hyderabad",
  description:
    "Worksthal is a digital agency in Hyderabad specializing in AI workflow automation, Next.js web development, and AI Engine Optimization (AEO). We help businesses automate repetitive tasks, build modern websites, and improve search visibility. Get a free consultation.",
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
    title: "Worksthal — AI Automation, Web Development & AEO Agency",
    description:
      "Worksthal builds custom AI automation workflows, modern websites, and AEO strategies that help businesses grow. Based in Hyderabad, serving clients worldwide.",
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Worksthal",
    images: [
      {
        url: "/website preview.png",
        width: 1200,
        height: 630,
        alt: "Worksthal — AI Automation & Web Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Worksthal — AI Automation, Web Development & AEO Agency",
    description:
      "Worksthal builds custom AI automation workflows, modern websites, and AEO strategies. Based in Hyderabad, India, serving clients worldwide.",
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
        className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}
        style={{
          "--font-sans": inter.style.fontFamily,
          "--font-serif": cormorant.style.fontFamily,
        } as React.CSSProperties}
      >
        <GlobalCursor />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="worksthal-theme"
        >
          <PageNavWrapper />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
