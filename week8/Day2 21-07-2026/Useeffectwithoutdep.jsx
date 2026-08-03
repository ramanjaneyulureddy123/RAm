import React, { useEffect, useState } from 'react'

function Useeffectwithoutdep() {
  const [state, setState]=useState(0)

  // no dependency --every time render
  // empty dependency[]-- only once render 
  // with dependency [count] state changes output also  render


    useEffect(()=>{
        console.log("it is without dependency useeffect")
    },[])
  return (
    <div>
      {/* <h1>Hello</h1> */}
      <h1>{state}</h1>
      <button onClick={()=>setState(state+1)}>click</button>
    </div>
  )
}

export default Useeffectwithoutdep

