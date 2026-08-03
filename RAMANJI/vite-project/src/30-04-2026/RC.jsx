import React from 'react'

function RC({send}) {
    let name="ravi"
  return (
    <div>
      <button onClick={()=>send(name)}>click</button>
    </div>
  )
}

export default RC
