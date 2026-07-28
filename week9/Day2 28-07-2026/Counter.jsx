import React from 'react'
import UseCounter from './UseCounter';

function Counter() {
  const { count, increment, decrement, reset } = UseCounter(0);
  return (
    <div>
            <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
