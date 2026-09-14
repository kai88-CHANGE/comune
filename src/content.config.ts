import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/[!_]*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    issue: z.number(),
    date: z.coerce.date(),
    lang: z.enum(['ja', 'en']).default('ja'),
    category: z.enum([
      '生徒会論', '学校教育論', '自治の境界線',
      'student-council', 'school-education', 'self-governance',
    ]),
    tags: z.array(z.string()).default([]),
    author: z.string().default('編集部'),
    summary: z.string(),
  }),
});

const newspaper = defineCollection({
  loader: glob({ pattern: '**/[!_]*.md', base: './src/content/newspaper' }),
  schema: z.object({
    title: z.string(),
    issue: z.number(),
    date: z.coerce.date(),
    lang: z.enum(['ja', 'en']).default('ja'),
    description: z.string(),
    pdf: z.string(),       // /pdf/comune-001.pdf
    pages: z.number().optional(),
    cover: z.string().optional(), // /pdf/comune-001-cover.png (optional OGP)
  }),
});

export const collections = { articles, newspaper };
