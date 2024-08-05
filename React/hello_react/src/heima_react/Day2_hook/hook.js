import React, { useState } from 'react'

function useToggle(){
    const [value, setValue] = useState(true)
    const toggle = () => setValue(!value)

    return{
        value,
        toggle
    }
}

export default function App() {
    const {value, toggle} = useToggle()

  return (
    <div>
        {value && <div>this is div</div>}
      <button onClick={toggle}>toogle</button>
    </div>
  )
}
