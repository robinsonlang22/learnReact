import React, { Component } from 'react'
import axios from "axios"

export default class App extends Component {

    constructor() {
        super()
        this.state = {
            Filmlist: [],
            title: ""
        }
        axios.get("/test.json").then(res => {
            console.log(res.data);
            this.setState({
                Filmlist: res.data
            })
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.Filmlist.map(item => <Filmitem key={item.id} {...item} 
                    onEvent={(value) => {
                        this.setState({
                            title: value
                        })
                    }}/>)}
                </ul>
                <FilmDetail title={this.state.title}/>
            </div>
        )
    }
}

const Filmitem = (props) => {
    let { title, year, director } = props
    return <div onClick={() => {
        props.onEvent(title)
    }}>{title}, {year}, {director}</div>
}

const FilmDetail = (props) => {
    return <div className='film-detail'>FilmDetail:{props.title}</div>
}

