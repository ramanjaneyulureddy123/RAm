import React, { useMemo, useState } from 'react'

function Usememo() {
    let [a,setA]=useState(0)
    let [text,setText]=useState("")

    const result = useMemo(()=>{
        console.log("usemeo");
        return a *2;
    },[a])
  return (
    <div>
     <h1>{a}</h1>
    
      <button onClick={()=>setA(a+1)}>click</button>
       <input
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}

export default Usememo
