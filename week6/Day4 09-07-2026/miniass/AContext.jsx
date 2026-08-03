import React, { createContext, useState } from 'react'
import Header from './Header';
import Usercard from './Usercard';
import Counter from './Counter';
export const FakeContext = createContext()

function AContext() {

// Global user data
  const [user, setUser] = useState({
    name: "John",
    role: "Developer"
  })


  // Theme state
  const [darkMode, setDarkMode] = useState(false)

   // Changing theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <FakeContext.Provider  value={{ user, setUser, darkMode, toggleTheme}}>
        <Header />
        <Usercard/>
        <Counter />
      </FakeContext.Provider>
    </div>
  )
}

export default AContext
