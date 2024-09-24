import React, { Component } from 'react'
import Navbar from './navbar/index'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="首页" leftshow={false}/>
      </div>
    )
  }
}
