import React, { useState } from 'react'

function Eventhandling() {
    const [value,setValue]=useState("")
     const handleSubmit = (e) => {
    e.preventDefault()
    alert("Form Submitted")
     console.log("Data saved")
  }

  return (
    <div>
         <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter name" />
      <button type="submit">Submit</button>
    </form>
        <h1>{value}</h1>
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
    </div>
  )
}

export default Eventhandling
