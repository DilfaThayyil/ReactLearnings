import React from "react"
const MemoChild = React.memo(({name})=>{
  return (
    <div>
      <h2>From Child</h2>
      <h3>name : {name}</h3>
    </div>
  )
})

export default MemoChild