import React, { useRef } from 'react'
import Qchild from "./Qchild"
// import Sgrandchild from './Sgrandchild'
function Parent() {
const inputref=useRef()

const handleClick=()=>{
    console.log(inputref.current.value)
}
    
    const name="kumar"
  return (
    <div>
      <Qchild data={name}/>
      {/* <Sgrandchild info={name}/> */}

     < input type="text" ref={inputref} />

     <button onClick={handleClick}>submit</button>
    </div>

    
  )
}

export default Parent
