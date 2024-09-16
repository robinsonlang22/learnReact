import React from 'react'
import { Row, Col } from 'antd';

export default function App() {
  return (
    <div>
      <Row>
        <Col span={8}>col-11</Col>
        <Col offset={8} span={8}>col-12</Col>
      </Row>
    </div>
  )
}
