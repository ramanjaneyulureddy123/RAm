import React, { useState } from 'react'

function ShowandHide() {

    const [showStudent, setShowstudent]=useState(false)


  return (
    <div>
      <button onClick={()=>setShowstudent(!showStudent)}>
        {showStudent ? "Hide Student details" : "show Student details"}
      </button>

      {/* {showStudent && <student/>} */}
    {showStudent && (
        <div>
            <h2>Employee Details</h2>
          <p>ID: 101</p>
          <p>Name: Priya</p>
          <p>Department: enginner</p>
          <p>Salary: ₹50,000</p>
        </div>
    )}
    
    
    
    </div>
  )
}

export default ShowandHide
