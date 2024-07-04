import React, { Component } from 'react'

export default class App extends Component {

  a = 100;
  
  render() {
    return (
      <div>
        <input type="text" />
        <button onClick={() => {
          console.log("click1");
        }
        }>add</button>
        <input type="text" />
        <button onClick={this.handleClick}>add2</button>
      </div>
    )
  }

  handleClick = () => {
    console.log("click2");
  }
}

