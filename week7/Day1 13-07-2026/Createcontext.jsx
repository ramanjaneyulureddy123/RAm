import React, { createContext, useState } from 'react'
import Create1 from './Create1'
import Create2 from './Create2'
export let UserContext=createContext()
function Createcontext() {
    const [user, setUser]=useState("raja")
  return (
    <div>
      <UserContext.Provider value={{user,setUser}}>
        <Create1 />
        <Create2 />
      </UserContext.Provider>
    </div>
  )
}

export default Createcontext
