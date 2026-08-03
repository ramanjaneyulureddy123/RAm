import axios from 'axios'
import React, { useState } from 'react'

function Putm() {
      const [exist, setExist]=useState("")

    const handle=()=>{
        axios.put("https://jsonplaceholder.typicode.com/users/3",{
        
            name:exist
        })
        .then((response)=>{
            console.log(response.data)
        })
        .catch ((error)=>{
            console.log(error)
        })
    }
  return (
    <div>
      <input type="text"
 placeholder='enter'
 value={exist}
 onChange={(e)=>setExist(e.target.value)}/>
 <button onClick={handle}>submit</button>
    </div>
  )
}

export default Putm

