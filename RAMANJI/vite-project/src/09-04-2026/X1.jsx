import React, { useEffect, useState } from 'react'
import axios from 'axios'
function X1() {
    let [user,setusers]=useState([])
    const[loading, setLoading]=useState(true )
        // const [error, setError]=useState(null)
    
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
         .then((res)=>{
               setusers(res.data)
            //    setLoading(false)
        })
        .catch((error)=>{
            console.log(error)
            // setLoading(false)
        })
    },[])
    // if (loading){
    //     return <p>Loading</p>
    // }
    // if (error){
    //     return <p>{error}</p>
    // }

  return (
    <div>
       <div >
      <h2>user list</h2>
     {user.map(user=>(
        <p key={user.id} style={{border:'1px solid black'}}> {user.name}</p>
     ))}
    </div>
    </div>
  )
}

export default X1
