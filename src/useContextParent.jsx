import React, { createContext, useContext } from "react";


const MyContext = createContext()

const useContextParent = ()=>{
    const contextvalue = "Hello from context"
    return (
        <MyContext.Provider value={contextvalue}>
            <UseContextChild/>
        </MyContext.Provider>
    )
}

const UseContextChild = ()=>{
    const value = useContext(MyContext)
    return (
        <>
        {value}
        </>
    )
}

export default useContextParent