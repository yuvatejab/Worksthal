import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { JsonLd } from "@/components/JsonLd";
import { GlobalCursor } from "@/components/GlobalCursor";
import { PageNavWrapper } from "@/components/ui/page-nav-wrapper";
import { ScrollDepthTracker } from "@/components/ScrollDepthTracker";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ["Georgia", "serif"],
});

const baseUrl = "https://www.worksthal.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Worksthal | AI Automation, Web Development & AEO Studio",
  description:
    "Worksthal is a digital partner based in India specializing in AI workflow automation, Next.js web development, and AI Engine Optimization (AEO).",
  keywords: [
    "AI automation studio",
    "AI workflow automation",
    "web development studio",
    "Next.js development company",
    "AEO optimization",
    "AI engine optimization",
    "AI Studio",
    "n8n automation",
    "Make automation",
    "workflow automation services",
    "AI marketing studio",
    "SEO optimization",
    "React development",
    "TypeScript development",
    "business automation",
    "website development",
    "website development company",
    "automation services",
    "business process automation",
    "SEO services",
    "web development services",
    "automation consultants",
    "AEO audit",
    "SEO audit services",
    "custom website development",
  ],
  authors: [{ name: "Worksthal", url: baseUrl }],
  creator: "Worksthal",
  publisher: "Worksthal",
  verification: {
    google: "db3438e9c7f67513",
  },
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
    title: "Worksthal | AI Automation, Web Development & AEO Studio",
    description:
      "Worksthal builds custom AI automation workflows, modern websites, and AEO strategies that help businesses grow. Based in India, serving clients worldwide.",
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Worksthal",
    images: [
      {
        url: "/website preview.png",
        width: 1200,
        height: 630,
        alt: "Worksthal | AI Automation & Web Development AI Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Worksthal | AI Automation, Web Development & AEO Studio",
    description:
      "Worksthal builds custom AI automation workflows, modern websites, and AEO strategies. Based in India, serving clients worldwide.",
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
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/hero-img.webp"
          as="image"
          type="image/webp"
        />
        
        <JsonLd />
      </head>
      <body
        className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}
        style={{
          "--font-sans": inter.style.fontFamily,
          "--font-serif": cormorant.style.fontFamily,
        } as React.CSSProperties}
      >
        {/* Google Analytics - Deferred for performance */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X3XE5PWWHZ"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X3XE5PWWHZ', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        <GlobalCursor />
        <ScrollDepthTracker />
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
