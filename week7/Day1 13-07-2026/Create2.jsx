import React, { useContext } from 'react'
import { UserContext } from './Createcontext'

function Create2() {
    const {user,setUser}=useContext(UserContext)
  return (
    <div>
      <h2>Create2 data {user}</h2>
      <button onClick={()=>setUser("Ravi")}>name change</button>
    </div>
  )
}

export default Create2
