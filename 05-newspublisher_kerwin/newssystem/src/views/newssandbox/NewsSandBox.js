import React from 'react'
import SideMenu from '../../components/SideMenu'
import TopHeader from '../../components/TopHeader'
import Home from './home/Home'
import UserList from './user-manage/UserList'
import RoleList from './right-manage/RoleList'
import RightList from './right-manage/RightList'
import NoPermission from './nopermission/NoPermission'
import {Switch, Route, Redirect} from 'react-router-dom'
import './newssandbox.css'
import {Layout} from 'antd'
const {Content} = Layout


export default function sandbox() {
  return (
    <Layout style={{
      minHeight: '100vh',
    }}>
      <SideMenu />
      <Layout className="site-layout">
        <TopHeader />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/user-manage/list" component={UserList} />
            <Route path="/right-manage/role/list" component={RoleList} />
            <Route path="/right-manage/right/list" component={RightList} />
            <Redirect from="/" to="/home" exact/>
            <Route path="*" component={NoPermission} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  )
}
