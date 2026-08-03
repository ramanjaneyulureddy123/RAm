import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Axiosasyncawait() {
    const [users, setUsers]=useState([])
    async function getUsers() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.log("Error:", error.message);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
       <h2>Users List</h2>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}

export default Axiosasyncawait
