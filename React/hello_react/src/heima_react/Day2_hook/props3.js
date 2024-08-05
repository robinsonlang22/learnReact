import React, { createContext, useContext } from 'react'
//App -> A -> B
//1. createContext
//2. Provider
//3. useContext

const msgContext = createContext()

function A() {
    return(
        <div>
            <B />
        </div>
    )
}

function B() {
    const msg = useContext(msgContext)
    return(
        <div>
            this is B component, {msg}
        </div>
    )
}

export default function App() {
    const msg = "this is app msg"
  return (
    <div>
      <msgContext.Provider value={msg}>
        <A />
      </msgContext.Provider>
    </div>
  )
}
