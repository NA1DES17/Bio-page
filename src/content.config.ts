import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishedDate: z.date(),
      updatedDate: z.date().optional(),
      author: z.string().default('Mariana'),
      category: z.enum([
        'biodescodificacion',
        'ansiedad',
        'bienestar-emocional',
        'sesiones',
      ]),
      tags: z.array(z.string()).default([]),
      image: image().optional(),
      imageAlt: z.string().optional(),
      canonical: z.string().url().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

const legal = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updatedDate: z.date(),
  }),
});

export const collections = { blog, legal };
