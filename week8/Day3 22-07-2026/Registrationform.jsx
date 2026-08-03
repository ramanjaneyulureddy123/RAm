import React, { useState } from 'react'

function Registrationform() {
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const[password, setPassword]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()

        if (name === ""){
            alert("name is required")
            return;
        }

        if (email === "" || !email.includes("@")){
            alert("enter a valid email")
            return;
        }

        if (password.length<6){
            alert("password must be at least 6 characterstics")
        return;
        }
        alert("form submitted successfully")
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Registration form</h2>

        <input
        type="text"
        placeholder="enter the name"
        onChange={(e)=>setName(e.target.value)}
        />

        <br/><br/>

        <input 
        type="text"
        placeholder="enter the email"
        onChange={(e)=>setEmail(e.currentTarget.value)}
        
        />

        <br/><br/>

        <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

            <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Registrationform
