import React from 'react'
import useForm from './useForm'

function LoginForm() {
    const {values, handleChange, resetForm}=useForm({
        username:"",
        password:""
    })

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(values)
        resetForm()
    }
  return (
    <div>
       <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="username"
        value={values.username}
        onChange={handleChange}
        placeholder="Username"
      />

      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Password"
      />

      <button type="submit">
        Login
      </button>

    </form>
    </div>
  )
}

export default LoginForm
