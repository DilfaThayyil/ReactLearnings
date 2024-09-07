import React,{useState} from "react";

function Counter(){
    
    const [count,setCount] = useState(0)

    const increment = ()=>{
        if(count<10){
            setCount(count+1)
        }
    }
    const decrement = ()=>{
        if(count>0){
            setCount(count-1)
        }
    }
    

    return (
        <div>
            <button onClick={increment}>Increment</button>
            <h1>{count}</h1>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter

