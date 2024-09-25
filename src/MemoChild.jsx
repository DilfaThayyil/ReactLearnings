import React from 'react'

function Memo({a}) {
  return (
    <div>
      <h2>React.memo</h2>
      <h3>From child : {a}</h3>
    </div>
  )
}

const Memmmo=React.memo(Memo)
export default Memmmo