import React, { useState } from 'react'
import PReact from './PReact'

function UsePReact() {
    const [count, setCount]=useState(0)
  return (
    <div>
      
      <button onClick={()=>setCount(count+1)}>Count:{count}</button>
    <PReact  name="john" />
    
    </div>
  )
}

export default UsePReact
