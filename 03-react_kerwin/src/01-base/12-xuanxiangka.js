import React, { Component } from 'react'
import './css/maizuo.css'
import Film from './maizuocomponent/Film'
import Cinema from './maizuocomponent/Cinema'
import Center from './maizuocomponent/Center'

export default class App extends Component {
    
    state = {
        list: [{ id: 1, text: "film" }, { id: 2, text: "cinema" }, { id: 3, text: "center" }],
        current: 0,
    }

    which(){
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
                {
                    this.which()
                }

                <ul>
                    {
                        this.state.list.map((item,index) => 
                        <li key={item.id} className={this.state.current===index?'active':''}
                        onClick={()=>this.handleClick(index)}>{item.text}</li>
                        )
                    }
                </ul>
            </div>
        )
    }

    handleClick(index) {
        console.log(index);

        this.setState({
            current:index
        })
    }
}




