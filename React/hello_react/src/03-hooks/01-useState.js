import { useEffect, useState } from "react";

export default function App() {

    const [name,setName] = useState("xiaoLang")

    return(
        <div>
            <button onClick={()=>{
                setName("xiaoLou")
            }}>click</button>
            app-{name}
        </div>
    )

}

