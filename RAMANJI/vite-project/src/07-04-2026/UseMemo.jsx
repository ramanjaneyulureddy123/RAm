import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [count, setCount]=useState(0)

    const doubled=useMemo(()=>{
console.log("calculate doubled")
return count *2 ;
    },[count])
  return (
    <div>
      <h1>{count}count</h1>
      
      <h2>{doubled}doubled</h2>
      <button onClick={()=>setCount(count+1)}>increment</button>
      
    </div>
  )
}

export default UseMemo

