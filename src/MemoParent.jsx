import { useState } from "react";
import memmmo from "./MemoChild";

const MemoParent = ()=>{
    const [count,setCount] = useState(0)
    const [name,setName] = useState('MEmoCHild')

    return (
        <div>
            <h2>Parent Memo :{name}</h2>
            <button onClick={()=>setName(name==='MEmoCHild' ? 'MEmoPArent' : 'MEmoCHild')}>Change Name</button>
            <h2>Count : {count}</h2>
            <button onClick={()=>setCount(count+1)}>increase Count</button>
            <button onClick={()=>setCount(count-1)}>decrease Count</button>
        </div>
    )
}