import React from 'react'

function Counterr(props) {
  return (
    <div>
      <h2>Counter</h2>

      <button onClick={props.increase}> Increase count</button>
    </div>
  )
}

export default Counterr
