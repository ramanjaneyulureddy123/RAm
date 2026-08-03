import React, { createContext, useState } from 'react'
import UDynamicuser from './UDynamicuser';
export const UserContext = createContext();
function Usercontext() {

    const [user, setUser] = useState({
    name: "Balu",
    role: "Developer",
  })

  const updateRole=()=>{
    setUser({
        ...user,
        role:"senior developer"
    })
  }
  return (
    <div>
      <UserContext.Provider value={{user, updateRole}}>
        <UDynamicuser />
      </UserContext.Provider>
    </div>
  )
}

export default Usercontext
