import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { locales, type Locale } from '@/lib/i18n/routing';
import { notFound } from 'next/navigation';
import { BlogIndex, type BlogT } from '@/components/blog/BlogIndex';
import { buildCatalog } from '@/lib/blog/posts';

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });
  return {
    title: t('blogTitle'),
    description: t('blogSub'),
  };
}

export default async function BlogIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'blog' });
  const cats = t.raw('cats') as string[];
  const posts = buildCatalog(locale as Locale, cats);

  const blogT: BlogT = {
    blogTitle: t('blogTitle'),
    blogEyebrow: t('blogEyebrow'),
    blogSub: t('blogSub'),
    catsAll: t('catsAll'),
    cats,
    read: t('read'),
    pageOf: t.raw('pageOf') as string,
    prev: t('prev'),
    next: t('next'),
    none: t('none'),
    indexCta: t.raw('indexCta'),
  };

  return <BlogIndex posts={posts} t={blogT} />;
}
