import React, { createContext, useState } from 'react'
import Y from './Y'
export const context=createContext()

function Z() {
let [a,seta]=useState(23)
  return (
    <div>
        <context.Provider value={{a,seta}}>
      <Y/>
      </context.Provider>
    </div>
  )
}

export default Z
