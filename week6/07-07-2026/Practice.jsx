import React from 'react'

function Practice({title, price}) {
  return (
    <div
       style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h2>{title}</h2>
      <p>Price: {price}</p>
    </div>
  )
}

export default Practice
