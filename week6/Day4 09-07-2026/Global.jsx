import React, { createContext, useState } from 'react'
import G1 from './G1'
import G2 from './G2'

export let context=createContext()


function Global() {
    let [a,setA]=useState(250)

  return (
    <div>
      <context.Provider value={{a,setA}}>
        <G1 />
        <G2/>
      </context.Provider>
    </div>
  )
}

export default Global
