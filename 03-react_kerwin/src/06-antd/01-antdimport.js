import { Button } from 'antd';
import React from 'react'

export default function App() {
  return (
    <div>
      <Button type="primary" danger ghost={true} loading={true}>Primary Button</Button>
    </div>
  )
}
