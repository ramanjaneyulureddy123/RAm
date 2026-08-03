import React, { useState } from 'react'
import C from '../18-03-2026/C'
import C1 from './C1'
import C2 from './C2'
 
function Parent() {
    
  const [count, setCount] = useState(300);
let[A,B]=(useState())
   console.log(A)
   console.log(B)
    let m=10
    function hai(k){
console.log(k)
    }
    
  return (
    <div>
         <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <C1 j={m}/>
      <C2 n={hai}/>
    </div>
  )
}

export default Parent
