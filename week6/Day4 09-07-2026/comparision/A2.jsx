import React, { useContext } from 'react'
import { CountContext } from './Glob';

function A2() {
      const { count } = useContext(CountContext);
  return (
    <div>
       <h2>B: {count}</h2>
    </div>
  )
}

export default A2
