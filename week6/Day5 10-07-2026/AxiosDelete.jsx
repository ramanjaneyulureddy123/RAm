import React from 'react'
import axios from "axios"

function AxiosDelete() {
     const deleteUser = () => {
    axios
      .delete("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        console.log("Deleted Successfully:", response.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };
  return (
    <div>
       <h2>DELETE Request Example</h2>

      <button onClick={deleteUser}>
        Delete User
      </button>
    </div>
  )
}

export default AxiosDelete
