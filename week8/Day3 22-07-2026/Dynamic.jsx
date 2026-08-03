import React, { useState } from 'react'

function Dynamic() {
     const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const [errors, setErrors]=useState({})

  const handleChange=(e)=>{
    setFormData({
        ...formData,
        [e.target.name]:e.target.value
    })
  }

  const handleSubmit=(e)=>{
    e.preventdefault()

    let newErrors={}
// We'll store all validation errors in this object.
    if(formData.name ===""){
        newErrors.name="name is required"
    }

    if (formData.email === ""|| !formData.email.includes("@")){
newErrors.email="enter a valid email"
    }

    if (formData.password.length <6){
        newErrors.password="Password must be at least 6 characters"
    }

    setErrors(newErrors)

    if(Object.keys(newErrors).length ===0){
        alert ("Form Submitted Successfully")
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login form</h2>

        <input
        type="text"
        placeholder="enter the name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        />

        <p style={{color:"red"}}>{errors.name}</p>

  <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.email}</p>

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.password}</p><br/><br/>

      <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Dynamic
