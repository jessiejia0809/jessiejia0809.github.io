import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const required = z.string().min(1);
const image = z.object({ image: required, alt: required, caption: z.string().optional(), visible: z.boolean().default(true) });
export const collections = {
 about: defineCollection({loader:glob({pattern:'about.md',base:'./content'}),schema:z.object({title:required,portrait:required,portraitAlt:required,background:required.optional(),backgroundCredit:required,backgroundDirector:required,backgroundYear:z.number().int()})}),
 research: defineCollection({loader:glob({pattern:'*.md',base:'./content/research'}),schema:z.object({title:required,group:z.enum(['craft','agents','robotics']),order:z.number(),draft:z.boolean().default(false),image:required.optional(),alt:required.optional(),credit:z.string().optional(),citation:z.string().optional(),links:z.array(z.object({label:required,url:z.string().url()})).default([])}).refine(d=>!d.image||Boolean(d.alt),'An image needs alt text')}),
 films: defineCollection({loader:glob({pattern:'*.md',base:'./content/films'}),schema:z.object({title:required,year:z.number().int().optional(),order:z.number(),draft:z.boolean().default(false),roles:z.array(required),middleCount:z.number().int().positive().default(2),supportingGrid:z.boolean().default(false),runtimeMinutes:z.number().positive().optional(),logline:required,featured:z.boolean().default(false),director:required.optional(),externalUrl:z.string().url().optional(),videoId:z.string().regex(/^[A-Za-z0-9_-]{11}$/).optional(),process:z.array(z.object({title:required,note:required})).default([]),festivalSelection:z.object({name:required,url:z.string().url()}).optional(),gallery:z.array(image).default([])})})
};
