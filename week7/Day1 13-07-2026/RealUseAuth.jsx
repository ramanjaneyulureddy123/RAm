import React, { useContext } from 'react'
import { AuthContext } from './RealAuth'

function RealUseAuth() {
    const {user, login, logout}=useContext(AuthContext)
  return (
    <div>
      {user ? (
        <div>
            <h2>welcome{user.name}</h2>
            <p>{user.phone}</p>
            <button  onClick={logout}>logout</button>
        </div>
      ) 
    :  (
        <div>
            <h2>please login</h2>
            <button onClick={login}> login</button>
        </div>
    )}
    </div>
  )
}

export default RealUseAuth
