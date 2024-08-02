import React, { useState } from 'react'

//son to father
//核心： 在子组件中调用父组件中的函数并传递实参
function Son({onGetSonMsg}) {
    const sonMsg = "this is son msg"
    return(
        <button onClick={() => onGetSonMsg(sonMsg)}>sendMsg</button>
    )
}

export default function App() {
    const [msg,setMsg] = useState("")
    const getMsg = (msg)=>{
        console.log(msg);
        setMsg(msg)
    }

  return (
    <div>
      this is app, {msg}
      <Son onGetSonMsg={getMsg} />
    </div>
  )
}
