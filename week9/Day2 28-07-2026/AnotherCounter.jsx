import React from 'react'
import UseCounter from './UseCounter'

function AnotherCounter() {
    const {count,decrement}=UseCounter(0)
  return (
    <div>
    <h1>{count}</h1>
        <h2>this is another counter creusable hook</h2>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default AnotherCounter
