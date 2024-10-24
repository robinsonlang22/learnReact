import React from 'react'
import { Layout, theme } from 'antd'

const { Header } = Layout

export default function TopHeader() {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
      }}
    />
  )
}
