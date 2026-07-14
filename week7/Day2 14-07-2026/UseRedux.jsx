import React from 'react'
import {useDispatch, useSelector} from "react-redux"
function UseRedux() {

    let data=useSelector((state)=>{
        return state.sum
    
    })
    let f=useDispatch()
    console.log(data)
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={()=>f({type:"increment",payload:1})}>increment</button>
      <button onClick={()=>f({type:"decrement",payload:1})}>decrement</button>

</div>
  )
}

export default UseRedux
