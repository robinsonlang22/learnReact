import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {

  const [list, setList] = useState([])

  useEffect(() => {
    axios.get("/test.json").then(res => {
      console.log(res.data)
      setList(res.data)
    })
  }, [])

  return (
    <div>
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}


