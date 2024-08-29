import React, { useReducer, useContext } from 'react'

const initialState = {
    a: "11111",
    b: "11111"
}

function reducer(state, action) {
    let newState = {...state}
    switch (action.type) {
        case 'changeA':
            newState.a = action.value
            return newState
        case 'changeB':
            newState.b = action.value
            return newState
        default:
            return state
    }
}

const GlobalContext = React.createContext()

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            <div>
                <Child1 />
                <Child2 />
                <Child3 />
            </div>
        </GlobalContext.Provider>
    )
}

function Child1() {
    const { dispatch } = useContext(GlobalContext)
    return <div style={{ backgroundColor: 'red', width: '200px' }}>
        <button onClick={() => dispatch({ type: 'changeA', value: 'aaaaa' })}>changeA</button>
        <button onClick={() => dispatch({ type: 'changeB', value: 'bbbbb' })}>changeB</button>
    </div>
}

function Child2() {
    const { state } = useContext(GlobalContext)
    return <div style={{ backgroundColor: 'yellow', width: '200px' }}>Child2-{state.a}</div>
}

function Child3() {
    const { state } = useContext(GlobalContext)
    return <div style={{ backgroundColor: 'blue', width: '200px' }}>Child3-{state.b}</div>
}
