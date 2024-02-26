import 'server-only';
import { headers } from 'next/headers';
import es from './es.json';
import en from './en.json';
import { type DictionaryType } from '@/types';

type langType = 'es' | 'en';

const setLang = headers().get('accept-language')?.split(',')[0];
export const lang: langType = setLang?.includes('es') ?? false ? 'es' : 'en';

const dictionaries = {
  en,
  es
};

export const getDictionary = (): DictionaryType => dictionaries[lang];
