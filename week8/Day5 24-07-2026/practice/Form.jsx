import React, { useState } from 'react'

function Form() {
    const [form, setForm]=useState({
        name:'',
        email:''
    })

    const [message, setMessage]=useState("")

    const handleChange =(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()

        if (form.name ==="" || form.email === ""){
            setMessage("all feilds are required")
            return
        }
        if (!form.email.includes("@")){
            setMessage("enter a valid email")
            return;
        }
        setMessage("form submiitted successfully")
        setForm({
            name:"",
            email:"",
        })
    }
  return (
    <div>
      <h2>Registrartion form      </h2>
      <form onSubmit={handleSubmit}>
<input
type="text"
placeholder='name'
name="name"
value={form.name}
onChange={handleChange}
/>

<input 
type="text"
placeholder='email'
value={form.email}
name="email"
onChange={handleChange}
/>

<button>Submit</button>
      </form>

      <h3>{message}</h3>
    </div>
  )
}

export default Form
