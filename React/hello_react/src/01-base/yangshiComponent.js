import React, { Component } from 'react'
import "./css/01-index.css"

export default class yangshiComponent extends Component {
  render() {
    let myname = "Lan"
    let col = {
      background:"yellow",
      fontSize:"50px"
    }
    
    return (
      <div>
          {10+20}-{myname}
          {10>20?"aaa":"bbb"}
          <div style={col}>1111111111</div>
          <div style={{background:"red"}}>2222222222</div>
          <div class="active">33333333333333</div>
      </div>
    )
  }
}
