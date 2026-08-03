import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function A() {
    let data=useSelector((state)=>{
return state.sum
    })
    let d=useDispatch()
    console.log(d)
    console.log(data)

  return (
    <div>
      <h1>data:{data}</h1>
      <button onClick={()=>{d({type:"a",payload:"10"})}}>increment</button>
            <button onClick={()=>{d({type:"b"})}}>decrement</button>

    </div>
  )
}

export default A
