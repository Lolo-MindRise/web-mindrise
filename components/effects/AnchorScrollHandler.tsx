'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const NAV_OFFSET_FALLBACK = 80;
const HOME_PATHS = new Set(['/', '/ca', '/es', '/en', '/fr']);

function navOffset(): number {
  const nav = document.querySelector('.nav');
  if (!nav) return NAV_OFFSET_FALLBACK;
  return nav.getBoundingClientRect().height + 12;
}

function reducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function scrollToHash(hash: string, behavior?: ScrollBehavior): boolean {
  if (!hash || hash === '#') return false;
  let id: string;
  try {
    id = decodeURIComponent(hash.replace(/^#/, ''));
  } catch {
    id = hash.replace(/^#/, '');
  }
  const el = document.getElementById(id);
  if (!el) return false;
  const top = Math.max(0, window.pageYOffset + el.getBoundingClientRect().top - navOffset());
  const b = behavior ?? (reducedMotion() ? 'auto' : 'smooth');
  window.scrollTo({ top, behavior: b });
  return true;
}

function isHome(pathname: string): boolean {
  if (HOME_PATHS.has(pathname)) return true;
  // localized home paths can be just `/{locale}` with no trailing slash
  return /^\/(ca|es|en|fr)\/?$/.test(pathname);
}

export function AnchorScrollHandler() {
  const pathname = usePathname();

  // On initial load / route change: handle hash if we're on home.
  useEffect(() => {
    if (!isHome(pathname)) return;
    const hash = window.location.hash;
    if (!hash) return;

    if ('scrollRestoration' in history) {
      try {
        history.scrollRestoration = 'manual';
      } catch {}
    }

    let landed = false;
    const settle = () => {
      scrollToHash(hash, 'auto');
      setTimeout(() => scrollToHash(hash, 'auto'), 250);
      setTimeout(() => scrollToHash(hash, 'auto'), 800);
      setTimeout(() => scrollToHash(hash, 'auto'), 1800);
    };
    const attempt = () => {
      if (landed) return true;
      if (scrollToHash(hash, 'auto')) {
        landed = true;
        settle();
        return true;
      }
      return false;
    };
    if (attempt()) return;

    let attempts = 0;
    const poll = setInterval(() => {
      attempts++;
      if (attempt() || attempts > 125) clearInterval(poll);
    }, 80);

    const mo = new MutationObserver(() => {
      if (attempt()) {
        mo.disconnect();
        clearInterval(poll);
      }
    });
    try {
      mo.observe(document.body || document.documentElement, { childList: true, subtree: true });
    } catch {}
    const stopMo = setTimeout(() => mo.disconnect(), 12000);

    return () => {
      clearInterval(poll);
      mo.disconnect();
      clearTimeout(stopMo);
    };
  }, [pathname]);

  // Click handler for in-page anchors and home-anchor links.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      const a = target?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute('href') || '';
      if (!href) return;

      // Same-page hash
      if (href.charAt(0) === '#') {
        if (scrollToHash(href)) {
          history.replaceState(null, '', href);
          e.preventDefault();
        }
        return;
      }

      // Cross-page hash to home — only intercept if we're already on home.
      if (isHome(window.location.pathname)) {
        const idx = href.indexOf('#');
        if (idx < 0) return;
        const path = href.substring(0, idx);
        const hash = href.substring(idx);
        // Recognise home paths in any locale.
        if (path === '/' || path === '' || /^\/(ca|es|en|fr)\/?$/.test(path)) {
          if (scrollToHash(hash)) {
            history.replaceState(null, '', hash);
            e.preventDefault();
          }
        }
      }
    };

    const onHash = () => {
      if (window.location.hash) scrollToHash(window.location.hash);
    };

    document.addEventListener('click', onClick);
    window.addEventListener('hashchange', onHash);
    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('hashchange', onHash);
    };
  }, []);

  return null;
}
