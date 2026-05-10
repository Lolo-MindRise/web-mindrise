import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from './routing';

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) notFound();

  const [common, home, about, services, blog, legal] = await Promise.all([
    import(`../../messages/${locale}/common.json`).then((m) => m.default),
    import(`../../messages/${locale}/home.json`).then((m) => m.default),
    import(`../../messages/${locale}/about.json`).then((m) => m.default),
    import(`../../messages/${locale}/services.json`).then((m) => m.default),
    import(`../../messages/${locale}/blog.json`).then((m) => m.default),
    import(`../../messages/${locale}/legal.json`).then((m) => m.default),
  ]);

  return {
    messages: { common, home, about, services, blog, legal },
  };
});
