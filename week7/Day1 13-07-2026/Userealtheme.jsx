import React, { useContext } from 'react'
import { RealContext } from './RealTheme'

function Userealtheme() {
    const {theme, changeTheme}=useContext(RealContext)
  return (
    <div style={{backgroundColor: theme === "dark" ? "black" :"white",
        color : theme === "dark" ? "white" :"black",
        minHeight : "100vh"
     }}>
      <h2>Youtube home page</h2>
      <p>Change Theme:{theme}</p>
      <button onClick={changeTheme}>change mode</button>
    </div>
  )
}

export default Userealtheme
