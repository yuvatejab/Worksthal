import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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

export const metadata: Metadata = {
  title: "Worksthal | AI-Powered Digital Solutions & Automation",
  description: "Full-service digital agency specializing in AI workflow automation, modern web development, and data-driven marketing strategies that deliver measurable results.",
  keywords: ["AI automation", "web development", "digital marketing", "workflow automation", "AEO", "Next.js development"],
  authors: [{ name: "Worksthal" }],
  openGraph: {
    title: "Worksthal | AI-Powered Digital Solutions",
    description: "Transform your business with intelligent automation and modern web solutions",
    type: "website",
    locale: "en_US",
  },
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
