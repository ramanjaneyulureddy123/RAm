import React, { createContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setName } from './slice'
import Y from './Y'

function X() {

    let data=useSelector((state)=>
       state.form.name
    )
      let dispatch=useDispatch()
    // console.log(data)
  return (
    <div>
   
      <input 
      value={data}
      onChange={(e)=>dispatch(setName(e.target.value))}
      placeholder='enter name'/>
      
        <h1>name:{data}</h1>
      
    </div>
  )
}

export default X
