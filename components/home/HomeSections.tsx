'use client';

import { useEffect, useRef, useState } from 'react';
import { Link } from '@/lib/i18n/routing';
import { SvcIcon, ArrowIcon, BlogCover, WhatsAppIcon, InstagramIcon, LinkedInIcon } from '@/components/icons/Icons';
import { NeuralMesh } from '@/components/effects/NeuralMesh';
import { ContactForm } from '@/components/forms/ContactForm';
import type { ServiceId } from '@/lib/services/catalog';

type ServiceItem = {
  id: ServiceId;
  slug: string;
  name: string;
  desc: string;
  tags: string[];
};

type Step = { n: string; name: string; desc: string; phase: string };
type CaseItem = {
  sector: string;
  metric: string;
  metricLabel: string;
  body: string;
  stack: string[];
};
type Stat = { n: number; suf: string; label: string };
type WhyItem = { name: string; desc: string };
type FaqItem = { q: string; a: string };

type Direct = {
  email: string;
  phoneLabel: string;
  phone: string;
  phoneHref: string;
  waHref: string;
  linkedin: string;
  linkedinLabel: string;
  instagram: string;
  instagramLabel: string;
  location: string;
};

type FormFields = {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  source: string;
  consent: string;
  submit: string;
  sent: string;
  errorGeneric: string;
};

type ContactPayload = {
  eyebrow: string;
  title: string;
  lede: string;
  formFields: FormFields;
  projectTypes: string[];
  sources: string[];
  direct: Direct;
};

type HomeT = {
  hero: { eyebrow: string; title: string[]; accent: string; sub: string; ctaPrimary: string; ctaSecondary: string };
  services: {
    eyebrow: string;
    title: string;
    lede: string;
    items: ServiceItem[];
    soon: { id: 'saas'; name: string; desc: string; badge: string };
    more: string;
  };
  process: { eyebrow: string; title: string; lede: string; note: string; steps: Step[] };
  cases: { eyebrow: string; title: string; lede: string; items: CaseItem[]; ctaTitle: string; cta: string };
  about: { eyebrow: string; title: string; body: string; cta: string; href: string };
  why: { eyebrow: string; title: string; items: WhyItem[]; stats: Stat[]; statsDisclaimer: string };
  testimonial: { eyebrow: string; q: string; name: string; role: string; co: string };
  blog: {
    eyebrow: string;
    title: string;
    categories: string[];
    items: { slug: string; cat: string; title: string; date: string; excerpt: string }[];
    read: string;
    index: string;
  };
  faq: { eyebrow: string; title: string; items: FaqItem[] };
  cta: { title: string; sub: string; primary: string; secondary: string };
  contact: ContactPayload;
};

export function Hero({ t }: { t: HomeT['hero'] }) {
  const renderTitle = () =>
    t.title.map((line, i) => {
      const tokens = line.split(new RegExp(`(${escapeRegExp(t.accent)})`));
      return (
        <span key={i} style={{ display: 'block' }}>
          {tokens.map((tok, j) =>
            tok === t.accent ? (
              <span key={j} className="accent">
                {tok}
              </span>
            ) : (
              <span key={j}>{tok}</span>
            )
          )}
        </span>
      );
    });

  return (
    <section className="hero" id="top">
      <div className="hero__aurora" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />
      <NeuralMesh />
      <div className="hero__content">
        <span className="eye reveal">{t.eyebrow}</span>
        <h1 className="hero__title reveal">{renderTitle()}</h1>
        <p className="hero__sub reveal">{t.sub}</p>
        <div className="hero__ctas reveal">
          <Link href="/#contact" className="btn btn--primary btn--lg">
            {t.ctaPrimary} <ArrowIcon />
          </Link>
          <Link href="/#services" className="btn btn--ghost btn--lg">
            {t.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
}

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function Services({ t }: { t: HomeT['services'] }) {
  return (
    <section className="sec" id="services">
      <div className="wrap">
        <div className="sec-h reveal">
          <span className="eye">{t.eyebrow}</span>
          <h2>{t.title}</h2>
          <p>{t.lede}</p>
        </div>
        <div className="services">
          {t.items.map((s, i) => (
            <Link
              key={s.id}
              href={`/serveis/${s.slug}` as never}
              className="svc reveal"
              style={{ transitionDelay: `${i * 40}ms` }}
              data-hot
            >
              <div className="svc__icon">
                <SvcIcon id={s.id} />
              </div>
              <h3 className="svc__name">{s.name}</h3>
              <p className="svc__desc">{s.desc}</p>
              <div className="svc__tags">
                {s.tags.map((tag) => (
                  <span key={tag} className="svc__tag">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="svc__link">
                {t.more} <ArrowIcon />
              </span>
            </Link>
          ))}
          <article className="svc svc--soon reveal" data-hot>
            <div className="svc__badge">{t.soon.badge}</div>
            <div className="svc__icon">
              <SvcIcon id="saas" />
            </div>
            <h3 className="svc__name">{t.soon.name}</h3>
            <p className="svc__desc">{t.soon.desc}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function Process({ t }: { t: HomeT['process'] }) {
  return (
    <section
      className="sec"
      id="process"
      style={{ background: 'linear-gradient(180deg, transparent, rgba(20,27,51,.25), transparent)' }}
    >
      <div className="wrap">
        <div className="sec-h reveal">
          <span className="eye">{t.eyebrow}</span>
          <h2>{t.title}</h2>
          <p>{t.lede}</p>
        </div>
        <div className="process-note reveal" role="note">
          <span className="process-note__icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <circle cx="8" cy="8" r="6.5" />
              <path d="M8 7 V11.5 M8 5 V5" />
            </svg>
          </span>
          <em>{t.note}</em>
        </div>
        <div className="process">
          {t.steps.map((s, i) => (
            <div key={s.n} className="step reveal" style={{ transitionDelay: `${i * 50}ms` }} data-hot>
              <div className="step__n">
                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    border: '1px solid rgba(134,164,216,.4)',
                    background: 'rgba(134,164,216,.1)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {s.n}
                </span>
              </div>
              <h3 className="step__name">{s.name}</h3>
              <p className="step__desc">{s.desc}</p>
              <div className="step__phase">{s.phase}</div>
            </div>
          ))}
        </div>
        <svg aria-hidden="true" style={{ display: 'block', marginTop: 24, width: '100%', height: 24, overflow: 'visible' }}>
          <line x1="0" y1="12" x2="100%" y2="12" stroke="rgba(134,164,216,.18)" strokeDasharray="4 6" />
          <circle r="3" fill="#86A4D8">
            <animateMotion dur="5s" repeatCount="indefinite" path="M 0 12 L 1800 12" />
          </circle>
        </svg>
      </div>
    </section>
  );
}

export function Cases({ t }: { t: HomeT['cases'] }) {
  return (
    <section className="sec" id="cases">
      <div className="wrap">
        <div className="sec-h reveal">
          <span className="eye">{t.eyebrow}</span>
          <h2>{t.title}</h2>
          <p>{t.lede}</p>
        </div>
        <div className="cases">
          {t.items.map((c, i) => (
            <article key={i} className="case reveal" style={{ transitionDelay: `${i * 40}ms` }}>
              <div className="case__sector">{c.sector}</div>
              <div className="case__metric">
                <span>{c.metric}</span>
                <span className="lbl">{c.metricLabel}</span>
              </div>
              <p className="case__body">{c.body}</p>
              <div className="case__stack">
                {c.stack.map((s) => (
                  <span key={s} className="case__chip">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="cases__cta reveal">
          <h3>{t.ctaTitle}</h3>
          <Link href="/#contact" className="btn btn--primary btn--lg" data-hot>
            {t.cta} <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Counter({ n, suf }: { n: number; suf: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const dur = 1400;
            const start = performance.now();
            const step = (now: number) => {
              const p = Math.min(1, (now - start) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              setV(Math.round(n * eased));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [n]);

  return (
    <span ref={ref}>
      {v}
      {suf}
    </span>
  );
}

export function Why({ t }: { t: HomeT['why'] }) {
  return (
    <section className="sec" id="why">
      <div className="wrap">
        <div className="sec-h reveal">
          <span className="eye">{t.eyebrow}</span>
          <h2>{t.title}</h2>
        </div>
        <div className="why">
          {t.items.map((w, i) => (
            <div key={i} className="why__card reveal" style={{ transitionDelay: `${i * 40}ms` }}>
              <div className="why__mark">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="why__title">{w.name}</h3>
              <p className="why__desc">{w.desc}</p>
            </div>
          ))}
        </div>
        <div className="stats reveal">
          {t.stats.map((s, i) => (
            <div key={i} className="stat">
              <div className="stat__n">
                <Counter n={s.n} suf={s.suf} />
              </div>
              <div className="stat__lbl">{s.label}</div>
            </div>
          ))}
        </div>
        {t.statsDisclaimer && <div className="stats__disclaimer reveal">{t.statsDisclaimer}</div>}
      </div>
    </section>
  );
}

export function AboutTeaser({ t }: { t: HomeT['about'] }) {
  return (
    <section className="sec" id="about-teaser">
      <div className="wrap">
        <div className="about-teaser reveal">
          <div className="about-teaser__text">
            <span className="eye">{t.eyebrow}</span>
            <h2>{t.title}</h2>
            <p>{t.body}</p>
            <Link href="/sobre-nosaltres" className="btn btn--primary btn--lg" data-hot>
              {t.cta} <ArrowIcon />
            </Link>
          </div>
          <div className="about-teaser__visual" aria-hidden="true">
            <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
              <defs>
                <radialGradient id="at-g" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#5D83C8" stopOpacity=".6" />
                  <stop offset="100%" stopColor="#2B519E" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="400" height="300" fill="url(#at-g)" opacity=".3" />
              {Array.from({ length: 36 }).map((_, i) => {
                const x = (i * 53) % 400;
                const y = (i * 71) % 300;
                return (
                  <circle key={i} cx={x} cy={y} r={i % 5 === 0 ? 2.2 : 1.2} fill="#86A4D8" opacity={0.4 + (i % 5) * 0.1} />
                );
              })}
              {Array.from({ length: 18 }).map((_, i) => {
                const x1 = (i * 53) % 400;
                const y1 = (i * 71) % 300;
                const x2 = ((i + 1) * 53) % 400;
                const y2 = ((i + 1) * 71) % 300;
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#86A4D8" strokeWidth="0.4" opacity="0.25" />;
              })}
              <g opacity=".5">
                <rect x="40" y="80" width="160" height="8" rx="2" fill="rgba(134,164,216,.18)" />
                <rect x="40" y="98" width="220" height="8" rx="2" fill="rgba(134,164,216,.12)" />
                <rect x="40" y="116" width="100" height="8" rx="2" fill="rgba(134,164,216,.18)" />
                <rect x="40" y="180" width="180" height="8" rx="2" fill="rgba(134,164,216,.1)" />
                <rect x="40" y="198" width="140" height="8" rx="2" fill="rgba(134,164,216,.16)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PullQuote({ t }: { t: HomeT['testimonial'] }) {
  const initials = t.name.replace(/[^A-Za-zÀ-ÿ]/g, '').slice(0, 2).toUpperCase();
  return (
    <section className="sec" id="testimonials">
      <div className="wrap">
        <div className="pullquote reveal">
          <div className="pullquote__eyebrow">{t.eyebrow}</div>
          <div className="pullquote__mark" aria-hidden="true">
            “
          </div>
          <blockquote className="pullquote__q">{t.q}</blockquote>
          <div className="pullquote__who">
            <div className="pullquote__avatar" aria-hidden="true">
              <span>{initials}</span>
            </div>
            <div className="pullquote__meta">
              <div className="pullquote__name">{t.name}</div>
              <div className="pullquote__role">
                {t.role} · {t.co}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BlogPreview({ t }: { t: HomeT['blog'] }) {
  return (
    <section className="sec" id="blog">
      <div className="wrap">
        <div className="sec-h reveal">
          <span className="eye">{t.eyebrow}</span>
          <h2>{t.title}</h2>
        </div>
        {t.categories && (
          <div className="blog__cats reveal" role="list">
            {t.categories.map((c, i) => (
              <span key={i} className="blog__cat" role="listitem">
                {c}
              </span>
            ))}
          </div>
        )}
        <div className="blog">
          {t.items.map((p, i) => (
            <Link
              key={i}
              href={`/blog/${p.slug}` as never}
              className="post reveal"
              style={{ transitionDelay: `${i * 40}ms` }}
              data-hot
            >
              <div className="post__cover">
                <BlogCover variant={i} />
              </div>
              <div className="post__body">
                <div className="post__cat">{p.cat}</div>
                <h3 className="post__title">{p.title}</h3>
                <p className="post__ex">{p.excerpt}</p>
                <div className="post__foot">
                  <span>{p.date}</span>
                  <span className="post__read">
                    {t.read} <span>→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {t.index && (
          <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
            <Link href="/blog" className="btn btn--ghost btn--lg" data-hot>
              {t.index} <ArrowIcon />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function FAQ({ t }: { t: HomeT['faq'] }) {
  const [open, setOpen] = useState(-1);
  return (
    <section className="sec" id="faq">
      <div className="wrap">
        <div className="sec-h reveal">
          <span className="eye">{t.eyebrow}</span>
          <h2>{t.title}</h2>
        </div>
        <div className="faq">
          {t.items.map((qa, i) => {
            const isOpen = open === i;
            const btnId = `home-faq-q-${i}`;
            const panelId = `home-faq-a-${i}`;
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

export function CtaBanner({ t }: { t: HomeT['cta'] }) {
  return (
    <section className="sec" style={{ paddingBottom: 40 }}>
      <div className="wrap">
        <div className="cta-banner reveal">
          <div className="cta-banner__grid" aria-hidden="true" />
          <div className="cta-banner__glow" aria-hidden="true" />
          <div className="cta-banner__inner">
            <h2>{t.title}</h2>
            <p>{t.sub}</p>
            <div className="cta-banner__actions">
              <Link href="/#contact" className="btn btn--primary btn--lg">
                {t.primary} <ArrowIcon />
              </Link>
              <a href={`mailto:${t.secondary}`} className="btn btn--ghost btn--lg">
                {t.secondary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact({ t }: { t: HomeT['contact'] }) {
  const d = t.direct;
  return (
    <section className="sec" id="contact">
      <div className="wrap">
        <div className="sec-h reveal">
          <span className="eye">{t.eyebrow}</span>
          <h2>{t.title}</h2>
          <p>{t.lede}</p>
        </div>
        <div className="contact">
          <ContactForm
            f={t.formFields}
            projectTypes={t.projectTypes}
            sources={t.sources}
            lede={t.lede}
          />
          <div className="contact__info reveal">
            <a className="contact__row" href={`mailto:${d.email}`} data-hot>
              <span className="contact__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7 L12 13 L21 7" />
                </svg>
              </span>
              <div className="contact__rowMain">
                <span className="contact__rowLbl">Email</span>
                <span className="contact__rowVal">{d.email}</span>
              </div>
            </a>
            <div className="contact__row contact__row--split" data-hot>
              <span className="contact__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 4 H9 L11 9 L8.5 10.5 A10 10 0 0 0 13.5 15.5 L15 13 L20 15 V19 A2 2 0 0 1 18 21 C10 21 3 14 3 6 A2 2 0 0 1 5 4 Z" />
                </svg>
              </span>
              <div className="contact__rowMain">
                <span className="contact__rowLbl">{d.phoneLabel}</span>
                <div className="contact__rowSplit">
                  <a href={d.phoneHref}>{d.phone}</a>
                  <span className="contact__sep">·</span>
                  <a href={d.waHref} target="_blank" rel="noopener noreferrer" className="contact__wa">
                    <WhatsAppIcon /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
            <a className="contact__row" href={d.linkedin} target="_blank" rel="noopener noreferrer" data-hot>
              <span className="contact__icon">
                <LinkedInIcon />
              </span>
              <div className="contact__rowMain">
                <span className="contact__rowLbl">LinkedIn</span>
                <span className="contact__rowVal">{d.linkedinLabel}</span>
              </div>
            </a>
            <a className="contact__row" href={d.instagram} target="_blank" rel="noopener noreferrer" data-hot>
              <span className="contact__icon">
                <InstagramIcon />
              </span>
              <div className="contact__rowMain">
                <span className="contact__rowLbl">Instagram</span>
                <span className="contact__rowVal">{d.instagramLabel}</span>
              </div>
            </a>
            <div className="contact__loc">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 22 C8 18 4 14 4 10 A8 8 0 0 1 20 10 C20 14 16 18 12 22 Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{d.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
