import React, { useState } from 'react'
import axios from "axios"
function AxiosPost() {
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")

    const addUser=()=>{
        axios.post("https://jsonplaceholder.typicode.com/users", {
            name:"Kishore",
            email: "anji@2345@gmail.com"
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
      <h2>post requests</h2>
      <button onClick={addUser}>Add User</button>
    </div>
  )
}

export default AxiosPost
