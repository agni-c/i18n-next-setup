import 'server-only';
import type { Locale } from './i18n-config';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
	en: () =>
		import('./dictionaries/en.json').then(module => module.default),
	bn: () =>
		import('./dictionaries/bn.json').then(module => module.default),
	hn: () =>
		import('./dictionaries/hn.json').then(module => module.default)
};

export const getDictionary = async (locale: Locale) =>
	dictionaries[locale]?.() ?? dictionaries.en();
