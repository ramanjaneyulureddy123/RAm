import React, { useContext } from 'react'
import { context } from './Global'

function G2() {
    let {a,setA}=useContext(context)

  return (
    <div>
        <button onClick={()=>{setA(a-1)}}>click dec</button>
        <h2>{a}</h2>
    </div>
  )
}

export default G2
