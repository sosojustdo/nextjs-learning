// 这个文件处理 /blog/[slug] 路由
// 例如：/blog/first-post, /blog/how-to-learn-nextjs 等

import { unstable_setRequestLocale } from 'next-intl/server'
import { ValidLocale } from '@/i18n/config'

type Props = {
  params: {
    locale: ValidLocale
    slug: string
  }
}

// 页面组件
export default async function BlogPost({ params }: Props) {
  unstable_setRequestLocale(params.locale)
  // params.slug 将包含 URL 中的实际值
  // 例如：访问 /blog/first-post 时，params.slug 将是 "first-post"

  return (
    <article className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">
        Blog Post: {params.slug}
      </h1>
      <p className="text-gray-600">
        This is the content for the blog post with slug: {params.slug}
      </p>
    </article>
  )
}
