import React from "react"

const ChildForward = React.forwardRef((props,ref)=>{
    return <input ref={ref} type="text" placeholder="type somthing.."/>
})

export default ChildForward