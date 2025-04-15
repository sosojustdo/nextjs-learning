import { getRequestConfig } from 'next-intl/server'
import { locales } from './config'

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) {
    throw new Error(`Locale '${locale}' is not supported`)
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  }
})
