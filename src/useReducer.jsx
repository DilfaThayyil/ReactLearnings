import { useReducer } from "react"

 function ReducerFunction (){
    const initialState = {count:0}

    const reducer = ((state,action)=>{
        switch(action.type){
            case 'increment':{
                return {count:state.count+1}
            }
            case 'decrement':{
                return {count:state.count-1}
            }
            default :{
                return state
            }
        }
    })

    const [state,dispatch] = useReducer(reducer,initialState)

    return (
        <>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
        <button onClick={()=>dispatch({type: 'decrement'})}>Decrement</button>
        </>
    )
 }

 export default ReducerFunction