import React, { Component } from 'react'

class Field extends Component {

    state = {
        value: ''
    }

    clear() {
        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <div style={{ backgroundColor: 'lightblue', width: '300px', padding: '5px' }}>
                <label>{this.props.label}</label>
                <input type={this.props.type} onChange={(evt) => {
                    this.setState({
                        value: evt.target.value
                    })
                }} value={this.state.value} />
            </div>
        )
    }
}

export default class App extends Component {

    usernameRef = React.createRef();
    passwordRef = React.createRef();
    render() {
        return (
            <div>
                <Field label="username" type="text" ref={this.usernameRef} />
                <Field label="password" type="password" ref={this.passwordRef} />
                <button onClick={() => {
                    console.log(this.usernameRef.current.state.value,
                        this.passwordRef.current.state.value);
                }}>login</button>
                <button onClick={() => {
                    this.usernameRef.current.clear();
                    this.passwordRef.current.clear();
                }}>cancle</button>
            </div>
        )
    }
}
