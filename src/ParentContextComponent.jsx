import ChildContCompon from "./ChildContextComponent"
import { AppProvider } from "./AppContext"

const ParentContCompon = ()=>{

  return (
    <AppProvider>
      <div>
        <h1>Parent Component</h1>
        <ChildContCompon/>
      </div>
    </AppProvider>
  )
}

export default ParentContCompon