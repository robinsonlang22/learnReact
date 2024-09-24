import React, { useState, useCallback } from 'react'

export default function App() {

  const [text, settext] = useState("")
  const [list, setlist] = useState(["aa", "bb", "cc"])

  const handleChange = useCallback((evt) => {
    settext(evt.target.value)
  }, [])

  const handleAdd = useCallback(() => {
    console.log(text);
    setlist((prevList) => [...prevList, text]);
    settext("")
  }, [text])

  const handleDelete = useCallback((index) => {
    setlist((prevList) => {
      const newList = [...prevList]
      newList.splice(index, 1)
      return newList
    })
  }, [])

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


