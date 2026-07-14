import React, { useEffect, useState } from 'react'
import axios from "axios"

function Handleerror() {
      const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong");
        setLoading(false);
      });
  }, []);

  if (loading) return <h3>Loading...</h3>;

  if (error) return <h3>{error}</h3>;
  return (
    <div>
       <h3>Users</h3>

      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}

export default Handleerror
