'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Link } from '@/lib/i18n/routing';
import { useTranslations } from 'next-intl';
import { LangSwitcher } from './LangSwitcher';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const tNav = useTranslations('common.nav');
  const links = tNav.raw('links') as string[];
  const hrefs = tNav.raw('hrefs') as string[];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <Link href="/" className="nav__brand" aria-label="MindRise Labs">
        <Image
          src="/logos/mindrise-white-brandmark-complete.png"
          alt="MindRise Labs"
          width={180}
          height={26}
          style={{ height: 26, width: 'auto' }}
          priority
        />
      </Link>
      <ul className="nav__links">
        {links.map((label, i) => (
          <li key={i}>
            <Link className="nav__link" href={hrefs[i] as never}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav__right">
        <LangSwitcher />
        <Link href="/#contact" className="btn btn--primary btn--sm">
          {tNav('cta')} <span className="arr" aria-hidden="true">→</span>
        </Link>
      </div>
    </nav>
  );
}
