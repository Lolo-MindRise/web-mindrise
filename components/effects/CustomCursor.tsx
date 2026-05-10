'use client';

import { useEffect } from 'react';

export function CustomCursor() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(hover: none)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (document.body.dataset.cursorMounted === '1') return;
    document.body.dataset.cursorMounted = '1';
    document.body.classList.add('cursor-on');

    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    dot.setAttribute('aria-hidden', 'true');

    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    ring.setAttribute('aria-hidden', 'true');

    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let rx = 0;
    let ry = 0;
    let tx = 0;
    let ty = 0;
    let hot = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      dot.style.transform = `translate(${tx}px, ${ty}px) translate(-50%,-50%)`;
      const el = document.elementFromPoint(tx, ty) as HTMLElement | null;
      const nextHot = !!(el && el.closest('[data-hot], a, button, input, select, textarea, .btn, label'));
      if (nextHot !== hot) {
        hot = nextHot;
        document.body.classList.toggle('cursor-hot', hot);
      }
    };

    const loop = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };

    loop();
    window.addEventListener('mousemove', onMove, { passive: true });

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onMq = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.remove('cursor-on', 'cursor-hot');
        dot.remove();
        ring.remove();
        window.removeEventListener('mousemove', onMove);
        cancelAnimationFrame(raf);
        document.body.dataset.cursorMounted = '0';
      }
    };
    mq.addEventListener?.('change', onMq);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      mq.removeEventListener?.('change', onMq);
      dot.remove();
      ring.remove();
      document.body.classList.remove('cursor-on', 'cursor-hot');
      document.body.dataset.cursorMounted = '0';
    };
  }, []);

  return null;
}
