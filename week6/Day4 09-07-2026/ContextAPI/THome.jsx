import React, { useContext } from 'react'
import { themeContext } from './Theme'

function THome() {
    const {theme, toggleTheme}=useContext(themeContext)

  return (
    <div style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        // minHeight: "100vh",
        padding: "20px",
      }}>
      <h2>current:{theme}</h2>
      <button onClick={toggleTheme}>
ChangeTheme
      </button>
    </div>
  )
}

export default THome
