import { useState } from "react"
import { AppContext } from "./AppContext"

const ChildComponent = ()=>{

    const [user,setUser] = useState(AppContext)

    return (
        <div>
            <h1>Child Component</h1>
            <h2>user : {user}</h2>
            <button onClick={()=>setUser('John Doe')}>Click me</button>
        </div>
    )
}

export default ChildComponent