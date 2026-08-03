import React, { useContext } from 'react'
import { AuthContext } from './Authenticatin';

function Auth() {
const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <h2>{isLoggedIn ? "welcome user" :"please login in"}</h2>
      <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "logout" :"Login"}</button>
    </div>
  )
}

export default Auth
