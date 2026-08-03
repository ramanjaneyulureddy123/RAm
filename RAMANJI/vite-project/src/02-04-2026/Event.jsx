import React, { useState } from 'react'

function Event() {

    let [name, setName]=useState("")
    const handleChanges=(e)=>setName(e.target.value)

 const handleSubmit = (e) => {
    // e.preventDefault(); 
    console.log("Form submitted");
  };


     const handleClick = (e) => {
    e.preventDefault();
    console.log("Link click stopped");
  };

    const handleChange=(e)=>{
        console.log(e.target.value)
    }
  return (
    <div>
         <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>

      <input onChange={handleChange}/>
      <a href="https://google.com" onClick={handleClick}>Go</a>;

      <input
      
      type="text"
      value={name}
      onChange={handleChanges}
      />
      <h1>hello{name}</h1>
    </div>
  )
}

export default Event
