import { useLayoutEffect } from "react"
import { useEffect } from "react"


function UseLe(){
    useEffect(()=>{
        console.log("Message from useEffect")
    },[])
    
    useLayoutEffect(()=>{
        console.log("Message from uselayoutEffect")
    },[])
    
    return (
        <>
        <h2>Test Message</h2>
        {Array(40000).fill('').map((item,index)=>(
            <li key={index}>{Math.pow(Math.random(),10)}</li>
        ))}
        </>
    )
}



export default UseLe