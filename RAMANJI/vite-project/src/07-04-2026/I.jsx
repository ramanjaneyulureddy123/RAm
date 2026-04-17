import React, { useState } from 'react'
import J from './J'

function I() {
    let [count,setCount]=useState(0)
    console.log("A component")
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>increment</button>
      <J/>
    </div>
  )
}

export default I
