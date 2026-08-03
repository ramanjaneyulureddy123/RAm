import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

function Red() {
    let data=useSelector((state)=>{
        return state.sum
    })

    let d=useDispatch()
    console.log(data)
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={()=>{d({type:"a"})}}> inc</button>
            <button onClick={()=>{d({type:"b"})}}> inc</button>

    </div>
  )
}

export default Red
