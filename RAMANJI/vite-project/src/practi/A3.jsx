import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function A3() {
    const data=useSelector((state)=>{
        return state.count
    })
    console.log(data)

    const d=useDispatch()

  return (
    <div>

     <button onClick={()=>{d({type:"A"})}}>Increase</button>{data}
       <button onClick={()=>{d({type:"B"})}}>Decrease</button>
    </div>
  )
}

export default A3
