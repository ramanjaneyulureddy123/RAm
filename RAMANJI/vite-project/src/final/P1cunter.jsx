import React, { useState } from 'react'

function P1cunter() {
    let [count, setCount]=useState(0)

    const increment=()=>{
        setCount(count+1)
    }

    const decrement=()=>{
        if(count>0){
            setCount(count-1)
        }
    }

    const reset=()=>{
        setCount(0)
    }
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={increment}> INC</button>
      <button onClick={decrement}>DEC</button>
      <button onClick={reset}>RESET</button>
    </div>
  )
}

export default P1cunter
