export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  images?: string[];
  technologies: string[];
  demoUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  tagline?: string;
  details?: string;
  features?: string[];
  highlights?: string[];
  timeline?: string;
  outcome?: string;
  challenge?: string;
  solution?: string;
  metrics?: { label: string; value: string }[];
  testimonials?: { text: string; author: string; role?: string }[];
}
