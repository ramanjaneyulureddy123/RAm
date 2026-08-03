import React, { createContext, useState } from 'react'
import THome from './THome'
import TFotter from './TFotter'

export const themeContext=createContext()
function Theme() {
    const [theme, setTheme]=useState("light")
    const toggleTheme=()=>{
        setTheme(theme === "light" ? "dark" :"light")
    }
  return (
    <div>
      <themeContext.Provider value={{theme, toggleTheme}}>
        <THome />
        <TFotter />
      </themeContext.Provider>
    </div>
  )
}

export default Theme
