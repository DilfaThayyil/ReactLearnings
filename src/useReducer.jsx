import { useState } from "react";


function ReducerFunction(){
    const [count,setCount] = useState(0)

    return (
        <>
        <h1>{count}</h1>
        <button onClick={()=>setCount(prev => prev + 1)}>Increment</button>
        <button onClick={()=>setCount(prev => prev - 1)}>Decrement</button>
        </>
    )
}

export default ReducerFunction