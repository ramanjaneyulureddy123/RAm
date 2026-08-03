import React, { useState } from 'react'

function Binding() {
    let [name,setName]=useState("")
    const handleChange=(e)=>{
        setName(e.target.value)
        console.log("typed value:", e.target.value)
        console.log("current state:", name)
    }
//     const handleClick = () => {
//   console.log("Button clicked!");
// };
// ------
const handleClick=(name)=>{
  console.log( "hello", {name})
}
  return (
    <div>
        {/* <button onClick={handleClick}>Click Me</button> */}
                <button onClick={()=>handleClick("john")}>Click Me</button>

      <input 
      type="text"
      value={name}
    //   onChange={(e)=>setName(e.target.value)}
    onChange={handleChange}
      placeholder='enter the name'/>
      <p >hello{name}</p>
    </div>
  )
}

export default Binding
// 