import React from 'react'

function C2({senddata}) {
    let a=9000
    
  return (
    <div>
      <button onClick={()=>senddata(a)}>send 9000</button>
    </div>
  )
}

export default C2
