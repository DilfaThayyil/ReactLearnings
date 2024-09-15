import React,{useCallback, useEffect, useMemo, useState} from "react";
import axios from 'axios'
import Counter from "./Counter";
import fetchUser from "./useEffect";
import Child from "./Child";
import Parent from "./Parent";
import Memo from "./Memo";

function App(){
  console.log('from parent')
  const [count,setCount]=useState(0)
  
  const set = useCallback(()=>{
    
     a:1
    
  },[])
  
  return (
    <>
    <button onClick={()=>setCount(count+1)}>+</button>
    <p>{count}</p>
      <Memo a={set}/>
      <button onClick={()=>setSet(!set)}>{set?'True':'false'}</button>
    </>
  )
  
}

export default App