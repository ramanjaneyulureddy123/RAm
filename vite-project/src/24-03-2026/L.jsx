import React, { useState } from 'react'

function L() {
    let[A,seta]=useState({
        name:"anji",
        city:"hyberabad"
    })

    console.log(A)
    let set=()=>{
        seta({
            ...A,
        city:"banglore"
        })
    }
  return (
    <div>
      <h1>{A.name}</h1>
            <h1>{A.city}</h1>

            <h1>A</h1>
            {/* <button onClick={()=>seta(A+1)}>click</button> */}
                        <button onClick={set}>click</button>


    </div>
  )
}

export default L
