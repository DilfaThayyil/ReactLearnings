import React,{useState} from "react";

function userAuthentication(){


    const [isLogged,setIsLogged] = useState(false)
    const handleLogin = ()=>setIsLogged(true)
    const handleLogout = ()=>setIsLogged(false)

    return (
        <div>
            {isLogged?(
                <div>
                    <h1>Welcome, User!</h1>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ):(
                <div>
                    <h1>Please login</h1>
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
        </div>
    )
}

export default userAuthentication