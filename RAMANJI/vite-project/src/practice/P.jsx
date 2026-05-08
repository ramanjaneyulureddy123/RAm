import React, { useState } from 'react'
import Child1 from './Child1'

function P() {
    function getdata(z){
        console.log(z)
    }
    let name="ravi"
   let[A,B]=(useState())
   console.log(A)
   console.log(B)
  return (
    <div>
      {/* <Child1 user={name}/> */}
      <Child1 send={getdata}/>
    </div>
  )
}

export default P
