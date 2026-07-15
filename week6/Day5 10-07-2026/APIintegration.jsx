import React, { useEffect, useState } from 'react'

function APIintegration() {
     const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

//   fetch 
useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        if(!res.ok) throw new Error("error fetching data")
            return res.json()
    })
    .then((data)=>{
        setUsers(data)
        setLoading(false)
    })
    .catch(()=>{
        setError("failed loaded data")
        setLoading(false)
    })
},[])

// Delete 
const deleteUser=(id)=>{
    setUsers(users.filter((user)=>user.id !==id))
}

// search filter 
const filterUsers=users.filter((user)=>
user.name.toLowerCase().includes(search.toLowerCase())
)

  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>{error}</h2>
  return (
    <div>
            <h1>User List</h1>

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />


<ul>
        {filterUsers.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default APIintegration
