import React, { Component } from 'react'

export default class App extends Component {

    constructor(){
        super()
        this.state = {
            mytext:"save",
            myShow: true,
            myName:"Lang"
        }
    }

  render() {
    return (
      <div>
        <h1>welcome to react - {this.state.myName}</h1>
        <button onClick={()=>{
            this.setState({
                myShow: !this.state.myShow,
                myName: "XiaoLang"
            })
        }}>{this.state.myShow?"save":"cancel save"}</button>
      </div>
    )
  }
}
