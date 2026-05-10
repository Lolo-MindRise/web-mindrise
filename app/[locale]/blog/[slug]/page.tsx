import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { locales, type Locale } from '@/lib/i18n/routing';
import { notFound } from 'next/navigation';
import { PostPageView, type PostT } from '@/components/blog/PostPage';
import { buildCatalog, POSTS_META } from '@/lib/blog/posts';

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    POSTS_META.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });
  const cats = t.raw('cats') as string[];
  const posts = buildCatalog(locale as Locale, cats);
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: t('blogTitle') };
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'blog' });
  const cats = t.raw('cats') as string[];
  const posts = buildCatalog(locale as Locale, cats);
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const sameCat = posts.filter((p) => p.slug !== post.slug && p.catIdx === post.catIdx);
  const others = posts.filter((p) => p.slug !== post.slug && p.catIdx !== post.catIdx);
  const related = [...sameCat, ...others].slice(0, 3);

  const postT: PostT = {
    read: t('read'),
    blogEyebrow: t('blogEyebrow'),
    publishedOn: t('publishedOn'),
    by: t('by'),
    backToBlog: t('backToBlog'),
    related: t('related'),
    postCta: t.raw('postCta'),
  };

  return <PostPageView post={post} related={related} t={postT} />;
}
