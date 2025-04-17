export const defaultLocale = 'en'
export const locales = ['en', 'zh'] as const
export type ValidLocale = (typeof locales)[number]

export const localeNames: Record<ValidLocale, string> = {
  en: 'English',
  zh: '中文',
}

export function isValidLocale(locale: string): locale is ValidLocale {
  return locales.includes(locale as ValidLocale)
}
