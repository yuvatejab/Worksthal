import { NextResponse } from "next/server";

const INDEXNOW_KEY = "9f97227a29314a5e93958cb1b885135e";
const SITE_HOST = "www.worksthal.com";
const KEY_LOCATION = `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`;

const ALL_URLS = [
  `https://${SITE_HOST}`,
  `https://${SITE_HOST}/services`,
  `https://${SITE_HOST}/services/ai-automation`,
  `https://${SITE_HOST}/services/web-development`,
  `https://${SITE_HOST}/services/aeo`,
  `https://${SITE_HOST}/services/ai-marketing`,
  `https://${SITE_HOST}/about`,
  `https://${SITE_HOST}/blog`,
  `https://${SITE_HOST}/blog/what-is-ai-workflow-automation`,
  `https://${SITE_HOST}/blog/automate-business-processes-n8n`,
  `https://${SITE_HOST}/blog/aeo-vs-seo-difference`,
  `https://${SITE_HOST}/blog/nextjs-vs-react-comparison`,
  `https://${SITE_HOST}/faq`,
  `https://${SITE_HOST}/contact`,
];

export async function POST(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${INDEXNOW_KEY}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const urls = body?.urls || ALL_URLS;

  const payload = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  const endpoints = [
    "https://api.indexnow.org/IndexNow",
    "https://www.bing.com/IndexNow",
    "https://yandex.com/indexnow",
  ];

  const results = await Promise.allSettled(
    endpoints.map(async (endpoint) => {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });
      return {
        endpoint,
        status: res.status,
        statusText: res.statusText,
      };
    })
  );

  return NextResponse.json({
    submitted: urls.length,
    urls,
    results: results.map((r) =>
      r.status === "fulfilled" ? r.value : { error: String(r.reason) }
    ),
  });
}

export async function GET() {
  return NextResponse.json({
    message: "IndexNow API - POST to submit URLs to Bing and other search engines",
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    totalUrls: ALL_URLS.length,
  });
}
