export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
}

export interface Skill {
  name: string;
  percentage: number;
  category: "frontend" | "backend" | "tools" | "other";
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface StatItem {
  id: string;
  number: string;
  label: string;
  iconName: "code" | "briefcase" | "smile" | "trophy";
}
