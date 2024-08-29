import React, { Component } from 'react'

export default class App extends Component {

  state = {
    list: [{
      "id": 1,
      text: "1111"
    },
    {
      "id": 2,
      text: "2222"
    }]
  }

  render() {
    const newList = this.state.list.map(item => <li key={item.id}>{item.text}</li>)

    return (
      <div>
        <ul>
          {
            newList
          }
        </ul>
      </div>
    )
  }
}
