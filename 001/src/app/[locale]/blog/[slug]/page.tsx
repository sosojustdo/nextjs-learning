// 这个文件处理 /blog/[slug] 路由
// 例如：/blog/first-post, /blog/how-to-learn-nextjs 等

import { unstable_setRequestLocale } from 'next-intl/server'
import { ValidLocale, locales } from '@/i18n/config'

type SegmentParams = {
  locale: ValidLocale
  slug: string
}

type PageProps = {
  params: Promise<SegmentParams>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

// 定义静态生成的路径参数
export async function generateStaticParams() {
  // 这里应该从你的数据源获取所有博客文章的slugs
  // 例如从CMS、Markdown文件等
  const slugs = ['first-post', 'how-to-learn-nextjs', 'welcome']

  const params = []
  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({ locale, slug })
    }
  }

  return params
}

// 页面组件
export default async function BlogPost({ params }: PageProps) {
  const resolvedParams = await params
  unstable_setRequestLocale(resolvedParams.locale)
  // params.slug 将包含 URL 中的实际值
  // 例如：访问 /blog/first-post 时，params.slug 将是 "first-post"

  return (
    <article className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">
        Blog Post: {resolvedParams.slug}
      </h1>
      <p className="text-gray-600">
        This is the content for the blog post with slug: {resolvedParams.slug}
      </p>
    </article>
  )
}
