import React, { createContext, useState } from 'react'
import A1 from './A1';
import A2 from './A2';
export const CountContext = createContext();
function Glob() {
    const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={{count, setCount}}>
        <A1 />
        <A2 />
      </CountContext.Provider>
    </div>
  )
}

export default Glob
