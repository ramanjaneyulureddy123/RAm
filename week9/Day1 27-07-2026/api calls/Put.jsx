import React, { useState } from 'react'

function Put() {
    const [user, setUser]= useState({
        name:""
        // email:""
    })

  const updateUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 1,
        name: user.name,
        // email: user.email
      }),
    })


      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update user");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Updated User:", data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
       <h2>Update User</h2>

      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) =>
          setUser({ ...user, name: e.target.value })
        }
      />

       <button onClick={updateUser}>
        Update
      </button>
    </div>
  )
}

export default Put














// import axios from "axios";

// const updateUser = async () => {
//   try {
//     const response = await axios.put(
//       "https://jsonplaceholder.typicode.com/users/1",
//       {
//         id: 1,
//         name: "John Smith",
//         email: "johnsmith@gmail.com"
//       }
//     );

//     console.log(response.data);

//   } catch (error) {
//     console.log(error);
//   }
// };