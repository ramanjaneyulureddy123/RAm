// import React, { useState } from 'react'

// function Post() {
//     const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const addUser=()=>{
//     fetch("https://jsonplaceholder.typicode.com/users",{
//         method:"Post",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify({
//             name:name 
//         })
//     })
//     .then((response)=>{
//                 if (!response.ok) {
//           throw new Error("Failed to add user");
//         }
//         return response.json();

//     })
//     .then((data) => {
//         console.log("Created User:", data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//   }
//   return (
//     <div>
//       <h2>Add User</h2>

//       <input
//         type="text"
//         placeholder="Enter name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <button onClick={addUser}>add user</button>
//     </div>
//   )
// }

// export default Post



import React from 'react'

function Post() {
    const addUser=async()=>{
        try{
            const response= await axios.post(
                "https://jsonplaceholder.typicode.com/users",
            {
                name:"John",
                email:"John@gamail.coom"
            }
            )
             console.log(response.data);
        }
         catch (error) {
      console.log(error);
    }
    }
  return (
    <div>
       <button onClick={addUser}>
        Add User
      </button>
    </div>
  )
}

export default Post
