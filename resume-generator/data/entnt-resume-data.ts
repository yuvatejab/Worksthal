export interface ContactInfo {
  name: string;
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Project {
  title: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface ResumeData {
  contact: ContactInfo;
  summary: string;
  skills: { [category: string]: string[] };
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
}

const contactInfo: ContactInfo = {
  name: "YUVA TEJA BANDHARAPU",
  phone: "+91 6301465458",
  email: "ybandharapu@gmail.com",
  location: "Hyderabad, Telangana, India",
  linkedin: "https://www.linkedin.com/in/yuva-teja-bandharapu-0a5bb9327/",
  github: "https://github.com/"
};

const education: Education[] = [
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
];

const certifications: Certification[] = [
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
];

export const entntResumeData: ResumeData = {
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
  education,
  certifications
};
