import React from 'react'

// function UseCards() {

const UseCards=React.memo(({user})=>{
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  )
})

export default UseCards
