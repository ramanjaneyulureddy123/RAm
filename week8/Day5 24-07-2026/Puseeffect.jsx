import { useEffect, useState } from "react";

function Puseeffect() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <ul>
        {/* map method  */}
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default Puseeffect



// const fruits = ["Apple", "Mango", "Orange"];

// function App() {
//   return (
//     <ul>
//       {fruits.map((fruit, index) => (
//         <li key={index}>{fruit}</li>
//       ))}
//     </ul>
//   );
// }



















// Best Practices
// Handle loading states.
// Handle errors.
// Store API data in state.
// Use async/await when possible.

// Use Cases
// Weather apps
// User management
// Product listings
// Dashboards
