import en from '@/locales/en.json';
import uk from '@/locales/uk.json';

export const messages = {
  en,
  uk,
};

export const defaultLocale = 'en';
export const locales = Object.keys(messages) as Array<keyof typeof messages>;

export type Locale = keyof typeof messages; 