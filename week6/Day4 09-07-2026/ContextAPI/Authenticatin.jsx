import React, { createContext, useState } from 'react'
import Auth from './Auth';
export const AuthContext = createContext();
function Authenticatin() {
        const [isLoggedIn, setIsLoggedIn] = useState(false);
    
  return (
    <div>
      <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        <Auth/>
      </AuthContext.Provider>
    </div>
  )
}

export default Authenticatin
