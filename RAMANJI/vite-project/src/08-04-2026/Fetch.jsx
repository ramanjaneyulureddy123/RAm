import React, { useEffect, useState } from 'react'

function Fetch() {
    let [users,setUsers]=useState([])
    const [loading,setLoading]=useState(true)
    const [error, setError]=useState(null)
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            if(!response.ok){
                throw new Error("wrong")
            }
            return response.json();
        })
        .then((data)=>{
            setUsers(data);
             setLoading(false)
        })
        .catch((error)=>{
            setError(error.message)
            setLoading(false)
        })
    },[])
    if (loading){
        return<p>Loading...</p>
    }
    if(error){
        return<p>error:{error}</p>
    }
  return (
    <div>
      <p>user list</p>
      {users.map((user)=>{
        return(
        <div key={user.id} style={{border:"1px solid black" ,margin:"10px"}}>
           <p><strong>Name:</strong> {user.name}</p>
           <p> <strong>Eamil</strong>{user.email}</p>
            <p><strong>City</strong> {user.address.city}</p>
            </div>
        )
      })}
    </div>
  )
}

export default Fetch
