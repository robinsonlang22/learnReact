import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {

    let {title, leftshow} = this.props

    return (
      <div>
        {leftshow && <button>return</button>}
        navbar-{title}
        <button>home</button>
      </div>
    )
  }
}

