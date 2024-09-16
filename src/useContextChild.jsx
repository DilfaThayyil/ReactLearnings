import { useContext } from "react";
import MyContext from "./MyContext";


const ChildContext = ()=>{
    const value = useContext(MyContext)
    return (
        <div>
            {value}
        </div>
    )
}

export default ChildContext