import UseContextChild from "./useContextChild";
import React, { createContext } from "react";


const MyContext = createContext()

const useContextParent = ()=>{
    const contextvalue = "Hello from context"
    return (
        <MyContext.Provider value={contextvalue}>
            <UseContextChild/>
        </MyContext.Provider>
    )
}

export default useContextParent