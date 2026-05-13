import React, { useState } from 'react'
import Rchild from './Rchild'

function Qchild() {

    const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      setError("Name is required");
      return;
    }

    setError("");
    alert("Form submitted");
    setName("")
  };
  return (
    <div>
         <form onSubmit={handleSubmit}>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />

      <button type="submit">
        Submit
      </button>

      <p>{error}</p>

    </form>
      {/* <h1>{data}</h1>
      <Rchild dataa={data}/> */}
    </div>
  )
}

export default Qchild
