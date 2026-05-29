import React, { useState } from 'react'

function Hook() {
    const[count ,setCount]=useState(0)

    const [show,setShow]=useState(false)

    const increment=()=>{
        setCount(count+2)
    }

    const decrement=()=>{
        if(count>0){
            setCount(count-1)
        }
    }

    const reset =()=>{
        setCount(0)
    }

  return (
    <div>
        <h1>Count:{count}</h1>
      {/* <button onClick={()=>setCount(count+1)}>increment</button>
    <button onClick={()=>setCount(count-1)}>decrement</button> */}

<button onClick={increment}>INC</button>

<button onClick={decrement}>DEC</button>

<button onClick={reset}>RESET</button>
{/* ------------------- */}

<button onClick={()=>setShow(!show)}> 
    {show ? "show" :"hide"}
</button>
{show && <h2>hello react welcome</h2>}
    </div>
  )
}

export default Hook
