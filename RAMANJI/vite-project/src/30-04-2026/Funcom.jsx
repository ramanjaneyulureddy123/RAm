import React, { useState } from 'react'
import Rchild from './Rchild'

function Funcom() {
      let a =10

     const [count, setcount] = useState(1000)
     const [names,seta]=useState("")
       const handleChange = (e) => {
    seta(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
            {/* <h1>it is a exam {props.name} </h1> */}
          
            <h1>component {a}</h1>
            <Rchild value={a}/>
<h1>{count}</h1>

{/* <button onClick={()=>setcount(count+1)}> click me</button> */}
<button onClick={() => setcount(count + 1)}>Increment</button>
      <button onClick={() => setcount(count - 1)}>Decrement</button>

     <input onChange={handleChange} />
      <h1>{names}</h1>
    </div>
  )
}

export default Funcom
