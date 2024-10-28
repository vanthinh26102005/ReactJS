import {Fragment, memo} from 'react'
function Content({onIncrease}) {
    console.log('re-render')
    return (
        <>
              <h2> HELLO WORLD~!!! </h2>
              <button onClick= {onIncrease}> Click me!!!</button>
        </>
      

    )

}
   
export default memo(Content)



import { useState, useCallback } from "react";
import Content from './Content';

// 1. memo() -> Higher Order Component (HOC)
// 2. useCallback()
  // reference types
  // React memo()

function App() {

  const [count, setCount]  = useState(0)
  const handleIncrease = useCallback(() => {
      setCount(prevCount => prevCount + 1)
  }, [])

  return (
      <div style={{padding: '10px 32px'}}>
          <Content onIncrease = {handleIncrease} />
          <h1>{count}</h1>
      </div>
  )
}
 
export default App

