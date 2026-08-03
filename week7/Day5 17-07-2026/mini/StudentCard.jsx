import React from 'react'

function StudentCard({student}) {
  return (
    <div>
        <p>this is student student card component</p>
      <h3>{student.name}</h3>
    </div>
  )
}

export default StudentCard
