import React,{useEffect, useState} from "react";
import axios from 'axios'
import Counter from "./Counter";
import fetchUser from "./useEffect";
import Child from "./Child";
import Parent from "./Parent";

function App(){

  
  return (
    <>
    <Parent/>
    </>
  )
  
}

export default App