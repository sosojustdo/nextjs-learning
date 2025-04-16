import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { NextIntlClientProvider } from 'next-intl'
import { defaultLocale } from '@/i18n/config'
import getMessages from '@/i18n/request'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next.js Blog",
  description: "A modern blog built with Next.js",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { messages } = await getMessages({
    requestLocale: Promise.resolve(defaultLocale),
    locale: defaultLocale
  })

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider
            locale={defaultLocale}
            messages={messages}
          >
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
