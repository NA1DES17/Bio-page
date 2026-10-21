interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const HEADER_NAV: NavItem[] = [
  { label: 'Inicio', href: '/' },
  {
    label: 'Biodescodificación',
    href: '/biodescodificacion/que-es',
    children: [
      { label: '¿Qué es?', href: '/biodescodificacion/que-es' },
      { label: 'Para la ansiedad', href: '/biodescodificacion/ansiedad' },
      { label: 'En Argentina', href: '/biodescodificacion/argentina' },
      { label: 'vs. Psicología', href: '/biodescodificacion/vs-psicologia' },
    ],
  },
  { label: 'Sesiones online', href: '/sesiones-online' },
  { label: 'Sobre mí', href: '/sobre-mi' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
];

export const FOOTER_NAV: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: '¿Qué es la biodescodificación?', href: '/biodescodificacion/que-es' },
  { label: 'Biodescodificación en Argentina', href: '/biodescodificacion/argentina' },
  { label: 'Biodescodificación y psicología', href: '/biodescodificacion/vs-psicologia' },
  { label: 'Sesiones online', href: '/sesiones-online' },
  { label: 'Sobre mí', href: '/sobre-mi' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
];

export const BLOG_CATEGORIES = [
  { slug: 'biodescodificacion', label: 'Biodescodificación' },
  { slug: 'ansiedad', label: 'Ansiedad y Estrés' },
  { slug: 'bienestar-emocional', label: 'Bienestar Emocional' },
  { slug: 'sesiones', label: 'Sesiones y Acompañamiento' },
] as const;

export const LEGAL_LINKS = [
  { label: 'Aviso legal', href: '/aviso-legal' },
  { label: 'Privacidad', href: '/privacidad' },
  { label: 'Cookies', href: '/cookies' },
];
