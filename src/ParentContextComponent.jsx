import { AppProvider } from "./AppContext"
import ChildComponent from './ChildContextComponent'


const ParentComponent = ()=>{
  return (
    <AppProvider>
      <h2>Parent component</h2>
      <ChildComponent/>
    </AppProvider>
  )
}

export default ParentComponent