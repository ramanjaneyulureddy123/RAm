import React, { useContext, useState } from 'react'
import { StudentContext } from './StudentContextAPI';

function StudentForm() {
     const [name, setName] = useState("")
const { addStudent } = useContext(StudentContext);
      const handleSubmit = () => {
    if (name === "") return;

    addStudent(name)
    setName("")
  };
  return (
    <div>
        <input
        type="text"
        placeholder="Enter Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />


      <button onClick={handleSubmit}>Add Student</button>
    </div>
  )
}

export default StudentForm
