import React from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import NotFound from '../views/NotFound'
import Details from '../views/Details'

export default function MRouter(props) {
    return (
        <div>
            <HashRouter>
                {props.children}
                <Switch>
                    <Route path="/films" component={Films}></Route>
                    <Route path="/cinemas" component={Cinemas}></Route>
                    <Route path="/center" component={Center}></Route>
                    <Route path="/details/:filmId" component={Details}></Route>
                    <Redirect from="/" to="/films" exact></Redirect>
                    <Route component={NotFound}></Route>
                </Switch>
            </HashRouter>
        </div>
    )
}