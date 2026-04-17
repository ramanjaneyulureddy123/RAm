import React, { useContext } from 'react'
import { context } from './Z'


function Y() {
    const {a,seta}=useContext(context)
  return (
    <div>
        <h1>{a}</h1>
      <button onClick={()=>seta(a+1)}>click</button>
      
    </div>
  )
}

export default Y
