'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from '@/lib/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import { Flag } from '@/components/icons/Icons';
import type { Locale } from '@/lib/i18n/routing';

const LOCALES: Locale[] = ['ca', 'es', 'en', 'fr'];

export function LangSwitcher() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale() as Locale;
  const tLang = useTranslations('common.lang');

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  const switchTo = (l: Locale) => {
    setOpen(false);
    router.replace(pathname, { locale: l });
  };

  return (
    <div className="lang" ref={containerRef}>
      <button
        type="button"
        className="lang__btn"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="menu"
        data-hot
      >
        <Flag code={locale} />
        <span>{locale.toUpperCase()}</span>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M1 1 L5 5 L9 1" />
        </svg>
      </button>
      {open && (
        <div className="lang__menu" role="menu">
          {LOCALES.map((l) => (
            <button
              key={l}
              type="button"
              className={`lang__item ${l === locale ? 'is-active' : ''}`}
              onClick={() => switchTo(l)}
              role="menuitem"
              data-hot
            >
              <Flag code={l} />
              <span>{l.toUpperCase()}</span>
              <span style={{ marginLeft: 'auto', fontSize: 11, fontFamily: 'var(--font-text)', letterSpacing: 0, color: 'rgba(245,245,247,.5)' }}>
                {tLang(l)}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
