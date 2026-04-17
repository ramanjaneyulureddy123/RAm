import axios from 'axios'
import React, { useState } from 'react'

function Put() {
    // const [name, setName] = useState("")
const handleUpdate=()=>{
    axios.put("https://jsonplaceholder.typicode.com/users/1",{
        name:"vijay"
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
        {/* <h2>Update User</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /> */}

      <button onClick={handleUpdate}>click</button>
    </div>
  )
}

export default Put
