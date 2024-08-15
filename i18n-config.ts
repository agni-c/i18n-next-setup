export const i18n = {
	defaultLocale: 'en',
	locales: ['en', 'bn', 'hn']
} as const;

export type Locale = (typeof i18n)['locales'][number];
