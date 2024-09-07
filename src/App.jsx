import React,{useState} from "react";
import ChildComponent from "./ChildComponent";

function App(){
  const [message,setMessage] = useState("")
  const receiveMessage = (childData)=>{
    setMessage(childData)
  }

  return (
    <div>
      <h1>Message from Child:{message}</h1>
      <ChildComponent sendMessage={receiveMessage}/>
    </div>
  )
}

export default App