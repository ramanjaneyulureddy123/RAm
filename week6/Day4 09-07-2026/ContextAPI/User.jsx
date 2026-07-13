import React, { useContext } from 'react'
import { UserContext } from './UserInformation'

function User() {
    const {user}=useContext(UserContext)
  return (
    <div>
      <h2>User Details</h2>

      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default User
