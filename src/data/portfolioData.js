export const personalInfo = {
  name: "Yogaraj H",
  title: "Java Developer",
  tagline: "Building Production-Ready Backends for Healthcare & Enterprise",
  email: "yogaraj.haridass@gmail.com",
  phone: "+91 8940413000",
  location: "Thoraipakkam, Chennai",
  linkedin: "https://www.linkedin.com/in/yogaraj-java-developer/",
  github: "https://github.com/yoga2000",
  resumeFile: "/Yogaraj-Resume.pdf",
};

export const summary =
  "Java Developer with 1.8 years of experience building robust REST APIs and data-intensive backend systems for healthcare and enterprise applications. Proficient in Java, Spring Boot, and MongoDB, with hands-on exposure to AI-integrated backends powered by Azure OpenAI and secure authentication workflows using AWS Cognito. Passionate about writing clean, scalable, production-ready code that solves real-world problems.";

export const skills = [
  {
    category: "Languages",
    color: "orange",
    items: ["Java", "JavaScript"],
  },
  {
    category: "Backend",
    color: "cyan",
    items: [
      "Spring Boot",
      "Spring MVC",
      "Spring AI",
      "Spring Security",
      "Node.js",
      "Express.js",
    ],
  },
  {
    category: "AI & Cloud",
    color: "purple",
    items: ["Azure OpenAI", "LLM Integration", "AWS Cognito"],
  },
  {
    category: "Frontend",
    color: "green",
    items: ["React.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Databases",
    color: "yellow",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Auth & Security",
    color: "red",
    items: ["JWT", "RBAC", "HIPAA Compliance"],
  },
  {
    category: "Tools & Concepts",
    color: "blue",
    items: [
      "Git",
      "Postman",
      "Maven",
      "IntelliJ IDEA",
      "REST APIs",
      "Microservices",
      "Aggregation Pipelines",
    ],
  },
];

export const experience = [
  {
    role: "Java Developer",
    company: "247 HealthMedPro",
    location: "Chennai",
    duration: "Dec 2024 – Present",
    type: "Full-time",
    projects: [
      {
        name: "MedElite Healthcare Data Platform",
        tech: [
          "Java 21",
          "Spring Boot",
          "MongoDB",
          "Azure OpenAI",
          "AWS Cognito",
        ],
        highlights: [
          "Built backend for a healthcare data platform managing CCM, PCM, BHI, and HTR clinical programs using Java Spring Boot and MongoDB.",
          "Integrated Azure OpenAI to develop an AI chatbot that converts plain-language clinical queries into MongoDB aggregation pipelines — reducing manual query effort by ~70%.",
          "Designed REST APIs for patient records, program tracking, and reporting workflows serving clinical operations teams.",
          "Configured AWS Cognito for JWT-based authentication with role-based access control across multiple clinical user types.",
        ],
      },
      {
        name: "AR Recovery – Claims Analytics Platform",
        tech: ["Java", "Spring Boot", "MongoDB", "REST APIs"],
        highlights: [
          "Built an analytics backend to process healthcare claims data and surface revenue recovery insights across billed, collected, and pending categories.",
          "Designed MongoDB aggregation pipelines for multi-level filtering by year, month, and physician to support real-time financial reporting.",
        ],
      },
    ],
  },
  {
    role: "Node.js Developer Intern",
    company: "Zealzoft Pvt Ltd",
    location: "Chennai",
    duration: "Jul 2024 – Dec 2024",
    type: "Internship",
    projects: [
      {
        name: "Vattara – Real Estate Platform",
        tech: ["Node.js", "Express.js", "PostgreSQL", "JWT", "React.js"],
        highlights: [
          "Built the complete backend for a multi-role real estate platform handling property listings, user management, and data operations.",
          "Implemented REST APIs with full CRUD and JWT-based authentication with role-based access control for buyers, sellers, and admins.",
        ],
      },
    ],
  },
];

export const projects = [
  {
    name: "MedElite Healthcare Data Platform",
    description:
      "Enterprise-grade healthcare backend powering clinical care management programs (CCM, PCM, BHI, HTR) with an AI-assisted natural language query engine.",
    tech: ["Java 21", "Spring Boot", "MongoDB", "Azure OpenAI", "AWS Cognito"],
    features: [
      "AI chatbot: plain-language → MongoDB aggregation pipeline (~70% less manual effort)",
      "JWT + RBAC via AWS Cognito for secure multi-role access",
      "REST APIs for patient records and program tracking",
      "Real-time clinical reporting and workflow automation",
    ],
    github: "YOUR_GITHUB_URL",
    live: null,
    highlight: true,
  },
  {
    name: "AR Recovery – Claims Analytics",
    description:
      "Healthcare revenue cycle analytics backend surfacing claims recovery insights with advanced multi-level filtering and real-time financial reporting.",
    tech: ["Java", "Spring Boot", "MongoDB", "REST APIs"],
    features: [
      "MongoDB aggregation pipelines for multi-level data filtering",
      "Filter by year, month, and physician in real time",
      "Revenue recovery insights across billed/collected/pending",
      "Scalable backend designed for clinical finance teams",
    ],
    github: "YOUR_GITHUB_URL",
    live: null,
    highlight: false,
  },
  {
    name: "Vattara – Real Estate Platform",
    description:
      "Full-featured multi-role real estate platform backend supporting property listings, buyer/seller/admin workflows, and secure API access.",
    tech: ["Node.js", "Express.js", "PostgreSQL", "JWT", "React.js"],
    features: [
      "Full CRUD REST APIs for property listings",
      "Multi-role JWT + RBAC authentication system",
      "User management for buyers, sellers, and admins",
      "Scalable Express.js architecture with PostgreSQL",
    ],
    github: "YOUR_GITHUB_URL",
    live: null,
    highlight: false,
  },
];

export const education = [
  {
    degree: "Aircraft Maintenance Engineering",
    institution: "Vinayaka Mission Aviation Academy",
    duration: "2018 – 2021",
    description:
      "Specialized training in aircraft systems, maintenance procedures, and technical operations — building a foundation of precision engineering and systematic problem-solving that I now apply to software development.",
  },
];
