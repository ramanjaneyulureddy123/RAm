import React, { useContext } from 'react'
import Theme, { ThemeContext } from './Theme';

function Light() {
     const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div style={{
      background: theme === "light" ? "#fff" : "#222",
      color: theme === "light" ? "#000" : "#fff",
      height: "100vh"
    }}>
      <h2>{theme} mode</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        
        Toggle
      </button>
    </div>
  )
}

export default Light

