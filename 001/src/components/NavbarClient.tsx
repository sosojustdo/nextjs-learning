"use client"

import Link from "next/link"
import { useTranslations } from 'next-intl'

export default function NavbarClient({ locale }: { locale: string }) {
  const t = useTranslations()

  return (
    <>
      <Link href={`/${locale}/blog`} className="text-sm font-medium">
        {t('navigation.blog')}
      </Link>
      <Link href={`/${locale}/contact`} className="text-sm font-medium">
        {t('navigation.contact')}
      </Link>
    </>
  )
}
