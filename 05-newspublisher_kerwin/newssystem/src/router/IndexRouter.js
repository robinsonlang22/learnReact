import React from "react";
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import Login from '../views/login/Login'
import NewsSandBox from '../views/newssandbox/NewsSandBox'

export default function IndexRouter() {
  return (
    <HashRouter>
        <Switch> 
            {/* switch match only one route */}
            <Route path="/login" component={Login} />
            <Route path="/" render={() => 
                localStorage.getItem('token') ? 
                <NewsSandBox /> : 
                <Redirect to="/login" />
            } />
        </Switch>
    </HashRouter>
  )
}
