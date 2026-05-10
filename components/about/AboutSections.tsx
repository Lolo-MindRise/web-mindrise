import { Link } from '@/lib/i18n/routing';
import { ArrowIcon } from '@/components/icons/Icons';
import { SERVICE_IDS, SERVICE_SLUGS, type ServiceId } from '@/lib/services/catalog';

type Pillar = { t: string; d: string };
type Fact = { lbl: string; val: string };

export type AboutT = {
  nav: string;
  eyebrow: string;
  title: string[];
  sub: string;
  whyTitle: string;
  whyEyebrow: string;
  why: string[];
  beliefsTitle: string;
  beliefsEyebrow: string;
  beliefs: Pillar[];
  andorraTitle: string;
  andorraEyebrow: string;
  andorra: string;
  howTitle: string;
  howEyebrow: string;
  how: Pillar[];
  teamTitle: string;
  teamEyebrow: string;
  teamBody: string;
  teamRoles: Pillar[];
  factsTitle: string;
  factsEyebrow: string;
  facts: Fact[];
  capsTitle: string;
  ctaEyebrow: string;
  ctaTitle: string[];
  ctaSub: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export function AboutHero({ t, homeLabel }: { t: AboutT; homeLabel: string }) {
  return (
    <section className="sub-hero">
      <div className="sub-hero__grid" aria-hidden="true" />
      <div className="sub-hero__aurora" aria-hidden="true" />
      <div className="wrap">
        <nav className="breadcrumb reveal">
          <Link href="/">{homeLabel}</Link>
          <span className="breadcrumb__sep">/</span>
          <span>{t.nav}</span>
        </nav>
        <span className="eye reveal">{t.eyebrow}</span>
        <h1 className="sub-hero__title reveal">
          {t.title[0]}
          <br />
          <span className="accent">{t.title[1]}</span>
        </h1>
        <p className="sub-hero__sub reveal">{t.sub}</p>
      </div>
    </section>
  );
}

export function AboutWhy({ t }: { t: AboutT }) {
  return (
    <section className="sec" style={{ background: 'linear-gradient(180deg, transparent, rgba(20,27,51,.25), transparent)' }}>
      <div className="wrap">
        <div className="story reveal">
          <div className="story__meta">
            <span className="eye">{t.whyEyebrow}</span>
          </div>
          <div className="story__body">
            <h2>{t.whyTitle}</h2>
            {t.why.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Beliefs({ t }: { t: AboutT }) {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-h reveal">
          <span className="eye">{t.beliefsEyebrow}</span>
          <h2>{t.beliefsTitle}</h2>
        </div>
        <div className="pillars">
          {t.beliefs.map((p, i) => (
            <div key={i} className="pillar reveal" style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="pillar__n">{String(i + 1).padStart(2, '0')}</div>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Andorra({ t }: { t: AboutT }) {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="story reveal">
          <div className="story__meta">
            <span className="eye">{t.andorraEyebrow}</span>
          </div>
          <div className="story__body">
            <h2>{t.andorraTitle}</h2>
            <p>{t.andorra}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function How({ t }: { t: AboutT }) {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-h reveal">
          <span className="eye">{t.howEyebrow}</span>
          <h2>{t.howTitle}</h2>
        </div>
        <div className="pillars">
          {t.how.map((p, i) => (
            <div key={i} className="pillar reveal" style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="pillar__n">{String(i + 1).padStart(2, '0')}</div>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Team({ t }: { t: AboutT }) {
  return (
    <section className="sec" style={{ background: 'linear-gradient(180deg, transparent, rgba(20,27,51,.25), transparent)' }}>
      <div className="wrap">
        <div className="story reveal" style={{ marginBottom: 32 }}>
          <div className="story__meta">
            <span className="eye">{t.teamEyebrow}</span>
          </div>
          <div className="story__body">
            <h2>{t.teamTitle}</h2>
            <p>{t.teamBody}</p>
          </div>
        </div>
        <div className="caps">
          {t.teamRoles.map((r, i) => (
            <div key={i} className="cap reveal" style={{ transitionDelay: `${i * 40}ms`, cursor: 'default' }}>
              <h3>{r.t}</h3>
              <p>{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type ServicesCard = { id: ServiceId; name: string; desc: string };

export function AboutCapabilities({
  t,
  services,
  servicesEyebrow,
  capsLink,
}: {
  t: AboutT;
  services: ServicesCard[];
  servicesEyebrow: string;
  capsLink: string;
}) {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-h reveal">
          <span className="eye">{servicesEyebrow}</span>
          <h2>{t.capsTitle}</h2>
        </div>
        <div className="caps">
          {services.map((s, i) => (
            <Link
              key={s.id}
              href={`/serveis/${SERVICE_SLUGS[s.id]}` as never}
              className="cap reveal"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
              <span className="cap__link">
                {capsLink} <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Facts({ t }: { t: AboutT }) {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-h reveal">
          <span className="eye">{t.factsEyebrow}</span>
          <h2>{t.factsTitle}</h2>
        </div>
        <div className="facts reveal">
          {t.facts.map((f, i) => (
            <div key={i} className="fact">
              <div className="fact__lbl">{f.lbl}</div>
              <div className="fact__val">{f.val}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutCta({ t }: { t: AboutT }) {
  return (
    <section className="sec" style={{ paddingBottom: 40 }}>
      <div className="wrap">
        <div className="cta-banner reveal">
          <div className="cta-banner__grid" aria-hidden="true" />
          <div className="cta-banner__glow" aria-hidden="true" />
          <div className="cta-banner__inner">
            <span className="eye" style={{ display: 'inline-block', marginBottom: 12 }}>
              {t.ctaEyebrow}
            </span>
            <h2>
              {t.ctaTitle[0]} <span className="accent">{t.ctaTitle[1]}</span>
            </h2>
            <p>{t.ctaSub}</p>
            <div className="cta-banner__actions">
              <Link href="/#contact" className="btn btn--primary btn--lg">
                {t.ctaPrimary} <ArrowIcon />
              </Link>
              <Link href="/#services" className="btn btn--ghost btn--lg">
                {t.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { SERVICE_IDS };
