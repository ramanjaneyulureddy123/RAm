import React, { useContext } from 'react'
import { FakeContext } from './AContext'
// import { FakeContext } from './AContext';
function Header() {
    const { darkMode, toggleTheme } = useContext(FakeContext)
  return (
    <div  style={{
        background: darkMode ? "black":"white",
        color: darkMode ? "white":"black",
        padding:"20px"
      }}>

        <h2>Header component</h2>
      <button onClick={toggleTheme}>
                Change Theme
            </button>
    </div>
  )
}

export default Header
