export const SITE = {
  name: 'Alma en Calma',
  tagline: 'Biodescodificación y acompañamiento emocional',
  description:
    'Alma en Calma ofrece sesiones de biodescodificación online en Argentina. Liberá bloqueos emocionales, saná tu ansiedad y recuperá tu bienestar.',
  url: 'https://almaencalma.com.ar',
  locale: 'es_AR',
  localeShort: 'es',
  language: 'es',
  author: 'Alma en Calma',
  authorEmail: 'hola@almaencalma.com.ar',
  authorPhone: '+5491123456789',
  defaultOgImage: '/og/default.jpg',
  social: {
    instagram: '@almaencalma',
    whatsapp: '+5491123456789',
  },
} as const;

export const BRAND = {
  primary: '#4f653f',
  secondary: '#a03f30',
  tertiary: '#77536c',
  surface: '#f8fbf1',
} as const;

export const SEO_DEFAULTS = {
  titleTemplate: '%s | Alma en Calma',
  titleSeparator: '|',
  twitterHandle: '@almaencalma',
  locale: 'es_AR',
} as const;
