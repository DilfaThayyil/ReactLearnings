import { useContext } from "react"

const useContextChild = () => {
    const value = useContext(myContext)
    return (
        <div>
            {value}
        </div>
    )
}

export default useContextChild