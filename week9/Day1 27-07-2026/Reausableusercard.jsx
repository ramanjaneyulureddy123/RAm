
import React from 'react'

function Reausableusercard({user}) {

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>City: {user.address.city}</p>
    </div>
  )
}

export default Reausableusercard
