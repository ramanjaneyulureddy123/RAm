import React, { useState } from 'react'

function GetRequest() {

    const [users, setUsers]=useState([])

    const getUsers=()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((data)=>setUsers(data))
    }
  return (
    <div>
      <h2>Fetch api examples and get data</h2>
      <button onClick={getUsers}>GetUsers</button>

      <ul>
        {users.map((user)=>(
            <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default GetRequest
