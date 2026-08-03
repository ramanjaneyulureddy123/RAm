import React, { useEffect, useState } from 'react'

function Effect() {
const [count, setCount] = useState(0);
    useEffect(() => {
    console.log("Component rendered");
  },[count]);

  return (
    <button onClick={() => setCount(count + 1)}>Click {count}</button>
  );

    let [users, setUsers]=useState([])
useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then(data=>setUsers(data))
},[])
  return (
    <div>
        <ul>
            {users.map(user=>(
                <li key={user.id}>
                    {user.name}-{user.id}
                </li>
            ))}
        </ul>
      
    </div>
  )
}


export default Effect
