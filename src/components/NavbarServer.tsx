import Link from "next/link"
import NavbarClient from "./NavbarClient"
import { defaultLocale } from "@/i18n/config"
import { ThemeToggle } from "./theme-toggle"

export default function NavbarServer({ locale = 'en' }) {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href={`/${locale}`} className="font-bold text-xl">
          Next.js Blog
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          <NavbarClient locale={locale} />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
