import axios from 'axios'
import { useState } from 'react'



function Delete() {
       const [msg, setMsg]=useState("")

    const handleClick=()=>{
      axios.delete(`https://jsonplaceholder.typicode.com/users/1`)
      .then(()=>{
        setMsg("delete success")
        // console.log(res.data)
            // console.log(res.status)   
      })
      .catch(()=>{
        setMsg("delete filed")
      })
    }
  return (
    <div>
       <div>
        <h3>{msg}</h3>
      <button onClick={handleClick}>Delete User</button>
      
    </div>
    </div>
  )
}

export default Delete
