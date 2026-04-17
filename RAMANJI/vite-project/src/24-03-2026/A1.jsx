import React, { createContext, useState } from 'react'
import C1 from './C1'
import B1 from './B1'

    export let context=createContext()

function A1() {
     const [count, setCount] = React.useState(0);
    const user="name"
    console.log(user)
 let[a,seta]=useState(250)
  return (
    <div>
        
      <context.Provider value={{a,seta}}>
        <C1/>
        <B1 user={user}/>
      </context.Provider>
      
    </div>
  )
}

export default A1
