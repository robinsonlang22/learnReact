import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

const GlobalContext = React.createContext()

export default function App() {

  const [filmList, setfilmList] = useState([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    axios.get("/test.json").then(res => {
      setfilmList(res.data)
    })
  }, [])

  return (
    <GlobalContext.Provider value={{
      title:title,
      changeTitle:(value)=>{setTitle(value)},
    }

    }>
      <div>
        <ul>
          {filmList.map(item => <FilmItem key={item.id} {...item} />)}
        </ul>
        <FilmDetail />
      </div>
    </GlobalContext.Provider>
  )
}

function FilmItem(props) {
  const value = useContext(GlobalContext) 
  return (
    <div className='film-item' onClick={()=>{value.changeTitle(props.title)}}>
      <li>{props.title}</li>
    </div>
  )
}

function FilmDetail() {
  const value = useContext(GlobalContext)
  return (
    <div className='film-detail'>FilmDetail: {value.title}</div>
  )
}

