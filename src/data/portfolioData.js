export const portfolioData = {
  name: "Vachaspati Annaldas",
  initials: "VA",
  title: "Full Stack Developer",
  profileImage: "/images/profile/profile.svg",
  resumeUrl: "https://drive.google.com/file/d/1XPMR6ihn1Wqs9USn96Wk3YlkxVxWJpwG/view?usp=drive_link",
  contact: {
    email: "annaldasvachaspati@gmail.com",
    phone: "+91 7020270105",
    linkedin: "linkedin.com/in/vachaspati-annaldas",
    github: "github.com/vachaspatiannaldas",
    // location: "Open to relocate anywhere in India",
  },
  skillGroups: [
    { label: "Languages", skills: [{ name: "JavaScript", icon: "javascript" }, { name: "TypeScript", icon: "typescript" }, { name: "Python", icon: "python" }] },
    {
      label: "Frontend",
      skills: [
        { name: "React", icon: "react" },
        { name: "Redux", icon: "redux" },
        { name: "React Native", icon: "react" },
        { name: "HTML5", icon: "html5" },
        { name: "CSS3", icon: "css3" },
        { name: "Tailwind", icon: "tailwindcss" },
        { name: "Bootstrap", icon: "bootstrap" },
        { name: "Material UI", icon: "materialui" },
      ],
    },
    { label: "Backend", skills: [{ name: "Node.js", icon: "nodejs" }, { name: "Express", icon: "express" }, { name: "Django", icon: "django" }] },
    {
      label: "Databases",
      skills: [
        { name: "MongoDB", icon: "mongodb" },
        { name: "MySQL", icon: "mysql" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "Redis", icon: "redis" },
        { name: "Apache Solr", icon: "apachesolr" },
      ],
    },
    {
      label: "Cloud & DevOps",
      skills: [
        { name: "Docker", icon: "docker" },
        { name: "AWS", icon: "amazonwebservices" },
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "Webpack", icon: "webpack" },
      ],
    },
  ],
  experience: [
    {
      role: "Software Engineer",
      company: "Vertex Technosys",
      location: "Solapur",
      period: "Jul 2023 - Present",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Docker", "AWS"],
      bullets: [
        "Built and shipped 3+ web applications serving real users in a cross-functional Agile team of engineers, following clean code and best practices throughout.",
        "Designed and implemented RESTful APIs handling data-intensive workflows, reducing average API response time by 30% through query optimization and Redis caching.",
        "Improved frontend performance by 15–20% by implementing Redux state optimization, React lazy loading, and code-splitting — resulting in faster page loads and better UX.",
        "Built reusable UI components and shared frontend libraries, reducing development effort and improving consistency across applications.",
        "Implemented JWT-based authentication and role-based access control (RBAC) for secure multi-user applications with protected API routes.",
        "Participated in daily standups, sprint planning, and peer code reviews — contributing to a clean, well-documented codebase.",
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "Vertex Technosys",
      location: "Solapur",
      period: "Jan 2023 - Jun 2023",
      stack: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
      bullets: [
        "Built responsive, pixel-accurate UI components from Figma/XD designs using React.js, HTML5, CSS3, and Bootstrap.",
        "Integrated frontend components with backend REST APIs in collaboration with senior developers, shipping 5+ features to production.",
        "Debugged and resolved 20+ UI/UX issues in a live application, improving stability and user experience.",
        "Converted to full-time Software Engineer after 6 months, reflecting consistent performance and reliable delivery.",
      ],
    },
  ],
  projects: [
    {
      name: "CodeInsight - AI PR Reviewer",
      stack: ["React", "Django", "Celery", "Redis", "PostgreSQL", "Docker", "Ollama", "Chrome Extension"],
      github: "https://github.com/vachaspatiannaldas/codeinsight",
      demo: "",
      description: "AI-powered pull request review platform with a Chrome Extension that fetches GitHub PR diffs and detects security, performance, and code quality issues using local LLM (DeepSeek Coder via Ollama).",
      bullets: [
        "Async review pipeline using Django REST, Celery workers, Redis, and Ollama for local AI-based code analysis.",
        "Backend validation to reject hallucinated AI findings, with fallback checks for SQL injection, hardcoded secrets, insecure HTTP, and more.",
        "Structured multi-file review cards with file, severity, category, vulnerable code, and recommended fix in a Dockerized setup.",
      ],
      media: [
        {
          type: "image",
          url: "/images/projects/frontend1.png",
          caption: "Frontend",
        },
        {
          type: "image",
          url: "/images/projects/frontend2.png",
          caption: "Frontend",
        },
        {
          type: "image",
          url: "/images/projects/extension1.png",
          caption: "Extension",
        },
        {
          type: "image",
          url: "/images/projects/extension2.png",
          caption: "Extension",
        },
        {
          type: "image",
          url: "/images/projects/extension3.png",
          caption: "Extension",
        },
        {
          type: "video",
          url: "/images/projects/codeinsight-demo.mp4",
          caption: "Demo video",
        },
      ],
    },
    {
      name: "TaskFlow - MERN Task Manager",
      stack: ["React", "Node.js", "MongoDB", "JWT", "Redux", "Tailwind CSS"],
      github: "https://github.com/vachaspatiannaldas/taskflow",
      demo: "https://taskflow-kohl-three.vercel.app/",
      description: "Production-ready task management app with JWT auth, drag-and-drop reordering, task prioritization, dark mode, and full mobile responsiveness.",
      bullets: [
        "JWT authentication, protected routes, full CRUD operations.",
        "Drag-and-drop reordering, due dates, search, and filtering.",
        "Optimized with React hooks, memoization, lazy loading; dark mode plus mobile responsive UI.",
      ],
      media: [
        {
          type: "image",
          url: "/images/projects/taskflow1.png",
          caption: "Frontend",
        },
        {
          type: "image",
          url: "/images/projects/taskflow2.png",
          caption: "Frontend",
        },
        {
          type: "image",
          url: "/images/projects/taskflow3.png",
          caption: "Frontend",
        },
        {
          type: "image",
          url: "/images/projects/taskflow4.png",
          caption: "Frontend",
        },
        {
          type: "image",
          url: "/images/projects/taskflow5.png",
          caption: "Frontend",
        },
        {
          type: "video",
          url: "/images/projects/taskflow-demo.mp4",
          caption: "Demo video",
        },
      ],
    },
  ],
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    college: "Bharat Ratna Indira Gandhi College of Engineering, Solapur",
    period: "Jan 2020 - Jul 2023",
    cgpa: "8.95 / 10",
  },
};

export const navItems = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];
export const externalNavItems = [{ label: "Resume", url: portfolioData.resumeUrl }];




