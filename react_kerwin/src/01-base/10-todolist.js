import React, { Component } from 'react'
import { createRef } from 'react';
import './css/01-index.css'

export default class App extends Component {

    myRef = createRef()

    state = {
        list: [{ id: 1, mytext: "aaa" }, { id: 2, mytext: "bbb" }]
    }

    render() {
        return (
            <div>
                <input name="test" type='text' ref={this.myRef} />
                <button onClick={this.handleClick}>add</button>

                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={item.id}>
                                {item.mytext}
                                <button onClick={() => this.handleDelete(index)}>Del</button>
                            </li>)
                    }
                </ul>
                <div className={this.state.list.length === 0 ? '' : 'hidden'}>暂无待办事项</div>
            </div>
        )
    }

    handleClick = () => {
        let newList = [...this.state.list]

        newList.push({
            id: Math.random() * 10000,
            mytext: this.myRef.current.value
        })

        this.setState({
            list: newList
        })

        this.myRef.current.value = ""

    }

    handleDelete = (index) => {
        let newList = [...this.state.list]

        newList.splice(index, 1)

        this.setState({
            list: newList
        })
    }

}