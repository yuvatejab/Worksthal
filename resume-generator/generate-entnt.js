const { jsPDF } = require('jspdf');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, UnderlineType } = require('docx');
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
  summary: "Computer Science Engineering student with hands-on experience building production-grade full-stack applications and AI-powered systems. Developed and deployed scalable web applications using React, Next.js, and FastAPI, with proven ability to work in remote, collaborative environments. Strong foundation in object-oriented programming (Python, C++, JavaScript), data structures, algorithms, and modern web development frameworks. Demonstrated skill in applying engineering principles to solve complex problems, maintaining comprehensive documentation, and delivering projects in agile team settings.",
  skills: {
    "Programming Languages": ["Python", "JavaScript", "C++", "C", "SQL", "HTML", "CSS"],
    "Web Development": ["React", "Next.js", "FastAPI", "HTML5", "CSS3", "Responsive Design", "RESTful APIs"],
    "Front-End Technologies": ["React", "Next.js", "Tailwind CSS", "Modern JavaScript (ES6+)", "Component-Based Architecture"],
    "Back-End & APIs": ["FastAPI", "Python", "RESTful API Design", "Async Programming", "API Integration"],
    "Development Tools & Practices": ["Git", "Version Control", "Docker", "CI/CD", "Agile Methodologies", "Code Documentation"],
    "Cloud & Infrastructure": ["AWS (ECS, S3, SQS, Lambda, CloudWatch)", "Docker", "Containerization", "Cloud Deployment"],
    "Data Structures & Algorithms": ["Object-Oriented Programming", "Data Structures", "Algorithm Design", "Problem Solving"],
    "Additional Skills": ["Machine Learning", "AI Integration", "OpenTelemetry", "Elasticsearch", "Kibana"]
  },
  experience: [
    {
      company: "BugRaid AI",
      role: "Software Development Intern",
      location: "Remote, Hyderabad",
      period: "Sep 2025 - Dec 2025",
      bullets: [
        "Built and deployed a production-grade incident telemetry system using Python, integrating with multiple monitoring platforms through RESTful APIs, demonstrating strong understanding of software development lifecycle and API design",
        "Developed high-performance async processing pipeline using Python (aiohttp) handling 300 concurrent requests, achieving 10,000 rows per API call with 70-80% bandwidth optimization through gzip compression, showcasing strong problem-solving and performance optimization skills",
        "Engineered scalable AWS cloud infrastructure using ECS Fargate, Docker containerization, SQS message queues, and S3 storage, processing 100MB+ data batches with automated CI/CD deployment for dev and prod environments",
        "Implemented comprehensive observability using OpenTelemetry for distributed tracing across 5 microservices, demonstrating understanding of modern software architecture and debugging practices",
        "Created tool-agnostic adapter pattern supporting multiple platforms (SigNoz, Grafana, Datadog, CloudWatch), showcasing strong object-oriented programming principles and design patterns",
        "Collaborated effectively in remote team environment, maintained detailed code documentation, and delivered project milestones on schedule following agile methodologies"
      ]
    }
  ],
  projects: [
    {
      title: "API Health Monitoring Dashboard (Full-Stack Web Application)",
      bullets: [
        "Developed full-stack monitoring dashboard for distributed systems analyzing 15,000+ daily traces using modern web technologies and responsive design principles",
        "Built front-end interface with data visualization components, implementing responsive design for optimal viewing across devices",
        "Integrated OpenTelemetry for telemetry collection, Elasticsearch for data storage, and Kibana for real-time dashboards, reducing manual troubleshooting by 25%",
        "Utilized Git for version control and followed agile development practices throughout the project lifecycle"
      ]
    },
    {
      title: "Deepfake Detection System (AI/ML Application)",
      bullets: [
        "Engineered hybrid video classification pipeline using Python, integrating CNN and RNN models with 87% detection accuracy",
        "Processed and analyzed data from 3+ benchmark datasets (FaceForensics++, Celeb-DF v4) demonstrating strong data management and analytical skills",
        "Implemented efficient data structures and algorithms for frame extraction and model inference optimization"
      ]
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science Engineering (Artificial Intelligence and Machine Learning)",
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
      date: "May 2025",
      link: "https://drive.google.com/file/d/1FxJFx9dR7kL9yrPSne98-4la_LqZUiiT/view"
    },
    {
      title: "Python for Data Science",
      issuer: "Simplilearn",
      date: "Sep 2024",
      link: "https://drive.google.com/file/d/1jZtlaAduSJf43dxHXfm5DkEefX1S8HCT/view"
    }
  ]
};

function generatePDF(data, filename) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 15;
  const contentWidth = pageWidth - (margin * 2);
  let yPosition = margin;

  const lineHeight = 5;
  const sectionSpacing = 6;
  const bulletIndent = 5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text(data.contact.name, pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  const contactLine = `${data.contact.phone} | ${data.contact.email} | ${data.contact.location}`;
  doc.text(contactLine, pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 4;

  const linksLine = `LinkedIn: ${data.contact.linkedin} | GitHub: ${data.contact.github}`;
  doc.text(linksLine, pageWidth / 2, yPosition, { align: 'center' });
  yPosition += sectionSpacing;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('SUMMARY', margin, yPosition);
  yPosition += 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  const summaryLines = doc.splitTextToSize(data.summary, contentWidth);
  doc.text(summaryLines, margin, yPosition);
  yPosition += summaryLines.length * lineHeight + sectionSpacing;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('EXPERIENCE', margin, yPosition);
  yPosition += 5;

  data.experience.forEach((exp, index) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text(exp.company + ', ' + exp.role, margin, yPosition);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    const periodLocation = exp.period + ' | ' + exp.location;
    doc.text(periodLocation, pageWidth - margin, yPosition, { align: 'right' });
    yPosition += 5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    exp.bullets.forEach((bullet) => {
      const bulletLines = doc.splitTextToSize(bullet, contentWidth - bulletIndent);
      doc.text('•', margin, yPosition);
      doc.text(bulletLines, margin + bulletIndent, yPosition);
      yPosition += bulletLines.length * lineHeight;
    });

    if (index < data.experience.length - 1) {
      yPosition += 3;
    }
  });

  yPosition += sectionSpacing;

  if (yPosition > pageHeight - 60) {
    doc.addPage();
    yPosition = margin;
  }

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('EDUCATION', margin, yPosition);
  yPosition += 5;

  data.education.forEach((edu) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text(edu.degree, margin, yPosition);
    yPosition += 4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text(edu.institution, margin, yPosition);
    const eduPeriod = edu.period + ' | ' + edu.location;
    doc.text(eduPeriod, pageWidth - margin, yPosition, { align: 'right' });
    yPosition += 5;
  });

  yPosition += sectionSpacing;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('CERTIFICATIONS', margin, yPosition);
  yPosition += 5;

  data.certifications.forEach((cert) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text(cert.title + ', ' + cert.issuer, margin, yPosition);
    
    doc.setFont('helvetica', 'normal');
    doc.text(cert.date, pageWidth - margin, yPosition, { align: 'right' });
    yPosition += 4;
  });

  yPosition += sectionSpacing;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('PROJECTS', margin, yPosition);
  yPosition += 5;

  data.projects.forEach((project) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text(project.title, margin, yPosition);
    yPosition += 4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    project.bullets.forEach((bullet) => {
      const bulletLines = doc.splitTextToSize(bullet, contentWidth - bulletIndent);
      doc.text('•', margin, yPosition);
      doc.text(bulletLines, margin + bulletIndent, yPosition);
      yPosition += bulletLines.length * lineHeight;
    });
    yPosition += 2;
  });

  yPosition += sectionSpacing;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('SKILLS', margin, yPosition);
  yPosition += 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  Object.entries(data.skills).forEach(([category, skills]) => {
    const skillLine = category + ': ' + skills.join(', ');
    const skillLines = doc.splitTextToSize(skillLine, contentWidth);
    doc.text(skillLines, margin, yPosition);
    yPosition += skillLines.length * lineHeight;
  });

  doc.save(filename);
}

async function generateDOC(data, filename) {
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        new Paragraph({
          text: data.contact.name,
          heading: HeadingLevel.HEADING_1,
          alignment: AlignmentType.CENTER,
          spacing: { after: 100 }
        }),

        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 50 },
          children: [
            new TextRun({
              text: `${data.contact.phone} | ${data.contact.email} | ${data.contact.location}`,
              size: 18
            })
          ]
        }),

        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [
            new TextRun({
              text: 'LinkedIn: ',
              size: 18
            }),
            new TextRun({
              text: data.contact.linkedin,
              size: 18,
              color: '0563C1',
              underline: { type: UnderlineType.SINGLE }
            }),
            new TextRun({
              text: ' | GitHub: ',
              size: 18
            }),
            new TextRun({
              text: data.contact.github,
              size: 18,
              color: '0563C1',
              underline: { type: UnderlineType.SINGLE }
            })
          ]
        }),

        new Paragraph({
          text: 'SUMMARY',
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 }
        }),

        new Paragraph({
          text: data.summary,
          spacing: { after: 200 }
        }),

        new Paragraph({
          text: 'EXPERIENCE',
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 }
        }),

        ...data.experience.flatMap((exp) => [
          new Paragraph({
            spacing: { before: 100, after: 50 },
            children: [
              new TextRun({
                text: `${exp.company}, ${exp.role}`,
                bold: true,
                size: 20
              }),
              new TextRun({
                text: `\t\t${exp.period} | ${exp.location}`,
                size: 18
              })
            ]
          }),
          ...exp.bullets.map((bullet) => 
            new Paragraph({
              text: bullet,
              bullet: { level: 0 },
              spacing: { after: 100 }
            })
          )
        ]),

        new Paragraph({
          text: 'EDUCATION',
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 }
        }),

        ...data.education.flatMap((edu) => [
          new Paragraph({
            spacing: { before: 100, after: 50 },
            children: [
              new TextRun({
                text: edu.degree,
                bold: true,
                size: 20
              })
            ]
          }),
          new Paragraph({
            spacing: { after: 100 },
            children: [
              new TextRun({
                text: edu.institution,
                size: 18
              }),
              new TextRun({
                text: `\t\t${edu.period} | ${edu.location}`,
                size: 18
              })
            ]
          })
        ]),

        new Paragraph({
          text: 'CERTIFICATIONS',
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 }
        }),

        ...data.certifications.map((cert) => 
          new Paragraph({
            spacing: { after: 100 },
            children: [
              new TextRun({
                text: `${cert.title}, ${cert.issuer}`,
                bold: true,
                size: 18
              }),
              new TextRun({
                text: `\t\t${cert.date}`,
                size: 18
              })
            ]
          })
        ),

        new Paragraph({
          text: 'PROJECTS',
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 }
        }),

        ...data.projects.flatMap((project) => [
          new Paragraph({
            text: project.title,
            spacing: { before: 100, after: 50 },
            children: [
              new TextRun({
                text: project.title,
                bold: true,
                size: 20
              })
            ]
          }),
          ...project.bullets.map((bullet) => 
            new Paragraph({
              text: bullet,
              bullet: { level: 0 },
              spacing: { after: 100 }
            })
          )
        ]),

        new Paragraph({
          text: 'SKILLS',
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 }
        }),

        ...Object.entries(data.skills).map(([category, skills]) => 
          new Paragraph({
            spacing: { after: 100 },
            children: [
              new TextRun({
                text: `${category}: `,
                bold: true,
                size: 18
              }),
              new TextRun({
                text: skills.join(', '),
                size: 18
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
  console.log('Starting ENTNT Full Stack Developer resume generation...\n');

  try {
    console.log('Generating ENTNT tailored resume...');
    generatePDF(entntResumeData, 'resume-generator/output/yuva-teja-entnt-fullstack-resume.pdf');
    await generateDOC(entntResumeData, 'resume-generator/output/yuva-teja-entnt-fullstack-resume.docx');
    console.log('✓ ENTNT resume generated successfully\n');

    console.log('Generated files:');
    console.log('1. resume-generator/output/yuva-teja-entnt-fullstack-resume.pdf');
    console.log('2. resume-generator/output/yuva-teja-entnt-fullstack-resume.docx');
    console.log('\nResume tailored for: ENTNT Full Stack Developer Internship');
    console.log('\nKey optimizations:');
    console.log('- Emphasized full-stack development experience (React, Next.js, FastAPI)');
    console.log('- Highlighted remote work experience and collaboration skills');
    console.log('- Showcased object-oriented programming proficiency (Python, C++, JavaScript)');
    console.log('- Demonstrated understanding of data structures and algorithms');
    console.log('- Emphasized web development technologies and responsive design');
    console.log('- Highlighted Git version control and agile methodologies');
    console.log('- Included AWS cloud experience and Docker containerization');
    console.log('- Showcased problem-solving skills and attention to detail');
  } catch (error) {
    console.error('Error generating ENTNT resume:', error);
    process.exit(1);
  }
}

main();
