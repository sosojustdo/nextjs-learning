"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation'
import { ThemeToggle } from "./theme-toggle"
import { useTranslations } from 'next-intl'

export function Navbar() {
  const t = useTranslations()
  const pathname = usePathname()
  const locale = pathname.split('/')[1]

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href={`/${locale}`} className="font-bold text-xl">
          Next.js Blog
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          <Link href={`/${locale}/blog`} className="text-sm font-medium">
            {t('navigation.blog')}
          </Link>
          <Link href={`/${locale}/contact`} className="text-sm font-medium">
            {t('navigation.contact')}
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
