import { createContext, useState } from "react";

export let context =createContext()

import React from 'react'
import Local from "./Local";
import An from "./An";

function Gobal() {
    let [b,setb]=useState(230)
  return (
    <div>
      <context.Provider value={{b,setb}}>
        <An/>
<Local/>
      </context.Provider>
    </div>
  )
}

export default Gobal
