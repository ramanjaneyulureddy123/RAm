import React, { useState } from 'react'
import Childmemo from './Childmemo'

function Parentmemo() {
        let [a, setA]=useState(0)
    
  return (
    <div>
        <h1>{a}</h1>
            <button onClick={()=>setA(a+1)}>click</button>
<Childmemo  name="man"/>
    </div>
  )
}

export default Parentmemo
