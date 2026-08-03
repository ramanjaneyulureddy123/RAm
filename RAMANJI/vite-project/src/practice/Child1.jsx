import React from 'react'

function Child1({send}) {
    // console.log(props)
    send(200)
  return (
    <div>
      {/* <h1>{props.user}</h1> */}
      {/* <button onClick={() => props.send(age)}>
        Send Age
      </button> */}

      {/* <h1>{props.send}</h1> */}
    </div>
  )
}

export default Child1
