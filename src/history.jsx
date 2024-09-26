import {useHistory} from 'react-router-dom'

const Navigating = ()=>{
    const history = useHistory()
    const handleLogin = ()=>{
        history.replace('/dashboard')
    }
    const goToSettings = ()=>{
        history.push('/settings')
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={goToSettings}>Settings</button>
        </div>
    )
}

export default Navigating