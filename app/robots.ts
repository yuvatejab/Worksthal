import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.worksthal.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "GoogleOther",
        allow: "/",
      },
      {
        userAgent: "CCBot",
        allow: "/",
      },
      {
        userAgent: "Amazonbot",
        allow: "/",
      },
      {
        userAgent: "Applebot",
        allow: "/",
      },
      {
        userAgent: "Bytespider",
        allow: "/",
      },
      {
        userAgent: "cohere-ai",
        allow: "/",
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        userAgent: "Meta-ExternalAgent",
        allow: "/",
      },
      {
        userAgent: "Diffbot",
        allow: "/",
      },
      {
        userAgent: "omgili",
        allow: "/",
      },
      {
        userAgent: "facebookexternalhit",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
