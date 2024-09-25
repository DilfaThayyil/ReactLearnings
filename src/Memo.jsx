import React from 'react'

function Memo({a}) {
  return (
    <div>
      <h2>React.memo</h2>
      <h3>From child</h3>
    </div>
  )
}

const memmmo=React.memo(Memo)
export default memmmo