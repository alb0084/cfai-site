export const prerender = true;

import type { LayoutLoad } from './$types';

const SUPPORTED = ['en', 'it'] as const;
export type Lang = typeof SUPPORTED[number];

export const load: LayoutLoad = async ({ params }) => {
    const lang = SUPPORTED.includes(params.lang as Lang) ? (params.lang as Lang) : 'en';
    const dict = await import(`$lib/i18n/dicts/${lang}.ts`);
    return { lang, dict: dict.default };
};
