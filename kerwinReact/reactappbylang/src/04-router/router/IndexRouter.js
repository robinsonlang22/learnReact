import React from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import NotFound from '../views/NotFound'

export default function MRouter() {
    return (
        <div>
            <HashRouter>
                <Switch>
                    <Route path="/films" component={Films}></Route>
                    {/* <Route path="/films/nowplaying" component={NowPlaying}></Route> */}
                    <Route path="/cinemas" component={Cinemas}></Route>
                    <Route path="/center" component={Center}></Route>
                    <Redirect from="/" to="/films" exact></Redirect>
                    <Route component={NotFound}></Route>
                </Switch>
            </HashRouter>
        </div>
    )
}