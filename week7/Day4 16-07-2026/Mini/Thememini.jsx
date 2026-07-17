import React, { createContext, useState } from 'react'
import All from './All';
import UUserreducer from './UUserreducer';


export const ThemeContext=createContext()
function Thememini() {
     const [theme, setTheme] = useState("light")
 const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };


  return (
    <div>
      <ThemeContext.Provider value={{theme , toggleTheme}}>
<All/>
<UUserreducer />
      </ThemeContext.Provider>
    </div>
  )
}

export default Thememini
