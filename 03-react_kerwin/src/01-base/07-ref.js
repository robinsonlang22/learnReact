import React, { Component } from 'react'
import { createRef } from 'react';

export default class App extends Component {
  
  myRef = createRef()

  render() {
    return (
      <div>
        <input name="test" type='text' ref={this.myRef}/>
        <button onClick={() => {
          console.log("click1", this.myRef.current.value)
        }}>add</button>
      </div>
    )
  }
}
