function withAuthCheck (WrappedComponent){
    return function (props){
        const isAuthenticated = checkAuth()

        if(!isAuthenticated){
            return <div>You need to log in !</div>
        }

        return <WrappedComponent {...props}/>
    }
}

function Dashboard (){
    return <div>Dashboard</div>
}

const ProtectedDashboard = withAuthCheck(Dashboard)
