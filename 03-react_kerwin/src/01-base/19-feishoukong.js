import React, { Component, createRef } from 'react'

export default class App extends Component {

    myusername = createRef()

    render() {
        return (
            <div>
                <h1>登录页</h1>
                <input type='text' ref={this.myusername} defaultValue={'lang'} />
                <button onClick={() => { console.log(this.myusername.current.value); }}>login</button>
                <button onClick={() => { console.log(this.myusername.current.value = ''); }}>reset</button>
            </div>
        )
    }
}
