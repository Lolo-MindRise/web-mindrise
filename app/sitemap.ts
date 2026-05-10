import type { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n/routing';
import { POSTS_META } from '@/lib/blog/posts';
import { SERVICE_SLUGS } from '@/lib/services/catalog';

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mindrise-labs.com';

const STATIC_PATHS = [
  '',
  '/sobre-nosaltres',
  '/blog',
  '/politica-de-privacitat',
  '/politica-de-cookies',
  '/avis-legal',
  ...Object.values(SERVICE_SLUGS).map((s) => `/serveis/${s}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    // For default locale (ca) the prefix is empty (as-needed).
    const prefix = locale === 'ca' ? '' : `/${locale}`;
    for (const p of STATIC_PATHS) {
      entries.push({
        url: `${SITE}${prefix}${p === '' ? '/' : p}`,
        lastModified: now,
      });
    }
    for (const post of POSTS_META) {
      entries.push({
        url: `${SITE}${prefix}/blog/${post.slug}`,
        lastModified: post.dateISO,
      });
    }
  }
  return entries;
}
