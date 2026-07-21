import React, { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");

  // Add Student
  const addStudent = () => {
    if (name === "") {
      setStudents([...students, name]);
      setName("");
    }
  };

  // Delete Student
  const deleteStudent = (index) => {
    const newStudents = students.filter((_, i) => i !== index);
    setStudents(newStudents);
  };

  // Search Student
  const filteredStudents = students.filter((student) =>
    student.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div >
      <h2>Student Management </h2>
      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addStudent}>Add</button>

      <br />
      <br />
      <input
        type="text"
        placeholder="Search student"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h3>Student List</h3>

      <ul>
        {filteredStudents.map((student, index) => (
          <li key={index}>
            {student}
            <button onClick={() => deleteStudent(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    
  );
}

export default App;
