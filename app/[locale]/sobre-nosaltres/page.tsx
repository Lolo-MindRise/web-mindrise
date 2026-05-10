import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { locales, type Locale } from '@/lib/i18n/routing';
import { notFound } from 'next/navigation';
import {
  AboutHero,
  AboutWhy,
  Beliefs,
  Andorra,
  How,
  Team,
  AboutCapabilities,
  Facts,
  AboutCta,
} from '@/components/about/AboutSections';
import { SERVICE_IDS, type ServiceId } from '@/lib/services/catalog';
import type { AboutT } from '@/components/about/AboutSections';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  return {
    title: t('nav'),
    description: t('sub'),
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);

  const tAbout = await getTranslations({ locale, namespace: 'about' });
  const tHome = await getTranslations({ locale, namespace: 'home' });
  const tChrome = await getTranslations({ locale, namespace: 'services.chrome' });
  const tNav = await getTranslations({ locale, namespace: 'common.nav' });

  type Item = { id: ServiceId; name: string; desc: string };
  const homeServices = (tHome.raw('services.items') as Item[]).filter((s) =>
    (SERVICE_IDS as readonly string[]).includes(s.id)
  );

  const aboutData: AboutT = {
    nav: tAbout('nav'),
    eyebrow: tAbout('eyebrow'),
    title: tAbout.raw('title'),
    sub: tAbout('sub'),
    whyTitle: tAbout('whyTitle'),
    whyEyebrow: tAbout('whyEyebrow'),
    why: tAbout.raw('why'),
    beliefsTitle: tAbout('beliefsTitle'),
    beliefsEyebrow: tAbout('beliefsEyebrow'),
    beliefs: tAbout.raw('beliefs'),
    andorraTitle: tAbout('andorraTitle'),
    andorraEyebrow: tAbout('andorraEyebrow'),
    andorra: tAbout('andorra'),
    howTitle: tAbout('howTitle'),
    howEyebrow: tAbout('howEyebrow'),
    how: tAbout.raw('how'),
    teamTitle: tAbout('teamTitle'),
    teamEyebrow: tAbout('teamEyebrow'),
    teamBody: tAbout('teamBody'),
    teamRoles: tAbout.raw('teamRoles'),
    factsTitle: tAbout('factsTitle'),
    factsEyebrow: tAbout('factsEyebrow'),
    facts: tAbout.raw('facts'),
    capsTitle: tAbout('capsTitle'),
    ctaEyebrow: tAbout('ctaEyebrow'),
    ctaTitle: tAbout.raw('ctaTitle'),
    ctaSub: tAbout('ctaSub'),
    ctaPrimary: tAbout('ctaPrimary'),
    ctaSecondary: tAbout('ctaSecondary'),
  };

  const navLinks = tNav.raw('links') as string[];

  return (
    <>
      <AboutHero t={aboutData} homeLabel={tChrome('breadcrumbHome')} />
      <div className="divider" />
      <AboutWhy t={aboutData} />
      <div className="divider" />
      <Beliefs t={aboutData} />
      <div className="divider" />
      <Andorra t={aboutData} />
      <div className="divider" />
      <How t={aboutData} />
      <div className="divider" />
      <Team t={aboutData} />
      <div className="divider" />
      <AboutCapabilities
        t={aboutData}
        services={homeServices}
        servicesEyebrow={navLinks[0].toUpperCase()}
        capsLink={tChrome('relatedLink')}
      />
      <div className="divider" />
      <Facts t={aboutData} />
      <AboutCta t={aboutData} />
    </>
  );
}
