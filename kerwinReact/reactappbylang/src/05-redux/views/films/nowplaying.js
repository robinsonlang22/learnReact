import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

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

  return (
    <div>
      <ul>
        {
          films.map(item => <FilmItem key={item.filmId} {...item} />)
        }
      </ul>
    </div>
  )
}

function FilmItem(props) {
  const history = useHistory()
  const { name, filmId } = props
  return <li onClick={() => history.push(`/details/${filmId}`)}>{name}</li>
}

