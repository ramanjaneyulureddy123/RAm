import React, { useContext } from 'react'
import { UserContext } from './Usercontext'

function UDynamicuser() {

    const {user, updateRole}=useContext(UserContext)
  return (
    <div>
      <h2>User details</h2>
      <p>Name:{user.name}</p>
      <p>Role:{user.role} </p>
      <button onClick={updateRole}> update role</button>
    </div>
  )
}

export default UDynamicuser
