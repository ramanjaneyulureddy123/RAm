import React from 'react'

function ReactM({name}) {

    console.log("react memo rendering")
  return (
    <div>
      <h2>User:{name}</h2>
    </div>
  )
}

export default React.memo(ReactM)
