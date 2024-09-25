import { useRef } from "react"

const InputRef = ()=>{
    const inputRef = useRef(null)

    const handleClick = ()=>{
        inputRef.current.focus()
    }

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="focus Me !!"/>
            <button onClick={handleClick}>Focus</button>
        </div>
    )
}

export default InputRef