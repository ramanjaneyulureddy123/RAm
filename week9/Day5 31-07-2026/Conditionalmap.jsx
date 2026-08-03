import React from 'react'

function Conditionalmap() {
    const students = [
    { id: 1, name: "Anji", passed: true },
    { id: 2, name: "Ramu", passed: false },
    { id: 3, name: "Vijay", passed: true },
  ];
  return (
    <div>
      {/* {students.map((student)=>(
        <ul key={student.id}>
            <li >
             {student.name}-{student.passed ? "Pass" :"Fail"}
            </li>
        </ul>
      ))} */}

      <ul>
        {students.map((student)=>(
            <li key={student.id}>
{student.name}-{student.passed && "PASS"}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Conditionalmap
