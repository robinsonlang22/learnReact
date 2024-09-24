import React, { useState, useEffect } from 'react'

const Field = (props) => {
  return (
    <div style={{ backgroundColor: 'lightblue', width: '300px', padding: '5px' }}>
      <label>{props.label}</label>
      <input type={props.type} onChange={evt => props.onChangeEvent(evt.target.value)}
      value={props.value}/>
    </div>
  )
}

export default function App() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');   

    useEffect(() => {
        setUsername(localStorage.getItem('username') || '');
        setPassword(localStorage.getItem('password') || '');
    }, []);

    return (
      <div>
        <h1>login page</h1>

        <Field label="username" type="text" onChangeEvent={value=> setUsername(value)} value={username}/>
        <Field label="password" type="password" onChangeEvent={value=> setPassword(value)} value={password}/>

        <button onClick={() => console.log(username, password)}>login</button>
        <button onClick={() => {
            setUsername('');
            setPassword('');
        }}>cancle</button>
      </div>
    )
}