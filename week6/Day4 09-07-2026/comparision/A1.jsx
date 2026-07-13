import React, { useContext } from 'react'
import { CountContext } from './Glob';

function A1() {
     const { count, setCount } = useContext(CountContext);
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>
      A: {count}
    </button>
  
    </div>
  )
}

export default A1
