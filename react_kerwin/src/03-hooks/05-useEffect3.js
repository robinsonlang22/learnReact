import React, { useEffect, useState } from 'react'

function Child() {
    useEffect(() => {
        window.onresize = () => {
            console.log("resize")
        }

        const interval = setInterval(() => {
            console.log("111")
        }, 1000);

        return () => {
            console.log("child销毁")
            window.onresize = null
            clearInterval(interval)
        }
    },[])

    return <div>child</div>
}

const App = () => {
  const [showChild, setShowChild] = useState(true);

  return (
    <div>
      <button onClick={() => setShowChild(!showChild)}>
        {showChild ? 'Hide' : 'Show'} Child
      </button>
      {showChild && <Child />}
    </div>
  )
}

export default App
