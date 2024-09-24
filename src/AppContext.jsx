import { createContext, useState } from "react";


export const AppContext = createContext()

export const AppProvider = ({children})=>{
    const [user,setUser] = useState('Dilfa')

    return (
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    )
}