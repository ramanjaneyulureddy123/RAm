import React from 'react'

function promisechaining() {
    const [users, setUsers] = useState([])


  const getUsers = () => {

    fetch("https://jsonplaceholder.typicode.com/users")
    // 1st promise  
    .then((response) => {
        return response.json();
      }) 
    //   2nd promise 
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      })
    }
  return (
    <div>
       <h2>Promise Chaining Example</h2>

      <button onClick={getUsers}>
        Get Users
      </button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>

    </div>
  )
}

export default promisechaining

// fetch API call
//       
// response vachindi
//       
// json convert chesam
//       
// data state lo store chesam
//       
// UI update ayyindi
