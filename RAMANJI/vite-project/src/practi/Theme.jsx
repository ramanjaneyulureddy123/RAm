import React, { createContext, useState } from 'react'
import Light from './Light';

function Theme() {
     const [theme, setTheme] = useState("light");
  return (
    <div>
        <ThemeContext.Provider value={{ theme, setTheme }}>
      <Light />
    </ThemeContext.Provider>
    </div>
  )
}

export default Theme

export const ThemeContext = createContext();

