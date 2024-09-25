import { useEffect, useState } from "react";
import axios from "axios";

function AxiosComponent (){
    const [data,setData] = useState([])
    const [error,setError] = useState(null)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response =>{
            setData(response.data)
        }).catch(error =>{
            setError(error)
        })
    },[])

    if(error)return <div>Error : {error.message}</div>
    return(
        <div>
            {data.map(post => {
                <div key={post.id}>{post.title}</div>
            })}
        </div>
    )
}

export default AxiosComponent