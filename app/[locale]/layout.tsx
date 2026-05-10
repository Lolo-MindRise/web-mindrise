import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n/routing';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { Grain } from '@/components/effects/Grain';
import { CustomCursor } from '@/components/effects/CustomCursor';
import { RevealOnScroll } from '@/components/effects/RevealOnScroll';
import { AnchorScrollHandler } from '@/components/effects/AnchorScrollHandler';
import '../globals.css';

const fontDisplay = localFont({
  src: [
    { path: '../../public/fonts/PlusJakartaDisplay-Light.otf', weight: '300', style: 'normal' },
    { path: '../../public/fonts/PlusJakartaDisplay-LightItalic.otf', weight: '300', style: 'italic' },
    { path: '../../public/fonts/PlusJakartaDisplay-Regular.otf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/PlusJakartaDisplay-Italic.otf', weight: '400', style: 'italic' },
    { path: '../../public/fonts/PlusJakartaDisplay-Medium.otf', weight: '500', style: 'normal' },
    { path: '../../public/fonts/PlusJakartaDisplay-MediumItalic.otf', weight: '500', style: 'italic' },
    { path: '../../public/fonts/PlusJakartaDisplay-Bold.otf', weight: '700', style: 'normal' },
    { path: '../../public/fonts/PlusJakartaDisplay-BoldItalic.otf', weight: '700', style: 'italic' },
  ],
  variable: '--font-display',
  display: 'swap',
});

const fontText = localFont({
  src: [
    { path: '../../public/fonts/PlusJakartaText-Light.otf', weight: '300', style: 'normal' },
    { path: '../../public/fonts/PlusJakartaText-LightItalic.otf', weight: '300', style: 'italic' },
    { path: '../../public/fonts/PlusJakartaText-Regular.otf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/PlusJakartaText-Italic.otf', weight: '400', style: 'italic' },
    { path: '../../public/fonts/PlusJakartaText-Bold.otf', weight: '700', style: 'normal' },
    { path: '../../public/fonts/PlusJakartaText-BoldItalic.otf', weight: '700', style: 'italic' },
  ],
  variable: '--font-text',
  display: 'swap',
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const t = await getTranslations({ locale, namespace: 'common.metaSite' });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mindrise-labs.com';
  return {
    metadataBase: new URL(siteUrl),
    title: { default: t('title'), template: `%s — MindRise Labs` },
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale,
      url: siteUrl,
    },
    twitter: { card: 'summary_large_image' },
    alternates: {
      canonical: '/',
      languages: {
        ca: '/ca',
        es: '/es',
        en: '/en',
        fr: '/fr',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MindRise Labs',
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mindrise-labs.com',
    logo: '/logos/mindrise-color-short.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Carretera del Forn, Urbanització Ribagrossa, Edifici La Serrera, 2n 8a',
      addressLocality: 'Canillo',
      postalCode: 'AD100',
      addressCountry: 'AD',
    },
    email: 'contact@mindrise-labs.com',
    telephone: '+376648807',
    sameAs: ['https://www.linkedin.com/company/mindrise-labs/', 'https://www.instagram.com/mindrise_labs'],
  };

  return (
    <html lang={locale} className={`${fontDisplay.variable} ${fontText.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Grain />
          <CustomCursor />
          <AnchorScrollHandler />
          <RevealOnScroll />
          <Nav />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
