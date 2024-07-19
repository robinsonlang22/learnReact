import React, { Component } from 'react'

export default class App extends Component {
    a = 100;

  render() {
    return (
      <div>
            <input ref="mytext1" />
            <input ref="mytext2" />
            <button onClick={()=>{
                console.log("click1",this.refs.mytext)
            } }>add1</button>
      </div>
    )
  }
}
