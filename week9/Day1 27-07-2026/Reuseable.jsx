import React, { useEffect, useState } from 'react'
import Reausableusercard from './Reausableusercard';
import Reausableuse from './Reausableuse';

function Reuseable() {
    const [users, setUsers] = useState([])


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  return (
    <div>
          <h1>User Details</h1>

         
            {/* {users.map(user => (
        <Reausableusercard 
          key={user.id} 
          user={user} 
        />
        
      ))} */}

      {users.map(user => (
  <Reausableuse
    key={user.id}
    user={user}
  />
))}
    </div>
  )
}

export default Reuseable
