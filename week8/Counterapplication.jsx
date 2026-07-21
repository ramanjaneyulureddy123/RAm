import React, { useState } from 'react'

function Counterapplication() {
    const[count, setCount]=useState(0)
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={()=>setCount(count+1)}>INC</button>
            <button onClick={()=>{
                if(count>0){
                    setCount(count-1)
                }
            }}>Dec</button>

            <button onClick={()=>setCount(0)}>Reset</button>


    </div>
  )
}

export default Counterapplication
