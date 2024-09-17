import React,{useCallback, useEffect, useMemo, useState} from "react";
import axios from 'axios'
import Counter from "./Counter";
import fetchUser from "./useEffect";
import Child from "./Child";
import Parent from "./Parent";
import Memo from "./Memo";
import UseContextParent from "./useContextParent";
import Counterr from "./useCallback";
import ReducerFunction from "./useReducer";

function App(){
  return (
  <>
    <ReducerFunction/>
  </>
  )
  
}
export default App