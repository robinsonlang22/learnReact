import React, { useEffect, useState } from 'react'

export default function App() {

    const [name, setname] = useState("xiaozhu")

    useEffect(()=>{
        setname(name.substring(0,1).toUpperCase()+name.substring(1))
    },[name])

  return (
    <div>
      app - {name}

      <button onClick={() =>{
        setname("xiaoming")
      }}>click</button>
    </div>
  )
}


