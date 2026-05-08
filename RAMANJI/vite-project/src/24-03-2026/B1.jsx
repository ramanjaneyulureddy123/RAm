import React, { useContext } from 'react'
import { context } from './A1'
import U from './U'

function B1({user}) {
    console.log(user)

let {a,seta}=useContext(context)
  return (
    <div>
     <h2> ths is from B1 {a}</h2>
           <button onClick={()=>{seta(a+1)}}>click</button>
<U b={user}/>
    </div>
  )
}

export default B1
