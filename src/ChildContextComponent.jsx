import {AppContext} from './AppContext'
import {useContext} from 'react'

const ChildComponent = ()=>{

  const {user,setUser} = useContext(AppContext)

  return (
    <div>
      <h2>Child component</h2>
      <p>user : {user}</p>
      <button onClick={()=>setUser('Daisy jacob')}>Change User</button>
    </div>
  )
}

export default ChildComponent