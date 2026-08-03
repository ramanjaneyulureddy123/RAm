import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

function Profile({isLoggedIn}) {
    if(isLoggedIn){
        console.log("welcome")
    }else{
        console.log("signup")
    }
    const [login,setlogin]=useState(false)
    const [exist,setExist]=useState(true)
  return (

    <div>
      {login ?"welcome": exist? <Login/>: <Signup/>}
      { exist?<div>
        <p>if your new user click the signup</p>
        <button onClick={()=>setExist(false)}>signup</button>
      </div> : <div>
        <p>if your exist user click the login</p>
        <button onClick={()=>setExist(false)}>login</button>
     </div>
}
    </div>
  )
}

export default Profile

