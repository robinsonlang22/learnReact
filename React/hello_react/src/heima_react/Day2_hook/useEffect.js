import React, { useState } from 'react'

const URL = ""

export default function App() {
    const [list,setList] = useState([])
    useEffect(()=>{
        async function getList(){
            const res = await fetch(URL)
            const list = await res.json()
            console.log(list);
            setList(list)
        }
        getList()
    },[])
    
  return (
    <div>
      this is app
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}
