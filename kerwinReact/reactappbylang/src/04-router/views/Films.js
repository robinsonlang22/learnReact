import React from 'react'
import {Route} from 'react-router-dom'
import NowPlaying from './films/nowplaying'
import ComingSoon from './films/comingsoon'

export default function Films() {
  return (
    <div>
      Filmcomponent
      {/* 路由嵌套 */}
      <Route path="/films/nowplaying" component={NowPlaying}></Route>
      <Route path="/films/comingsoon" component={ComingSoon}></Route>
    </div>
  )
}

