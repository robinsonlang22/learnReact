import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export default function Nowplaying() {

  const [films, setFilms] = useState([])

  useEffect(() => {
    axios.get('https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=5588185', {
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"169701165652317177385000","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      setFilms(res.data.data.films)
    })
  }, [])

  const history = useHistory()

  const handleClick = (filmId) => {
    history.push(`/details/${filmId}`)
  }

  return (
    <div>
      <ul>
        {
          films.map(item => <li key={item.filmId} onClick={() => handleClick(item.filmId)}>{item.name}</li>)
        }
      </ul>
    </div>
  )
}
