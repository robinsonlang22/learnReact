import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import NowPlaying from './films/nowplaying'
import ComingSoon from './films/comingsoon'

export default function Films() {
  return (
    <div>
      <div>
        <span>正在热映</span>
        <span>即将上映</span>
      </div>
      {/* 路由嵌套 */}
      <Switch>
        {/* 匹配到一个就break */}
        <Route path="/films/nowplaying" component={NowPlaying}></Route>
        <Route path="/films/comingsoon" component={ComingSoon}></Route>
        <Redirect from="/films" to="/films/nowplaying" exact></Redirect>
      </Switch>
    </div>
  )
}

