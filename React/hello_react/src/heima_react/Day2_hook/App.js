//受控绑定表单

//1. 声明一个react状态 - useState

//2. 核心绑定流程

import React, { useState } from 'react'

export default function App() {
    const [value,setValue] = useState("")

  return (
    <div>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
       type="text" />
    </div>
  )
}
