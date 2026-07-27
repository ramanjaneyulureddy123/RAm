import React, { useState } from 'react'
import UseShallow from './UseShallow'

function Shallowcomparision() {
    const [count, setCount] = useState(0)


    const user= React.useMemo(()=>{
        return{
            name:"john"
    }
},[])
  return (
    <div>
        <UseShallow  user={user}/>
      <h3>Count: {count}</h3>


      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  )
}

export default Shallowcomparision
