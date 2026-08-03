import React, { useEffect, useState } from 'react'
import axios from "axios"
function EAxios() {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div>
      <h1>Users List</h1>
      {users.map((user)=>(
        <ul key={user.id}>
            <li >
{user.name}-{user.phone}
            </li>
        </ul>
      ))}
    </div>
  )
}

export default EAxios
