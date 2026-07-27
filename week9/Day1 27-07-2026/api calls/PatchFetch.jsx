import React, { useState } from "react";

function PatchFetch() {
  const [name, setName] = useState("");

  const updateUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update user");
        }
        return response.json();
      })
      .then((data) => {
        console.log( data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Update User Name</h2>

      <input
        type="text"
        placeholder="Enter new name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={updateUser}>
        Update
      </button>
    </div>
  );
}

export default PatchFetch;











// import React from "react";
// import axios from "axios";

// function PatchAxios() {

//   const updateUser = () => {
//     axios.patch(
//       "https://jsonplaceholder.typicode.com/users/1",
//       {
//         name: "John Updated"
//       }
//     )
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   };

//   return (
//     <div>
//       <h2>PATCH Request</h2>

//       <button onClick={updateUser}>
//         Update User
//       </button>
//     </div>
//   );
// }

// export default PatchAxios;