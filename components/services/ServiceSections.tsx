'use client';

import { useState } from 'react';
import { Link } from '@/lib/i18n/routing';
import { SvcIcon, ArrowIcon } from '@/components/icons/Icons';
import { SERVICE_IDS, SERVICE_SLUGS, type ServiceId } from '@/lib/services/catalog';

export type ServiceItemT = {
  name: string;
  tagline: string[];
  sub: string;
  stack: string[];
  whatTitle: string;
  whatBody: string;
  forWhoTitle: string;
  forWho: string[];
  capsTitle: string;
  capsLede: string;
  capabilities: { name: string; desc: string }[];
  delivery: { name: string; desc: string }[];
  outcomes: { lbl: string; val: string }[];
  faq: { q: string; a: string }[];
  ctaTitle: string;
};

export type ChromeT = {
  breadcrumbHome: string;
  breadcrumbServices: string;
  eyebrowService: string;
  eyebrowWhat: string;
  eyebrowFor: string;
  eyebrowCaps: string;
  eyebrowDelivery: string;
  deliveryTitle: string;
  deliveryLede: string;
  eyebrowOutcomes: string;
  outcomesTitle: string;
  eyebrowFaq: string;
  faqTitle: string;
  eyebrowRelated: string;
  relatedTitle: string;
  relatedLink: string;
  ctaSub: string;
  ctaPrimary: string;
  ctaEmail: string;
};

export function SvcHero({ id, S, c }: { id: ServiceId; S: ServiceItemT; c: ChromeT }) {
  return (
    <section className="sub-hero">
      <div className="sub-hero__grid" aria-hidden="true" />
      <div className="sub-hero__aurora" aria-hidden="true" />
      <div className="wrap">
        <nav className="breadcrumb reveal">
          <Link href="/">{c.breadcrumbHome}</Link>
          <span className="breadcrumb__sep">/</span>
          <Link href="/#services">{c.breadcrumbServices}</Link>
          <span className="breadcrumb__sep">/</span>
          <span>{S.name}</span>
        </nav>
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 4 }}>
          <div className="svc__icon" style={{ width: 44, height: 44 }}>
            <SvcIcon id={id} />
          </div>
          <span className="eye" style={{ margin: 0 }}>
            {c.eyebrowService}
          </span>
        </div>
        <h1 className="sub-hero__title reveal" style={{ marginTop: 20 }}>
          {S.tagline[0]}
          <br />
          <span className="accent">{S.tagline[1]}</span>
        </h1>
        <p className="sub-hero__sub reveal">{S.sub}</p>
        <div className="svc-tags reveal">
          {S.stack.map((s, i) => (
            <span key={i} className="svc-tag">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhatWhy({ S, c }: { S: ServiceItemT; c: ChromeT }) {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="svc-split">
          <div className="svc-card reveal">
            <span className="eye" style={{ alignSelf: 'flex-start' }}>
              {c.eyebrowWhat}
            </span>
            <h3>{S.whatTitle}</h3>
            <p>{S.whatBody}</p>
          </div>
          <div className="svc-card reveal" style={{ transitionDelay: '80ms' }}>
            <span className="eye" style={{ alignSelf: 'flex-start' }}>
              {c.eyebrowFor}
            </span>
            <h3>{S.forWhoTitle}</h3>
            <ul>
              {S.forWho.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceCapabilities({ S, c }: { S: ServiceItemT; c: ChromeT }) {
  return (
    <section className="sec" style={{ background: 'linear-gradient(180deg, transparent, rgba(20,27,51,.25), transparent)' }}>
      <div className="wrap">
        <div className="sec-h reveal">
          <span className="eye">{c.eyebrowCaps}</span>
          <h2>{S.capsTitle}</h2>
          <p>{S.capsLede}</p>
        </div>
        <div className="why">
          {S.capabilities.map((cap, i) => (
            <div key={i} className="why__card reveal" style={{ transitionDelay: `${i * 40}ms` }}>
              <div className="why__mark">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="why__title">{cap.name}</h3>
              <p className="why__desc">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Delivery({ S, c }: { S: ServiceItemT; c: ChromeT }) {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-h reveal">
          <span className="eye">{c.eyebrowDelivery}</span>
          <h2>{c.deliveryTitle}</h2>
          <p>{c.deliveryLede}</p>
        </div>
        <div className="svc-timeline">
          {S.delivery.map((d, i) => (
            <div key={i} className="svc-tl reveal" style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="svc-tl__n">0{i + 1}</div>
              <h4>{d.name}</h4>
              <p>{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Outcomes({ S, c }: { S: ServiceItemT; c: ChromeT }) {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-h reveal">
          <span className="eye">{c.eyebrowOutcomes}</span>
          <h2>{c.outcomesTitle}</h2>
        </div>
        <div className="outcomes reveal">
          {S.outcomes.map((o, i) => (
            <div key={i} className="outcome">
              <div className="outcome__lbl">{o.lbl}</div>
              <div className="outcome__val">{o.val}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceFAQ({ S, c }: { S: ServiceItemT; c: ChromeT }) {
  const [open, setOpen] = useState(-1);
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-h reveal">
          <span className="eye">{c.eyebrowFaq}</span>
          <h2>{c.faqTitle}</h2>
        </div>
        <div className="faq">
          {S.faq.map((qa, i) => {
            const isOpen = open === i;
            const btnId = `svc-faq-q-${i}`;
            const panelId = `svc-faq-a-${i}`;
            return (
              <div key={i} className="reveal">
                <div className={`qa${isOpen ? ' is-open' : ''}`}>
                  <button
                    id={btnId}
                    type="button"
                    className="qa__btn"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    data-hot
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span>{qa.q}</span>
                    <span className="qa__mark">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        {isOpen ? <path d="M3 8 H13" /> : <path d="M8 3 V13 M3 8 H13" />}
                      </svg>
                    </span>
                  </button>
                  <div id={panelId} className="qa__panel" role="region" aria-labelledby={btnId} aria-hidden={!isOpen}>
                    <div>
                      <div className="qa__body">{qa.a}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Related({
  currentId,
  c,
  itemsByLocale,
}: {
  currentId: ServiceId;
  c: ChromeT;
  itemsByLocale: Record<ServiceId, { name: string; desc: string }>;
}) {
  const others = SERVICE_IDS.filter((id) => id !== currentId).slice(0, 3);
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-h reveal">
          <span className="eye">{c.eyebrowRelated}</span>
          <h2>{c.relatedTitle}</h2>
        </div>
        <div className="related">
          {others.map((id, i) => {
            const item = itemsByLocale[id];
            return (
              <Link
                key={id}
                href={`/serveis/${SERVICE_SLUGS[id]}` as never}
                className="cap reveal"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <span className="cap__link">
                  {c.relatedLink} <ArrowIcon />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ServiceCta({ S, c }: { S: ServiceItemT; c: ChromeT }) {
  return (
    <section className="sec" style={{ paddingBottom: 40 }}>
      <div className="wrap">
        <div className="cta-banner reveal">
          <div className="cta-banner__grid" aria-hidden="true" />
          <div className="cta-banner__glow" aria-hidden="true" />
          <div className="cta-banner__inner">
            <h2>{S.ctaTitle}</h2>
            <p>{c.ctaSub}</p>
            <div className="cta-banner__actions">
              <Link href="/#contact" className="btn btn--primary btn--lg">
                {c.ctaPrimary} <ArrowIcon />
              </Link>
              <a href={`mailto:${c.ctaEmail}`} className="btn btn--ghost btn--lg">
                {c.ctaEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
