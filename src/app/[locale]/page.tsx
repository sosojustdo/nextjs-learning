import { Navbar } from "@/components/navbar"
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations()

  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{t('home.title')}</h1>
        <p className="text-lg text-muted-foreground">
          {t('home.description')}
        </p>
      </div>
    </main>
  )
}
