import React, { useRef } from 'react'

export default function App() {
    const inputRef = useRef(null)
    const showDom = () => {
        console.log(inputRef.current);
    }
  return (
    <div>
      <input type="text" ref={inputRef}/>
      <button onClick={showDom}>getDom</button>
    </div>
  )
}
