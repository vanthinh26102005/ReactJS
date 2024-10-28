// useEffect
/*
    1. Update state
    2. Update Dom (mutated)
    3. render UI again
    4. call cleanup func if deps change
    5. call useEffect callback
*/

// useLayoutEffect
/*
    1. Update state
    2. Update Dom (mutated)
    3. call cleanup func if deps change (sync)
    4. call useLayoutEffect callback (sync)
    5. render UI again
     
*/
import { Fragment, useEffect, useLayoutEffect, useState } from "react"

function Content() {

    const [count, setCount]  = useState(0)
    useLayoutEffect(() => {
        if(count > 3) 
            setCount(0)
    }, [count])
    const handleRun = () => {
        setCount(count +1)
    }

    return (
        <div>
           <h1> {count} </h1>
           <button onClick={handleRun}> Run </button>
        </div >
    )
}

export default Content


