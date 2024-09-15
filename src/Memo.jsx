import React from 'react'

function Memo({a}) {
    console.log('from child')
  return (
    <div>Memo</div>
  )
}

const memmmo=React.memo(Memo)
export default memmmo