import React from 'react'
import axios from "axios"
function AxiosPut() {

    const updateUser=()=>{
        axios.put("https://jsonplaceholder.typicode.com/users/4",{
            name:"anji",
            email:"rahul@gmail.com",
            age:22
        })
        .then((response)=>{
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

  return (
    <div>
      <h2>PUT requests examples</h2>
      <button onClick={updateUser}>update user</button>
    </div>
  )
}

export default AxiosPut
