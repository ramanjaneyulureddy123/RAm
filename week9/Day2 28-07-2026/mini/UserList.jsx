import React from 'react'

function UserList({users}) {
  return (
    <>
      <h2>Users</h2>

      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  )
}

export default UserList
