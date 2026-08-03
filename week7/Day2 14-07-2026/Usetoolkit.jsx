import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Reduxtoolkit'

function Usetoolkit() {
    let data=useSelector((state)=>{
        return state.counter.value
    })

    let dispatch =useDispatch()
    console.log(data)
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={()=>dispatch(increment())}>INC</button>
         <button onClick={()=>dispatch(decrement())}>INC</button>

    </div>
  )
}

export default Usetoolkit
