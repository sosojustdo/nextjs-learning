'use client'

// 这是一个客户端组件
// 需要使用 'use client' 指令

import { useState } from 'react'

export default function ClientComponent() {
  // 可以使用 React hooks
  const [count, setCount] = useState(0)

  // 可以使用事件处理器
  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-2">客户端组件</h2>
      <p>计数: {count}</p>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        增加计数
      </button>
    </div>
  )
}
