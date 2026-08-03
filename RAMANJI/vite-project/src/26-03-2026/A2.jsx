import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function A2() {
    let data=useSelector((state)=> state.sum
    )
    let d=useDispatch()
    // console.log(d)
    console.log(data)

  return (
    <div>
        <h1>data:{data}</h1>
    {/* <button onClick={()=>{d({type:"ADD"})}}>ADD</button>
        <button onClick={()=>{d({type:"SUB"})}}>SUB</button> */}



    </div>
  )
}

export default A2
