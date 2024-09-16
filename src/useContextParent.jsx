import React from "react";
import ChildContext from "./useContextChild";
import MyContext from "./MyContext";



const UseContextParent = ()=>{
    const contextvalue = "Hello from context"
    return (
        <MyContext.Provider value={contextvalue}>
            <ChildContext/>
        </MyContext.Provider>
    )
}

export default UseContextParent