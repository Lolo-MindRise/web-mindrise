import ReactMarkdown from 'react-markdown';
import { Link } from '@/lib/i18n/routing';
import { BlogCover, ArrowIcon } from '@/components/icons/Icons';
import type { Post } from '@/lib/blog/posts';

export type PostT = {
  read: string;
  blogEyebrow: string;
  publishedOn: string;
  by: string;
  backToBlog: string;
  related: string;
  postCta: { eye: string; t: string; p: string; btn: string };
};

export function PostPageView({
  post,
  related,
  t,
}: {
  post: Post;
  related: Post[];
  t: PostT;
}) {
  return (
    <>
      <section className="post-hero">
        <div className="wrap">
          <div className="post-hero__inner reveal">
            <Link href="/blog" className="post-back">
              <span className="arr">→</span> {t.backToBlog}
            </Link>
            <div className="post-hero__cat">{post.cat}</div>
            <h1>{post.title}</h1>
            <div className="post-hero__meta">
              <span>
                {t.publishedOn} <strong>{post.date}</strong>
              </span>
              <span>·</span>
              <span>
                {t.by} <strong>{post.author}</strong>
              </span>
            </div>
          </div>
          <div className="post-hero__cover reveal">
            <BlogCover variant={post.variant} />
          </div>
        </div>
      </section>

      <section className="post-body">
        <div className="wrap">
          <div className="post-body__inner reveal">
            <ReactMarkdown>{post.body}</ReactMarkdown>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="sec">
          <div className="wrap">
            <div className="sec-h reveal">
              <span className="eye">{t.blogEyebrow}</span>
              <h2>{t.related}</h2>
            </div>
            <div className="post-related">
              {related.map((r, i) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}` as never}
                  className="post reveal"
                  style={{ transitionDelay: `${i * 35}ms` }}
                  data-hot
                >
                  <div className="post__cover">
                    <BlogCover variant={r.variant} />
                  </div>
                  <div className="post__body">
                    <div className="post__cat">{r.cat}</div>
                    <h3 className="post__title">{r.title}</h3>
                    <p className="post__ex">{r.excerpt}</p>
                    <div className="post__foot">
                      <span>{r.date}</span>
                      <span className="post__read">
                        {t.read} <span>→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="sec" style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <div className="cta-banner reveal">
            <div className="cta-banner__grid" aria-hidden="true" />
            <div className="cta-banner__glow" aria-hidden="true" />
            <div className="cta-banner__inner">
              <span className="eye" style={{ marginBottom: 14, display: 'block' }}>
                {t.postCta.eye}
              </span>
              <h2>{t.postCta.t}</h2>
              <p>{t.postCta.p}</p>
              <div className="cta-banner__actions">
                <Link href="/#contact" className="btn btn--primary btn--lg">
                  {t.postCta.btn} <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
