import React,{useEffect, useState} from "react";
import axios from 'axios'
import Counter from "./Counter";
import fetchUser from "./useEffect";
import Child from "./Child";

function App(){

  const [data,setData] = useState('')
  return (
    <div>
      <p>Data from Child : {data}</p>
      <Child setData={setData}/>
    </div>
  )
  
}

export default App