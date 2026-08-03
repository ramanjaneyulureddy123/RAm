import React from 'react'

function Reusable(props) {
  return (
    <div>
      <h2>Shopping Items</h2>
      <p>Item:{props.item}</p>
      <p>quantity:{props.quantity}</p>
      <p>Price:{props.price}</p>

      <button onClick={() => props.deleteitem(props.id)}>
        Delete
      </button>
    </div>
  )
}

export default Reusable
