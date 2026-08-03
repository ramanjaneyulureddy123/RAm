import React from 'react'

const PReact= React.memo(({name})=>{
    console.log("child rendering")
  return <h2>hello{name}</h2>
})

export default PReact
