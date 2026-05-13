import React, { useState } from 'react'

function Binding() {
    // button click 
const handleClick=()=>{
    console.log("you are clicked")
}
//  form subbmit 
const handlesubmit=(e)=>{
     e.preventDefault();
    console.log("it is  submitted")
}
 
const handle=(name)=>{
    console.log("hello",{name})
}

const handclick=()=>{
    event.preventDefault()
    console.log("link clicked")
}

    const [name,setName]=useState("vijay")

    const[input, setInput]=useState("")

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={()=>setName("anji")}>change name</button>

      <input
      type="text"
      value={input}
      onChange={(e)=> setInput(e.target.value)}/>

      <h1>{input}</h1>

      <button onClick={handleClick}> please click</button>

      <form onSubmit={handlesubmit}>
        <button type="submit"> submit</button>
      </form>
<button onClick={()=>handle("john")}>
    click
</button>

<a href="https://www.google.com/?zx=1778068879043" onClick={handclick}>google</a>

    </div>
  )
}

export default Binding
