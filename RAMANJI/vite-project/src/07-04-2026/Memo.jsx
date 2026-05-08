import React, { useState } from 'react'


const C=React.memo((props)=>{
console.log("rendered")
//  return <h2>Child Component</h2>;
})


function Memo() {
  let [count, setCount]=useState(0);

  return (
    <div>
      <h1>count{count}</h1>
      <button onClick={()=>setCount(count+1)}>increment</button>
      {/* <C data={{ name: "Ravi" }}/> */}
      <C/>
    </div>
  )
}

export default Memo
