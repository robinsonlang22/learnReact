import React, { useState } from 'react'

export default function App() {

    const [text, settext] = useState("")
    const [list, setlist] = useState(["aa","bb","cc"])

    const handleChange = (evt)=>{

        settext(evt.target.value)
    }

    const handleAdd = ()=>{
        console.log(text);
        setlist([...list,text]);
    }

  return (
    <div>
      <input onChange={handleChange} value={text}/>
      <button onClick={handleAdd}>add</button>
      <ul>
        {
            list.map(item=>
                <li key={item}>{item}</li>
            )
        }
      </ul>
    </div>
  )
}

