import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Define the Photos collection
const photos = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/photos' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['landscape', 'portrait', 'editorial', 'street']),
    image: z.string(),
    date_taken: z.coerce.date(),
    equipment: z.string().optional(),
  })
});

// Define the About Me page collection
const aboutPage = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/about' }),
  schema: z.object({
    title: z.string(),
    profile_image: z.string().optional(),
    email: z.string(),
    whatsapp: z.string().optional(),
  })
});

// Export collections
export const collections = { photos, 'about_page': aboutPage };
