import Image from 'next/image';
import { Link } from '@/lib/i18n/routing';
import { getTranslations } from 'next-intl/server';
import { LinkedInIcon, InstagramIcon } from '@/components/icons/Icons';
import { LangSwitcher } from './LangSwitcher';

type FooterColItem = { label: string; href: string };
type FooterCol = { title: string; items: FooterColItem[] };

export async function Footer() {
  const t = await getTranslations('common');
  const footer = t.raw('footer') as {
    tagline: string;
    made: string;
    col1: FooterCol;
    col2: FooterCol;
    col3: FooterCol;
    rights: string;
  };
  const direct = t.raw('contact.direct') as { linkedin: string; instagram: string };

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <Image
              src="/logos/mindrise-white-brandmark-complete.png"
              alt="MindRise Labs"
              width={210}
              height={30}
              style={{ height: 30, width: 'auto' }}
            />
            <p className="footer__tag">{footer.tagline}</p>
            <div className="footer__made">{footer.made}</div>
          </div>
          <FooterColumn col={footer.col1} />
          <FooterColumn col={footer.col2} />
          <FooterColumn col={footer.col3} />
        </div>
        <div className="footer__bot">
          <div>{footer.rights}</div>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <LangSwitcher />
            <div className="footer__soc">
              <a href={direct.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" data-hot>
                <LinkedInIcon />
              </a>
              <a href={direct.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" data-hot>
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ col }: { col: FooterCol }) {
  return (
    <div className="footer__col">
      <h5>{col.title}</h5>
      {col.items.map((item) => (
        <Link key={item.label} href={item.href as never}>
          {item.label}
        </Link>
      ))}
    </div>
  );
}
