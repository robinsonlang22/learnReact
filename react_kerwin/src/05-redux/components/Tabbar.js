import React from 'react'
import {NavLink} from 'react-router-dom'
import style from './tabbar.module.css'

export default function Tabbar() {
  return (
    <div className={style.tabbar}>
      <ul>
        <li>
            <NavLink to="/films" activeClassName="active"> 
                <span>电影</span>          
            </NavLink>
        </li>
        <li>
            <NavLink to="/cinemas" activeClassName="active">
                <span>影院</span>          
            </NavLink>
        </li>   
        <li>    
            <NavLink to="/center" activeClassName="active">
                <span>我的</span>          
            </NavLink>
        </li>   
      </ul>
    </div>
  )
}
