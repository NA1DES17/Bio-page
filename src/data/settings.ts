export const SITE_SETTINGS = {
  navbar: {
    cta: { label: 'Agendar sesión', href: '/sesiones-online' },
  },
  footer: {
    tagline: 'Acompañamiento emocional y biodescodificación para tu bienestar.',
    copyright: `© ${new Date().getFullYear()} Alma en Calma. Todos los derechos reservados.`,
  },
  whatsapp: {
    message: 'Hola, quiero consultar sobre las sesiones de biodescodificación.',
    buttonLabel: 'Escribime por WhatsApp',
  },
  newsletter: {
    title: 'Recibí contenido de bienestar emocional',
    description:
      'Tips, reflexiones y guías sobre biodescodificación, manejo de ansiedad y sanación emocional directo en tu correo.',
    placeholder: 'tu@email.com',
    buttonLabel: 'Suscribirme',
  },
} as const;
