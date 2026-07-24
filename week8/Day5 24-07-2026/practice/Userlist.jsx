import React from 'react'
import withHoc from './withHoc'

function Userlist({users}) {
  return (
    <div>
      <h2>User list</h2>
      {users.map((user)=>(
        <div key={user.id}>
<h3>{user.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default withHoc(Userlist)
