export function JsonLd() {
  const baseUrl = "https://worksthal.vercel.app";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Worksthal",
    url: baseUrl,
    logo: `${baseUrl}/favicon.ico`,
    description:
      "Full-service digital agency specializing in AI workflow automation, modern web development, and AI engine optimization (AEO) based in Hyderabad, India.",
    email: "contact@worksthal.com",
    telephone: "+916309821905",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      name: "Worksthal Team",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    knowsAbout: [
      "AI Workflow Automation",
      "Web Development",
      "AI Engine Optimization",
      "Search Engine Optimization",
      "Digital Marketing",
      "n8n Automation",
      "Next.js Development",
      "React Development",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Worksthal",
    url: baseUrl,
    description:
      "AI-powered digital solutions agency offering workflow automation, web development, and AEO services.",
    publisher: {
      "@type": "Organization",
      name: "Worksthal",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#localbusiness`,
    name: "Worksthal",
    description:
      "Digital agency specializing in AI workflow automation, web development, and AI engine optimization based in Hyderabad, India.",
    url: baseUrl,
    telephone: "+916309821905",
    email: "contact@worksthal.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    priceRange: "$$",
    openingHours: "Mo-Fr 09:00-18:00",
  };

  const services = [
    {
      name: "AI Workflow Automation",
      description:
        "Worksthal builds custom AI automation workflows using n8n, Make, and AI APIs. These workflows connect existing business tools, automate repetitive data processing, and trigger event-driven actions in real time. Our automation solutions eliminate manual tasks, reduce errors, and free up teams to focus on strategic work.",
    },
    {
      name: "Website Design and Development",
      description:
        "Worksthal creates fast, responsive, conversion-optimized websites using Next.js, React, and TypeScript. These modern web applications deliver exceptional performance, follow SEO best practices, and are designed to turn visitors into customers.",
    },
    {
      name: "AI Engine Optimization (AEO)",
      description:
        "Worksthal optimizes content and technical infrastructure so search engines and AI assistants can understand and recommend businesses. Services include structured data implementation, semantic content optimization, and AI crawler configuration to increase visibility in AI-powered search results.",
    },
    {
      name: "AI-Driven Marketing",
      description:
        "Worksthal delivers data-driven marketing campaigns powered by AI analytics. Services include targeted content creation, ad spend optimization, and revenue-focused strategy using Google Analytics, Ahrefs, and Semrush to drive measurable business growth.",
    },
  ];

  const serviceSchemas = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Worksthal",
      url: baseUrl,
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    serviceType: service.name,
  }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
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
        name: "FAQ",
        item: `${baseUrl}/faq`,
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
          text: "Worksthal offers four core services: AI Workflow Automation (custom workflows using n8n, Make, and AI APIs), Website Design and Development (Next.js, React, TypeScript), AI-Optimized Audit and Visibility (AEO — structured data, semantic optimization, AI crawler configuration), and AI-Driven Marketing (data-driven campaigns using analytics and AI tools).",
        },
      },
      {
        "@type": "Question",
        name: "How much time can AI automation save my business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Worksthal's AI automation workflows eliminate hours of manual work every week by automating repetitive tasks and data processing. The exact time savings depend on your specific workflows and processes. Worksthal builds custom workflows tailored to your existing tools and processes to maximize efficiency gains.",
        },
      },
      {
        "@type": "Question",
        name: "What is AEO and why does it matter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AEO (AI Engine Optimization) is the practice of optimizing your content so AI assistants like ChatGPT, Perplexity, and Google AI Overviews can find, understand, and recommend your business. With 70% of consumers now using AI for searches and 58% of Google searches resulting in zero clicks, AEO ensures your business stays visible in the AI-driven search landscape.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Worksthal located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Worksthal is based in Hyderabad, Telangana, India. The agency serves clients worldwide and operates remotely for international projects. You can reach Worksthal at contact@worksthal.com or +91 63098219055.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies does Worksthal use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Worksthal uses industry-leading technologies including Next.js, React, TypeScript, and Tailwind CSS for web development; n8n, Make, and Zapier for workflow automation; OpenAI, Claude, and Gemini for AI capabilities; and Google Analytics, Search Console, Ahrefs, and Semrush for SEO and analytics.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can I expect results from Worksthal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Worksthal delivers measurable results that vary based on the service. AI automation workflows show immediate time savings after deployment. Web development projects follow agile delivery with functional milestones throughout. AEO and SEO improvements are long-term strategies that build visibility over time. Worksthal provides transparent reporting so you can track progress throughout the engagement.",
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
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      {serviceSchemas.map((schema, index) => (
        <script
          key={`service-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
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
