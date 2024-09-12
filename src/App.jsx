import React,{useEffect, useState} from "react";
import axios from 'axios'
import Counter from "./Counter";

function App(){
  const [count,setCount] = useState(0)
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('')

  useEffect(()=>{
    if(count>=1&&count<=10){
      fetchUser(count)
    }else{
      setUser(null)
    }
  },[count])

  const fetchUser = async (index)=>{
    setLoading(true)
    setError('')
    try{
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${index}`)
      setUser(response.data)
    }catch(err){
      setError('failed to fetch data')
    }finally{
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={()=>setCount(count+1)} disabled={count>=10}>+</button>
      <button onClick={()=>setCount(count-1)} disabled={count<=1}>-</button>
      {loading&& <p>Loading user informations...</p> }
      {error&& <p>{error}</p> }
      {user&&(
        <div>
          <h2>User informations</h2>
          <p><strong>Name: </strong>{user.name}</p>
          <p><strong>Email: </strong>{user.email}</p>
          <p><strong>Phone: </strong>{user.phone}</p>
          <p><strong>Website: </strong>{user.website}</p>
        </div>
      )}
    </div>
  )
}

export default App