import React,{useCallback, useEffect, useMemo, useState} from "react";
import ThemeContext from "./MyContext";
import UseLe from "./useLayoutEffect";
import ParentComponent from "./ParentContextComponent";

function App({children}){
  return (
    <div>
      <ParentComponent/>
    </div>
  )
  
}
export default App