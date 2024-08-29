import React, { useReducer } from 'react'

const reducer = (state,action) =>{
    let newState = {...state}
    switch(action.type){
        case 'add':
            newState.count = state.count++
            return newState
        case 'sub':
            newState.count = state.count--
            return newState
        default:
            return state
    }
}

const initialState = {
    count:0
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <button onClick={()=>dispatch({'type':'sub'})}>-</button>
            {state.count}
            <button onClick={()=>dispatch({'type':'add'})}>+</button>
        </div>
    )
}
