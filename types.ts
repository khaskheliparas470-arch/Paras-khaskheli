
export interface NavItem {
  id: string;
  label: string;
  icon: string;
}

export interface SEOMetrics {
  score: number;
  keywords: string[];
  issues: string[];
  recommendations: string[];
}

export interface Article {
  title: string;
  excerpt: string;
  content: string;
  readTime: string;
}

export enum SectionType {
  OVERVIEW = 'overview',
  INSTRUCTIONS = 'instructions',
  ARTICLES = 'articles',
  MOCK = 'mock',
  PORTFOLIO = 'portfolio',
  DELIVERABLES = 'deliverables',
  RUBRIC = 'rubric'
}
