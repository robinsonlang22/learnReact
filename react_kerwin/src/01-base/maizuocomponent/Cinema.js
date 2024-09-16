import React, { Component } from 'react'
import axios from 'axios'

export default class Cinema extends Component {

    constructor(){
        super()
        axios.get().then(res=>{console.log(res);}).catch(err=>{console.log("err");})
    }
    
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
