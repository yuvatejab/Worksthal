import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Performance optimizations */
  reactStrictMode: true,

  /* Image optimization */
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  /* Experimental features for better performance */
  experimental: {
    optimizePackageImports: ["lucide-react", "@tabler/icons-react", "framer-motion"],
  },

  /* Compiler optimizations */
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  /* Production optimizations */
  productionBrowserSourceMaps: false,
  compress: true,

  /* Security and performance headers */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "X-Robots-Tag",
            value: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
          },
        ],
      },
      {
        source: "/(.*)\\.(jpg|jpeg|png|gif|webp|svg|ico|woff|woff2|mp4)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/llms.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
      {
        source: "/9f97227a29314a5e93958cb1b885135e.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
