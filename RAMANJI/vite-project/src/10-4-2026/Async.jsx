import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Async() {
    let [users, setUsers]=useState([])
    const fetchusers=async()=>{
        try{
            const response=await axios.get("https://jsonplaceholder.typicode.com/users")
            setUsers(response.data)
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchusers()
    },[])
  return (
    <div>
      <h2> userList</h2>
       <ul>
      {users.map((user)=>(
       
<li key={user.id}> {user.name}</li>

      ))}
      </ul>
     
    </div>
  )
}

export default Async
