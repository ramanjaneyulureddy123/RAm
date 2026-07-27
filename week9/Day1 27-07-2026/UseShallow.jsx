import React from 'react'

const UseShallow= React.memo(({user})=>{
    console.log("usercard rendered")
    
  return (
    <div>
      <h2>{user.name}</h2>
    </div>
  )
})

export default UseShallow
