import React from 'react'

function Arratdestructing() {
    const user=["Reddy", 34, "developer"]

    const[name, age, job]=user
  return (
    <div>
      <h2>Name:{name}</h2>
      <p>Age:{age}</p>
      <p>Job:{job}</p>
    </div>
  )
}

export default Arratdestructing
