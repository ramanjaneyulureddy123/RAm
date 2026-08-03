import React, { useState } from 'react'

function All() {
     const [name, setName] = useState("")

     const handleClick = () => {
    alert("Button Clicked")
  }

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Submitted Name: ${name}`);
  }

  const handleFocus = () => {
    console.log("Input focused")
  }

   const handleBlur = () => {
    console.log("Input lost focus")
  }

  return (
    <div>
         <button onClick={handleClick}>Click Me </button>

      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        value={name}
        placholder="enter the name"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        
        />

        <button type="submit">Submit</button>
<h2>Hello {name}</h2>
      </form>
    </div>
  )
}

export default All
