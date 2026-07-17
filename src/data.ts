import { Project, Skill, ExperienceItem, StatItem } from "./types";

export const PORTFOLIO_OWNER = {
  name: "Imran Ahmed",
  title: "Passionate Coder & Full Stack Developer",
  tagline: "I build fast, responsive and scalable web applications with clean code and modern technologies.",
  email: "pmrimran09@gmail.com",
  aboutMeShort: "I'm Imran Ahmed, a passionate Full Stack Developer & Programmer. I love turning ideas into real-world solutions through clean, efficient code.",
  aboutMeLong: "I am a dedicated developer based in India, with a strong background in crafting high-fidelity websites, interactive web applications, and scalable backend microservices. Blending creative design with structured programming, I aim to provide seamless user experiences. Inspired by the focus and precision of ninja arts, I approach every project with detail, dedication, and a commitment to clean architecture.",
  resumeUrl: "#",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com"
  }
};

export const SKILLS: Skill[] = [
  { name: "HTML / CSS", percentage: 95, category: "frontend" },
  { name: "JavaScript", percentage: 90, category: "frontend" },
  { name: "React.js", percentage: 85, category: "frontend" },
  { name: "Node.js", percentage: 80, category: "backend" },
  { name: "MongoDB", percentage: 75, category: "backend" },
  { name: "Tailwind CSS", percentage: 90, category: "frontend" },
  { name: "TypeScript", percentage: 85, category: "frontend" },
  { name: "Express.js", percentage: 80, category: "backend" },
];

export const PROJECTS: Project[] = [
  {
    id: "devflow",
    title: "DevFlow",
    description: "Developer Portfolio Template",
    longDescription: "A premium, fully responsive portfolio template engineered with React and Tailwind CSS. Built to empower developers to showcase their creative and engineering milestones with state-of-the-art neon highlights and buttery-smooth animations.",
    image: "https://i.postimg.cc/KzsJPP0G/file-000000001340720a95b02519a143a3de.png",
    tags: ["React", "Tailwind", "Framer Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Dynamic interactive dashboard layout with responsive grids",
      "Fully customized theme variables and dark-mode optimization",
      "Fluid page scrolling with magnetic hover effects",
      "Robust TypeScript implementation for type safety"
    ]
  },
  {
    id: "ninjachat",
    title: "NinjaChat",
    description: "Real-time Chat Application",
    longDescription: "A fully immersive, dark-purple real-time messaging application. Built on top of a highly responsive server environment, supporting persistent channels, custom emojis, and military-grade message transport protocols.",
    image: "https://i.postimg.cc/0ypWTJyZ/file-000000002f9c71f4baa9c9fb40591a8b.png", // Kakashi themed
    tags: ["Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Instant dual-channel message delivery under 30ms latency",
      "Active room discovery and member status trackers",
      "Beautiful typography pairing and animated indicators",
      "Local message storage backup and offline sync indicators"
    ]
  },
  {
    id: "taskgenie",
    title: "TaskGenie",
    description: "Task Management App",
    longDescription: "A collaborative Kanban boards task organizer. It helps distributed development squads manage milestones, run sprints, and coordinate deliverables in a highly visual environment.",
    image: "https://i.postimg.cc/QMm6tG5q/file-00000000a8b8724397eed60f5315074b.png", // Purple city themed
    tags: ["React", "Firebase", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Kanban layout supporting vertical and horizontal drag operations",
      "Instant Firebase real-time database synchronization",
      "User-level workspace boards and private board permissions",
      "Custom analytics widgets plotting task completion velocity"
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: "2023 - Present",
    role: "Full Stack Developer",
    company: "Freelance",
    description: "Architecting user-oriented applications using MERN, Next.js, and serverless architectures. Optimized client-side bundles yielding a 40% loading speed increase."
  },
  {
    period: "2022 - 2023",
    role: "Frontend Developer",
    company: "Tech Solutions",
    description: "Engineered responsive dashboard modules and visual analytics panels using React, Tailwind CSS, and State managers. Collaborated with UI designers to implement pixel-perfect layouts."
  },
  {
    period: "2021 - 2022",
    role: "Web Developer Intern",
    company: "CodeLab",
    description: "Converted wireframes and high-fidelity mockups into standard compliant HTML, CSS, and JS components. Conducted extensive browser compatibility checks."
  }
];

export const STATS: StatItem[] = [
  { id: "years", number: "2+", label: "Years Experience", iconName: "code" },
  { id: "projects", number: "25+", label: "Projects Completed", iconName: "briefcase" },
  { id: "clients", number: "15+", label: "Happy Clients", iconName: "smile" },
  { id: "awards", number: "5", label: "Awards Won", iconName: "trophy" }
];
