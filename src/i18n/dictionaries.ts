import { en } from "./translations/en";
import { pt } from "./translations/pt";
import type { Locale, TranslationDictionary } from "./types";

export const defaultLocale: Locale = "en";

export const dictionaries: Record<Locale, TranslationDictionary> = {
  en,
  pt
};

export const locales = Object.keys(dictionaries) as Locale[];
