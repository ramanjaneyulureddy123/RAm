import React, { useState } from 'react'

function Toggle() {
    const [show, setShow]=useState(false)

    const handleToggle=()=>{
        setShow(!show)
    }
  return (
    <div>
      <button onClick={handleToggle}>
        {show ? "hidedetails" :"show details"}
      </button>
      {show && (
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quidem?</p>
      )}
    </div>
  )
}

export default Toggle
