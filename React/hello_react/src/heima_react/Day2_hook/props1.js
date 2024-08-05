import React from 'react'


// father to son
function Son(props){
    console.log(props);
    return(
        <div>this is son, {props.age}</div>
    )
}

function Son1(props) {
    console.log(props);
    return <div>look, {props.children}</div>
}

export default function App() {
    const name = "this is app name"
  return (
    <div>
      <Son 
      name={name}
      age={18}
      cb={() => console.log(123)}
      />
      <Son1>
        <span>this is span</span>
      </Son1>
    </div>
  )
}

