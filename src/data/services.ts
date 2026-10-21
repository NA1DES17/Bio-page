interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  metaDescription: string;
  keywords: string[];
  duration: string;
  modality: 'online' | 'presencial';
  featured?: boolean;
}

export const SERVICES: Service[] = [
  {
    slug: 'sesion-individual',
    title: 'Sesión Individual de Biodescodificación',
    shortTitle: 'Sesión individual',
    description:
      'Sesión personalizada donde exploramos el origen emocional de tus conflictos actuales. Ideal para trabajar un tema específico o dar los primeros pasos en tu proceso de sanación.',
    metaDescription:
      'Sesión individual de biodescodificación online. Trabajamos el origen emocional de tus conflictos en un espacio seguro y personalizado.',
    keywords: ['sesión biodescodificación', 'biodescodificación individual', 'terapia emocional'],
    duration: '90 min',
    modality: 'online',
    featured: true,
  },
  {
    slug: 'acompanamiento-terapeutico',
    title: 'Acompañamiento Terapéutico Continuo',
    shortTitle: 'Acompañamiento continuo',
    description:
      'Un proceso de varias sesiones para trabajar en profundidad tus patrones emocionales. Ideal si buscas un cambio sostenido en el tiempo y un acompañamiento constante en tu camino de sanación.',
    metaDescription:
      'Acompañamiento terapéutico continuo en biodescodificación. Un proceso profundo de sanación emocional con sesiones regulares online.',
    keywords: ['acompañamiento terapéutico', 'proceso biodescodificación', 'sanación emocional'],
    duration: 'sesiones recurrentes',
    modality: 'online',
    featured: true,
  },
];

export const PRICING = {
  'sesion-individual': {
    label: 'Sesión individual',
    duration: '90 min',
    arsAmount: 120000,
    description: 'Sesión única de 90 minutos',
  },
  'acompanamiento-terapeutico': {
    label: 'Paquete 3 sesiones',
    duration: '3 sesiones de 90 min',
    arsAmount: 324000,
    description: 'Tres sesiones con acompañamiento continuo (10% de descuento)',
  },
} as const;

export const SESSION_PROCESS = [
  {
    step: '01',
    title: 'Contacto inicial',
    description:
      'Me escribís y coordinamos una primera conversación sin compromiso para conocer tu situación y resolver tus dudas.',
  },
  {
    step: '02',
    title: 'Sesión de biodescodificación',
    description:
      'En la sesión exploramos juntos el origen emocional de tus conflictos. Trabajamos con tus palabras, tu historia y tu cuerpo.',
  },
  {
    step: '03',
    title: 'Integración',
    description:
      'Después de cada sesión, te llevas herramientas y reflexiones para seguir tu proceso. Si lo deseas, coordinamos el acompañamiento continuo.',
  },
];
