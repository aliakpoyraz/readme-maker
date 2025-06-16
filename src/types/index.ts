export interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  content: string;
  tags: string[];
}

export interface ProjectInfo {
  projectName: string;
  description: string;
  features: string[];
  technologies: string[];
  installation: string;
  usage: string;
  contributing: string;
  license: string;
  author: string;
  email: string;
  github: string;
  demo: string;
}

export type Language = 'tr' | 'en';