import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { locales } from "@/i18n/config"
import { ValidLocale } from '@/i18n/config'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next.js Blog",
  description: "A modern blog built with Next.js",
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

type SegmentParams = {
  locale: ValidLocale
}

type LayoutProps = {
  params: Promise<SegmentParams>
  children: React.ReactNode
}

export default async function RootLayout({ params, children }: LayoutProps) {
  const { locale } = await params
  let messages
  try {
    messages = (await import(`@/i18n/messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
