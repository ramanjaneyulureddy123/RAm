import React from 'react'
import useTheme from './useTheme';

function Theme() {
    const { theme, toggleTheme } = useTheme();

  return (
    <div style={{
        background:theme ==="light" ? "white":"black",
        color:theme === "light" ? "black" : "white",
        height:"100vh"
    }}>
      <h1>{theme} Mode</h1>

      <button onClick={toggleTheme}>ChangeTheme</button>
    </div>
  )
}

export default Theme
