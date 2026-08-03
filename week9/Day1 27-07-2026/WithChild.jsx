import React from 'react'

// function WithChild({name}) {
const WithChild=React.memo(({name})=>{
    console.log("child rendering")
  return (
    <div>
      <h2>Hello {name}</h2>
    </div>
  )
})

export default WithChild
