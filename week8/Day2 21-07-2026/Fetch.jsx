import React, { useEffect, useState } from 'react'

function Fetch() {
    const [users, setUsers]=useState([])

    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((data)=>{
        setUsers(data)
    })
    .catch((error)=>{
        console.log(error)
    })
    },[])

  return (
    <div>
      <h1>Users List</h1>
      {users.map((user)=>(
        <ul key={user.id}>
            <li >
{user.name}
            </li>
        </ul>
      ))}
    </div>
  )
}

export default Fetch


