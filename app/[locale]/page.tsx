import { getTranslations, setRequestLocale } from 'next-intl/server';
import { locales, type Locale } from '@/lib/i18n/routing';
import { notFound } from 'next/navigation';
import {
  Hero,
  Services,
  Process,
  Cases,
  Why,
  AboutTeaser,
  PullQuote,
  BlogPreview,
  FAQ,
  CtaBanner,
  Contact,
} from '@/components/home/HomeSections';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'home' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });

  return (
    <>
      <Hero t={t.raw('hero')} />
      <div className="divider" />
      <Services t={t.raw('services')} />
      <div className="divider" />
      <Process t={t.raw('process')} />
      <div className="divider" />
      <Cases t={t.raw('cases')} />
      <div className="divider" />
      <Why t={t.raw('why')} />
      <div className="divider" />
      <AboutTeaser t={t.raw('about')} />
      <div className="divider" />
      <PullQuote t={t.raw('testimonial')} />
      <div className="divider" />
      <BlogPreview t={t.raw('blog')} />
      <div className="divider" />
      <FAQ t={t.raw('faq')} />
      <CtaBanner t={t.raw('cta')} />
      <Contact t={tCommon.raw('contact')} />
    </>
  );
}
