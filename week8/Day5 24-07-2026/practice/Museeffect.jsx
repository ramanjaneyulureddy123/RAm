import React, { useEffect, useState } from 'react'
import Form from './Form';
import Userlist from './Userlist';

function Museeffect() {

    const [login, setLogin] = useState(true);

  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

   useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
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
  }, []);

  return (
    <div>
      <h1>React Assignment</h1>

       {/* Conditional Rendering */}

      <button onClick={() => setLogin(!login)}>
        {login ? "Logout" : "Login"}
      </button>

      <h2>{login ? "Welcome User" : "Please Login"}</h2>

      <hr />

      <Form/>

      <hr />

      {/* Loading & Error */}

      {loading && <h2>Loading...</h2>}

      {error && <h2>{error}</h2>}

{!loading && !error && <Userlist users={users} />}

    </div>
  )
}

export default Museeffect
