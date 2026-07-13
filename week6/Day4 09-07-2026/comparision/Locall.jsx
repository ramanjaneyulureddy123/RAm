import React, { useState } from 'react'

function Locall() {
     const [count, setCount] = useState(0);
  return (
    <div>
       <button onClick={() => setCount(count + 1)}>
      A: {count}
    </button>
    <CounterB/>
    </div>
  )
}

function CounterB() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      B: {count}
    </button>
  );
}

export default Locall
