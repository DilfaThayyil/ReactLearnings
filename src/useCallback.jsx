import { useCallback, useState } from "react";

const [count,setCount] = useState(0)

const increment = useCallback(()=>{
    setCount(count => count+1)
},[count])

export default increment