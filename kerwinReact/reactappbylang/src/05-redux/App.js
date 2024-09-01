import React from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import './views/App.css'
import store from './redux/store'
import { useState } from 'react'

export default function App() {

  const [isShow, setIsShow] = useState(true)

  store.subscribe(() => {
    let { isShow } = store.getState()
    setIsShow(isShow)
  })

  return (
    <div>
      <MRouter>
        {isShow && <Tabbar></Tabbar>}
      </MRouter>
    </div>
  )
}
