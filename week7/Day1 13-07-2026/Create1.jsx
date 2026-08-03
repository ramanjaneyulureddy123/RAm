import React, { useContext } from 'react'
import { UserContext } from './Createcontext'

function Create1() {
    const {user}=useContext(UserContext)
  return (
    <div>
      <h2>User:{user}</h2>
    </div>
  )
}

export default Create1
