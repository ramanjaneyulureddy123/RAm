import { Children, createContext, useEffect, useState } from "react";

export const StudentContext = createContext();
import React from 'react'
import StudentList from "./StudentList";

function StudentContextAPI({children}) {
    const [students, setStudents] = useState([])

    useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, [])


  const addStudent = (name) => {
    const newStudent = {
      id: Date.now(),
      name,
    };

    setStudents([...students, newStudent]);
  }

  return (
    <div>
      <StudentContext.Provider value={{students, addStudent}}>
{/* <StudentList/> */}
{children}
      </StudentContext.Provider>
    </div>
  )
}

export default StudentContextAPI
