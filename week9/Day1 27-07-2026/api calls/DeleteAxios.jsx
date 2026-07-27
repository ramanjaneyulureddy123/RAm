import React from "react";
import axios from "axios";

function DeleteAxios() {

  const deleteUser = () => {
    axios.delete(
      "https://jsonplaceholder.typicode.com/users/1"
    )
    .then((response) => {
      console.log("Deleted:", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div>
      <h2>DELETE Request</h2>

      <button onClick={deleteUser}>
        Delete User
      </button>
    </div>
  );
}

export default DeleteAxios;


















// import React from "react";

// function DeleteFetch() {

//   const deleteUser = () => {
//     fetch("https://jsonplaceholder.typicode.com/users/1", {
//       method: "DELETE",
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to delete user");
//         }

//         return response.json();
//       })
//       .then((data) => {
//         console.log("Deleted:", data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div>
//       <h2>DELETE Request</h2>

//       <button onClick={deleteUser}>
//         Delete User
//       </button>
//     </div>
//   );
// }

// export default DeleteFetch;