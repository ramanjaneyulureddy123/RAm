import React, { createContext, useState } from 'react'
import Userealtheme from './Userealtheme'
export let RealContext=createContext()
function RealTheme() {
const [theme, setTheme]=useState("light")

const changeTheme=()=>{
    setTheme(theme === "light" ? "dark" : "light")
}
  return (
    <div>
    <RealContext.Provider value={{theme, changeTheme}}>
        <Userealtheme /> 
    </RealContext.Provider>
    </div>
  )
}

export default RealTheme
