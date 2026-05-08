import React from 'react'

const CHILD=React.memo( ({onClick, value}) =>{
    console.log("child component")
  return (
    <div>
           <p>Value: {value}</p>
      <button onClick={onClick}>click</button>
    </div>
  )
})

export default CHILD
