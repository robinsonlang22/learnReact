import { useState } from "react";

export default function App() {

    const [name,setName] = useState("xiaoLang")
    const [age,setAge] = useState(18)

    return(
        <div>
            <button onClick={()=>{
                setName("xiaoLou")
                setAge(20)
            }}>click</button>
            app-{name}-{age}
        </div>
    )

}

