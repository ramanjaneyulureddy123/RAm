import React, { useContext } from 'react'
import { FakeContext } from './AContext';

function Usercard() {
    const {user,setUser} = useContext(FakeContext);
    const changeUser=()=>{
        setUser({
            name:"Anil",
            role:"maintainance engineer"
        })
    }
  return (
    <div>
        <h2>user information</h2>
      <p>Name:{user.name}</p>    
        <p>Name:{user.role}</p>

         <button onClick={changeUser}>
                Update User
            </button>

    </div>
  )
}



export default Usercard
