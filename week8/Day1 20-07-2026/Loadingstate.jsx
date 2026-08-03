import React, { useEffect, useState } from 'react'

function Loadingstate() {
    const [loading, setLoading]=useState(true)
    const [users, setUsers]=useState([])

    useEffect(()=>{
        setTimeout(()=>{
            // setUsers(["rahul", "Priya","anji"])
            setUsers([])
            setLoading(false)
        },3000)
    },[])
    if(loading){
        return <h2>Loading...</h2>
    }

    if (users.length ===0){
        return <h2>No users fund</h2>
    }
  return (
    <div>
      <h2>Users list</h2>

      {users.map((user,index)=>(
        <p key={index}>{user}</p>
      ))}
    </div>
  )
}

export default Loadingstate
