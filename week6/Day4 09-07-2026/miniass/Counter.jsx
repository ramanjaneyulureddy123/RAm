import React, { useState } from 'react'

function Counter() {
     // Local state
    const [count,setCount] = useState(0);

  return (
    <div>
      <h2>Local Counter</h2>
      <h3>{count}</h3>

      <button onClick={()=>setCount(count+1)}>inc</button>
            <button onClick={()=>setCount(count-1)}>dec</button>

    </div>
  )
}

export default Counter
