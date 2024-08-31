import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Login() {
    const history = useHistory()
    function handleLogin() {
        localStorage.setItem('token', '123')
        history.push('/center')
    }

    return (
        <div>
            <h1>登录页面</h1>
            <input type="text" />
            <button onClick={handleLogin}>登录</button>
        </div>
    )
}
