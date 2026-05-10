import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import {
  SvcHero,
  WhatWhy,
  ServiceCapabilities,
  Delivery,
  Outcomes,
  ServiceFAQ,
  Related,
  ServiceCta,
  type ServiceItemT,
  type ChromeT,
} from './ServiceSections';
import { SERVICE_IDS, type ServiceId } from '@/lib/services/catalog';

export async function buildServiceMetadata(locale: string, id: ServiceId): Promise<Metadata> {
  const tSvc = await getTranslations({ locale, namespace: `services.items.${id}` });
  return {
    title: tSvc('name'),
    description: tSvc('sub'),
  };
}

export async function renderServicePage(locale: string, id: ServiceId) {
  const tSvc = await getTranslations({ locale, namespace: `services.items.${id}` });
  const tChrome = await getTranslations({ locale, namespace: 'services.chrome' });
  const tAll = await getTranslations({ locale, namespace: 'services.items' });

  const S: ServiceItemT = {
    name: tSvc('name'),
    tagline: tSvc.raw('tagline'),
    sub: tSvc('sub'),
    stack: tSvc.raw('stack'),
    whatTitle: tSvc('whatTitle'),
    whatBody: tSvc('whatBody'),
    forWhoTitle: tSvc('forWhoTitle'),
    forWho: tSvc.raw('forWho'),
    capsTitle: tSvc('capsTitle'),
    capsLede: tSvc('capsLede'),
    capabilities: tSvc.raw('capabilities'),
    delivery: tSvc.raw('delivery'),
    outcomes: tSvc.raw('outcomes'),
    faq: tSvc.raw('faq'),
    ctaTitle: tSvc('ctaTitle'),
  };

  const c: ChromeT = {
    breadcrumbHome: tChrome('breadcrumbHome'),
    breadcrumbServices: tChrome('breadcrumbServices'),
    eyebrowService: tChrome('eyebrowService'),
    eyebrowWhat: tChrome('eyebrowWhat'),
    eyebrowFor: tChrome('eyebrowFor'),
    eyebrowCaps: tChrome('eyebrowCaps'),
    eyebrowDelivery: tChrome('eyebrowDelivery'),
    deliveryTitle: tChrome('deliveryTitle'),
    deliveryLede: tChrome('deliveryLede'),
    eyebrowOutcomes: tChrome('eyebrowOutcomes'),
    outcomesTitle: tChrome('outcomesTitle'),
    eyebrowFaq: tChrome('eyebrowFaq'),
    faqTitle: tChrome('faqTitle'),
    eyebrowRelated: tChrome('eyebrowRelated'),
    relatedTitle: tChrome('relatedTitle'),
    relatedLink: tChrome('relatedLink'),
    ctaSub: tChrome('ctaSub'),
    ctaPrimary: tChrome('ctaPrimary'),
    ctaEmail: tChrome('ctaEmail'),
  };

  const itemsByLocale: Record<ServiceId, { name: string; desc: string }> = {} as Record<
    ServiceId,
    { name: string; desc: string }
  >;
  for (const sid of SERVICE_IDS) {
    itemsByLocale[sid] = {
      name: tAll(`${sid}.name`),
      desc: tAll(`${sid}.sub`),
    };
  }

  return (
    <>
      <SvcHero id={id} S={S} c={c} />
      <div className="divider" />
      <WhatWhy S={S} c={c} />
      <div className="divider" />
      <ServiceCapabilities S={S} c={c} />
      <div className="divider" />
      <Delivery S={S} c={c} />
      <div className="divider" />
      <Outcomes S={S} c={c} />
      <div className="divider" />
      <ServiceFAQ S={S} c={c} />
      <div className="divider" />
      <Related currentId={id} c={c} itemsByLocale={itemsByLocale} />
      <ServiceCta S={S} c={c} />
    </>
  );
}
