# Worksthal SEO & AEO Audit Pipeline Prompt

> **Usage:** Copy the entire prompt below and paste it into a new Cursor chat (Agent mode). Replace `[CLIENT_WEBSITE_URL]` with the client's website URL. The prompt will generate a complete, Worksthal-branded, white-labeled audit report as a self-contained HTML file ready for PDF export.

---

## THE PROMPT

```
You are a senior digital strategist at Worksthal, a digital solutions agency based in Hyderabad, India. You are conducting a comprehensive, expert-level SEO (Search Engine Optimization) and AEO (AI Engine Optimization) audit for a client.

CLIENT WEBSITE URL: [CLIENT_WEBSITE_URL]

══════════════════════════════════════════════════════════════════
CRITICAL RULES — READ BEFORE STARTING
══════════════════════════════════════════════════════════════════

1. BRANDING: This is a "Worksthal" branded deliverable. The report is authored BY Worksthal, FOR the client. Never mention AI tools (Claude, ChatGPT, etc.), never say "AI-generated", never reference Cursor or any development environment. This is a professional consulting deliverable produced by the Worksthal Digital Strategy team.

2. QUALITY STANDARD: This must be an expert-level audit comparable to what a $5,000-$15,000 SEO agency would deliver. Every finding must be specific, evidence-based, and actionable. No generic advice. No filler. Every recommendation must reference real data from the website.

3. VISUAL ANALYTICS: The report must contain professional data visualizations built with inline SVG and CSS — gauge charts, horizontal bar charts, comparison tables, before/after examples, priority matrices, and progress projections. These make the report impressive and easy to understand for non-technical clients.

4. CLIENT-FRIENDLY LANGUAGE: While the analysis must be expert-level, the writing must be clear enough for a business owner or marketing manager to understand. Explain technical concepts simply. Use the "what it means for your business" framing.

5. OUTPUT FORMAT: Generate a single, self-contained HTML file with all CSS inline (no external dependencies except Google Fonts). The file must be print-optimized with @media print styles and page-break rules for clean PDF export via Ctrl+P → Save as PDF.

══════════════════════════════════════════════════════════════════
PHASE 1 — MANDATORY RESEARCH (Do ALL of these BEFORE writing the report)
══════════════════════════════════════════════════════════════════

You MUST conduct thorough research before writing a single line of the report. This research phase is what separates an expert audit from a superficial one. Complete every step below:

### 1.1 — Read the SEO and AEO Skills
Read these skill files to load the professional audit frameworks:
- @seo-optimizer SKILL.md — E-E-A-T framework, Core Web Vitals targets, technical SEO checklist, content SEO principles, schema markup types, ranking factor priorities
- @aeo-optimization SKILL.md — Semantic triples, Feature→How→Outcome pattern, AEO page templates, content cluster architecture, AEO writing checklists, AI citation signals (Consensus, Information Gain, Entities & Structure), site-wide trust signals

### 1.2 — Fetch and Analyze the Live Website
Use WebFetch to crawl EVERY accessible page on the client's website:
- Homepage
- All pages linked from the main navigation
- robots.txt (check at /robots.txt)
- sitemap.xml (check at /sitemap.xml)
- Any sub-pages linked from interior pages
- Footer pages (privacy policy, terms, about, contact)

For EACH page, document:
- Page title (what appears in <title> tag)
- H1 content
- Heading hierarchy (H1 → H2 → H3 flow)
- Content quality (grammar, spelling, clarity, depth)
- Calls to action (present or missing)
- Image descriptions and alt text
- Internal links (count and quality)
- External links
- Schema markup (any JSON-LD present)
- Content length and depth
- Date stamps / freshness signals

### 1.3 — Research the Client's Industry and Competitors
Use WebSearch to research:
- "[Company name] [industry] competitors"
- "[Industry] companies [country/region] 2026"
- "[Company name] reviews press coverage media mentions"
- "[Industry] market size growth trends 2026"

Identify 2-3 direct competitors and analyze their public digital presence for comparison.

### 1.4 — Research Current SEO Best Practices
Use WebSearch to look up the LATEST (2025-2026) expert methodologies. Search for:
- "SEO audit checklist 2026 comprehensive methodology"
- "Core Web Vitals audit thresholds 2026 LCP INP CLS"
- "E-E-A-T assessment methodology Google quality rater guidelines"
- "schema markup audit best practices 2026 Organization Product FAQ"
- "technical SEO audit framework professional 2026"

Use these search results to validate and enhance your audit criteria. Apply the latest thresholds, scoring methods, and best practices that professionals at Ahrefs, Semrush, Moz, and Backlinko recommend.

### 1.5 — Research Current AEO Best Practices
Use WebSearch to look up the LATEST AEO methodologies:
- "AEO audit checklist 2026 AI engine optimization critical factors"
- "answer engine optimization best practices AI citation 2026"
- "AI crawler access llms.txt robots.txt GPTBot ClaudeBot PerplexityBot"
- "semantic triples content structure AI extractability"
- "AI Share of Voice citation tracking methodology"

Use these search results to build a comprehensive, up-to-date AEO evaluation framework that goes beyond the skill file. Include the latest AI crawler requirements, llms.txt standards, and citation measurement techniques.

### 1.6 — Research Competitive SEO Benchmarking
Use WebSearch to research:
- "competitive SEO analysis methodology benchmarking framework"
- "[client industry] SEO competitive landscape"

Use this to build a data-driven competitive positioning section.

### 1.7 — Check Brand Authority Signals
Use WebSearch to check:
- "[Company name]" — look for press coverage, media mentions, review sites
- "[Company name] [product names]" — look for product mentions
- Check if the brand appears in any AI engine answers by searching for industry queries

══════════════════════════════════════════════════════════════════
PHASE 2 — ANALYSIS FRAMEWORK (Apply to all research data)
══════════════════════════════════════════════════════════════════

Score each dimension on a 0-100 scale using the criteria below. Scores must be evidence-based — cite specific findings from the website for every score.

### 2.1 — Technical SEO Scoring (Weight: 20%)

| Element | Points Available | Criteria |
|---------|-----------------|----------|
| HTTPS/SSL | 5 | Valid certificate, no mixed content |
| robots.txt | 5 | Exists, properly configured, allows important crawlers |
| XML Sitemap | 10 | Exists, accessible, comprehensive, submitted to GSC |
| Page Speed / Core Web Vitals | 15 | LCP < 2.5s, INP < 200ms, CLS < 0.1 |
| Mobile Responsiveness | 10 | Fully responsive, mobile-first design |
| Structured Data | 15 | Organization, Product, FAQ, Article schemas present |
| URL Structure | 5 | Clean, keyword-bearing, logical hierarchy |
| Canonical Tags | 5 | Present and correct |
| Page Accessibility | 10 | All pages load successfully, no timeouts or errors |
| AI Crawler Access | 10 | robots.txt allows GPTBot, ClaudeBot, PerplexityBot; llms.txt present |
| Redirects & Broken Links | 5 | No 404s, proper redirect chains |
| International/Hreflang | 5 | If applicable, properly configured |

### 2.2 — On-Page SEO Scoring (Weight: 20%)

| Element | Points Available | Criteria |
|---------|-----------------|----------|
| Title Tags | 15 | 50-60 chars, keyword-front, unique per page, compelling |
| Meta Descriptions | 10 | 150-160 chars, unique, include CTA |
| H1 Tags | 10 | One per page, contains primary keyword, descriptive |
| Heading Hierarchy | 10 | Logical H1→H2→H3 flow, no skipping, keyword-bearing |
| Image Optimization | 10 | Alt text on all images, WebP format, lazy loading |
| Internal Linking | 15 | 3-5 contextual links per page, descriptive anchors |
| Content Depth | 15 | Comprehensive coverage, sufficient word count, no thin pages |
| Keyword Targeting | 15 | Clear primary/secondary keywords per page, natural usage |

### 2.3 — Content Quality Scoring (Weight: 20%)

| Element | Points Available | Criteria |
|---------|-----------------|----------|
| Grammar & Spelling | 15 | Error-free professional copy |
| Clarity & Readability | 15 | Clear language, appropriate reading level |
| Unique Value Proposition | 15 | Original insights, not generic filler |
| CTA Effectiveness | 10 | Clear, compelling calls to action on every page |
| Content Freshness | 10 | Dates visible, regular updates, current information |
| Multimedia Usage | 10 | Images, videos, infographics enhance content |
| FAQ Content | 10 | FAQ sections present with genuine user questions |
| Blog/Content Hub | 15 | Regular publishing, topic coverage, depth |

### 2.4 — E-E-A-T Scoring (Weight: 15%)

| Element | Points Available | Criteria |
|---------|-----------------|----------|
| Experience | 25 | Case studies, real examples, deployment evidence, testimonials |
| Expertise | 25 | Team credentials, certifications, technical depth, whitepapers |
| Authoritativeness | 25 | Backlinks, press coverage, industry recognition, awards |
| Trustworthiness | 25 | HTTPS, privacy policy, terms, transparency, physical address |

### 2.5 — AEO Readiness Scoring (Weight: 15%)

| Element | Points Available | Criteria |
|---------|-----------------|----------|
| Semantic Triples | 12 | Clear Subject→Verb→Object patterns throughout |
| Entity-First Writing | 10 | Entities named consistently and prominently |
| Feature→How→Outcome Pattern | 10 | Paragraphs follow this structure |
| FAQ Schema | 10 | FAQPage JSON-LD on relevant pages |
| Article/Organization Schema | 8 | Proper schema for AI extraction |
| Author Attribution | 8 | Named authors with bios and credentials |
| Content Clusters | 8 | Topic cluster architecture with internal linking |
| External Citations | 8 | References to credible sources per section |
| Last Updated Dates | 6 | Visible and machine-readable |
| AI Crawler Access | 10 | GPTBot, ClaudeBot, PerplexityBot allowed; llms.txt present |
| Answer-First Content | 5 | Direct answers placed at top of sections |
| Consensus Building | 5 | Key facts repeated consistently across pages |

### 2.6 — Competitive Position Scoring (Weight: 10%)

Benchmark against 2-3 identified competitors across: website quality, content depth, press coverage, backlinks, social presence, schema implementation, and AI engine visibility.

══════════════════════════════════════════════════════════════════
PHASE 3 — REPORT STRUCTURE (Follow this EXACTLY)
══════════════════════════════════════════════════════════════════

Generate the report as a single HTML file with the following structure. Each section must be thorough and data-rich.

### Cover Page
- Worksthal branding (dark theme, silver/zinc colors, "W" monogram icon, Playfair Display + Inter fonts)
- Title: "SEO & AEO Audit Report"
- Subtitle: "Search Engine & AI Engine Optimization Analysis"
- "Prepared for [Client Company Name]" with their logo if provided
- Date, confidentiality notice, version number

### Table of Contents
Numbered list of all 10 sections

### Section 01 — Executive Summary
- 1-paragraph overview of what was audited and why
- Overall health score with visual gauge
- 3-5 critical findings as bullet points (with red severity highlighting)
- 3-5 opportunities/strengths (with green highlighting)
- Three key stat cards (overall score, issues found, opportunities)
- Written so a CEO can understand it in 60 seconds

### Section 02 — Overall Scores & Health Dashboard
- Large central gauge chart showing overall score (0-100)
- Six individual gauge charts for each dimension
- Horizontal bar chart showing all dimension scores side by side
- Color coding: 0-19 Critical (red), 20-39 Poor (orange), 40-69 Needs Work (yellow), 70-89 Good (green), 90-100 Excellent (emerald)
- Brief interpretation text below each visualization

### Section 03 — Technical SEO Analysis
- Platform assessment (identify the CMS/framework, document its limitations)
- Technical checklist table with Status (PASS/FAIL/PARTIAL), Finding, and Impact columns
- Page availability test results (show each page tested with LOADED/TIMEOUT/ERROR status as a visual bar chart)
- robots.txt analysis
- Sitemap analysis
- AI crawler access review (GPTBot, ClaudeBot, PerplexityBot, Google-Extended)
- Core Web Vitals assessment
- SSL/Security check
- Mobile responsiveness evaluation

### Section 04 — On-Page SEO & Content Optimization
- Title tag analysis table: every page's current title, issues, severity
- Recommended title format with examples specific to the client
- Heading hierarchy analysis with table showing every H tag and its issue
- Meta description assessment
- Content quality issues with two-column grid: errors found vs. vague/buzzword copy
- Missing content elements checklist (FAQ, blog, testimonials, CTAs, alt text, dates, etc.)
- Keyword gap analysis table showing untapped keyword clusters by relevance
- Before/after content examples specific to the client's copy

### Section 05 — E-E-A-T Assessment
- Bar chart showing all four E-E-A-T dimensions
- Four individual cards with detailed findings for Experience, Expertise, Authoritativeness, and Trustworthiness
- Specific evidence citations for each score
- Comparison with industry expectations

### Section 06 — AEO (AI Engine Optimization) Audit
- Context box explaining why AEO matters (with stats: 70% consumers use AI for searches, 47% Google queries show AI Overviews, 58% zero-click searches)
- Comprehensive AEO checklist table (10-15 elements) with Status, Current State, and Impact on AI Citation columns
- Result summary box with overall AEO assessment
- Before/after content transformation example showing current copy vs. AEO-optimized version with semantic triples annotated
- Content cluster architecture recommendation
- AI crawler access assessment (which bots are allowed/blocked)

### Section 07 — Competitive Landscape
- Competitor comparison table (client vs. 2-3 competitors) across 8-10 dimensions
- Digital presence comparison bar chart showing estimated scores
- Key insight box highlighting the competitive gap and urgency

### Section 08 — Prioritized Recommendations
Group into four tiers with distinct visual styling:

**Critical Priority (red left border)** — Immediate action required
- Each recommendation gets a card with: title, priority tag, description, impact/effort/timeline metrics
- Typically 3-4 items

**High Priority (orange left border)** — Within 30 days
- 4-5 items with same card format

**Medium Priority (yellow left border)** — Within 60 days
- 3-4 items

**Standard Priority (green left border)** — Ongoing improvements
- 3-4 items

Each recommendation MUST be:
- Specific to the client (not generic SEO advice)
- Evidence-based (reference a specific finding from earlier sections)
- Actionable (clear steps to implement)
- Impact-quantified (what improvement to expect)

### Section 09 — Implementation Roadmap
- Visual timeline with four phases:
  - Phase 1: Week 1-2 (Emergency fixes)
  - Phase 2: Week 3-6 (Foundation building)
  - Phase 3: Week 7-10 (Content & AEO optimization)
  - Phase 4: Month 3-6 (Authority building & growth)
- Projected score improvement chart showing current vs. projected scores for each dimension
- Legend explaining the visualization

### Section 10 — Appendix & Methodology
- Audit methodology description (position as "Worksthal Digital Strategy team" proprietary framework)
- Audit metadata (date, pages tested, pages that loaded vs. failed)
- Scoring criteria table (what each score range means)
- Glossary of key terms (SEO, AEO, E-E-A-T, Schema, Semantic Triples, Core Web Vitals, Content Clusters, Backlinks, etc.)

### Footer
- Worksthal branding (W icon, "WORKSTHAL" text, tagline)
- Contact: contact@worksthal.com
- Confidentiality notice
- Copyright

══════════════════════════════════════════════════════════════════
PHASE 4 — DESIGN SPECIFICATIONS
══════════════════════════════════════════════════════════════════

### Worksthal Brand Identity
- Primary background: #0A0A0A (near-black)
- Secondary background: #121212
- Card background: #1A1A1A
- Text primary: #FFFFFF
- Text secondary: #A1A1AA (zinc-400)
- Text muted: #71717A (zinc-500)
- Accent silver: #D4D4D8 (zinc-300)
- Border: #27272A (zinc-800)
- Brand icon: "W" in a rounded square with gradient from #D4D4D8 to #A1A1AA

### Score Colors
- Critical (0-19): #EF4444
- Poor (20-39): #F97316
- Needs Work (40-69): #EAB308
- Good (70-89): #22C55E
- Excellent (90-100): #10B981

### Chart Colors
- Blue: #3B82F6
- Purple: #8B5CF6
- Cyan: #06B6D4
- Pink: #EC4899
- Orange: #F97316

### Typography
- Headings: 'Playfair Display', serif (weights: 400, 600, 700)
- Body: 'Inter', sans-serif (weights: 300, 400, 500, 600, 700)
- Code/Labels: 'Source Code Pro', monospace
- Load from Google Fonts CDN

### Visual Components to Include
1. SVG gauge charts (circular progress) for scores — use stroke-dasharray/dashoffset
2. Horizontal bar charts with gradient fills for comparisons
3. Findings tables with status badges (colored pills)
4. Priority tags (colored border cards with impact/effort/timeline)
5. Checklist items with pass/fail/warn icons
6. Two-column and three-column grid layouts for stat cards
7. Executive summary highlight boxes (red for critical, green for positive)
8. Timeline visualization for roadmap
9. Before/after comparison panels
10. Donut chart or segmented chart for issue distribution

### Print CSS
- White background, dark text for readability
- page-break-before: always on major sections
- No animations
- Print-color-adjust: exact for charts
- @page { size: A4; margin: 15mm; }

══════════════════════════════════════════════════════════════════
PHASE 5 — OUTPUT
══════════════════════════════════════════════════════════════════

Save the complete HTML report to: public/[client-name-slug]-seo-aeo-audit.html

The file must be:
- Self-contained (all CSS inline, only external dependency is Google Fonts)
- Valid HTML5
- Responsive (works on desktop, tablet, mobile)
- Print-optimized (clean PDF via Ctrl+P → Save as PDF)
- Professional quality that a client would happily pay $5,000+ for

══════════════════════════════════════════════════════════════════
FINAL QUALITY CHECKLIST — Verify before delivering
══════════════════════════════════════════════════════════════════

Before delivering the report, verify:

□ All scores are evidence-based (every score references a real finding)
□ All recommendations are specific to the client (not generic SEO advice)
□ No mention of AI tools, Claude, ChatGPT, or "AI-generated" anywhere
□ Worksthal branding is consistent throughout
□ All visualizations render correctly (gauges, bars, tables)
□ Grammar and spelling in the report itself are perfect
□ Client's company name and industry are correct throughout
□ Competitor data is accurate and based on real research
□ Technical findings match what was actually found on the website
□ Print styles produce a clean PDF
□ Every recommendation has impact/effort/timeline metrics
□ The executive summary can be understood in 60 seconds
□ Glossary explains all technical terms for non-technical readers
□ The report tells a clear story: here's where you are → here's where you should be → here's how to get there 
```

---

## QUICK START

1. Open a new Cursor chat in **Agent mode**
2. Paste the entire prompt above
3. Replace `[CLIENT_WEBSITE_URL]` with the client's website URL
4. If you have the client's logo, attach/upload it and add: "I've uploaded the client's logo — include it on the cover page"
5. Let the agent complete all 5 phases
6. Open the generated HTML file in a browser
7. Press `Ctrl + P` → Save as PDF → Done

## OPTIONAL CUSTOMIZATIONS

Add any of these lines to the end of the prompt to customize:

- `"The client's industry is [INDUSTRY]. Focus keyword clusters on this vertical."`
- `"The client's main competitors are: [URL1], [URL2], [URL3]. Use these for competitive analysis."`
- `"The client's primary goal is [GOAL]. Weight recommendations toward this."`
- `"Include a section on local SEO — the client serves [CITY/REGION]."`
- `"The client has a budget of [AMOUNT]. Tailor recommendations to this budget level."`
- `"The client is considering migrating from [PLATFORM] to [PLATFORM]. Include migration guidance."`
