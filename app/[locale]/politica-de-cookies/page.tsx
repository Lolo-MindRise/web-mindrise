import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { locales, type Locale } from '@/lib/i18n/routing';
import { notFound } from 'next/navigation';
import { LegalPage, type LegalCommonT } from '@/components/legal/LegalPage';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal.cookies' });
  return { title: t('title'), description: t('title') };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  const tCommon = await getTranslations({ locale, namespace: 'legal.common' });
  const tCookies = await getTranslations({ locale, namespace: 'legal.cookies' });
  const common: LegalCommonT = {
    overline: tCommon('overline'),
    lastUpdate: tCommon('lastUpdate'),
    entity: tCommon.raw('entity'),
    nav: tCommon.raw('nav'),
  };
  return (
    <LegalPage
      current="cookies"
      title={tCookies('title')}
      sections={tCookies.raw('sections')}
      common={common}
    />
  );
}
