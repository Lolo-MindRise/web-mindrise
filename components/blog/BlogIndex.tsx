'use client';

import { useEffect, useMemo, useState } from 'react';
import { Link } from '@/lib/i18n/routing';
import { BlogCover, ArrowIcon } from '@/components/icons/Icons';
import type { Post } from '@/lib/blog/posts';

const PAGE_SIZE = 9;

export type BlogT = {
  blogTitle: string;
  blogEyebrow: string;
  blogSub: string;
  catsAll: string;
  cats: string[];
  read: string;
  pageOf: string;
  prev: string;
  next: string;
  none: string;
  indexCta: { eye: string; t: string; p: string; btn: string };
};

export function BlogIndex({ posts, t }: { posts: Post[]; t: BlogT }) {
  const [activeCat, setActiveCat] = useState(-1);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(0);
  }, [activeCat]);

  const filtered = useMemo(() => {
    if (activeCat === -1) return posts;
    return posts.filter((p) => p.catIdx === activeCat);
  }, [activeCat, posts]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);
  const cats = [t.catsAll, ...t.cats];
  const pageLabel = t.pageOf.replace('{a}', String(page + 1)).replace('{b}', String(totalPages));

  return (
    <>
      <section className="blog-hero">
        <div className="wrap">
          <div className="blog-hero__inner reveal">
            <span className="eye">{t.blogEyebrow}</span>
            <h1>{t.blogTitle}</h1>
            <p>{t.blogSub}</p>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="blog-filters reveal" role="tablist" aria-label={t.blogTitle}>
            {cats.map((c, i) => {
              const idx = i - 1;
              const isActive = idx === activeCat;
              return (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`blog-filters__btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveCat(idx)}
                  data-hot
                >
                  {c}
                </button>
              );
            })}
          </div>

          {visible.length === 0 ? (
            <div className="blog-empty">{t.none}</div>
          ) : (
            <div className="blog-index">
              {visible.map((p, i) => (
                <div key={p.slug} className="reveal is-in" style={{ transitionDelay: `${i * 35}ms` }}>
                  <Link href={`/blog/${p.slug}` as never} className="post" data-hot>
                    <div className="post__cover">
                      <BlogCover variant={p.variant} />
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
                </div>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="blog-pager">
              <button
                type="button"
                className="blog-pager__btn"
                disabled={page === 0}
                onClick={() => {
                  setPage((p) => Math.max(0, p - 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                data-hot
              >
                <span className="arr" style={{ transform: 'rotate(180deg)', display: 'inline-block' }}>
                  →
                </span>
                {t.prev}
              </button>
              <span className="blog-pager__page">{pageLabel}</span>
              <button
                type="button"
                className="blog-pager__btn"
                disabled={page >= totalPages - 1}
                onClick={() => {
                  setPage((p) => Math.min(totalPages - 1, p + 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                data-hot
              >
                {t.next}
                <ArrowIcon />
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="sec" style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <div className="cta-banner reveal">
            <div className="cta-banner__grid" aria-hidden="true" />
            <div className="cta-banner__glow" aria-hidden="true" />
            <div className="cta-banner__inner">
              <span className="eye" style={{ marginBottom: 14, display: 'block' }}>
                {t.indexCta.eye}
              </span>
              <h2>{t.indexCta.t}</h2>
              <p>{t.indexCta.p}</p>
              <div className="cta-banner__actions">
                <Link href="/#contact" className="btn btn--primary btn--lg">
                  {t.indexCta.btn} <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
