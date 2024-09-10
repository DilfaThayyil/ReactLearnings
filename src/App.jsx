import React,{useState} from "react";
import ChildComponent from "./ChildComponent";

function App(){
  const [count,setCount] = useState(0)

  function handleIncrement(){
    setCount(count+1)
  }
  function handleDecrement(){
    setCount(count-1)
  }
  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default App