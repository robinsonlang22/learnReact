import React, { useState } from 'react'

export default function App() {

  const [text, settext] = useState("")
  const [list, setlist] = useState(["aa", "bb", "cc"])

  const handleChange = (evt) => {

    settext(evt.target.value)
  }

  const handleAdd = () => {
    console.log(text);
    setlist([...list, text]);
    settext("")
  }

  const handleDelete = (index) => {
    const newList = [...list]
    newList.splice(index, 1)
    setlist(newList)
  }

  return (
    <div>
      <input onChange={handleChange} value={text} />
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

