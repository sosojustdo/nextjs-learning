// 这是一个服务器组件
// 不需要 'use client' 指令

// 1. 使用环境变量（推荐）
const API_KEY = process.env.DATABASE_API_KEY
const DB_URL = process.env.DATABASE_URL

// 2. 使用 Next.js 的配置系统
import { headers } from 'next/headers'

// 3. 使用服务器端 API 路由
async function getData() {
  // 环境变量只在服务器端可用
  if (!API_KEY || !DB_URL) {
    throw new Error('Missing required environment variables')
  }

  // 获取请求头信息（仅在服务器端可用）
  const headersList = headers()

  try {
    // 方式1：使用参数化查询（防止 SQL 注入）
    // const userId = 1 // 假设这是从某处获取的用户 ID
    // const data = await db.query(
    //   'SELECT * FROM users WHERE id = ? AND status = ?',
    //   [userId, 'active']  // 使用参数化查询，而不是字符串拼接
    // )

    // 方式2：使用命名参数（更清晰的参数化查询）
    // const data = await db.query(
    //   'SELECT * FROM users WHERE id = :userId AND status = :status',
    //   { userId: 1, status: 'active' }
    // )

    // 方式3：使用 Prisma（自动防止 SQL 注入）
    // const data = await prisma.user.findMany({
    //   where: {
    //     id: userId,
    //     status: 'active'
    //   }
    // })

    // 方式4：使用查询构建器
    // const query = db.select('*')
    //   .from('users')
    //   .where('id', '=', userId)
    //   .where('status', '=', 'active')
    // const data = await query.execute()

    return { message: "这是从服务器安全获取的数据" }
  } catch (error) {
    console.error('Data fetching error:', error)
    return { message: "获取数据时发生错误" }
  }
}

export default async function ServerComponent() {
  const data = await getData()

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-2">服务器组件</h2>
      <p>{data.message}</p>
    </div>
  )
}
