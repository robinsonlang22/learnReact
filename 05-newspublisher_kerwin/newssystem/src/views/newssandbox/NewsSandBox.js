import React from 'react'
import SideMenu from '../../components/SideMenu'
import TopHeader from '../../components/TopHeader'
import Home from './home/Home'
import UserList from './user-manage/UserList'
import RoleList from './right-manage/RoleList'
import RightList from './right-manage/RightList'
import NoPermission from './nopermission/NoPermission'
import {Switch, Route, Redirect} from 'react-router-dom'

export default function sandbox() {
  return (
    <div>
      <SideMenu />  
      <TopHeader />

      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/user-manage/list" component={UserList} />
        <Route path="/right-manage/role/list" component={RoleList} />
        <Route path="/right-manage/right/list" component={RightList} />
        <Redirect from="/" to="/home" exact/>
        <Route path="*" component={NoPermission} />
      </Switch>
    </div>
  )
}
