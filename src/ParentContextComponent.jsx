import { AppProvider } from "./AppContext"


const ParentComponent = ()=>{
    return (
        <AppProvider>
            <div>
                <h1>Parent Component</h1>
                <></>
            </div>
        </AppProvider>
    )
}

export default ParentComponent