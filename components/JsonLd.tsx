export function JsonLd() {
  const baseUrl = "https://www.worksthal.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "Worksthal",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/favicon.ico`,
    },
    description:
      "Worksthal is a digital partner based in India specializing in AI workflow automation, Next.js web development, and AI Engine Optimization (AEO). Worksthal builds custom automation workflows using n8n and Make, creates modern websites with Next.js and React, and optimizes content for AI engines like ChatGPT, Claude, and Perplexity.",
    email: "admin@worksthal.com",
    telephone: "+916309821905",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      name: "Shubham",
      jobTitle: "Founder & CEO",
      worksFor: { "@type": "Organization", name: "Worksthal" },
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    knowsAbout: [
      "AI Workflow Automation",
      "n8n Automation",
      "Make Automation",
      "Web Development",
      "Next.js Development",
      "React Development",
      "TypeScript Development",
      "AI Engine Optimization",
      "Answer Engine Optimization",
      "Search Engine Optimization",
      "Structured Data Implementation",
      "Digital Marketing",
      "AI-Driven Marketing",
    ],
    // Add your LinkedIn, GitHub, Twitter/X, and Crunchbase URLs here when available:
    // sameAs: ["https://www.linkedin.com/company/worksthal", "https://github.com/worksthal"]
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: "Worksthal",
    url: baseUrl,
    description:
      "Worksthal is a digital partner based in India specializing in AI workflow automation, Next.js web development, and AI Engine Optimization (AEO).",
    publisher: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-US",
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${baseUrl}/#professionalservice`,
    name: "Worksthal",
    description:
      "Worksthal is a digital partner based in India that builds custom AI automation workflows, modern Next.js websites, and AI Engine Optimization (AEO) strategies for businesses worldwide.",
    url: baseUrl,
    telephone: "+916309821905",
    email: "admin@worksthal.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    priceRange: "$$",
    openingHours: "Mo-Fr 09:00-18:00",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 20.5937,
        longitude: 78.9629,
      },
      geoRadius: "50000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Worksthal Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Workflow Automation",
            description:
              "Worksthal builds custom AI automation workflows using n8n, Make, and AI APIs. These workflows connect existing business tools, automate repetitive data processing, and trigger event-driven actions in real time.",
            url: `${baseUrl}/services/ai-automation`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Design and Development",
            description:
              "Worksthal creates fast, responsive, conversion-optimized websites using Next.js, React, and TypeScript. These modern web applications deliver exceptional performance and follow SEO best practices.",
            url: `${baseUrl}/services/web-development`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Engine Optimization (AEO)",
            description:
              "Worksthal optimizes content and technical infrastructure so AI assistants like ChatGPT, Claude, and Perplexity can understand and recommend businesses. Services include structured data implementation, semantic content optimization, and AI crawler configuration.",
            url: `${baseUrl}/services/aeo`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI-Driven Marketing",
            description:
              "Worksthal delivers data-driven marketing campaigns powered by AI analytics. Services include targeted content creation, ad spend optimization, and revenue-focused strategy development.",
            url: `${baseUrl}/services/ai-marketing`,
          },
        },
      ],
    },
  };

  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: "Main Navigation",
    hasPart: [
      { "@type": "WebPage", name: "Home", url: baseUrl },
      { "@type": "WebPage", name: "Services", url: `${baseUrl}/services` },
      { "@type": "WebPage", name: "About", url: `${baseUrl}/about` },
      { "@type": "WebPage", name: "Blog", url: `${baseUrl}/blog` },
      { "@type": "WebPage", name: "FAQ", url: `${baseUrl}/faq` },
      { "@type": "WebPage", name: "Contact", url: `${baseUrl}/contact` },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${baseUrl}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "About",
        item: `${baseUrl}/about`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Blog",
        item: `${baseUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "FAQ",
        item: `${baseUrl}/faq`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Contact",
        item: `${baseUrl}/contact`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Worksthal offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Worksthal offers four core services: AI Workflow Automation (custom workflows using n8n, Make, and AI APIs), Website Design and Development (Next.js, React, TypeScript), AI Engine Optimization, or AEO (structured data, semantic optimization, AI crawler configuration), and AI-Driven Marketing (data-driven campaigns using analytics and AI tools).",
        },
      },
      {
        "@type": "Question",
        name: "Where is Worksthal located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Worksthal is based in India and serves clients worldwide. The agency operates remotely for international projects. You can reach Worksthal at admin@worksthal.com or +91 6309821905.",
        },
      },
      {
        "@type": "Question",
        name: "Does Worksthal work with international clients?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Worksthal is based in India and serves clients worldwide. The agency operates remotely for international projects, with regular communication via email, video calls, and project management tools.",
        },
      },
      {
        "@type": "Question",
        name: "What industries does Worksthal serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Worksthal works with growing businesses across various industries including SaaS, e-commerce, professional services, healthcare, education, and technology. The agency's services are industry-agnostic.",
        },
      },
      {
        "@type": "Question",
        name: "How much time can AI automation save my business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Worksthal's AI automation workflows typically eliminate 10-20 hours of manual work every week by automating repetitive tasks and data processing. The exact time savings depend on your specific workflows and processes.",
        },
      },
      {
        "@type": "Question",
        name: "What tools does Worksthal use for automation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Worksthal builds automation workflows using n8n, Make (formerly Integromat), Zapier, and custom API integrations. For AI capabilities, Worksthal integrates with OpenAI (GPT-4), Anthropic (Claude), Google (Gemini), and other AI services.",
        },
      },
      {
        "@type": "Question",
        name: "Can Worksthal integrate with my existing tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Worksthal specializes in connecting existing business tools into automated workflows. Common integrations include CRMs (Salesforce, HubSpot), email platforms (Gmail, Outlook), databases (PostgreSQL, Airtable), and thousands of other apps via APIs and webhooks.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to implement an automation workflow?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simple automation workflows can be implemented in 1-2 weeks. Complex workflows involving multiple systems, custom logic, and AI processing typically take 3-6 weeks. Worksthal follows an agile approach with regular check-ins.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies does Worksthal use for web development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Worksthal builds websites using Next.js, React, TypeScript, and Tailwind CSS. This is the same modern stack used by companies like Vercel, Netflix, and Notion. These frameworks deliver fast load times, server-side rendering for SEO, and responsive designs.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to build a website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simple landing pages and corporate websites typically take 2-4 weeks. E-commerce platforms and SaaS applications with complex features take 6-12 weeks. Timelines depend on project scope, design complexity, and feature requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Will my website be mobile-friendly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All websites built by Worksthal are fully responsive and optimized for mobile devices. With mobile-first indexing by Google, mobile optimization is a standard part of every project.",
        },
      },
      {
        "@type": "Question",
        name: "Can Worksthal redesign my existing website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Worksthal can redesign and rebuild existing websites using modern frameworks. Whether you're migrating from WordPress, Wix, or a legacy platform, Worksthal can create a faster, more maintainable website while preserving your SEO rankings.",
        },
      },
      {
        "@type": "Question",
        name: "What is AEO and why does it matter for my business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AEO (AI Engine Optimization) is the practice of optimizing your content so AI assistants like ChatGPT, Perplexity, and Google AI Overviews can find, understand, and recommend your business. With 70% of consumers using AI for searches and 58% of Google searches resulting in zero clicks, AEO ensures your business stays visible.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can I expect results from AEO/SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Technical improvements (structured data, site speed) show results within 4-8 weeks. Content optimization shows measurable results in 8-12 weeks. Competitive keywords and authority building can take 3-6 months. Worksthal provides transparent reporting throughout.",
        },
      },
      {
        "@type": "Question",
        name: "Does Worksthal guarantee first-page rankings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Any agency that guarantees specific rankings is misleading you. Worksthal focuses on implementing best practices that improve visibility over time, with transparent reporting on rankings, traffic, and conversions.",
        },
      },
      {
        "@type": "Question",
        name: "How much do Worksthal's services cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simple automation workflows start around $2,000-$5,000. Corporate websites range from $5,000-$15,000. Complex web applications and ongoing marketing services are quoted based on requirements. Worksthal provides detailed estimates after a free consultation.",
        },
      },
      {
        "@type": "Question",
        name: "Does Worksthal offer ongoing support and maintenance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Worksthal offers ongoing support and maintenance packages for automation workflows, websites, and marketing campaigns. Support includes bug fixes, updates, performance monitoring, and optimization.",
        },
      },
      {
        "@type": "Question",
        name: "What is Worksthal's payment structure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Worksthal uses a milestone-based payment structure: 30% upfront, 40% at mid-project milestone, and 30% upon completion. For ongoing services, Worksthal uses monthly retainers. Payment terms are flexible.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get started with Worksthal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Start by scheduling a free consultation via the contact form or email (admin@worksthal.com). During the consultation, Worksthal will understand your goals, challenges, and requirements, then provide a detailed proposal with scope, timeline, and pricing.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(siteNavigationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
