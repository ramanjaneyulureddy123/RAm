import React, { useEffect, useState } from 'react'
import useCustomer from './useCustomer';

function UseE() {
  const {count, inc ,dec}=useCustomer()
  
    let [users, setUsers]=useState([])
    useEffect(()=>{
        
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>setUsers(data))
        // console.log(data)
         .catch((err) => {
        console.error("Error fetching data:", err);
      });
    },[])
    
  return (
    <div>
       <p> this is hook content</p>
        <h1>{count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <ul>
          {users.map(users=>(
            <li key={users.id}> {users.title}</li>
          ))}
      </ul>
    </div>
  )
}

export default UseE
