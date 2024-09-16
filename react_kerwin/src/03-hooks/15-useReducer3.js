import React, { useReducer, useEffect, useContext } from 'react'
import axios from 'axios'

const GlobalContext = React.createContext()

const initialState = {
    title:"",
    filmList:[]
}

const reducer = (state, action) => {
    let newState = {...state}
    switch (action.type) {
        case 'changeFilmList':
            newState.filmList = action.value
            return newState
        case 'changeTitle':
            newState.title = action.value
            return newState
        default:
            return state
    }
};

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get("/test.json").then(res => {
            dispatch({type:'changeFilmList', value:res.data})
        })
    }, [])

    return (
        <GlobalContext.Provider value={{
            state,
            dispatch
        }}>
            <div>
                <ul>
                    {state.filmList.map(item => <FilmItem key={item.id} {...item} />)}
                </ul>
                <FilmDetail />
            </div>
        </GlobalContext.Provider>
    )
}

function FilmItem(props) {
    const {title} = props
    const {dispatch} = useContext(GlobalContext)
    return (
        <div className='film-item' onClick={() => { dispatch({type:'changeTitle', value:title}) }}>
            <li>{title}</li>
        </div>
    )
}

function FilmDetail() {
    const {state} = useContext(GlobalContext)
    return (
        <div className='film-detail'>FilmDetail: {state.title}</div>
    )
}

