import { useRef } from "react";
import ChildForward from "./ChildForward";

const ParentForward = ()=>{
    const inputRef = useRef(null)

    const handleClick = ()=>{
        inputRef.current.focus()
    }

    return (
        <div>
            <ChildForward ref={inputRef}/>
            <button onClick={handleClick}>Focus input</button>
        </div>
    )
}


export default ParentForward