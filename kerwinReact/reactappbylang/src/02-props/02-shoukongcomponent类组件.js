import React, { Component } from 'react'
import './css/maizuo.css'
import Film from './maizuocomponent/Film'
import Cinema from './maizuocomponent/Cinema'
import Center from './maizuocomponent/Center'
import Tabbar from './maizuocomponent/Tabbar'
import Navbar from './maizuocomponent/Navbar'

export default class App extends Component {

    state = {
        list: [{ id: 1, text: "film" }, { id: 2, text: "cinema" }, { id: 3, text: "center" }],
        current: 0,
    }

    which() {
        switch (this.state.current) {
            case 0:
                return <Film></Film>
            case 1:
                return <Cinema></Cinema>
            case 2:
                return <Center></Center>
            default:
                return null
        }
    }


    render() {
        return (
            <div>
                <Navbar event={() => {
                    this.setState({
                        current: 2
                    })
                }} />

                {
                    this.which()
                }

                <Tabbar event={(index) => {
                    this.setState({
                        current: index
                    })
                }} current={this.state.current} list={this.state.list} />

            </div>
        )
    }
}




