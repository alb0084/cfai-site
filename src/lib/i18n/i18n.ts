// src/lib/i18n/i18n.ts
import { writable, derived } from 'svelte/store';

export type Lang = 'en' | 'it';

export const locale = writable<Lang>('en');
export const dictionary = writable<Record<string, any>>({});

export function initI18n(lang: Lang, dict: Record<string, any>) {
    locale.set(lang);
    dictionary.set(dict);
}

function interpolate(str: string, vars: Record<string, string | number>) {
    return str.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''));
}

export const t = derived([dictionary, locale], ([$dict, $lang]) => {
    return (key: string, vars: Record<string, string | number> = {}) => {
        const msg = key.split('.').reduce<any>((o, k) => o?.[k], $dict) ?? key;

        if (typeof msg === 'string') return interpolate(msg, vars);

        if (msg && typeof msg === 'object' && 'one' in msg && 'other' in msg) {
            const n = Number(vars.count ?? 0);
            const rule = new Intl.PluralRules($lang).select(n); 
            const tpl = (msg as any)[rule] ?? (msg as any).other;
            return interpolate(tpl, vars);
        }

        return String(msg ?? key);
    };
});
