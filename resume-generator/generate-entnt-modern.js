const { jsPDF } = require('jspdf');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, UnderlineType, BorderStyle } = require('docx');
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
      bullets: [
        "Built production-grade incident telemetry system using Python, integrating with multiple monitoring platforms through RESTful APIs",
        "Developed high-performance async processing pipeline handling 300 concurrent requests, achieving 10,000 rows per API call with 70-80% bandwidth optimization",
        "Engineered scalable AWS cloud infrastructure using ECS Fargate, Docker, SQS, and S3, processing 100MB+ data batches with automated CI/CD deployment",
        "Implemented comprehensive observability using OpenTelemetry for distributed tracing across 5 microservices",
        "Collaborated effectively in remote team environment, maintained detailed code documentation, and delivered project milestones following agile methodologies"
      ]
    }
  ],
  projects: [
    {
      title: "API Health Monitoring Dashboard",
      bullets: [
        "Developed full-stack monitoring dashboard analyzing 15,000+ daily traces using modern web technologies and responsive design",
        "Built front-end interface with data visualization components using React, integrated with Elasticsearch and Kibana"
      ]
    },
    {
      title: "Deepfake Detection System",
      bullets: [
        "Engineered hybrid video classification pipeline using Python, integrating CNN and RNN models with 87% detection accuracy",
        "Processed data from 3+ benchmark datasets demonstrating strong data management and analytical skills"
      ]
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science Engineering (AI & ML)",
      institution: "Vishwakarma Institute of Technology",
      period: "Sep 2022 - Present",
      location: "Pune"
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

function generateModernPDF(data, filename) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 12;
  const contentWidth = pageWidth - (margin * 2);
  let yPosition = margin;

  const primaryColor = [41, 128, 185];
  const darkGray = [52, 73, 94];
  const lightGray = [149, 165, 166];

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text(data.contact.name, pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
  const contactLine = `${data.contact.phone} | ${data.contact.email} | ${data.contact.location}`;
  doc.text(contactLine, pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 4;

  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  const linksLine = `LinkedIn: linkedin.com/in/yuva-teja | GitHub: github.com/yuvateja`;
  doc.text(linksLine, pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 7;

  doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setLineWidth(0.5);
  doc.line(margin, yPosition, pageWidth - margin, yPosition);
  yPosition += 5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('PROFESSIONAL SUMMARY', margin, yPosition);
  yPosition += 4;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
  const summaryLines = doc.splitTextToSize(data.summary, contentWidth);
  doc.text(summaryLines, margin, yPosition);
  yPosition += summaryLines.length * 4 + 4;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('SKILLS', margin, yPosition);
  yPosition += 4;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
  
  Object.entries(data.skills).forEach(([category, skills]) => {
    doc.setFont('helvetica', 'bold');
    doc.text(category + ':', margin, yPosition);
    doc.setFont('helvetica', 'normal');
    const skillText = skills.join(', ');
    const skillLines = doc.splitTextToSize(skillText, contentWidth - 55);
    doc.text(skillLines, margin + 55, yPosition);
    yPosition += Math.max(skillLines.length * 4, 4);
  });
  
  yPosition += 3;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('EXPERIENCE', margin, yPosition);
  yPosition += 4;

  data.experience.forEach((exp) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    doc.text(exp.role, margin, yPosition);
    
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(9);
    doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
    doc.text(exp.period, pageWidth - margin, yPosition, { align: 'right' });
    yPosition += 4;

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    doc.text(exp.company + ' | ' + exp.location, margin, yPosition);
    yPosition += 4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    exp.bullets.forEach((bullet) => {
      const bulletLines = doc.splitTextToSize(bullet, contentWidth - 5);
      doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      doc.text('•', margin, yPosition);
      doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
      doc.text(bulletLines, margin + 4, yPosition);
      yPosition += bulletLines.length * 4;
    });
    yPosition += 2;
  });

  yPosition += 2;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('PROJECTS', margin, yPosition);
  yPosition += 4;

  data.projects.forEach((project) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    doc.text(project.title, margin, yPosition);
    yPosition += 4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    project.bullets.forEach((bullet) => {
      const bulletLines = doc.splitTextToSize(bullet, contentWidth - 5);
      doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      doc.text('•', margin, yPosition);
      doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
      doc.text(bulletLines, margin + 4, yPosition);
      yPosition += bulletLines.length * 4;
    });
    yPosition += 2;
  });

  yPosition += 2;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('EDUCATION', margin, yPosition);
  yPosition += 4;

  data.education.forEach((edu) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    doc.text(edu.degree, margin, yPosition);
    
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(9);
    doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
    doc.text(edu.period, pageWidth - margin, yPosition, { align: 'right' });
    yPosition += 4;

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    doc.text(edu.institution + ' | ' + edu.location, margin, yPosition);
    yPosition += 5;
  });

  yPosition += 2;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('CERTIFICATIONS', margin, yPosition);
  yPosition += 4;

  data.certifications.forEach((cert) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    doc.text(cert.title + ' - ' + cert.issuer, margin, yPosition);
    
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
    doc.text(cert.date, pageWidth - margin, yPosition, { align: 'right' });
    yPosition += 4;
  });

  doc.save(filename);
}

async function generateModernDOC(data, filename) {
  const doc = new Document({
    sections: [{
      properties: {
        page: {
          margin: {
            top: 720,
            right: 720,
            bottom: 720,
            left: 720
          }
        }
      },
      children: [
        new Paragraph({
          text: data.contact.name,
          heading: HeadingLevel.HEADING_1,
          alignment: AlignmentType.CENTER,
          spacing: { after: 100 },
          border: {
            bottom: {
              color: "2980B9",
              space: 1,
              style: BorderStyle.SINGLE,
              size: 6
            }
          }
        }),

        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 50 },
          children: [
            new TextRun({
              text: `${data.contact.phone} | ${data.contact.email} | ${data.contact.location}`,
              size: 18,
              color: "34495E"
            })
          ]
        }),

        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [
            new TextRun({
              text: 'LinkedIn: linkedin.com/in/yuva-teja | GitHub: github.com/yuvateja',
              size: 18,
              color: "2980B9"
            })
          ]
        }),

        new Paragraph({
          text: 'PROFESSIONAL SUMMARY',
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 100, after: 100 }
        }),

        new Paragraph({
          text: data.summary,
          spacing: { after: 200 }
        }),

        new Paragraph({
          text: 'SKILLS',
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 100, after: 100 }
        }),

        ...Object.entries(data.skills).map(([category, skills]) => 
          new Paragraph({
            spacing: { after: 80 },
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
        ),

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
                text: exp.role,
                bold: true,
                size: 20
              }),
              new TextRun({
                text: `\t\t${exp.period}`,
                size: 18,
                italics: true,
                color: "95A5A6"
              })
            ]
          }),
          new Paragraph({
            spacing: { after: 80 },
            children: [
              new TextRun({
                text: `${exp.company} | ${exp.location}`,
                size: 18,
                color: "34495E"
              })
            ]
          }),
          ...exp.bullets.map((bullet) => 
            new Paragraph({
              text: bullet,
              bullet: { level: 0 },
              spacing: { after: 80 }
            })
          )
        ]),

        new Paragraph({
          text: 'PROJECTS',
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 }
        }),

        ...data.projects.flatMap((project) => [
          new Paragraph({
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
              spacing: { after: 80 }
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
              }),
              new TextRun({
                text: `\t\t${edu.period}`,
                size: 18,
                italics: true,
                color: "95A5A6"
              })
            ]
          }),
          new Paragraph({
            spacing: { after: 100 },
            children: [
              new TextRun({
                text: `${edu.institution} | ${edu.location}`,
                size: 18,
                color: "34495E"
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
            spacing: { after: 80 },
            children: [
              new TextRun({
                text: `${cert.title} - ${cert.issuer}`,
                bold: true,
                size: 18
              }),
              new TextRun({
                text: `\t\t${cert.date}`,
                size: 18,
                italics: true,
                color: "95A5A6"
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
  console.log('Starting Modern ENTNT Full Stack Developer resume generation...\n');

  try {
    console.log('Generating modern ENTNT tailored resume...');
    generateModernPDF(entntResumeData, 'resume-generator/output/yuva-teja-entnt-fullstack-modern.pdf');
    await generateModernDOC(entntResumeData, 'resume-generator/output/yuva-teja-entnt-fullstack-modern.docx');
    console.log('✓ Modern ENTNT resume generated successfully\n');

    console.log('Generated files:');
    console.log('1. resume-generator/output/yuva-teja-entnt-fullstack-modern.pdf');
    console.log('2. resume-generator/output/yuva-teja-entnt-fullstack-modern.docx');
    console.log('\nModern template features:');
    console.log('- Professional color scheme (blue accents)');
    console.log('- Better spacing and layout');
    console.log('- Optimized for one-page fit');
    console.log('- Condensed bullet points');
    console.log('- Modern typography');
    console.log('- Updated skills section with your exact structure');
  } catch (error) {
    console.error('Error generating modern ENTNT resume:', error);
    process.exit(1);
  }
}

main();
