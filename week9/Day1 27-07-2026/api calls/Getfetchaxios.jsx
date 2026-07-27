import React, { useEffect, useState } from 'react'

function Getfetchaxios() {
    const [users, setUsers]=useState([])
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


    useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }
        return response.json()
      })
      .then((data) => {
        setUsers(data)
         setLoading(false);
      })
      .catch((error) => {
        console.log(error)
         setLoading(false);
      })
  }, [])
    
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <div>
      <h2>Users</h2>

      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}

    </div>
  )
}

export default Getfetchaxios














// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Getfetchaxios() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         setUsers(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Users</h2>

//       {users.map((user) => (
//         <div key={user.id}>
//           <p>{user.name}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Getfetchaxios