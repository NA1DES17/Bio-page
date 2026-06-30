import { SITE, SEO_DEFAULTS } from '@config/site';
import type { SEOMetadata, BreadcrumbItem, OpenGraph } from '@config/seo';

export function formatMetaTitle(title: string): string {
  return `${title} ${SEO_DEFAULTS.titleSeparator} ${SITE.name}`;
}

export function resolveCanonical(path: string): string {
  const cleanPath = path.endsWith('/') ? path : `${path}/`;
  return `${SITE.url}${cleanPath}`;
}

export function buildBreadcrumb(items: BreadcrumbItem[]) {
  return items.map((item, index) => ({
    '@type': 'ListItem' as const,
    position: index + 1,
    name: item.label,
    item: item.path.startsWith('http') ? item.path : `${SITE.url}${item.path}`,
  }));
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: buildBreadcrumb(items),
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.authorPhone,
    email: SITE.authorEmail,
    areaServed: 'AR',
    priceRange: '$$',
    sameAs: [`https://instagram.com/${SITE.social.instagram.replace('@', '')}`],
  };
}

export function buildServiceSchema(data: {
  name: string;
  description: string;
  url?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: {
      '@type': 'LocalBusiness',
      name: SITE.name,
    },
    name: data.name,
    description: data.description,
    ...(data.url && { url: data.url }),
    areaServed: 'AR',
  };
}

export function buildArticleSchema(data: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.headline,
    description: data.description,
    author: {
      '@type': 'Person',
      name: data.author ?? SITE.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
    },
    datePublished: data.datePublished,
    dateModified: data.dateModified ?? data.datePublished,
    ...(data.image && { image: data.image }),
  };
}

export function buildOpenGraph(og: OpenGraph, path: string) {
  return {
    'og:title': og.title,
    'og:description': og.description,
    'og:url': `${SITE.url}${path}`,
    'og:type': og.ogType ?? 'website',
    'og:locale': og.locale ?? SITE.locale,
    'og:site_name': SITE.name,
    'og:image': og.ogImage
      ? `${SITE.url}${og.ogImage}`
      : `${SITE.url}${SITE.defaultOgImage}`,
    'og:image:width': '1200',
    'og:image:height': '630',
    ...(og.publishedTime && { 'article:published_time': og.publishedTime }),
    ...(og.modifiedTime && { 'article:modified_time': og.modifiedTime }),
  };
}

export function buildTwitterCard(title: string, description: string, image?: string) {
  return {
    'twitter:card': 'summary_large_image',
    'twitter:site': SEO_DEFAULTS.twitterHandle,
    'twitter:title': title,
    'twitter:description': description,
    ...(image && { 'twitter:image': `${SITE.url}${image}` }),
  };
}
