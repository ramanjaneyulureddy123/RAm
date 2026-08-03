import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Get() {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            setUsers(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
  return (
    <div>
      <h1>users list</h1>
      {users.map((user)=>(
        <p key={user.id}>
            {user.name}-{user.id}
        </p>
      ))}
    </div>
  )
}

export default Get
