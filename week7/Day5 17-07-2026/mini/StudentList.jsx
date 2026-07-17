import React, { useContext } from 'react'
import  { StudentContext } from './StudentContextAPI'
import StudentCard from './StudentCard'

function StudentList() {

    const {students}=useContext(StudentContext)
  return (
    <div>
      <h2>Student list</h2>
      {students.map((student)=>(
        <StudentCard key={student.id} student={student}/>
      ))}
    </div>
  )
}

export default StudentList
