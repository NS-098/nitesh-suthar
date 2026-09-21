export interface Project {
  id: string;
  title: string;
  category: string;
  url: string;
  displayUrl: string;
  description: string;
  highlights: string[];
  role: string;
  tags: string[];
  accentColor: string;
}

export interface SkillItem {
  name: string;
  category: 'seo' | 'social' | 'ai' | 'core';
  description: string;
  level: string;
  iconName: string;
}

export interface ToolItem {
  name: string;
  category: 'analytics' | 'search' | 'leads' | 'social' | 'ai';
  roleInWorkflow: string;
  iconName: string;
  badge: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
}

export interface ContactDetails {
  name: string;
  title: string;
  email: string;
  phone: string;
  whatsappUrl: string;
  linkedinUrl: string;
  instagramUrl: string;
  location?: string;
}
