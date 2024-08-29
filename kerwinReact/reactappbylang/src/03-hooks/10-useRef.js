import React, { useState, useRef } from 'react'

export default function App() {

  const [list, setlist] = useState(["aa", "bb", "cc"])
  const mytext = useRef()

  const handleAdd = () => {
    setlist([...list, mytext.current.value]);
    mytext.current.value = ""
  }

  const handleDelete = (index) => {
    const newList = [...list]
    newList.splice(index, 1)
    setlist(newList)
  }

  return (
    <div>
      <input ref={mytext} />
      <button onClick={handleAdd}>add</button>
      <ul>
        {
          list.map((item, index) =>
            <li key={item}>{item}
              <button onClick={() => {
                handleDelete(index)
              }}>del</button>
            </li>
          )
        }
      </ul>
      {
        list.length === 0 ? <div>暂无待办事项</div> : null
      }
    </div>
  )
}

