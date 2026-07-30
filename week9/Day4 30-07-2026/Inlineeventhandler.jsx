import React, { useState } from 'react'

function Inlineeventhandler() {
    const [name, setName]=useState("")

  return (
    <div>


      <input  type="text"
      placeholder="enter the text "
      onChange={(e)=>setName(e.target.value)}
      />
      <h1>Hello {name} welocme to post </h1>
    </div>
  )
}

export default Inlineeventhandler
