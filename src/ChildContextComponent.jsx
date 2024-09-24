import { useContext } from "react"
import { AppContext } from "./AppContext"


const ChildContCompon = ()=>{
  const {user,setUser} = useContext(AppContext)

  return (
    <div>
      <h1>Child component</h1>
      <p>user : {user}</p>
      <button onClick={()=>setUser('John doe')}>change User</button>
    </div>
  )
}

export default ChildContCompon