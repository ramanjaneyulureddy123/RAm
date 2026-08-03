import React from 'react'

function Child({message, sendData}) {
  return (
    <div>
      <h3>Child Component</h3>

      {/* Data received from Parent */}
      <p>Message from Parent: {message}</p>

      {/* Child to Parent */}
      <button
        onClick={() => sendData("Hello from Child")}>
        Send Message to Parent
      </button>

    </div>
  )
}

export default Child
