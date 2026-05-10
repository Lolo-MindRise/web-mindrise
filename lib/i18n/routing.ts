import { defineRouting } from 'next-intl/routing';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['ca', 'es', 'en', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales: locales as unknown as string[],
  defaultLocale: 'ca',
  localePrefix: 'as-needed',
});

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales: routing.locales,
    localePrefix: routing.localePrefix,
  });
