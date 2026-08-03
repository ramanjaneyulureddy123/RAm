import React, { useEffect, useState } from 'react'
import axios from "axios";
function AxiosGet() {

    const [users, setUsers]=useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            setUsers(response.data)
        })
        .catch((error)=>{
            console.log("error:", error)
        })
    },[])
  return (
    <div>
      <h2>users List</h2>
      {users.map((user)=>(
        <div key={user.id}>
<p>Name:{user.name}</p>
<p>Email:{user.email}</p>
<hr/>
        </div>
      ))}
    </div>
  )
}

export default AxiosGet
