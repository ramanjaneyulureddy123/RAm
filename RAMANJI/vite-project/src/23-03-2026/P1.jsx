import React, { useState,useEffect } from 'react'
import C1 from './C1'
import C2 from "./C2"

function P1() {
    const [message, setmessage]=useState("hello world")
    const [count,setcount]=useState(0)
 useEffect(() => {
    document.title = `Count: ${count}`;
      console.log(count)

  }, [count]);
  return (
    
    <div>
      {/* <C1 data={message}/>
      <C2 senddata={setmessage}/> */}

      {/* <h1>{count}</h1>
      <button onClick={()=>setcount(count+1)}>increase</button> */}
      <button onClick={() => setcount(count + 1)}>
  Clicked {count} times
</button>
    </div>
  )
}

export default P1
