import React, { useState } from 'react'

function LoginLogout() {
    const [login, setLogin]=useState(false)
  return (
    <div>
      {login ? (
        <div>

            <h2>welcome user</h2>
            <button onClick={()=> setLogin(false)}>Logout</button>
            </div>
      ):(
        <div>
            <h2>Please Login</h2>
            <button onClick={()=> setLogin(true)}>Login</button>
            </div>
      )}
    </div>
  )
}

export default LoginLogout
