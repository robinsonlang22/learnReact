import React, { Component } from 'react'

class Child extends Component{
    render(){
        return <div>Child</div>
    }
}

//类组件
class Navbar extends Component{
    render(){
        return <div>Navbar
            <Child></Child>
        </div>
    }
}

//函数组件
function Swiper(){
    return <div>Swiper</div>
}

//箭头函数组件
const Tabbar = ()=> <div>Tabbar</div>

export default class App extends Component {
  render() {
    return (
      <div>
            <Navbar></Navbar>
            <Swiper></Swiper>
            <Tabbar></Tabbar>
      </div>
    )
  }
}
