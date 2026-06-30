export interface OpenGraph {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  locale?: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  openGraph?: OpenGraph;
  breadcrumbs?: BreadcrumbItem[];
  schema?: Record<string, unknown>[];
}

export interface BreadcrumbItem {
  label: string;
  path: string;
}

export interface FAQSchema {
  question: string;
  answer: string;
}

export interface ServiceSchema {
  name: string;
  description: string;
  provider: string;
  areaServed?: string;
  url?: string;
  priceRange?: string;
}
