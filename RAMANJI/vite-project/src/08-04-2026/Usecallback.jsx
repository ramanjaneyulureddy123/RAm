import React, { useCallback, useState } from 'react'
import CHILD from './CHILD'

function Usecallback() {
    let [count, setCount]=useState(0)
    console.log("incre")
    const handleClick=useCallback(()=>{
        console.log("handle clicked")
    },[])


  return (
    <div>
      <h1>count{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>inc</button>
      <CHILD onClick={handleClick} value={count} />
    </div>
  )
}

export default Usecallback
