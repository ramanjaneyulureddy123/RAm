import React, { createContext, useState } from 'react'
import User from './User';
    export const UserContext = createContext();

function UserInformation() {
     const [user, setUser] = useState({
    name: "Rahul",
    email: "rahul@gmail.com",
  });
  return (
    <div>
       <UserContext.Provider value={{ user, setUser }}>
      <User />
    </UserContext.Provider>
    </div>
  )
}

export default UserInformation
