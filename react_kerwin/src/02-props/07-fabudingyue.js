import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}

let bus = {
    list: [],
    subscribe(callback) {
        this.list.push(callback)
    },

    publish() {
        this.list.forEach(callback => {
            callback && callback()
        })
    }
}

bus.subscribe(() => { console.log("订阅了") })
bus.subscribe(() => { console.log("222222222") })

setTimeout(() => {
    bus.publish()
}, 0)

setTimeout(() => {
    bus.publish()
}, 1000)

