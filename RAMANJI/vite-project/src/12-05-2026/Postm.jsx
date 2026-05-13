import axios from 'axios'
import React, { useState } from 'react'

function Postm() {
    const [name,setName]=useState('')

   
 

    const handleSubmit=()=>{
        axios.post("https://jsonplaceholder.typicode.com/users",{
            name:name
        })
        .then((res)=>{
            console.log(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div>
 


       <input 
      type="text"
      value={name}
      onChange={(e)=>setName(e.target.value)} />
      <button onClick={handleSubmit}>click me</button>
    </div>
  )
}

export default Postm
