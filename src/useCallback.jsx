import { useCallback, useState } from "react";

const Counterr = ()=> {
    const [count, setCount] = useState(0);

    const Increment = useCallback(() => {
        setCount(prevCount => prevCount + 1); 
    }, []); 

    const Decrement = useCallback(() => {
        setCount(prevCount => prevCount - 1);
    }, []);

    return (
        <div>
            <button onClick={Increment}>+</button>
            <h1>{count}</h1>
            <button onClick={Decrement}>-</button>
        </div>
    );
}

export default Counterr;
