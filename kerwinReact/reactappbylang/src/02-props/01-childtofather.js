import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div style={{ background: 'red',width:200 }}>
                <button onClick={this.props.event}>click</button>
                <span>navbar</span>
            </div>
        )
    }
}

class Sidebar extends Component {
    render() {
        return (
            <div style={{ background: 'yellow',width:200 }}>
                <span>sidebar</span>
                <ul>
                    <li>11111</li>
                    <li>22222</li>
                    <li>33333</li>
                </ul>
            </div>
        )
    }
}

export default class App extends Component {
    state = {
        isShow:false
    }

    render() {
        return (
            <div>
                <Navbar event={this.handleClick}/>
                {this.state.isShow && <Sidebar />}
            </div>
        )
    }

    handleClick = ()=>{
        this.setState({
            isShow:!this.state.isShow
        })
    }
}
