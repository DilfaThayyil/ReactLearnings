import React,{useEffect, useState} from "react";
import axios from 'axios'

function App(){
  const [count,setCount] = useState(0)
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('')

  useEffect(()=>{
    if(count >= 1 && count <= 10){
      fetchUser(count)
    }else{
      setUser(null)
    }
  },[count])

  const fetchUser = async(count) =>{
    const data = await axios.get(`https://jsonplaceholder.typicode.com/users/${count}`)
  }

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