import React, { useContext } from 'react'
import { context } from './A1'

function C1() {
    // let [a,seta]=useContext(context)
     let { a, seta } = useContext(context)
    // console.log(d)

  return (
    <div>

      {/* <h1>A{d}</h1> */}
      <button onClick={()=>{seta(a+1)}}>click</button>
            <h3>{a}</h3>

    </div>
  )
}

export default C1
