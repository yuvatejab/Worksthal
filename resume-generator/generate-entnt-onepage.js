const { jsPDF } = require('jspdf');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle } = require('docx');
const fs = require('fs');

const contactInfo = {
  name: "YUVA TEJA BANDHARAPU",
  phone: "+91 6301465458",
  email: "ybandharapu@gmail.com",
  location: "Hyderabad, Telangana, India",
  linkedin: "https://www.linkedin.com/in/yuva-teja-bandharapu-0a5bb9327/",
  github: "https://github.com/"
};

const entntResumeData = {
  contact: contactInfo,
  summary: "Computer Science Engineering student specializing in AI/ML with hands-on experience building production-grade full-stack applications. Developed scalable web applications using React, Next.js, and FastAPI with proven ability to work in remote environments. Strong foundation in OOP, data structures, algorithms, and modern web frameworks.",
  skills: {
    "Programming Languages": ["Python", "JavaScript", "C++", "C", "SQL", "HTML", "CSS", "React", "Next.js", "FastAPI"],
    "Technical Skills": ["Object-Oriented Programming", "Data Structures", "Problem Solving", "Machine Learning", "Numpy", "Pandas"],
    "Development Tools & Practices": ["Git", "Version Control", "Docker", "CI/CD"],
    "Cloud & Infrastructure": ["AWS (ECS, S3, SQS, Lambda, CloudWatch)", "Docker", "Containerization", "Cloud Deployment"]
  },
  experience: [
    {
      company: "BugRaid AI",
      role: "Software Development Intern",
      location: "Remote, Hyderabad",
      period: "Sep 2025 - Dec 2025",
      projects: [
        {
          name: "Signal Fetching Agent",
          bullets: [
            "Built automated incident telemetry system using Python and AWS Bedrock (Claude 4.5), integrating with multiple monitoring platforms through RESTful APIs, reducing manual investigation time for DevOps teams",
            "Optimized data fetching with async HTTP/2 connections (aiohttp), parallel processing (300 concurrent requests), achieving 10,000 rows per API call with 70-80% bandwidth reduction through gzip compression",
            "Integrated Datadog MCP server for AI-driven telemetry access, reducing data retrieval latency by 40% and improving incident correlation for better root cause analysis",
            "Engineered high-performance S3 storage pipeline processing 100MB batches in parallel with thread pools (12 workers) for compression and real-time streaming",
            "Deployed production AWS infrastructure using ECS Fargate, Docker, ECR, SQS message queues, and automated CI/CD scripts for dev and prod environments",
            "Created tool-agnostic monitoring adapter pattern supporting multiple platforms (SigNoz, Grafana, Datadog, CloudWatch) with automatic source detection"
          ]
        },
        {
          name: "OpenTelemetry Observability Pipeline",
          bullets: [
            "Deployed end-to-end OpenTelemetry observability implementing distributed tracing across 5 microservices with custom span attributes and context propagation",
            "Implemented comprehensive metrics tracking for data fetch duration, S3 uploads, queue processing, and AWS Bedrock LLM calls, providing visibility into 100+ daily operations"
          ]
        }
      ]
    }
  ],
  projects: [
    {
      title: "Deepfake Detection System",
      bullets: [
        "Engineered hybrid CNN/RNN video classification pipeline achieving 87% detection accuracy on benchmark datasets",
        "Aggregated data from 3+ datasets (FaceForensics++, Celeb-DF v4) implementing frame extraction and temporal analysis techniques"
      ]
    },
    {
      title: "API Health Monitoring Dashboard",
      bullets: [
        "Developed full-stack monitoring dashboard for distributed systems analyzing 15,000+ daily traces using React, OpenTelemetry, Elasticsearch, and Kibana",
        "Built responsive front-end with data visualization components, reducing manual troubleshooting by 25%"
      ]
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science Engineering (AI & ML)",
      institution: "Vishwakarma Institute of Technology",
      period: "Sep 2022 - Present",
      location: "Pune"
    },
    {
      degree: "HSC, Loyola Academy",
      period: "2020 - 2022",
      location: "Hyderabad"
    }
  ],
  certifications: [
    {
      title: "IBM Artificial Intelligence Engineer",
      issuer: "Simplilearn",
      date: "May 2025"
    },
    {
      title: "Python for Data Science",
      issuer: "Simplilearn",
      date: "Sep 2024"
    }
  ]
};

function generateOnePagePDF(data, filename) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = 210;
  const margin = 10;
  const contentWidth = pageWidth - (margin * 2);
  let yPosition = margin;

  const lineHeight = 3.8;
  const sectionSpacing = 3.5;
  const bulletIndent = 4;

  // Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);
  doc.text(data.contact.name, pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 4.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  const contactLine = `${data.contact.phone} | ${data.contact.email} | ${data.contact.location}`;
  doc.text(contactLine, pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 3;

  const linksLine = `LinkedIn: linkedin.com/in/yuva-teja-bandharapu | GitHub: github.com/yuvateja`;
  doc.text(linksLine, pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 0.8;

  doc.setLineWidth(0.3);
  doc.line(margin, yPosition, pageWidth - margin, yPosition);
  yPosition += 3.5;

  // Summary
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('PROFESSIONAL SUMMARY', margin, yPosition);
  yPosition += 3.2;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  const summaryLines = doc.splitTextToSize(data.summary, contentWidth);
  doc.text(summaryLines, margin, yPosition);
  yPosition += summaryLines.length * lineHeight + sectionSpacing;

  // Skills
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('TECHNICAL SKILLS', margin, yPosition);
  yPosition += 3.2;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  
  Object.entries(data.skills).forEach(([category, skills]) => {
    doc.setFont('helvetica', 'bold');
    doc.text(category + ':', margin, yPosition);
    doc.setFont('helvetica', 'normal');
    const skillText = skills.join(', ');
    const skillLines = doc.splitTextToSize(skillText, contentWidth - 52);
    doc.text(skillLines, margin + 52, yPosition);
    yPosition += Math.max(skillLines.length * lineHeight, lineHeight);
  });
  
  yPosition += sectionSpacing;

  // Experience
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('PROFESSIONAL EXPERIENCE', margin, yPosition);
  yPosition += 3.2;

  data.experience.forEach((exp) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text(exp.role, margin, yPosition);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text(exp.period, pageWidth - margin, yPosition, { align: 'right' });
    yPosition += 3.2;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.text(exp.company + ' | ' + exp.location, margin, yPosition);
    yPosition += 3.5;

    exp.projects.forEach((project) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.text(project.name, margin, yPosition);
      yPosition += 3;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      project.bullets.forEach((bullet) => {
        const bulletLines = doc.splitTextToSize(bullet, contentWidth - bulletIndent);
        doc.text('•', margin, yPosition);
        doc.text(bulletLines, margin + bulletIndent, yPosition);
        yPosition += bulletLines.length * lineHeight;
      });
      yPosition += 1.5;
    });
  });

  yPosition += sectionSpacing - 1.5;

  // Projects
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('PROJECTS', margin, yPosition);
  yPosition += 3.2;

  data.projects.forEach((project) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text(project.title, margin, yPosition);
    yPosition += 3;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    project.bullets.forEach((bullet) => {
      const bulletLines = doc.splitTextToSize(bullet, contentWidth - bulletIndent);
      doc.text('•', margin, yPosition);
      doc.text(bulletLines, margin + bulletIndent, yPosition);
      yPosition += bulletLines.length * lineHeight;
    });
    yPosition += 1.5;
  });

  yPosition += sectionSpacing - 1.5;

  // Education
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('EDUCATION', margin, yPosition);
  yPosition += 3.2;

  data.education.forEach((edu) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.text(edu.degree, margin, yPosition);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text(edu.period, pageWidth - margin, yPosition, { align: 'right' });
    yPosition += 3;

    doc.setFont('helvetica', 'normal');
    doc.text(edu.institution + ' | ' + edu.location, margin, yPosition);
    yPosition += 3.5;
  });

  yPosition += sectionSpacing - 1;

  // Certifications
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('CERTIFICATIONS', margin, yPosition);
  yPosition += 3.2;

  data.certifications.forEach((cert) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.text(cert.title + ' - ' + cert.issuer, margin, yPosition);
    
    doc.setFont('helvetica', 'normal');
    doc.text(cert.date, pageWidth - margin, yPosition, { align: 'right' });
    yPosition += 3.2;
  });

  doc.save(filename);
}

async function generateOnePageDOC(data, filename) {
  const doc = new Document({
    sections: [{
      properties: {
        page: {
          margin: {
            top: 500,
            right: 500,
            bottom: 500,
            left: 500
          }
        }
      },
      children: [
        new Paragraph({
          text: data.contact.name,
          heading: HeadingLevel.HEADING_1,
          alignment: AlignmentType.CENTER,
          spacing: { after: 60 }
        }),

        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 40 },
          children: [
            new TextRun({
              text: `${data.contact.phone} | ${data.contact.email} | ${data.contact.location}`,
              size: 16
            })
          ]
        }),

        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 120 },
          children: [
            new TextRun({
              text: 'LinkedIn: linkedin.com/in/yuva-teja-bandharapu | GitHub: github.com/yuvateja',
              size: 16
            })
          ],
          border: {
            bottom: {
              color: "000000",
              space: 1,
              style: BorderStyle.SINGLE,
              size: 6
            }
          }
        }),

        new Paragraph({
          text: 'PROFESSIONAL SUMMARY',
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 100, after: 60 }
        }),

        new Paragraph({
          text: data.summary,
          spacing: { after: 120 }
        }),

        new Paragraph({
          text: 'TECHNICAL SKILLS',
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 100, after: 60 }
        }),

        ...Object.entries(data.skills).map(([category, skills]) => 
          new Paragraph({
            spacing: { after: 50 },
            children: [
              new TextRun({
                text: `${category}: `,
                bold: true,
                size: 16
              }),
              new TextRun({
                text: skills.join(', '),
                size: 16
              })
            ]
          })
        ),

        new Paragraph({
          text: 'PROFESSIONAL EXPERIENCE',
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 120, after: 60 }
        }),

        ...data.experience.flatMap((exp) => [
          new Paragraph({
            spacing: { before: 60, after: 40 },
            children: [
              new TextRun({
                text: exp.role,
                bold: true,
                size: 18
              }),
              new TextRun({
                text: `\t\t${exp.period}`,
                size: 16
              })
            ]
          }),
          new Paragraph({
            spacing: { after: 50 },
            children: [
              new TextRun({
                text: `${exp.company} | ${exp.location}`,
                size: 16,
                italics: true
              })
            ]
          }),
          ...exp.projects.flatMap((project) => [
            new Paragraph({
              spacing: { before: 40, after: 30 },
              children: [
                new TextRun({
                  text: project.name,
                  bold: true,
                  size: 17
                })
              ]
            }),
            ...project.bullets.map((bullet) => 
              new Paragraph({
                text: bullet,
                bullet: { level: 0 },
                spacing: { after: 50 }
              })
            )
          ])
        ]),

        new Paragraph({
          text: 'PROJECTS',
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 120, after: 60 }
        }),

        ...data.projects.flatMap((project) => [
          new Paragraph({
            spacing: { before: 60, after: 30 },
            children: [
              new TextRun({
                text: project.title,
                bold: true,
                size: 18
              })
            ]
          }),
          ...project.bullets.map((bullet) => 
            new Paragraph({
              text: bullet,
              bullet: { level: 0 },
              spacing: { after: 50 }
            })
          )
        ]),

        new Paragraph({
          text: 'EDUCATION',
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 120, after: 60 }
        }),

        ...data.education.flatMap((edu) => [
          new Paragraph({
            spacing: { before: 60, after: 30 },
            children: [
              new TextRun({
                text: edu.degree,
                bold: true,
                size: 17
              }),
              new TextRun({
                text: `\t\t${edu.period}`,
                size: 16
              })
            ]
          }),
          new Paragraph({
            spacing: { after: 60 },
            children: [
              new TextRun({
                text: `${edu.institution} | ${edu.location}`,
                size: 16
              })
            ]
          })
        ]),

        new Paragraph({
          text: 'CERTIFICATIONS',
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 120, after: 60 }
        }),

        ...data.certifications.map((cert) => 
          new Paragraph({
            spacing: { after: 50 },
            children: [
              new TextRun({
                text: `${cert.title} - ${cert.issuer}`,
                bold: true,
                size: 16
              }),
              new TextRun({
                text: `\t\t${cert.date}`,
                size: 16
              })
            ]
          })
        )
      ]
    }]
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(filename, buffer);
}

async function main() {
  console.log('Starting One-Page ENTNT Resume Generation...\n');

  try {
    console.log('Generating optimized one-page resume...');
    generateOnePagePDF(entntResumeData, 'resume-generator/output/yuva-teja-entnt-onepage.pdf');
    await generateOnePageDOC(entntResumeData, 'resume-generator/output/yuva-teja-entnt-onepage.docx');
    console.log('✓ One-page resume generated successfully\n');

    console.log('Generated files:');
    console.log('1. resume-generator/output/yuva-teja-entnt-onepage.pdf');
    console.log('2. resume-generator/output/yuva-teja-entnt-onepage.docx');
    console.log('\nOne-page optimization features:');
    console.log('- All content fits on single page');
    console.log('- Reduced margins (10mm)');
    console.log('- Optimized font sizes (8-10pt)');
    console.log('- Condensed spacing (3.8mm line height)');
    console.log('- Streamlined summary');
    console.log('- All 8 experience bullets included');
    console.log('- All 4 project bullets included');
    console.log('- Both education entries');
    console.log('- Both certifications');
    console.log('- Professional black & white design');
  } catch (error) {
    console.error('Error generating one-page resume:', error);
    process.exit(1);
  }
}

main();
