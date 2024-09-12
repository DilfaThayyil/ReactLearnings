
function Child ({setData}){
    return (
        <button onClick={()=>setData("New Data")}>Send data</button>
    )
}

export default Child