import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from './reducer'

function Z() {
    let data=useSelector((state)=>{
        return state.count.value
    })
   let dispatch=useDispatch()
   console.log(data)
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={()=>(dispatch(inc()))}>inc</button>
            <button onClick={()=>(dispatch(dec()))}>dec</button>

    </div>
  )
}

export default Z
// 333333333333333333