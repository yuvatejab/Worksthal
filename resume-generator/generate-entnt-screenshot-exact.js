const { jsPDF } = require("jspdf");
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
  BorderStyle,
} = require("docx");
const fs = require("fs");

/**
 * Goal:
 * - Generate a single-page resume that matches the user's screenshot layout:
 *   diamond "YT" mark, header, left-side section labels, 2-col skills bullets,
 *   detailed experience, education/certs/projects, and language bars.
 * - Black & white only, minimal margins, one page.
 *
 * Output:
 * - resume-generator/output/yuva-teja-screenshot-exact.pdf
 * - resume-generator/output/yuva-teja-screenshot-exact.docx (best-effort match)
 */

const outDir = "resume-generator/output";
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Content extracted from the provided screenshot (OCR).
const data = {
  name: "YUVA TEJA BANDHARAPU",
  email: "ybandharapu@gmail.com",
  phone: "+91 6301465458",
  location: "Hyderabad Telangana",
  linkedinText: "linkedin.com/in/yuva-teja-bandharapu",
  githubText: "github.com/yuvateja",

  summary:
    "Results-driven Artificial Intelligence Intern at BugRaid.ai, adept in Python and AWS, engineered a telemetry system that cut investigation time for DevOps teams. Enhanced data retrieval latency by 40% and optimized processing with async connections, showcasing strong problem-solving skills and a commitment to operational excellence.",

  skillsLeft: [
    "Python",
    "JavaScript",
    "C++",
    "C",
    "SQL",
    "HTML",
    "CSS",
    "React",
    "Next.js",
    "FastAPI",
    "OOP",
    "Data structures",
    "Problem solving",
    "Machine learning",
  ],
  skillsRight: [
    "Numpy",
    "Pandas",
    "Git",
    "Version control",
    "Docker",
    "CI/CD",
    "AWS",
    "ECS",
    "S3",
    "SQS",
    "Lambda",
    "CloudWatch",
    "Containerization",
    "Cloud deployment",
  ],

  experience: {
    title: "Artificial Intelligence Intern",
    companyLine: "BugRaid AI | Hyderabad, India",
    dateRange: "09/2025 - 12/2025",
    bullets: [
      "Implemented metrics tracking for data fetch duration, S3 uploads, queue processing, and AWS Bedrock LLM calls, enhancing visibility into 100+ daily operations",
      "Integrated Datadog MCP server for AI-driven telemetry access, reducing data retrieval latency by 40% and improving incident correlation for better root cause analysis",
      "Built automated incident telemetry system using Python and AWS Bedrock (Claude 4.5), integrating with multiple monitoring platforms through RESTful APIs, reducing manual investigation time",
      "Optimized data fetching with async HTTP/2 connections (aiohttp), parallel processing (300 concurrent requests), achieving 10,000 rows per API call with 70-80% bandwidth reduction through gzip compression",
      "Deployed end-to-end OpenTelemetry observability implementing distributed tracing across 5 microservices with custom span attributes and context propagation",
      "Engineered high-performance S3 storage pipeline, processing 100MB batches in parallel with thread pools (12 workers) for efficient compression and real-time streaming",
      "Developed tool-agnostic monitoring adapter pattern for multiple observability platforms (SigNoz, Grafana, Datadog, CloudWatch) enabling automatic source detection",
      "Deployed production AWS infrastructure using ECS Fargate, Docker, ECR, SQS message queues, and automated CI/CD scripts for dev and prod environments",
    ],
  },

  education: [
    {
      degree: "B.Tech. Computer Science Engineering (AI & ML)",
      school: "Vishwakarma Institute of Technology | Pune",
      date: "03/2026",
    },
    {
      degree: "HSC",
      school: "Loyola Academy | Hyderabad",
      date: "01/2022",
    },
  ],

  certifications: [
    "IBM Artificial Intelligence Engineer - Simplilearn, 05/25",
    "Python for Data Science - Simplilearn, 09/24",
  ],

  projects: [
    {
      title: "Deepfake Detection System",
      text:
        "Engineered hybrid CNN/RNN video classification pipeline achieving 87% detection accuracy on benchmark datasets. Aggregated data from 3+ datasets (FaceForensics++, Celeb-DF v4) implementing frame extraction and temporal analysis techniques.",
    },
    {
      title: "API Health Monitoring Dashboard",
      text:
        "Developed full-stack monitoring dashboard for distributed systems analyzing 15,000+ daily traces using React, OpenTelemetry, Elasticsearch, and Kibana. Built responsive front-end with data visualization components, reducing manual troubleshooting by 25%.",
    },
  ],

  languages: [
    { name: "English", levelText: "Proficient (C2)", levelShort: "C2", value: 1.0 },
    { name: "Telugu", levelText: "Upper intermediate (B2)", levelShort: "B2", value: 0.7 },
    { name: "Hindi", levelText: "Proficient (C2)", levelShort: "C2", value: 1.0 },
    { name: "Marathi", levelText: "Elementary (A2)", levelShort: "A2", value: 0.25 },
  ],
};

function setFont(doc, { size, style = "normal" }) {
  doc.setFont("helvetica", style);
  doc.setFontSize(size);
  doc.setTextColor(0, 0, 0);
}

function drawDiamondMark(doc, x, y, size) {
  // Diamond outline (rotated square)
  const half = size / 2;
  const pTop = { x: x + half, y };
  const pRight = { x: x + size, y: y + half };
  const pBottom = { x: x + half, y: y + size };
  const pLeft = { x, y: y + half };

  doc.setLineWidth(0.4);
  doc.line(pTop.x, pTop.y, pRight.x, pRight.y);
  doc.line(pRight.x, pRight.y, pBottom.x, pBottom.y);
  doc.line(pBottom.x, pBottom.y, pLeft.x, pLeft.y);
  doc.line(pLeft.x, pLeft.y, pTop.x, pTop.y);

  // Diagonal divider
  doc.setLineWidth(0.25);
  doc.line(x + size * 0.28, y + size * 0.28, x + size * 0.72, y + size * 0.72);

  // Y / T letters
  setFont(doc, { size: 9, style: "normal" });
  doc.text("Y", x + size * 0.23, y + size * 0.38);
  doc.text("T", x + size * 0.56, y + size * 0.7);
}

function measureLines(doc, text, width) {
  return doc.splitTextToSize(text, width);
}

function drawSectionLabel(doc, label, x, y) {
  doc.setTextColor(70, 70, 70);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text(label, x, y);
  doc.setTextColor(0, 0, 0);
}

function drawWrappedText(doc, text, x, y, width, lineHeight) {
  const lines = measureLines(doc, text, width);
  doc.text(lines, x, y);
  return y + lines.length * lineHeight;
}

function drawBullets(doc, bullets, x, y, width, lineHeight, bulletIndent) {
  let cy = y;
  for (const b of bullets) {
    const lines = measureLines(doc, b, width - bulletIndent);
    doc.text("•", x, cy);
    doc.text(lines, x + bulletIndent, cy);
    cy += lines.length * lineHeight;
  }
  return cy;
}

function drawSkillsTwoCol(doc, left, right, x, y, colGap, colWidth, lineHeight) {
  setFont(doc, { size: 8.6, style: "normal" });
  const bulletX = x;
  const leftX = x;
  const rightX = x + colWidth + colGap;

  const maxRows = Math.max(left.length, right.length);
  let cy = y;
  for (let i = 0; i < maxRows; i++) {
    if (left[i]) {
      doc.text("•", bulletX, cy);
      doc.text(left[i], leftX + 4, cy);
    }
    if (right[i]) {
      doc.text("•", rightX, cy);
      doc.text(right[i], rightX + 4, cy);
    }
    cy += lineHeight;
  }
  return cy;
}

function drawLanguageBlock(doc, x, y, width, lang) {
  const barH = 1.8;
  const barY = y + 3.3;
  setFont(doc, { size: 8.5, style: "normal" });
  doc.text(`${lang.name}:`, x, y);
  doc.text(lang.levelShort, x + width, y, { align: "right" });

  // Bar background
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.2);
  doc.rect(x, barY, width, barH);

  // Fill (black)
  doc.setFillColor(0, 0, 0);
  doc.rect(x, barY, width * lang.value, barH, "F");

  // Level text
  setFont(doc, { size: 8, style: "normal" });
  doc.text(lang.levelText, x, barY + 5.2);

  return barY + 7.2;
}

function generatePdfExact() {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

  const pageW = 210;
  const pageH = 297;
  const margin = 10;

  const leftColW = 26;
  const gutter = 6;
  const mainX = margin + leftColW + gutter;
  const mainW = pageW - margin - mainX;

  const baseLine = 3.9;

  // Header
  const markX = margin;
  const markY = margin;
  drawDiamondMark(doc, markX, markY, 16);

  setFont(doc, { size: 20, style: "normal" });
  doc.text(data.name, mainX + mainW / 2, margin + 8, { align: "center" });

  setFont(doc, { size: 7.6, style: "normal" });
  doc.setTextColor(60, 60, 60);
  doc.text(
    `${data.email}  |  ${data.phone}  |  ${data.location}, India`,
    mainX + mainW / 2,
    margin + 13,
    { align: "center" }
  );
  doc.text(
    `WWW: ${data.linkedinText}  |  WWW: ${data.githubText}`,
    mainX + mainW / 2,
    margin + 16.2,
    { align: "center" }
  );
  doc.setTextColor(0, 0, 0);

  // Divider line
  doc.setLineWidth(0.25);
  doc.line(margin, margin + 19, pageW - margin, margin + 19);

  // Pre-measure section heights to distribute whitespace (avoid bottom gap).
  // We'll use the exact same fonts used during rendering.
  const calcHeights = () => {
    const heights = [];
    let h = 0;

    // Summary
    setFont(doc, { size: 8.6, style: "normal" });
    const sumLines = measureLines(doc, data.summary, mainW);
    const summaryH = sumLines.length * baseLine;
    heights.push({ key: "summary", h: 3.5 + summaryH });

    // Skills
    // skills rows fixed by max length
    const skillsRows = Math.max(data.skillsLeft.length, data.skillsRight.length);
    const skillsH = 3.5 + skillsRows * 4.0;
    heights.push({ key: "skills", h: skillsH });

    // Experience
    // Title lines + bullets wrapped
    setFont(doc, { size: 9.2, style: "bold" });
    const expTitleH = 3.8;
    setFont(doc, { size: 8.6, style: "normal" });
    const expCompanyH = 3.4;
    setFont(doc, { size: 8.4, style: "normal" });
    let bulletLinesCount = 0;
    for (const b of data.experience.bullets) {
      const lines = measureLines(doc, b, mainW - 4);
      bulletLinesCount += lines.length;
    }
    const expBulletsH = bulletLinesCount * baseLine;
    heights.push({
      key: "experience",
      h: 3.5 + expTitleH + expCompanyH + expBulletsH + 1.8,
    });

    // Education
    // 2 entries
    const eduH = 3.5 + 2 * (3.2 + 3.2 + 1.4);
    heights.push({ key: "education", h: eduH });

    // Certifications
    setFont(doc, { size: 8.4, style: "normal" });
    const certH = 3.5 + data.certifications.length * 3.6;
    heights.push({ key: "certs", h: certH });

    // Projects
    setFont(doc, { size: 8.4, style: "normal" });
    let projLinesCount = 0;
    for (const p of data.projects) {
      const pLines = measureLines(doc, `${p.title}: ${p.text}`, mainW - 4);
      projLinesCount += pLines.length;
    }
    const projH = 3.5 + projLinesCount * baseLine + 1.2;
    heights.push({ key: "projects", h: projH });

    // Languages
    const langH = 3.5 + 2 * 13.0; // two rows per column area
    heights.push({ key: "languages", h: langH });

    for (const item of heights) h += item.h;
    return { heights, total: h };
  };

  const startY = margin + 25;
  const { heights, total } = calcHeights();
  const available = pageH - margin - startY;
  const remaining = Math.max(0, available - total);

  // Distribute remaining whitespace across gaps between sections to avoid bottom empty area.
  const gaps = heights.length; // after each section
  const extraGap = remaining / gaps;
  const gapBase = 3.6;

  let y = startY;

  // Summary
  drawSectionLabel(doc, "Summary", margin, y);
  setFont(doc, { size: 8.6, style: "normal" });
  y = drawWrappedText(doc, data.summary, mainX, y, mainW, baseLine);
  y += gapBase + extraGap;

  // Skills
  drawSectionLabel(doc, "Skills", margin, y);
  const colGap = 10;
  const colW = (mainW - colGap) / 2;
  y = drawSkillsTwoCol(doc, data.skillsLeft, data.skillsRight, mainX, y, colGap, colW, 4.0);
  y += gapBase + extraGap;

  // Experience
  drawSectionLabel(doc, "Experience", margin, y);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.2);
  doc.text(data.experience.title, mainX, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.4);
  doc.text(data.experience.dateRange, mainX + mainW, y, { align: "right" });
  y += 3.8;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.6);
  doc.text(data.experience.companyLine, mainX, y);
  y += 3.4;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.4);
  y = drawBullets(doc, data.experience.bullets, mainX, y, mainW, baseLine, 4);
  y += gapBase + extraGap;

  // Education
  drawSectionLabel(doc, "Education", margin, y);
  for (const edu of data.education) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.8);
    doc.text(edu.degree, mainX, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.2);
    doc.text(edu.date, mainX + mainW, y, { align: "right" });
    y += 3.2;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.2);
    doc.text(edu.school, mainX, y);
    y += 4.0;
  }
  y += gapBase + extraGap - 1.2;

  // Certifications
  drawSectionLabel(doc, "Certifications", margin, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.4);
  y = drawBullets(doc, data.certifications, mainX, y, mainW, 3.6, 4);
  y += gapBase + extraGap - 0.8;

  // Projects
  drawSectionLabel(doc, "Projects", margin, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.4);
  const projBullets = data.projects.map((p) => `${p.title}: ${p.text}`);
  y = drawBullets(doc, projBullets, mainX, y, mainW, baseLine, 4);
  y += gapBase + extraGap - 1.2;

  // Languages
  drawSectionLabel(doc, "Languages", margin, y);
  // Divider above languages (like screenshot)
  doc.setLineWidth(0.2);
  doc.line(mainX, y - 1.4, mainX + mainW, y - 1.4);

  // 2 columns: left 2 languages, right 2 languages
  const langColGap = 12;
  const langColW = (mainW - langColGap) / 2;
  const langLeftX = mainX;
  const langRightX = mainX + langColW + langColGap;

  const langY = y + 2.5;
  let ly = langY;
  ly = drawLanguageBlock(doc, langLeftX, ly, langColW, data.languages[0]);
  ly = drawLanguageBlock(doc, langLeftX, ly + 1.2, langColW, data.languages[1]);

  let ry = langY;
  ry = drawLanguageBlock(doc, langRightX, ry, langColW, data.languages[2]);
  ry = drawLanguageBlock(doc, langRightX, ry + 1.2, langColW, data.languages[3]);

  // Ensure we stay one page (no addPage calls).
  // Save to file
  doc.save(`${outDir}/yuva-teja-screenshot-exact.pdf`);
}

async function generateDocxBestEffort() {
  // Word can't perfectly replicate the PDF layout (logo, exact bars),
  // but we can create a close 1-page structure with similar sections.
  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: { top: 500, right: 500, bottom: 500, left: 500 },
          },
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({ text: data.name, bold: true, size: 36 }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 80 },
            children: [
              new TextRun({
                text: `${data.email} | ${data.phone} | ${data.location}, India`,
                size: 18,
              }),
            ],
            border: {
              bottom: {
                color: "000000",
                space: 1,
                style: BorderStyle.SINGLE,
                size: 4,
              },
            },
          }),

          new Paragraph({ text: "Summary", bold: true }),
          new Paragraph({ text: data.summary, spacing: { after: 120 } }),

          new Paragraph({ text: "Skills", bold: true }),
          new Paragraph({
            text: data.skillsLeft.concat(data.skillsRight).join(", "),
            spacing: { after: 120 },
          }),

          new Paragraph({ text: "Experience", bold: true }),
          new Paragraph({
            children: [
              new TextRun({ text: data.experience.title, bold: true }),
              new TextRun({ text: `  (${data.experience.dateRange})` }),
            ],
          }),
          new Paragraph({
            text: data.experience.companyLine,
            spacing: { after: 40 },
          }),
          ...data.experience.bullets.map(
            (b) =>
              new Paragraph({
                text: b,
                bullet: { level: 0 },
                spacing: { after: 30 },
              })
          ),

          new Paragraph({ text: "Education", bold: true }),
          ...data.education.flatMap((e) => [
            new Paragraph({
              children: [
                new TextRun({ text: e.degree, bold: true }),
                new TextRun({ text: `  (${e.date})` }),
              ],
            }),
            new Paragraph({ text: e.school, spacing: { after: 40 } }),
          ]),

          new Paragraph({ text: "Certifications", bold: true }),
          ...data.certifications.map(
            (c) => new Paragraph({ text: c, bullet: { level: 0 } })
          ),

          new Paragraph({ text: "Projects", bold: true }),
          ...data.projects.map(
            (p) =>
              new Paragraph({
                text: `${p.title}: ${p.text}`,
                bullet: { level: 0 },
              })
          ),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(`${outDir}/yuva-teja-screenshot-exact.docx`, buffer);
}

async function main() {
  console.log("Generating screenshot-exact PDF...");
  generatePdfExact();
  console.log("Generating best-effort DOCX...");
  await generateDocxBestEffort();
  console.log("Done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

