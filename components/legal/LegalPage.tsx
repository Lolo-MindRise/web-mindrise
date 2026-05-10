import { Link } from '@/lib/i18n/routing';

type Block =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] };

type Section = { n: string; t: string; blocks: Block[] };

type EntityRow = { label: string; value: string };

export type LegalCommonT = {
  overline: string;
  lastUpdate: string;
  entity: { title: string; rows: EntityRow[] };
  nav: { title: string; privacy: string; cookies: string; legal: string; contact: string };
};

export function LegalPage({
  current,
  title,
  sections,
  common,
}: {
  current: 'privacy' | 'cookies' | 'legal';
  title: string;
  sections: Section[];
  common: LegalCommonT;
}) {
  return (
    <article className="legal">
      <header className="legal__hero">
        <span className="eye">{common.overline}</span>
        <h1>{title}</h1>
        <div className="legal__updated">{common.lastUpdate}</div>
      </header>

      <aside className="legal__entity reveal">
        <h2>{common.entity.title}</h2>
        <dl>
          {common.entity.rows.map((row) => (
            <div key={row.label} style={{ display: 'contents' }}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      </aside>

      <div className="legal__body">
        {sections.map((s) => (
          <section key={s.n} className="reveal">
            <h2>
              <span style={{ color: 'rgba(134,164,216,.6)', marginRight: 12, fontFamily: 'var(--font-mono)', fontSize: '0.7em' }}>
                {s.n}
              </span>
              {s.t}
            </h2>
            {s.blocks.map((b, i) =>
              b.type === 'p' ? (
                <p key={i}>{b.text}</p>
              ) : (
                <ul key={i}>
                  {b.items.map((it, j) => (
                    <li key={j}>{it}</li>
                  ))}
                </ul>
              )
            )}
          </section>
        ))}
      </div>

      <nav className="legal__nav reveal" aria-label={common.nav.title}>
        <strong>{common.nav.title}</strong>
        {current !== 'privacy' && <Link href="/politica-de-privacitat">{common.nav.privacy}</Link>}
        {current !== 'cookies' && <Link href="/politica-de-cookies">{common.nav.cookies}</Link>}
        {current !== 'legal' && <Link href="/avis-legal">{common.nav.legal}</Link>}
        <Link href="/#contact">{common.nav.contact}</Link>
      </nav>
    </article>
  );
}
