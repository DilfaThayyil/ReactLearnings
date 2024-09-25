import { useState } from "react";
import MemoChild from "./MemoChild";


const MemoParent = ()=>{
    const [name,setName] = useState('Parent')
    const [count,setCount] = useState(0)

    return (
        <div>
            <MemoChild name={name}/>
            <h2>From Parent</h2>
            <button onClick={()=>setName(name === 'Parent'?'Child':'Parent')}>Change Name</button>
            <h3>count : {count}</h3>
            <button onClick={()=>setCount(count+1)}>Increase</button>
            <button onClick={()=>setCount(count-1)}>Decrease</button>
        </div>
    )
}

export default MemoParent