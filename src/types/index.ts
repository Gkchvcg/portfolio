export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  problemStatement?: string;
  solution?: string;
  categories: Array<'Full Stack' | 'AI/ML' | 'Data Analytics' | 'Finance' | 'Android' | 'Backend/API' | 'Developer Tools' | 'Experiments'>;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  architectureImage?: string;
  keyFeatures: string[];
  architectureHighlights: string[];
  featured: boolean;
  status: 'Completed' | 'In Progress' | 'Prototype' | 'Experiment';
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface CodingProfile {
  name: string;
  platform: string;
  username: string;
  url: string;
  badgeText: string;
  statsLabel?: string;
  icon: string;
  accentColor: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  description: string;
  url?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  highlights: string[];
}
