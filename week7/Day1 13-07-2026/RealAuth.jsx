import React, { createContext, useState } from 'react'
import RealUseAuth from './RealUseAuth'

export let AuthContext=createContext()

function RealAuth() {
    const [user, setUser]=useState(null)

    const login=()=>{
        setUser({
            name:"Kumar",
            phone:"767654483"
        })
    }

      const logout=()=>{
            setUser(null)
        }
  return (
    <div>
      <AuthContext.Provider value={{user, login ,logout}}>
        <RealUseAuth />
      </AuthContext.Provider>
    </div>
  )
}

export default RealAuth
