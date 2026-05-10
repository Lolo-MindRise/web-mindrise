'use client';

import { Link } from '@/lib/i18n/routing';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const tNav = useTranslations('common.nav');
  return (
    <section className="sub-hero" style={{ minHeight: '70vh' }}>
      <div className="sub-hero__grid" aria-hidden="true" />
      <div className="sub-hero__aurora" aria-hidden="true" />
      <div className="wrap" style={{ textAlign: 'center', paddingTop: 80 }}>
        <span className="eye reveal is-in" style={{ marginBottom: 18, display: 'inline-block' }}>
          404
        </span>
        <h1 className="sub-hero__title reveal is-in" style={{ marginInline: 'auto' }}>
          <span className="accent">Not found.</span>
        </h1>
        <p className="sub-hero__sub reveal is-in" style={{ marginInline: 'auto' }}>
          The page you&apos;re looking for doesn&apos;t exist (or has moved).
        </p>
        <div className="reveal is-in" style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn--primary btn--lg">
            ← Home
          </Link>
          <Link href="/#contact" className="btn btn--ghost btn--lg">
            {tNav('cta')}
          </Link>
        </div>
      </div>
    </section>
  );
}
