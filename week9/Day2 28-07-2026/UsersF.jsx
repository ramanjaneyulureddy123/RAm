import React from 'react'
import UseFetch from './UseFetch'

function UsersF() {
    const data=UseFetch("https://jsonplaceholder.typicode.com/users")
  return (
    <div>
      {data && data.map((user)=>(
        <div key={user.id} >
            <h3>{user.name}</h3>
            <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default UsersF
