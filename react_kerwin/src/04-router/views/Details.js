import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Details(props) {
    const [films, setFilms] = useState([])
    let displayId = parseInt(props.match.params.filmId)

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

    useEffect(() => {
        console.log("create")
        return () => {
            console.log("destroy")
        }
    }, [])

    return (
        <div>
            <ul>
                {
                    films.filter(item => item.filmId === displayId).map(item => (
                        <div key={item.filmId}>
                            <strong>{item.name}</strong>
                            <div style={{ width: '600px' }}>{item.synopsis}</div>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}
