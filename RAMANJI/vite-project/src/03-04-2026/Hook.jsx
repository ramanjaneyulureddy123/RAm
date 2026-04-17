import React from 'react'
import UseCustom from './UseCustom';


function Hook() {
    const{count, increment, decrement}=UseCustom()

  return (
    <div>

        <p> this is hook content</p>
        <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Hook
