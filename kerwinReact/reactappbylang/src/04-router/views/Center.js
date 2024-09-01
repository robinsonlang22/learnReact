import React from 'react'
import { Route, Switch } from 'react-router-dom'
import FilmOrder from './FilmOrder'

export default function Center(props) {
  return (
    <div>
      Centercomponent
      <div onClick={() => props.history.push('/center/filmorder')}>电影订单</div>

      <Switch>
        <Route path="/center/filmorder" component={FilmOrder}></Route>
      </Switch>
    </div>
  )
}
