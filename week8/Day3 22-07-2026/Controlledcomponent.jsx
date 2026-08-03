// import React, { useState } from 'react'

// function Controlledcomponent() {
//     const [name, setName]=useState("")
//     const handleChange=(event)=>{
//         setName(event.target.value)
//     }

//   return (
//     <div>
//       <h2>Controlled component</h2>
// <input 
// type="text"
// placeholder="type the name"
// value={name}
// onChange={handleChange}
// />
// <p>Your name is :{name}</p>
//     </div>
//   )
// }

// export default Controlledcomponent


import React, { useState } from 'react'

function Controlledcomponent() {
    const [formData, setFormData]=useState({
        username:"",
        email:"",
        password:""
    })

    const handleChange=(e)=>{
        const {name, value}=e.target
    
    setFormData((previousData)=>({
        ...previousData,
        [name]:value
    }))
}
const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
}

  return (
    <div>
      <form >
        <input
        type="text"
        name="username"
        placeholder="username"
        value={formData.username}
        onChange={handleChange}
        />

<input
        type="text"
        name="email"
        placeholder="email"
        value={formData.email}
        onChange={handleChange}
        />

        <input
        type="text"
        name="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
        />

        <button type="submit">submit</button>

      </form>
    </div>
  )
}

export default Controlledcomponent

