import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Next.js Blog</h1>
        <p className="text-lg text-muted-foreground">
          A modern blog built with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </main>
  )
}
