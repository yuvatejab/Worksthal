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
  summary: "Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning with hands-on experience building production-grade full-stack applications and AI-powered systems. Developed and deployed scalable web applications using React, Next.js, and FastAPI with proven ability to work in remote, collaborative environments. Strong foundation in object-oriented programming (Python, C++, JavaScript), data structures, algorithms, and modern web development frameworks. Demonstrated skill in applying engineering principles to solve complex problems, maintaining comprehensive documentation, and delivering projects in agile team settings.",
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
            "Built an automated incident telemetry fetching agent that processes production incidents by fetching logs, metrics, and traces from multiple monitoring platforms using LLM-generated queries via AWS Bedrock (Claude Haiku 4.5), reducing manual investigation time for DevOps teams",
            "Optimized data fetching performance by implementing async HTTP/2 connections with aiohttp, parallel time-window processing (300 concurrent requests), and intelligent pagination, achieving 10,000 rows per API call with 70-80% bandwidth reduction through gzip compression",
            "Integrated Datadog MCP (Model Context Protocol) server for AI-driven telemetry access, enabling the system to fetch logs, metrics, and traces through standardized protocol interfaces rather than direct REST API calls, reducing data retrieval latency by 40% and reducing noise from the data which resulted in improved incident correlation helping generate better RCAs downstream",
            "Engineered a high-performance S3 storage pipeline with multipart streaming uploads that processes 100MB batches in parallel, utilizing thread pools for compression (12 workers) and real-time data streaming to minimize memory footprint during large-scale log ingestion",
            "Designed and deployed a production-ready AWS infrastructure using ECS Fargate with Docker containerization and ECR, SQS message queues for job processing, and automated CI/CD deployment scripts for both dev and prod environments",
            "Created tool-agnostic monitoring adapter pattern supporting multiple observability platforms (SigNoz, Grafana, Datadog, CloudWatch) with automatic source detection from incident payloads, enabling flexible integration with different monitoring tools through both traditional APIs and modern protocols like MCP"
          ]
        },
        {
          name: "OpenTelemetry Observability for Production AI Agent Pipeline",
          bullets: [
            "Deployed end-to-end OpenTelemetry observability for multi-agent production pipeline, implementing distributed tracing across 5 microservices, custom span attributes, and context propagation across async workflows",
            "Implemented comprehensive and critical metrics tracking including data fetch duration, S3 upload performance, queue processing times, and memory utilization, AWS Bedrock LLM calls, capturing latency, token usage and error rates, providing real-time visibility into 100+ daily incident processing operations"
          ]
        }
      ]
    }
  ],
  projects: [
    {
      title: "Deepfake Detection System",
      bullets: [
        "Engineered a hybrid video classification pipeline integrating CNN and RNN models, boosting detection accuracy to 87%",
        "Aggregated data from 3+ benchmark datasets like FaceForensics++ and Celeb-DF v4 to build the foundation of a deepfake detection model",
        "Implemented frame extraction and temporal analysis techniques to identify manipulation patterns in synthetic media"
      ]
    },
    {
      title: "API Health Monitoring Dashboard",
      bullets: [
        "Developed an AI-powered API monitoring and anomaly detection system for large-scale, distributed systems supporting over 15,000 daily traces",
        "Used OpenTelemetry for telemetry collection, Elasticsearch for storage, and Kibana for real-time dashboards eliminating the need for manual troubleshooting by 25%",
        "Built front-end interface with data visualization components using React, implementing responsive design for optimal viewing across devices"
      ]
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science Engineering in Artificial Intelligence and Machine Learning",
      institution: "Vishwakarma Institute of Technology",
      period: "Sep 2022 - Present",
      location: "Pune"
    },
    {
      degree: "Telangana State Board of Intermediate Education (HSC)",
      institution: "Loyola Academy",
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

function generateFilledPDF(data, filename) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 8;
  const contentWidth = pageWidth - (margin * 2);
  let yPosition = margin;

  const lineHeight = 4.2;
  const sectionSpacing = 4;
  const bulletIndent = 4;

  // Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(15);
  doc.setTextColor(0, 0, 0);
  doc.text(data.contact.name, pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 4.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  const contactLine = `${data.contact.phone} | ${data.contact.email} | ${data.contact.location}`;
  doc.text(contactLine, pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 3.2;

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
  yPosition += 3.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  const summaryLines = doc.splitTextToSize(data.summary, contentWidth);
  doc.text(summaryLines, margin, yPosition);
  yPosition += summaryLines.length * lineHeight + sectionSpacing;

  // Skills
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('TECHNICAL SKILLS', margin, yPosition);
  yPosition += 3.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  
  Object.entries(data.skills).forEach(([category, skills]) => {
    doc.setFont('helvetica', 'bold');
    doc.text(category + ':', margin, yPosition);
    doc.setFont('helvetica', 'normal');
    const skillText = skills.join(', ');
    const skillLines = doc.splitTextToSize(skillText, contentWidth - 50);
    doc.text(skillLines, margin + 50, yPosition);
    yPosition += Math.max(skillLines.length * lineHeight, lineHeight);
  });
  
  yPosition += sectionSpacing;

  // Experience
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('PROFESSIONAL EXPERIENCE', margin, yPosition);
  yPosition += 3.5;

  data.experience.forEach((exp) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text(exp.role, margin, yPosition);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text(exp.period, pageWidth - margin, yPosition, { align: 'right' });
    yPosition += 3.5;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.text(exp.company + ' | ' + exp.location, margin, yPosition);
    yPosition += 3.8;

    exp.projects.forEach((project) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.text(project.name, margin, yPosition);
      yPosition += 3.2;

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
  yPosition += 3.5;

  data.projects.forEach((project) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text(project.title, margin, yPosition);
    yPosition += 3.2;

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
  yPosition += 3.5;

  data.education.forEach((edu) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.text(edu.degree, margin, yPosition);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text(edu.period, pageWidth - margin, yPosition, { align: 'right' });
    yPosition += 3.2;

    doc.setFont('helvetica', 'normal');
    doc.text(edu.institution + ' | ' + edu.location, margin, yPosition);
    yPosition += 3.8;
  });

  yPosition += sectionSpacing - 1;

  // Certifications
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('CERTIFICATIONS', margin, yPosition);
  yPosition += 3.5;

  data.certifications.forEach((cert) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.text(cert.title + ' - ' + cert.issuer, margin, yPosition);
    
    doc.setFont('helvetica', 'normal');
    doc.text(cert.date, pageWidth - margin, yPosition, { align: 'right' });
    yPosition += 3.5;
  });

  doc.save(filename);
}

async function generateFilledDOC(data, filename) {
  const doc = new Document({
    sections: [{
      properties: {
        page: {
          margin: {
            top: 400,
            right: 400,
            bottom: 400,
            left: 400
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
          spacing: { after: 45 },
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
            spacing: { after: 55 },
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
              spacing: { before: 45, after: 35 },
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
                spacing: { after: 55 }
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
            spacing: { before: 60, after: 35 },
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
              spacing: { after: 55 }
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
            spacing: { before: 60, after: 35 },
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
            spacing: { after: 55 },
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
  console.log('Starting Fully-Filled ENTNT Resume Generation...\n');

  try {
    console.log('Generating resume with content filling entire page...');
    generateFilledPDF(entntResumeData, 'resume-generator/output/yuva-teja-entnt-filled.pdf');
    await generateFilledDOC(entntResumeData, 'resume-generator/output/yuva-teja-entnt-filled.docx');
    console.log('✓ Fully-filled resume generated successfully\n');

    console.log('Generated files:');
    console.log('1. resume-generator/output/yuva-teja-entnt-filled.pdf');
    console.log('2. resume-generator/output/yuva-teja-entnt-filled.docx');
    console.log('\nFully-filled optimization features:');
    console.log('- Content spreads from top to bottom');
    console.log('- Increased line spacing (4.2mm)');
    console.log('- Better section spacing (4mm)');
    console.log('- All 8 experience bullets included');
    console.log('- All 6 project bullets included');
    console.log('- Both education entries');
    console.log('- Both certifications');
    console.log('- Professional black & white design');
    console.log('- No empty space at bottom');
  } catch (error) {
    console.error('Error generating fully-filled resume:', error);
    process.exit(1);
  }
}

main();
