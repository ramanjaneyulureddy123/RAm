import React, { useEffect, useState } from 'react'
import UseCards from './UseCards'

function Fectch() {
     const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

   useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [])

   if (loading) return <h2>Loading...</h2>

  if (error) return <h2>Error: {error}</h2>
  return (
    <div>
            <h1>React API Integration</h1>

      <div>
        {users.map((user) => (
          <UseCards key={user.id} user={user} />
        ))}
      </div>

    </div>
  )
}

export default Fectch
